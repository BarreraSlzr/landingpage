import CompanyInfo from "@/app/components/CompanyInfo";
import Header from "@/app/components/Header";
import HeroText from "@/app/components/HeroText";
import MainNavigation from "@/app/components/MainNavigation";
import SocialLinks from "@/app/components/SocialLinks";
import content from '@/app/content.json';
import ProfileCard from "../components/profile-card";


export default function Page() {
    return (
        <main>
            <Header />
            <MainNavigation />
            <SocialLinks />
            <HeroText className="min-h-fit">
                <h1 className="text-5xl font-bold sm:pb-6 pb-4 md:pb-8">
                    {content.curriculum.title}
                </h1>
                <div className="sm:p-6 p-2 py-4 md:p-8   flex flex-col bg-foreground text-brand-blue-100">
                    <p className="text-lg mb-2 max-w-2xl">
                        {content.curriculum.description}
                    </p>
                </div>
            </HeroText>
            <div className="border-2 rounded-b border-brand-blue-800 bg-foreground">
                <div className="sm:px-6 px-2 md:px-8 py-12 pt-6">
                    <ProfileCard/>
                </div>
            </div>
            <CompanyInfo />
        </main>
    );
}