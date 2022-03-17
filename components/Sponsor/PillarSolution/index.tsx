import { Grid } from '@mui/material';
import { SolutionType } from 'types/solution';
import styles from './PillarSolution.module.scss';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
const solutions: SolutionType[] = [
  {
    title: 'Facilitate Efficient Access to Capital',
    icon: <CachedOutlinedIcon htmlColor="#e72d65" />,
    content:
      'Depth and breadth of capital pool allows for timely execution along risk profiles and across the capital stack.',
  },
  {
    title: 'Owner Always Maintains Control',
    icon: <KeyOutlinedIcon htmlColor="#e72d65" />,
    content:
      'Including all major capital decisions. No forced sales, no meddling LPs. Investors benefit from streamlined reporting and analytical tools.',
  },
  {
    title: 'All With Lower Fees',
    icon: <PriceCheckIcon htmlColor="#e72d65" />,
    content:
      'Solve your needs while managing fees. Relative to competitors, we’re up to 75% cheaper - we focus on providing innovative solutions to real problems,  without reinventing the wheel.',
  },
];

const PillarSolution = () => {
  return (
    <section id="solutions" className={styles['pillar-solution']}>
      <div className={styles['pillar-solution-header']}>
        <h3>The Pillar Solution</h3>
      </div>
      <div className={styles['pillar-solution-content']}>
        <Grid container rowSpacing={2} columnSpacing={2}>
          {solutions.map((solution, index) => (
            <Grid item xs={12} sm={12} md={4} lg={4} key={index}>
              <div className={styles['pillar-solution-content-item']}>
                {solution.icon}
                {/* <h6>LOREM IPSUM</h6> */}
                <h3>{solution.title}</h3>
                <p>{solution.content}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default PillarSolution;
