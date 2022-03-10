import React from 'react';
import { Grid } from '@mui/material';
import { PersonType } from 'types/person';
import Person from './components/Person';
import styles from './About.module.scss';

const people: PersonType[] = [
  {
    id: '1',
    avatar: '/people/1.png',
    description:
      'Real estate fintech entrepreneur (LEX, Vistia), global macro investments (Pharo, Lehman Brothers), IU Kelley',
    name: 'Johan Strauss',
    role: 'ROLE LOREM',
    fullDescription:
      "Anthony Doming is an experienced fintech entrepreneur, most recently as the founding president of LEX Markets, the commercial real estate platform which executed the first-ever IPO of a single-asset commercial real estate security. Prior to that he founded a home financing fintech company, Vistia, which was acquired by a competitor in 2017. He previously worked in capital markets focused primarily on emerging markets investments in FX, rates, and credit (Pharo Management, Lehman Brothers). Steven is a graduate of Indiana University's Kelley School of Business and is a CFA charterholder.",
  },
  {
    id: '2',
    avatar: '/people/2.png',
    description:
      'Institutional allocator (Purdue endowment, INPRS), real estate private equity (Strategic Capital, Lehman Brothers), IU Kelley ',
    name: 'Johan Strauss',
    role: 'ROLE LOREM',
    fullDescription:
      "Sanjay Patel has 20+ years' experience in real estate, initially working in his family's hotels while in high school, then as an institutional real estate private equity investor (Lehman Brothers, Strategic Capital Partners), and for the last 10 years as an institutional allocator ($30bn INPRS, $4bn Purdue University endowment). Throughout his professional career, Sanjay has also managed his family's investments in farmland, hotels, and multifamily assets. Sanjay is a graduate of Indiana University's Kelley School of Business and is a CAIA charterholder.",
  },
];

const About = () => {
  const [show, setShow] = React.useState(false);

  const toggleShow = () => {
    setShow((value) => !value);
  };

  return (
    <section className={styles.about}>
      <div className={styles['about-header']}>
        <h6>OUR TEAM</h6>
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
