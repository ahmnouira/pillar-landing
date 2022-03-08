import { Grid } from '@mui/material';
import styles from './Values.module.scss';
import { ValueType } from 'types/value';

const values: ValueType[] = [
  {
    title: 'Values',
    icon: '',
    subTitle: 'Do the right thing, every time.',
  },
  {
    title: 'Transparency',
    icon: '',
    subTitle: 'Be open, speak up.',
  },
  {
    title: 'Humility',
    icon: '',
    subTitle: 'No egos, no jerks.',
  },
  {
    title: 'Meritocracy',
    icon: '',
    subTitle: 'The best idea always wins.',
  },
];

const Values = () => {
  return (
    <section className={styles.about}>
      <div className={styles['about-header']}>
        <h6>CAREERS</h6>
        <h3>Our Values</h3>
        <p>Our values are short, simple, and real: they guide how we conduct our business, everyday.</p>
      </div>
      <div className={styles['about-content']}>
        <Grid container columnSpacing={2} rowSpacing={2}>
          {values.map((value, index) => (
            <Grid item xs={12} sm={12} md={4} lg={4} key={index}></Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Values;
