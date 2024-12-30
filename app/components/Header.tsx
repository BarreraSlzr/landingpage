
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import content from '../content.json';
import NoiseFilterDiv from './NoiseFilterDiv';

export default function Header() {
    return (
        <header className="flex items-center justify-between p-6 md:p-8 rounded-t-lg bg-foreground border-2 border-brand-blue-800">
            <Link href='/'>
                <div className="flex items-center gap-2">
                    <div className="relative overflow-hidden flex items-center h-10 w-32 rounded bg-gradient-to-br from-orange-500 to-pink-500">
                        <NoiseFilterDiv className="absolute scale-200 inset-0 opacity-75 group-hover:opacity-100 transition duration-3000 group-hover:duration-200 animate-tilt mix-blend-saturation"
                            overlayBlendMode='hue' />
                        <Image
                            className="select-none pointer-events-none"
                            alt={`${content.companyName}.xyz`}
                            width={600}
                            height={600}
                            src="/600x600.jpg"
                        />
                    </div>
                </div>
            </Link>

            <Link href="/samples" className="flex items-center gap-1 hover:opacity-70 transition-opacity">
                {content.headerLink}
                <ArrowUpRight className="h-4 w-4" />
            </Link>
        </header>
    );
}