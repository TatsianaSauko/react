import Link from 'next/link';

export default function ErrorPage() {
  return (
    <div className="anime-error">
      <h1>Error 404</h1>
      <p>
        Please{' '}
        <Link href={'/'}>
          <a>go back</a>
        </Link>{' '}
        to safety
      </p>
    </div>
  );
}
