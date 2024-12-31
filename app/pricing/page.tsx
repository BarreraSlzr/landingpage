import CompanyInfo from "@/app/components/CompanyInfo";
import Header from "@/app/components/Header";
import HeroText from "@/app/components/HeroText";
import MainNavigation from "@/app/components/MainNavigation";
import SocialLinks from "@/app/components/SocialLinks";
import content from '@/app/content.json';
import engagementOptions from "@/lib/engagementOptions";
import { Badge } from "@/components/ui/badge";

export default function Page() {
    return (
        <main>
            <Header />
            <HeroText>
                <h1 className="text-5xl font-bold sm:pb-6 pb-4 md:pb-8">
                    {content.pricing.title}
                </h1>
                <div className="sm:p-6 p-4 md:p-8 flex flex-col bg-foreground text-brand-blue-100">
                    <p className="text-lg mb-2 max-w-2xl">
                        {content.pricing.description}
                    </p>
                </div>
                <div className="sm:p-6 p-4 md:p-8 pt-0 flex flex-col bg-foreground">
                    {engagementOptions.map((option, index) => (
                        <div key={index}
                            className="flex items-center sm:gap-4 gap-2 hover:opacity-70 transition-opacity p-2 border-t-2 border-brand-blue-800 text-brand-blue-100">
                            <span className="font-mono font-bold mb-auto">
                                0{index + 1}
                            </span>
                            <div className="flex flex-col flex-grow">
                                <span className="flex-grow flex flex-row gap-2 justify-between">
                                    <Badge variant='outline' className="text-nowrap border-2 border-brand-blue-800 text-brand-blue">
                                        {option.duration}
                                    </Badge>
                                    <span className="font-mono font-bold">
                                        {option.price}
                                    </span>
                                </span>
                                <span className="flex flex-row items-center">
                                    {option.short_description}
                                </span>
                            </div>
                        </div>
                    ))}
                    <div className="p-2 border-t-2 border-brand-blue-800 text-brand-blue-100 front-mono">* Nonrefundable upfront payment</div>
                </div>
            </HeroText>
            <MainNavigation />
            <SocialLinks />
            <CompanyInfo />
        </main>
    );
}