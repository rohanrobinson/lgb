import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import CompanyCard from '../components/CompanyCard';
import { companies } from '../data/companies';

export default function Companies() {
  const router = useRouter();
  const { sector } = router.query;

  const filtered = sector
    ? companies.filter((c) => c.sector === sector)
    : companies;

  return (
    <div>
      <Navbar />
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
        <button
          onClick={() => router.push('/')}
          style={{
            marginTop: '16px',
            padding: '8px 18px',
            backgroundColor: 'darkmagenta',
            color: 'white',
            border: 'none',
            borderRadius: '20px',
            cursor: 'pointer',
            fontFamily: "'Courier New', monospace",
            fontWeight: 'bold',
            fontSize: '0.9rem',
          }}
        >
          ← Back to Home
        </button>
      </div>
      <h1>{sector ?? 'All Companies'}</h1>
      <p style={{ textAlign: 'center', marginTop: '-8px', marginBottom: '16px', opacity: 0.75 }}>
        {filtered.length} {filtered.length === 1 ? 'company' : 'companies'} in this sector
      </p>
      <div className="topicsGrid">
        {filtered.map((company) => (
          <CompanyCard
            key={company.id}
            company={company}
            onClick={() =>
              router.push({
                pathname: '/company',
                query: { id: company.id },
              })
            }
          />
        ))}
      </div>
    </div>
  );
}
