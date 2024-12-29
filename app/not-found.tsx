import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import content from './content.json'
import { platformNames } from '@/libs/platformURLs';


const messages = [
  {
    main: "This page doesn’t exist... yet.",
    subtitle: "Maybe it's waiting for a business solution!"
  },
  {
    main: "Looks like this project went missing.",
    subtitle: "Time to bring in the project management tools!"
  },
  {
    main: "Oops! Lost in automation.",
    subtitle: "Let’s simplify that workflow and find your way."
  },
  {
    main: "Not here yet.",
    subtitle: "Could it be your next high-performance tool?"
  },
  {
    main: "Nothing to see here.",
    subtitle: "Let’s create something amazing instead!"
  },
  {
    main: "Page not found.",
    subtitle: "A great opportunity to explore business automation!"
  },
  {
    main: "Missing in action.",
    subtitle: "Maybe it’s busy creating creative solutions for you."
  },
  {
    main: "Content unavailable.",
    subtitle: "It might be waiting for distribution!"
  },
  {
    main: "This page is taking a creative break.",
    subtitle: "Let’s brainstorm your next big idea!"
  },
];

const NotFoundPage: React.FC = () => {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      {/* Header */}
      <header className="flex items-center justify-between p-6 md:p-8 ">
        {/* <div className="absolute -inset-0.5 bg-gradient-to-br from-[#FF1B6B] via-[#FFA07A] to-[#40E0D0] rounded-lg "/> */}
        <div className="flex items-center gap-2">
          <div className="overflow-hidden flex items-center h-10 w-32 rounded bg-gradient-to-br from-[#FF1B6B] via-[#FFA07A] to-[#40E0D0]">
            <Image
              className="select-none pointer-events-none"
              alt={`${content.companyName}.xyz`} width={600} height={600} src="/600x600.jpg" />
          </div>
        </div>
        <Link href="/samples" className="flex items-center gap-1 hover:opacity-70 transition-opacity">
          {content.headerLink}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </header>


      <section className="relative min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-r from-orange-500 to-pink-500 text-white text-center">
          <h1 className="text-4xl font-bold mb-4">{randomMessage.main}</h1>
          <p className="text-lg mb-6">{randomMessage.subtitle}</p>
          <Link 
            href="/" 
            className="flex items-center gap-1 hover:opacity-70 transition-opacity">
              Go Home
              <ArrowUpRight className="h-4 w-4" />
          </Link>
      </section>

      {/* Main Navigation */}
      <nav className="px-6 md:px-8 flex flex-wrap gap-8" aria-label="Main Navigation">
        {content.navigation.map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
            className="flex items-center gap-1 hover:opacity-70 transition-opacity"
          >
            <ArrowUpRight className="h-4 w-4 rotate-45" />
            {item}
          </Link>
        ))}
      </nav>

      {/* Social Links */}
      <div className="px-6 md:px-8 flex flex-wrap gap-6 border-2">
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
    </main>
  );
};

export default NotFoundPage;
