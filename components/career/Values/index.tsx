import { Grid } from '@mui/material';
import styles from './Values.module.scss';
import { ValueType } from 'types/value';

const values: ValueType[] = [
  {
    title: 'Values',
    icon: '/career/values/integrity.svg',
    subTitle: 'Do the right thing, every time.',
  },
  {
    title: 'Transparency',
    icon: '/career/values/transparency.svg',
    subTitle: 'Be open, speak up.',
  },
  {
    title: 'Humility',
    icon: '/career/values/humility.svg',
    subTitle: 'No egos, no jerks.',
  },
  {
    title: 'Meritocracy',
    icon: '/career/values/meritocracy.svg',
    subTitle: 'The best idea always wins.',
  },
];

const Values = () => {
  return (
    <section className={styles.about}>
      <div className={styles['values-header']}>
        <h6>CAREERS</h6>
        <h3>Our Values</h3>
        <p>Our values are short, simple, and real: they guide how we conduct our business, everyday.</p>
      </div>
      <div className={styles['values-content']}>
        <Grid container columnSpacing={2} rowSpacing={2}>
          {values.map((value, index) => (
            <Grid item xs={12} sm={12} md={3} lg={3} key={index}>
              <div className={styles['value-item']}>
                <img src={value.icon} alt={value.title} />
                <h3>{value.title}</h3>
                <p>{value.title}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Values;
