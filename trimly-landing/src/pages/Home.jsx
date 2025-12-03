import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ProblemSection from "../components/ProblemSection";
import HowItWorksSection from "../components/HowItWorksSection";
import NowSection from "../components/NowSection";
import EarlyAccessSection from "../components/EarlyAccessSection";

function Home() {
  return (
    <Layout>
      <Hero />
      <ProblemSection />
      <HowItWorksSection />
      <NowSection />
      <EarlyAccessSection />
    </Layout>
  );
}

export default Home;