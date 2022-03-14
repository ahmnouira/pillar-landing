import type { NextPage } from 'next';
import MainLayout from 'components/Layouts/MainLayout';
import Banner from 'components/Banner';
import Pillars from 'components/Pillars';
import { useEffect } from 'react';
import CTA from 'components/CTA';
import { useRouter } from 'next/router';
import { handleMoveToId } from 'utils';
import About from 'components/About';

const menus = [
  {
    text: 'About us',
    onClick: () => handleMoveToId('about'),
  },
  {
    text: 'Contact us',
    onClick: () => handleMoveToId('cta'),
  },
  {
    text: 'Get Started',
  },
];

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.query.cta) {
      handleMoveToId('cta');
    }
  }, [router]);

  return (
    <MainLayout
      navbarProps={{
        dark: false,
        menus: menus,
      }}>
      <Banner imgSrc="/hero.jpg" />
      <Pillars />
      <About />
      <CTA />
    </MainLayout>
  );
};

export default Home;
