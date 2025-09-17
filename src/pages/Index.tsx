import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InitiativesSection from "@/components/InitiativesSection";
import StakeholderSection from "@/components/StakeholderSection";
import BlockchainBenefits from "@/components/BlockchainBenefits";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <InitiativesSection />
        <StakeholderSection />
        <BlockchainBenefits />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
