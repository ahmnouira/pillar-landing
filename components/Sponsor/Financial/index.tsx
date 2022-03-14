import { Grid, useMediaQuery } from '@mui/material';
import { FinancialType } from 'types/financial';
import styles from './Financial.module.scss';

const financial: FinancialType[] = [
  {
    title: 'Portfolio Management',
    icon: '/sponsor/financial/1.svg',
    subTitle: 'Portfolio Management',
    content: 'Monetize a portion of gains to manage portfolio risk and/or recycle capital',
  },
  {
    title: 'Tax & Estate Planning',
    icon: '/sponsor/financial/2.svg',
    subTitle: 'Tax & Estate Planning',
    content:
      'Including all major capital decisions. No forced sales, no meddling LPs. Investors benefit from streamlined reporting and analytical tools.',
  },
  {
    title: 'Investor Relations',
    icon: '/sponsor/financial/3.svg',
    subTitle: 'Investor Relations',
    content: 'Maintain strong LP relationships by offering  liquidity independent of a sale',
  },
];

const Financial = () => {
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <section className={styles.financial}>
      <div className={styles['financial-header']}>
        <h6>SPONSORS</h6>
        <h3>As an Owner you have financial needs that should drive your capital decisions</h3>
      </div>
      <div className={styles['financial-content']}>
        <Grid container rowSpacing={3} columnSpacing={2}>
          {financial.map((financial, index) => (
            <Grid item xs={12} sm={12} md={4} lg={4} key={index}>
              <div className={styles['financial-content-item']}>
                <img src={financial.icon} alt={financial.title} />
                <h4>{financial.title}</h4>
                <h2>{financial.subTitle}</h2>
                <p style={{ color: matches || index % 2 === 0 ? '#6E7176' : '#000' }}>{financial.content}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Financial;
