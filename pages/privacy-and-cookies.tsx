import MainLayout from 'components/Layouts/MainLayout';
import Head from 'next/head';
import { privacyMarkup } from 'utils';

const PrivacyPolicy = () => {
  return (
    <MainLayout
      navbarProps={{
        logoColor: 'white',
        dark: true,
      }}>
      <Head>
        <title>Privacy Policy - Pillar Markets</title>
      </Head>
      <div className="padding-wrapper policies" dangerouslySetInnerHTML={{ __html: privacyMarkup }}></div>
    </MainLayout>
  );
};

export default PrivacyPolicy;
