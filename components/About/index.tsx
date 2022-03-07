import { Grid } from '@mui/material';
import { PersonType } from 'types/person';
import Person from './components/Person';
import styles from './Pillar.module.scss';

const people: PersonType[] = [
  {
    id: '1',
    avatar: '/people/1.png',
    description:
      'Elementum egestas ac amet vitae urna gravida elementum. Quam in pulvinar nisl, gravida morbi. Massa venenatis fringilla vitae adipiscing mauris. With offices in Los Angeles and Denver, Beaufain identifies and manages multifamily in',
    name: 'Johan Strauss',
    role: 'ROLE LOREM',
  },
  {
    id: '2',
    avatar: '/people/2.png',
    description:
      'Elementum egestas ac amet vitae urna gravida elementum. Quam in pulvinar nisl, gravida morbi. Massa venenatis fringilla vitae adipiscing mauris. With offices in Los Angeles and Denver, Beaufain identifies and manages multifamily in',
    name: 'Johan Strauss',
    role: 'ROLE LOREM',
  },
];

const About = () => {
  return (
    <section className={styles.about}>
      <h6>OUR TEAM</h6>
      <h3>About Us</h3>
      <p className={styles['about-info']}>
        A top-tier team deeply experienced in real estate, startups, and technology.
      </p>
      <div className={styles['about-content']}>
        {people.map((person, index) => (
          <Grid item xs={12} sm={6} lg={3} key={index}>
            <Person person={person} styles={styles} />
          </Grid>
        ))}
      </div>
    </section>
  );
};

export default About;
