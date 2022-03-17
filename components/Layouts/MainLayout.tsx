import React, { ReactNode, useState } from 'react';
import Navbar, { NavbarProps } from 'components/Navbar';
import Head from 'next/head';
import Footer from 'components/Footer';
import Sidebar from 'components/Sidebar';

interface Props {
  children: ReactNode;
  title?: string;
  description?: string;
  navbarProps?: NavbarProps;
}

const MainLayout: React.FC<Props> = ({ title, description, children, navbarProps }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <Head>
        <meta
          name={description || 'description'}
          content="Pillar is a commercial real estate investment platform designed to facilitate discovery, diligence, execution, and ongoing management of direct deals for institutional CRE investors (e.g. pensions/endowments/family offices/RIAs) and help sponsors efficiently manage capital throughout the lifecycle of an investment."
        />
      </Head>
      <Navbar setOpen={() => setOpen(!open)} {...navbarProps} />
      <Sidebar open={open} setOpen={() => setOpen(!open)} />
      {children}
      <Footer />
    </React.Fragment>
  );
};

MainLayout.defaultProps = {};

export default MainLayout;
