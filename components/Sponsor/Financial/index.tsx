import { Grid, useMediaQuery } from '@mui/material';
import { FinancialType } from 'types/financial';
import styles from './Financial.module.scss';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';

const financial: FinancialType[] = [
  {
    title: 'Portfolio Management',
    icon: <PieChartOutlineOutlinedIcon htmlColor="#e72d65" />,

    content: 'Monetize a portion of gains to manage portfolio risk and/or recycle capital',
  },
  {
    title: 'Tax & Estate Planning',
    icon: <ReceiptLongOutlinedIcon htmlColor="#e72d65" />,

    content:
      'Including all major capital decisions. No forced sales, no meddling LPs. Investors benefit from streamlined reporting and analytical tools.',
  },
  {
    title: 'Investor Relations',
    icon: <AccessibilityNewOutlinedIcon htmlColor="#e72d65" />,
    content: 'Maintain strong LP relationships by offering  liquidity independent of a sale',
  },
];

const Financial = () => {
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <section className={styles.financial}>
      <div className={styles['financial-header']}>
        {/* <h6>SPONSORS</h6> */}
        <h3>As an Owner you have financial needs that should drive your capital decisions</h3>
      </div>
      <div className={styles['financial-content']}>
        <Grid container rowSpacing={3} columnSpacing={2}>
          {financial.map((financial, index) => (
            <Grid item xs={12} sm={12} md={4} lg={4} key={index}>
              <div className={styles['financial-content-item']}>
                {financial.icon}
                <h2>{financial.title}</h2>
                <p>{financial.content}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Financial;
