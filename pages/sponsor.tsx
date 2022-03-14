import CTA from 'components/CTA';
import MainLayout from 'components/Layouts/MainLayout';
import Banner from 'components/Sponsor/Banner';
import Financial from 'components/Sponsor/Financial';
import HowItWorks from 'components/Sponsor/HowItWorks';
import PillarSolution from 'components/Sponsor/PillarSolution';
import Until from 'components/Sponsor/Until';
import type { NextPage } from 'next';
import { handleMoveToId } from 'utils';

const Sponsor: NextPage = () => {
  const menus = [
    {
      text: 'Solutions',
      onClick: () => handleMoveToId('solutions'),
    },
    {
      text: 'About us',
      onClick: () => handleMoveToId('about'),
    },
    {
      text: 'Careers',
      onClick: () => handleMoveToId('careers'),
    },
    {
      text: 'Contact Us',
      onClick: () => handleMoveToId('cta'),
    },
  ];
  return (
    <MainLayout
      navbarProps={{
        logoColor: 'white',
        menus: menus,
      }}>
      <Banner imgSrc="/sponsor/bg.png" />
      <Financial />
      <Until />
      <PillarSolution />
      <HowItWorks />
      <CTA />
    </MainLayout>
  );
};

export default Sponsor;
