import MainLayout from 'components/Layouts/MainLayout';
import Head from 'next/head';
import { termsMarkup } from 'utils';

const TermsOfService = () => {
  return (
    <MainLayout
      navbarProps={{
        logoColor: 'white',
        dark: true,
      }}>
      <Head>
        <title>Terms and Conditions - Pillar Markets</title>
      </Head>
      <div className="padding-wrapper policies" dangerouslySetInnerHTML={{ __html: termsMarkup }}></div>
    </MainLayout>
  );
};

export default TermsOfService;
