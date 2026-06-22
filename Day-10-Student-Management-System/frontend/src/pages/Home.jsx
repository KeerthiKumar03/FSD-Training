import AlertBanner from "../components/AlertBanner";
import Hero from "../components/Hero";
import CarouselSection from "../components/CarouselSection";
import ManagementCards from "../components/ManagementCards";
import FAQ from "../components/FAQ";
import LoginModal from "../components/LoginModal";

function Home() {
  return (
    <>
      <AlertBanner />

      <Hero />

      <CarouselSection />

      <ManagementCards />

      <FAQ />

      <LoginModal />
    </>
  );
}

export default Home;