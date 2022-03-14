import React, { ReactNode, useState } from 'react';
import Navbar from 'components/Navbar';
import Head from 'next/head';
import Footer from 'components/Footer';
import Sidebar from 'components/Sidebar';

interface Props {
  title?: string;
  description?: string;
  children: ReactNode;
  darkNav?: boolean;
  logoColor?: string;
}

const MainLayout: React.FC<Props> = ({ title, description, children, darkNav, logoColor }) => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <Head>
        <meta
          name={description || 'description'}
          content="Pillar is a commercial real estate investment platform designed to facilitate discovery, diligence, execution, and ongoing management of direct deals for institutional CRE investors (e.g. pensions/endowments/family offices/RIAs) and help sponsors efficiently manage capital throughout the lifecycle of an investment."
        />
      </Head>
      <Navbar dark={darkNav} logoColor={logoColor} setOpen={() => setOpen(!open)} />
      <Sidebar open={open} setOpen={() => setOpen(!open)} />
      {children}
      <Footer />
    </React.Fragment>
  );
};

MainLayout.defaultProps = {
  logoColor: 'white',
};

export default MainLayout;
