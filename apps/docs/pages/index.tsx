import { Button } from 'spark-ui';

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Welcome to Spark UI</h1>
      <p>This Next.js app demonstrates the usage of the Spark UI component library within a monorepo.</p>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    </main>
  );
}