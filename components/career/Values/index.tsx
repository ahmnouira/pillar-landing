import { Grid } from '@mui/material';
import styles from './Values.module.scss';
import { ValueType } from 'types/value';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import BorderClearIcon from '@mui/icons-material/BorderClear';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';

const values: ValueType[] = [
  {
    title: 'Integrity',
    icon: <LocalPoliceIcon htmlColor="#e72d65" />,
    subTitle: 'Do the right thing, every time.',
  },
  {
    title: 'Transparency',
    icon: <BorderClearIcon htmlColor="#e72d65" />,
    subTitle: 'Be open, speak up.',
  },
  {
    title: 'Humility',
    icon: <EmojiPeopleIcon htmlColor="#e72d65" />,
    subTitle: 'No egos allowed.',
  },
  {
    title: 'Meritocracy',
    icon: <StackedLineChartIcon htmlColor="#e72d65" />,
    subTitle: 'The best idea always wins.',
  },
];

const Values = () => {
  return (
    <section className={styles.values}>
      <div className={styles['values-header']}>
        <h3>Our Values</h3>
        <p>Our values are short, simple, and real: they guide how we conduct our business, everyday.</p>
      </div>
      <div className={styles['values-content']}>
        <Grid container rowSpacing={2}>
          {values.map((value, index) => (
            <Grid item xs={12} sm={12} md={3} lg={3} key={index}>
              <div className={styles['value-item']}>
                {value.icon}
                {/* <img src={value.icon} alt={value.title} /> */}
                <h3>{value.title}</h3>
                <p>{value.subTitle}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Values;
