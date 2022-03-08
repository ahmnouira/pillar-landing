import type { NextPage } from 'next';
import MainLayout from 'components/Layouts/MainLayout';
import Banner from 'components/career/Banner';

const Career: NextPage = () => {
  return (
    <MainLayout>
      <Banner imgSrc="/hero.jpg" />
    </MainLayout>
  );
};

export default Career;
