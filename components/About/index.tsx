import React from 'react';
import { Grid } from '@mui/material';
import { PersonType } from 'types/person';
import Person from './components/Person';
import styles from './About.module.scss';

const people: PersonType[] = [
  {
    id: 1,
    name: 'Anthony Dominguez',
    avatar: '/people/1.png',
    role: 'CHIEF EXECUTIVE OFFICER',
    summary:
      'Real estate fintech entrepreneur (LEX, Vistia), global macro investments (Pharo, Lehman Brothers), IU Kelley',
    description: `Anthony Dominguez is an experienced fintech entrepreneur, most recently as the founding president of LEX Markets, the commercial real estate platform which executed the first-ever IPO of a single-asset commercial real estate security. Prior to that he founded a home financing fintech company, Vistia, which was acquired by a competitor in 2017. He previously worked in capital markets focused primarily on emerging markets investments in FX, rates, and credit (Pharo Management, Lehman Brothers). Steven is a graduate of Indiana University's Kelley School of Business and is a CFA charterholder.`,
  },

  {
    id: 2,
    name: 'Anthony Dominguez',
    avatar: '/people/1.png',
    role: 'CHIEF INVESTMENT OFFICER',
    summary:
      'Institutional allocator (Purdue University endowment, INPRS), real estate private equity (Strategic Capital, Lehman Brothers), IU Kelley ',

    description: `Anthony Dominguez has 20+ years' experience in real estate, initially working in his family's hotels while in high school, then as an institutional real estate private equity investor (Lehman Brothers, Strategic Capital Partners), and for the last 10 years as an institutional allocator ($30bn INPRS, $4bn Purdue University endowment). Throughout his professional career, Sanjay has also managed his family's investments in farmland, hotels, and multifamily assets. Sanjay is a graduate of Indiana University's Kelley School of Business and is a CAIA charterholder.`,
  },

  {
    id: 3,
    name: 'Anthony Dominguez',
    avatar: '/people/1.png',
    role: 'CHIEF OPERATING OFFICER',
    summary:
      'Startup executive (Second Measure), Securities Division (Goldman Sachs), Stanford GSB & Cornell Dyson School of Business ',

    description: `Anthony Dominguez has 17+ years of experience working with institutional investors and building businesses in both the financial services and technology start-up space. After 13 years at Goldman Sachs, Ed most recently was the Head of Sales and Customer Success at Second Measure, a data science technology company focused on providing analytics to institutional investors. Ed was  involved in managing sales/business development, product, and operations. His leadership helped scale Second Measure through growth to acquisition by Bloomberg LP in 2020. Ed holds degrees from the Stanford Graduate School of Business and Cornell University's Dyson School of Business.`,
  },

  {
    id: 4,
    name: 'Anthony Dominguez',
    avatar: '/people/1.png',
    role: 'CHIEF TECHNOLOGY OFFICER',
    summary:
      'Fintech CTO (Finitive), financial software engineering (Heidmar), Bangalore University (Engineering) ',
    description: `Anthony Dominguez is a technology veteran bringing over 2 decades of experience in Engineering, Product, Analytics, Infrastructure and Cyber Security. Most recently, he built the technology powering Finitive, the institutional investment platform for private credit handling billions in transactions, and scaled their engineering organization in 4 different continents. Prior to that, Kiran spent over 15 years at a Morgan Stanley-backed global trading organization overseeing platforms and systems for freight trading, ERP, business intelligence, analytics, and risk management. Kiran holds an Engineering degree from Bangalore University.`,
  },
];
const About = () => {
  const [show, setShow] = React.useState(false);

  const toggleShow = () => {
    setShow((value) => !value);
  };

  return (
    <section id="about-us" className={styles.about}>
      <div className={styles['about-header']}>
        <h3>About Us</h3>
        <p>A top-tier team deeply experienced in real estate, startups, and technology.</p>
      </div>
      <div className={styles['about-content']}>
        <Grid container columnSpacing={2} rowSpacing={2}>
          {people.map((person, index) => (
            <Grid item xs={12} sm={12} md={6} lg={6} key={index}>
              <Person person={person} styles={styles} show={show} toggleShow={toggleShow} />
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default About;
