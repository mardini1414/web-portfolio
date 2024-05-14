import Layout from '@/components/main/Layout';
import AboutSection from '@/components/main/section/AboutSection';
import ContactSection from '@/components/main/section/ContactSection';
import HeroSection from '@/components/main/section/HeroSection';
import PortfolioSection from '@/components/main/section/PortfolioSection';
import React from 'react';

function Home(): React.ReactNode {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </Layout>
  );
}

export default Home;
