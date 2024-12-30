import CompanyInfo from "@/app/components/CompanyInfo";
import Header from "@/app/components/Header";
import HeroText from "@/app/components/HeroText";
import MainNavigation from "@/app/components/MainNavigation";
import SocialLinks from "@/app/components/SocialLinks";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const defaultProject = {
    title: 'LuxonFilms.com',
    href: 'https://luxon.internetfriends.xyz',
    description: 'Website'
}

const projects = [
    defaultProject,
    {
        title: 'SofiaSalud',
        href: 'https://sofia.internetfriends.xyz',
        description: 'Chatbot, Agent AI, MVP'
    },
    {
        title: 'Orders Managment',
        href: 'https://orders.internetfriends.xyz/',
        description: 'Progressive Web App, System'
    },
    {
        title: 'Henah Real State', 
        href: 'https://henah.internetfriends.xyz/',
        description: 'Website, MVP'
    }, 
    {
        title: 'SuPanchaMadre Restaurant',
        href: 'https://supanchamadre.internetfriends.xyz/',
        description: 'Website, MVP'
    },
    {
        title: 'Domain Provider',
        href: 'https://internetfriends.xyz/domains',
        description: 'e-Commerce, API System'
    }
]

export default function Page() {
    return (
        <main>
            <Header />
            <HeroText>
                <h1 className="text-5xl font-bold sm:pb-4 pb-6 md:pb-8">
                    Discover Our Public Work Samples
                </h1>
                <div className="sm:p-4 p-6 md:p-8 flex flex-col bg-foreground text-brand-blue-100">
                    <p className="text-lg mb-2 max-w-2xl">
                        Explore a showcase of our creativity, problem-solving, and technical expertise.
                        Dive into projects that bring ideas to life, automate tasks, and deliver impactful
                        business solutions tailored to real-world needs.
                    </p>
                </div>
                <div className="sm:p-4 p-6 md:p-8 pt-0 flex flex-col bg-foreground">
                    {projects.map((p, index) => (
                        <Link key={index} href={p.href} title={p.title}
                            referrerPolicy="origin"
                            target="_blank"
                            className="flex items-center gap-4 hover:opacity-70 transition-opacity p-2 border-t-2 border-brand-blue-800 text-brand-blue-100">
                            <span>
                                {index + 1}
                            </span>
                            <span className="flex-grow">
                                {p.description}
                            </span>
                            <span className="flex flex-row items-center text-right">
                                {p.title}
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