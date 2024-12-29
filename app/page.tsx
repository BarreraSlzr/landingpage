import CompanyInfo from "./components/CompanyInfo";
import Header from "./components/Header";
import HeroText from "./components/HeroText";
import MainNavigation from "./components/MainNavigation";
import SocialLinks from "./components/SocialLinks";

export default function Page() {
  return (
    <main>
      <Header />
      <CompanyInfo />
      <MainNavigation />
      <SocialLinks />
      <HeroText />
    </main>
  );
}