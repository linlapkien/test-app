import dynamic from 'next/dynamic';

const Plan = dynamic(() => import('component_test_app/Pricing'), {
  loading: () => <p>Loading...</p>,
});

const Card = dynamic(() => import('component_test_app/Card'), {
  loading: () => <p>Loading...</p>,
});

const EmailForm = dynamic(() => import('email_test_app/Email'), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <>
      <main>
        <Plan />
        <EmailForm />
        <Card />
      </main>
    </>
  );
}
