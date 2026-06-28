import { Company } from '../data/companies';

interface CompanyCardProps {
  company: Company;
  onClick: () => void;
}

export default function CompanyCard({ company, onClick }: CompanyCardProps) {
  return (
    <div className="topicTile" onClick={onClick} style={{ textAlign: 'left' }}>
      <h3>{company.name}</h3>
      <p style={{ fontSize: '0.85rem', margin: '4px 0 0', opacity: 0.85 }}>
        {company.tagline}
      </p>
      <p style={{ fontSize: '0.8rem', margin: '6px 0 0', opacity: 0.7 }}>
        {company.location} &middot; Est. {company.founded}
      </p>
    </div>
  );
}
