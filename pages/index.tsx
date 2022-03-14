import type { NextPage } from 'next';
import MainLayout from 'components/Layouts/MainLayout';
import Banner from 'components/Banner';
import Pillars from 'components/Pillars';
import { useEffect } from 'react';
import CTA from 'components/CTA';
import { useRouter } from 'next/router';
import { handleMoveToId } from 'utils';
import About from 'components/About';

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.query.cta) {
      handleMoveToId('cta');
    } else if (router.query.about) handleMoveToId('about');
  }, [router]);

  return (
    <MainLayout
      navbarProps={{
        dark: false,
      }}>
      <Banner imgSrc="/hero.jpg" />
      <Pillars />
      <About />
      <CTA />
    </MainLayout>
  );
};

export default Home;
