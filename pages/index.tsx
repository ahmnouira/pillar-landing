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
    const timeout = setTimeout(() => {
      if (router.query.cta) {
        handleMoveToId('cta');
      } else if (router.query['about-us']) {
        handleMoveToId('about-us');
      }
    }, 200);

    return () => {
      clearTimeout(timeout);
    };
  }, [router.query]);

  return (
    <MainLayout
      navbarProps={{
        logoColor: 'white',
        home: true,
      }}>
      <Banner imgSrc="/hero.jpg" />
      <Pillars />
      <About />
      <CTA />
    </MainLayout>
  );
};

export default Home;
