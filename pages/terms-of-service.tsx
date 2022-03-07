import MainLayout from 'components/Layouts/MainLayout';
import { termsMarkup } from 'utils';

const TermsOfService = () => {
  return (
    <MainLayout darkNav>
      <div className="padding-wrapper policies" dangerouslySetInnerHTML={{ __html: termsMarkup }}></div>
    </MainLayout>
  );
};

export default TermsOfService;
