import CompanyInfo from "./components/CompanyInfo";
import Header from "./components/Header";
import HeroText from "./components/HeroText";
import MainNavigation from "./components/MainNavigation";
import SocialLinks from "./components/SocialLinks";

export default function Page() {
  return (
    <main className="min-h-screen bg-brand-blue-800 text-brand-blue-100">
      <Header />
      <CompanyInfo />
      <MainNavigation />
      <SocialLinks />
      <HeroText />
    </main>
  );
}