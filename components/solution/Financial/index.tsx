import { Grid } from '@mui/material';
import { FinancialType } from 'types/financial';
import styles from './Financial.module.scss';

const financials: FinancialType[] = [
  {
    title: 'LOREM IPSUM',
    icon: '/career/values/integrity.svg',
    subTitle: 'Portfolio Management',
    content: 'Monetize a portion of gains to manage portfolio risk and/or recycle capital',
  },
  {
    title: 'LOREM IPSUM',
    icon: '/career/values/transparency.svg',
    subTitle: 'Tax & Estate Planning',
    content:
      'Including all major capital decisions. No forced sales, no meddling LPs. Investors benefit from streamlined reporting and analytical tools.',
  },
  {
    title: 'LOREM IPSUM',
    icon: '/career/values/humility.svg',
    subTitle: 'Investor Relations',
    content: 'Maintain strong LP relationships by offering  liquidity independent of a sale',
  },
];

const Financial = () => {
  return (
    <section className={styles.financial}>
      <div className={styles['financial-header']}>
        <h6>LOREM IPSUM</h6>
        <h3>As an Owner you have financial needs that should drive your capital decisions</h3>
      </div>
      <div className={styles['financial-content']}>
        <Grid container rowSpacing={2}>
          {financials.map((financial, index) => (
            <Grid item xs={12} sm={12} md={3} lg={3} key={index}>
              <div className={styles['financial-item']}>
                <img src={financial.icon} alt={financial.title} />
                <h3>{financial.subTitle}</h3>
                <p>{financial.subTitle}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Financial;
