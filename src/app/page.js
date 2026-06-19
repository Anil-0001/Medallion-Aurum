import Header from "@/components/layout/Header";
import ScrollManager from "@/components/common/ScrollManager";
import Hero from "@/components/sections/Hero";
import AurumStructuredSlider from "@/components/sections/AurumStructuredSlider";
import ProjectSnapshot from "@/components/sections/ProjectSnapshot";
import About from "@/components/sections/About";
import Density from "@/components/sections/Density";
import Story from "@/components/sections/Story";
import EnquiryPreview from "@/components/sections/EnquiryPreview";
import FloorPlans from "@/components/sections/FloorPlans";
import PlansLayouts from "@/components/sections/PlansLayouts";
import TransparentPricing from "@/components/sections/TransparentPricing";
import PremiumSpecifications from "@/components/sections/PremiumSpecifications";
import ProjectGallery from "@/components/sections/ProjectGallery";
import PrimeLocation from "@/components/sections/PrimeLocation";
import InvestmentPotential from "@/components/sections/InvestmentPotential";
import LifestyleAmenities from "@/components/sections/LifestyleAmenities";
import ConstructionProgress from "@/components/sections/ConstructionProgress";
import PropertyInterest from "@/components/sections/PropertyInterest";
import BuyerTestimonials from "@/components/sections/BuyerTestimonials";
import AurumFaq from "@/components/sections/AurumFaq";
import DeveloperSnapshot from "@/components/sections/DeveloperSnapshot";
import SiteVisitMap from "@/components/sections/SiteVisitMap";
import ProjectEssentials from "@/components/sections/ProjectEssentials";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <ScrollManager />
      <Header />
      <main>
        <Hero />
        <ProjectSnapshot />
        <About />
        <Density />
        <Story />
        <AurumStructuredSlider />
        <EnquiryPreview />
        <FloorPlans />
        <PlansLayouts />
        <TransparentPricing />
        <PremiumSpecifications />
        <ProjectGallery />
        <PrimeLocation />
        <InvestmentPotential />
        <LifestyleAmenities />
        <ConstructionProgress />
        <PropertyInterest />
        <BuyerTestimonials />
        <AurumFaq />
        <ProjectEssentials />
        <SiteVisitMap />
        <DeveloperSnapshot />
      </main>
      <Footer />
    </>
  );
}
