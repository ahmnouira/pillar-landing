import CTA from 'components/CTA';
import MainLayout from 'components/Layouts/MainLayout';
import Banner from 'components/solution/Banner';
import Financial from 'components/solution/Financial';
import HowItWorks from 'components/solution/HowItWorks';
import PillarSolution from 'components/solution/PillarSolution';
import Until from 'components/solution/Until';
import type { NextPage } from 'next';

const Solution: NextPage = () => {
  return (
    <MainLayout>
      <Banner imgSrc="/career/hero.jpeg" />
      <Financial />
      <Until />
      <PillarSolution />
      <HowItWorks />
      <CTA />
    </MainLayout>
  );
};

export default Solution;
