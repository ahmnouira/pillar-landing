import type { NextPage } from 'next';
import MainLayout from 'components/Layouts/MainLayout';
import Banner from 'components/Banner';
import Pillars from 'components/Pillars';
import { useEffect } from 'react';
import CTA from 'components/CTA';
import { useRouter } from 'next/router';
import { handleMoveToId } from 'utils';

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.query.cta) {
      handleMoveToId();
    }
  }, [router]);

  return (
    <MainLayout>
      <Banner imgSrc="/hero.jpg" />
      <Pillars />
      <CTA />
    </MainLayout>
  );
};

export default Home;
