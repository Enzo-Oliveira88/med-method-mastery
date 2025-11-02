import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroBanner />
      <AboutSection />
      <CoursesSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
