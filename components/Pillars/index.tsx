import { Grid } from '@mui/material';
import { useRouter } from 'next/router';
import PillarCard from './components/PillarCard';
import styles from './Pillar.module.scss';

interface iPillarCards {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  path?: string;
}

const pillarCardsContent: iPillarCards[] = [
  {
    image: '/landingpage/institution-quality.png',
    title: 'Institutional Quality',
    subtitle: 'Investment & Operational Due Diligence, Deal Flow',
    description:
      "Detailed vetting of sponsors' people, processes, systems, and track records coupled with comprehensive asset-level data to facilitate efficient investment due diligence.",
  },
  {
    image: '/landingpage/data-first.png',
    title: 'Data-First',
    subtitle: 'Standardized Reporting & Customizable Analytics',
    description:
      'Incorporating alternative data sources and up-to-date information from property management and accounting software to support a systematic investment process.',
  },
  {
    image: '/landingpage/network-driven.png',
    title: 'Network-Driven',
    subtitle: 'Discovery, Diligence, & Monitoring',
    description:
      'Building confidence and facilitating transactions via a community of sophisticated investors: discuss new and ongoing deals, follow respected sponsors and investors.',
  },
  {
    image: '/landingpage/capital-structure.png',
    title: 'Capital Structure Solutions',
    subtitle: 'From Acquisition to Recapitalization',
    description:
      'A marketplace to accommodate investor capital of varying time horizons, solving the liquidity needs of both investors and sponsors.',
    path: '/sponsor',
  },
];

const Pillars = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/sponsor');
  };

  return (
    <section className={styles.pillars}>
      <h3>Our Pillars</h3>
      <div className={styles['pillars-content']}>
        <Grid container>
          {pillarCardsContent.map(({ title, subtitle, description, image, path }, index) => {
            const isLast = index === pillarCardsContent.length - 1;
            return (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <div
                  onClick={isLast ? handleNavigate : undefined}
                  style={{ cursor: isLast ? 'pointer' : 'default', width: '100%' }}>
                  <PillarCard
                    title={title}
                    subtitle={subtitle}
                    description={description}
                    imageSrc={image}
                    styles={styles}
                  />
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </section>
  );
};

export default Pillars;
