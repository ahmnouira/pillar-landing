import MainLayout from 'components/Layouts/MainLayout';
import Head from 'next/head';
import { confidentialityMarkup } from 'utils';

const ConfidentialityAgreement = () => {
  return (
    <MainLayout
      navbarProps={{
        logoColor: 'white',
        dark: true,
      }}>
      <Head>
        <title>Confidentiality Agreement - Pillar Markets</title>
      </Head>
      <div
        className="padding-wrapper policies"
        dangerouslySetInnerHTML={{ __html: confidentialityMarkup }}></div>
    </MainLayout>
  );
};

export default ConfidentialityAgreement;
