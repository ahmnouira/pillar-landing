import type { NextPage } from 'next';
import MainLayout from 'components/Layouts/MainLayout';
import Banner from 'components/career/Banner';
import Values from 'components/career/Values';
import Benefits from 'components/career/Benefits';
import Head from 'next/head';

const Career: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Careers - Pillar Markets</title>
        <meta
          name="description"
          content="Explore career opportunities, learn about company values, and see employee benefits and perks."
        />
      </Head>
      <Banner imgSrc="/career/hero.jpeg" />
      <Values />
      <Benefits imgSrc="/career/benefit-hero.png" />
    </MainLayout>
  );
};

export default Career;
