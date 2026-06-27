import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import { companies } from '../data/companies';

export default function CompanyProfile() {
  const router = useRouter();
  const { id } = router.query;

  const company = companies.find((c) => c.id === id);

  if (!company) {
    return (
      <div>
        <Navbar />
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <h2>Company not found.</h2>
          <button onClick={() => router.push('/')}>Back to home</button>
        </div>
      </div>
    );
  }

  const cardStyle: React.CSSProperties = {
    maxWidth: '720px',
    margin: '40px auto',
    padding: '32px',
    border: '4px solid darkmagenta',
    borderRadius: '12px',
    backgroundColor: 'white',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    lineHeight: '1.7',
  };

  const labelStyle: React.CSSProperties = {
    fontWeight: 'bold',
    color: 'darkmagenta',
  };

  return (
    <div>
      <Navbar />
      <div style={cardStyle}>
        <h1 style={{ margin: '0 0 4px' }}>{company.name}</h1>
        <p style={{ margin: '0 0 20px', opacity: 0.7, fontStyle: 'italic' }}>
          {company.tagline}
        </p>

        <p>{company.description}</p>

        <table style={{ marginTop: '24px', borderCollapse: 'collapse', width: '100%' }}>
          <tbody>
            <tr>
              <td style={labelStyle}>Sector</td>
              <td>{company.sector}</td>
            </tr>
            <tr>
              <td style={labelStyle}>Focus</td>
              <td>{company.focus}</td>
            </tr>
            <tr>
              <td style={labelStyle}>CEO</td>
              <td>{company.ceoName}</td>
            </tr>
            <tr>
              <td style={labelStyle}>Founded</td>
              <td>{company.founded}</td>
            </tr>
            <tr>
              <td style={labelStyle}>Location</td>
              <td>{company.location}</td>
            </tr>
            {company.funding && (
              <tr>
                <td style={labelStyle}>Funding</td>
                <td>{company.funding}</td>
              </tr>
            )}
            {company.website && (
              <tr>
                <td style={labelStyle}>Website</td>
                <td>
                  <a href={company.website} target="_blank" rel="noopener noreferrer">
                    {company.website}
                  </a>
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <button
          onClick={() => router.back()}
          style={{
            marginTop: '28px',
            padding: '10px 22px',
            backgroundColor: 'darkmagenta',
            color: 'white',
            border: 'none',
            borderRadius: '20px',
            cursor: 'pointer',
            fontFamily: "'Courier New', monospace",
            fontWeight: 'bold',
            fontSize: '1rem',
          }}
        >
          ← Back
        </button>
      </div>
    </div>
  );
}
