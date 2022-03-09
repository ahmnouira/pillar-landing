import { Grid } from '@mui/material';
import { SolutionType } from 'types/solution';
import styles from './PillarSolution.module.scss';

const solutions: SolutionType[] = [
  {
    title: 'LOREM IPSUM',
    icon: '/career/values/integrity.svg',
    subTitle: 'Portfolio Management',
  },
  {
    title: 'LOREM IPSUM',
    icon: '/career/values/transparency.svg',
    subTitle: 'Tax & Estate Planning',
  },
  {
    title: 'LOREM IPSUM',
    icon: '/career/values/humility.svg',
    subTitle: 'Investor Relations',
  },
];

const PillarSolution = () => {
  return (
    <section className={styles['pillar-solution']}>
      <div className={styles['pillar-solution-header']}>
        <h6>LOREM IPSUM</h6>
        <h3>As an Owner you have financial needs that should drive your capital decisions</h3>
      </div>
      <div className={styles['pillar-solution-content']}>
        <Grid container rowSpacing={2}>
          {solutions.map((solution, index) => (
            <Grid item xs={12} sm={12} md={3} lg={3} key={index}>
              <div className={styles['pillar-solution-item']}>
                <img src={solution.icon} alt={solution.title} />
                <h3>{solution.title}</h3>
                <p>{solution.subTitle}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default PillarSolution;
