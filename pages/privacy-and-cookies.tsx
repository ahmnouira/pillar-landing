import MainLayout from 'components/Layouts/MainLayout';
import { privacyMarkup } from 'utils';

const PrivacyPolicy = () => {
  return (
    <MainLayout darkNav>
      <div className="padding-wrapper policies" dangerouslySetInnerHTML={{ __html: privacyMarkup }}></div>
    </MainLayout>
  );
};

export default PrivacyPolicy;
