
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import content from './content.json'
import Image from 'next/image';
import { platformNames } from '@/libs/platformURLs';


export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-[#f5f5f5] bg-brand-blue-800 text-brand-blue-100">
        {/* Header */}
        <header className="flex items-center justify-between p-6 md:p-8 bg-white">
          <div className="flex items-center gap-2">
            <div className="relative overflow-hidden flex items-center h-10 w-32 rounded bg-gradient-to-br from-orange-500 to-pink-500">
              <div
                className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.7),rgba(0,0,0,0.9))] bg-cover bg-no-repeat opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt mix-blend-saturation"
                style={{
                  backgroundImage: `
            url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"),
            linear-gradient(90deg, #FF7E29 0%, #FF486C 100%)
          `,
                  backgroundBlendMode: 'hue',
                }}
              />
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

        {/* Company Info */}
        <section className="px-6 md:px-8 py-12">
          <div className="space-y-1">
            <h1 className="text-xl font-medium">{content.companyInfo.title}</h1>
            <p className="text-lg">{content.companyInfo.address1}</p>
            <p className="text-lg">{content.companyInfo.address2}</p>
          </div>
        </section>

        {/* Main Navigation */}
        <nav className="px-6 md:px-8 flex flex-wrap gap-8 border-t-2 border-brand-blue-800 bg-white" aria-label="Main Navigation">
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
        <div className="px-6 md:px-8 flex flex-wrap gap-6 border-2 border-brand-blue-800 bg-white">
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
        {/* Hero Text */}
        <section className="relative min-h-[60vh]">
          <div
            className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.7),rgba(0,0,0,0.9))] bg-cover bg-no-repeat"
            style={{
              backgroundImage: `
            url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"),
            linear-gradient(90deg, #FF7E29 0%, #FF486C 100%)
          `,
              backgroundBlendMode: 'overlay',
            }}
          />
          <div className="relative px-6 md:px-8 py-12 max-w-4xl">
            <p className="text-white text-3xl md:text-4xl lg:text-5xl leading-relaxed">{content.heroText}</p>
          </div>
        </section>
      </main>
    </>
  );
}
