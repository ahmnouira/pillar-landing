import type { NextPage } from 'next';
import MainLayout from 'components/Layouts/MainLayout';
import Banner from 'components/career/Banner';
import Values from 'components/career/Values';
import Benefits from 'components/career/Benefits';

const Career: NextPage = () => {
  return (
    <MainLayout logoColor="black">
      <Banner imgSrc="/career/hero.jpeg" />
      <Values />
      <Benefits imgSrc="/career/benefit-hero.png" />
    </MainLayout>
  );
};

export default Career;
