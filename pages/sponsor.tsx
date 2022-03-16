import useMediaQuery from '@mui/material/useMediaQuery';
import CTA from 'components/CTA';
import MainLayout from 'components/Layouts/MainLayout';
import Banner from 'components/Sponsor/Banner';
import Financial from 'components/Sponsor/Financial';
import HowItWorks from 'components/Sponsor/HowItWorks';
import PillarSolution from 'components/Sponsor/PillarSolution';
import Until from 'components/Sponsor/Until';
import type { NextPage } from 'next';
import Head from 'next/head';

const Sponsor: NextPage = () => {
  const matches = useMediaQuery('(max-width:912px)');

  return (
    <MainLayout>
      <Head>
        <title>Capital Solutions for Real Estate Sponsors - Pillar Markets</title>
        <meta
          name="description"
          content="Learn about recapitalization and other capital solutions serving the liquidity needs of real estate sponsors and their investors."
        />
      </Head>
      <Banner imgSrc={`/sponsor/${matches ? 'mobile-bg' : 'bg'}.png`} />
      <Financial />
      <Until />
      <PillarSolution />
      <HowItWorks />
      <CTA />
    </MainLayout>
  );
};

export default Sponsor;
