import { Grid } from '@mui/material';
import { handleMoveToId } from 'utils';
import styles from './Benefits.module.scss';
interface Props {
  imgSrc: string;
}

const benefits = [
  'Competitive compensation including equity',
  'Comprehensive medical, dental, and vision insurance',
  'Unlimited Paid Time Off',
  'Remote-first working environment (including a WFH equipment stipend)',
  'Decision-making autonomy and ability to make a major impact',
];

const Benefits: React.FC<Props> = ({ imgSrc }) => {
  return (
    <section className={styles.benefits}>
      <Grid container>
        <Grid item xs={12} sm={6} sx={{}}>
          <div className={styles['benefits-hero']} style={{ backgroundImage: `url(${imgSrc})` }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={styles['benefits-content']}>
            <h6>CAREERS</h6>
            <h1>Benefits and Perks</h1>
            {benefits.map((benefit, idx) => (
              <div key={idx} className={styles['benefits-content-item']}>
                <img src="/career/plus.svg" alt="plus-icon" />
                <p>{benefit}</p>
              </div>
            ))}
            <div className={styles['button-container']}>
              <button className="ui-button-2" onClick={() => handleMoveToId()}>
                OPEN POSITIONS
              </button>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Benefits;
