import Link from 'next/link';

export default function Custom500() {
  return (
    <div className="anime-error">
      <h1>500 - Server-side error occurred</h1>
      <p>
        Please <Link href={'/'}>go back</Link> to safety
      </p>
    </div>
  );
}