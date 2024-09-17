import Link from 'next/link';

const Button2Section = () => {
  return (
    <Link href="/blog" legacyBehavior>
      <a className="btn btn-primary px-6 flex items-center" title="Go to Árazás section">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M4 24h10v2H4zm0-6h10v2H4zm22-4H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2M6 6v6h20V6zm20 22h-6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2m-6-8v6h6v-6z"/></svg>
        Összes megtekintése
      </a>
    </Link>
  );
};

export default Button2Section;