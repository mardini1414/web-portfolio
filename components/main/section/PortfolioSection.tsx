import React from 'react';
import Heading1 from '../text/Heading1';
import { portfolio } from '@/data/portfolio';
import PortfolioCard from '../card/PortfolioCard';

function PortfolioSection(): React.ReactNode {
  return (
    <section
      id="portfolio-section"
      className="min-h-min pb-[80px] pt-[80px] md:pt-[100px] bg-slate-100"
    >
      <div className="container px-4 mx-auto">
        <Heading1 text="PORTFOLIO" className="text-center mb-20" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolio.map((value) => (
            <PortfolioCard key={value.id} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
