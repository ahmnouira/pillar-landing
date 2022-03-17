import { Grid, useMediaQuery } from '@mui/material';
import classNames from 'classnames';
import styles from './Until.module.scss';

const untilNow = [
  'LP control rights over major decisions including sale/refinancing',
  'Capital gains taxes, deal level transfer taxes/other transaction costs',
  'Need to actively seek reinvestment options for sale proceeds',
  'Diverse LP base asking repetitive, distracting questions',
];

const withPillar = [
  'You maintain control, just like a fund GP',
  'Avoid inopportune sales while still providing liquidity to LPs',
  'You maintain ownership, preserving asset management fees and deferring taxes/costs of a whole asset sale',
  "Comprehensive reporting and LP forum enables investors to answer each others' questions",
];

const Until: React.FC = () => {
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <section className={styles.until}>
      <Grid container>
        <Grid item xs={12} sm={6} sx={{}}>
          <div className={styles['until-now']}>
            {/* <div className={styles['until-now-tag']}>
              <div>
                <img src="/sponsor/users.svg"></img>
              </div>
              <p>Then</p>
            </div> */}
            <h1>Status Quo</h1>
            {untilNow.map((el, idx) => (
              <div key={idx} className={styles['until-now-item']}>
                <img src={`/sponsor/${matches ? 'remove.svg' : 'arrow-left.svg'}`} alt="plus-icon" />
                <p>{el}</p>
              </div>
            ))}
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classNames(styles['until-now'], styles['right'])}>
            {/* <div className={styles['until-now-tag']}>
              <div>
                <img src="/sponsor/users.svg"></img>
              </div>
              <p>Now</p>
            </div> */}
            <h1 className={styles['right']}>With Pillar</h1>
            {withPillar.map((el, idx) => (
              <div key={idx} className={styles['until-now-item']}>
                <img src={`/sponsor/check.svg`} alt="check" />
                <p className={styles['right']}>{el}</p>
              </div>
            ))}
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Until;
