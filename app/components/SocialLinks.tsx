import Link from 'next/link';
import { platformNames } from '@/libs/platformURLs';

export default function SocialLinks() {
  return (
    <div className="px-6 md:px-8 flex flex-wrap gap-6 border-2 border-brand-blue-800 bg-foreground">
      {platformNames.map((platform) => (
        <Link
          key={platform}
          href={`/redirect/${platform.toLowerCase()}`}
          className="capitalize hover:opacity-70 transition-opacity"
          aria-label={`Follow us on ${platform}`}
        >
          {platform}
        </Link>
      ))}
    </div>
  );
}