import MainLayout from 'components/Layouts/MainLayout';
import { termsMarkup } from 'utils';

const TermsOfService = () => {
  return (
    <MainLayout
      navbarProps={{
        logoColor: 'white',
        dark: true,
      }}>
      <div className="padding-wrapper policies" dangerouslySetInnerHTML={{ __html: termsMarkup }}></div>
    </MainLayout>
  );
};

export default TermsOfService;
