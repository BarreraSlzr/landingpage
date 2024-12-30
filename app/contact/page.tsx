import CompanyInfo from "@/app/components/CompanyInfo";
import Header from "@/app/components/Header";
import HeroText from "@/app/components/HeroText";
import MainNavigation from "@/app/components/MainNavigation";
import SocialLinks from "@/app/components/SocialLinks";
import content from '@/app/content.json';
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";


const defaultProject = {
    title: `Let's talk`,
    href: 'mailto:hola@internetfriends.xyz',
    description: 'hola@internetfriends.xyz'
}

const contact = [
    defaultProject
]

export default function Page() {
    return (
        <main>
            <Header />
            <HeroText>
                <h1 className="text-5xl font-bold sm:pb-4 pb-6 md:pb-8">
                    {content.contact.title}
                </h1>
                <div className="sm:p-4 p-6 md:p-8 flex flex-col bg-foreground text-brand-blue-100">
                    <p className="text-lg mb-2 max-w-2xl">
                        {content.contact.description}
                    </p>
                </div>
                <div className="sm:p-4 p-6 md:p-8 pt-0 flex flex-col bg-foreground">
                    {contact.map((c, index) => (
                        <Link key={index} href={c.href} title={c.title}
                            className="flex items-center gap-4 hover:opacity-70 transition-opacity p-2 border-t-2 border-brand-blue-800 text-brand-blue-100">
                            <span className="font-mono font-bold mb-auto">
                                0{index + 1}
                            </span>
                            <span className="flex-grow">
                                {c.description}
                            </span>
                            <span className="flex flex-row items-center text-right">
                                {c.title}
                                <ArrowUpRight className="h-4 w-4 rotate" />
                            </span>
                        </Link>
                    ))}
                </div>
            </HeroText>
            <MainNavigation />
            <SocialLinks />
            <CompanyInfo />
        </main>
    );
}