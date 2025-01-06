import CompanyInfo from "@/app/components/CompanyInfo";
import Header from "@/app/components/Header";
import HeroText from "@/app/components/HeroText";
import MainNavigation from "@/app/components/MainNavigation";
import SocialLinks from "@/app/components/SocialLinks";
import content from '@/app/content.json';
import ProfileCard from "../components/profile/profile-card";


export default function Page() {
    return (
        <main>
            <Header />
            <HeroText className="min-h-fit">
                <h1 className="text-5xl font-bold sm:pb-6 pb-4 md:pb-8">
                    {content.curriculum.title}
                </h1>
            </HeroText>
            <MainNavigation />
            <SocialLinks />
            <div className="border-2 border-t-0 rounded-b border-brand-blue-800 bg-foreground">
                <div className="sm:px-6 px-2 md:px-8 py-12 pt-6">
                    <ProfileCard/>
                </div>
            </div>
            <CompanyInfo />
        </main>
    );
}