import AboutSection from "./components/homepage/about";
import HeroSection from "./components/homepage/hero-section";
import Experience from "./components/homepage/experience";
 

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection/>
      <Experience/>
     
 
    </>
  );
}
