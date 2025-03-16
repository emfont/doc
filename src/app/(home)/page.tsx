import Link from 'next/link';

export const metadata = {
  title: 'emfont 官方文檔',
};

export default function HomePage() {
  return (
    <main
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
        }}
      >
        emfont 官方文檔
      </h1>
      <p>
       你可以到{' '}
        <Link
          href="/docs"
          style={{
            fontWeight: '600',
            textDecoration: 'underline',
          }}
        >
          /docs
        </Link>{' '}
        查看文檔。
      </p>
    </main>
  );
}
