import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Topic from '../components/Topic';
import { sectors } from '../data/companies';

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Navbar />
      <h1>Explore Biotech & Medicine Companies</h1>
      <p style={{ textAlign: 'center', marginTop: '-8px', marginBottom: '16px', opacity: 0.75 }}>
        Select a sector to discover the companies shaping its future.
      </p>
      <div className="topicsGrid">
        {sectors.map((sector) => (
          <Topic
            key={sector}
            topicName={sector}
            onClick={() =>
              router.push({
                pathname: '/companies',
                query: { sector },
              })
            }
          />
        ))}
      </div>
    </div>
  );
}
