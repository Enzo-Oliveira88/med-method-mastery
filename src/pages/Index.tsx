import AnnaFontesHeader from "@/components/AnnaFontesHeader";
import AnnaFontesHero from "@/components/AnnaFontesHero";
import MetodoSection from "@/components/MetodoSection";
import ComunidadeSection from "@/components/ComunidadeSection";
import ContatoSection from "@/components/ContatoSection";
import AnnaFontesFooter from "@/components/AnnaFontesFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <AnnaFontesHeader />
      <AnnaFontesHero />
      <MetodoSection />
      <ComunidadeSection />
      <ContatoSection />
      <AnnaFontesFooter />
    </div>
  );
};

export default Index;
