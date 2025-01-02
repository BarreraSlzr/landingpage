import CompanyInfo from "@/app/components/CompanyInfo";
import Header from "@/app/components/Header";
import HeroText from "@/app/components/HeroText";
import MainNavigation from "@/app/components/MainNavigation";
import SocialLinks from "@/app/components/SocialLinks";
import content from '@/app/content.json';
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "../components/ContactForm";


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
                <h1 className="text-5xl font-bold sm:pb-6 pb-4 md:pb-8">
                    {content.contact.title}
                </h1>
                <div className="sm:p-6 p-2 py-4 md:p-8   flex flex-col bg-foreground text-brand-blue-100">
                    <p className="text-lg mb-2 max-w-2xl">
                        {content.contact.description}
                    </p>
                </div>
                <div className="sm:p-6 p-2 py-4 md:p-8   pt-0 flex flex-col bg-foreground">
                    {contact.map((c, index) => (
                        <Link key={index} href={c.href} title={c.title}
                            className="flex items-center sm:gap-4 gap-2 hover:opacity-70 transition-opacity p-2 border-b-2 border-brand-blue-800 text-brand-blue-100">
                            <span className="flex-grow">
                                {c.description}
                            </span>
                            <span className="flex flex-row items-center text-right">
                                {c.title}
                                <ArrowUpRight className="h-4 w-4 rotate" />
                            </span>
                        </Link>
                    ))}
                    <div
                        className="flex items-center sm:gap-4 gap-2 p-2 border-brand-blue-800 text-brand-blue-100">
                        <div className="flex-grow flex flex-col sm:pb-6 pb-4 md:pb-8">
                            <p className="text-lg mb-2 max-w-2xl">Share Your Vision and Watch It Come to Life!</p>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </HeroText>
            <MainNavigation />
            <SocialLinks />
            <CompanyInfo />
        </main>
    );
}