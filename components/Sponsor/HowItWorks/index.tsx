import { useMediaQuery } from '@mui/material';
import styles from './HowItWorks.module.scss';

const HowItWorks: React.FC = () => {
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <section className={styles['how-it-works']}>
      <h6>SPONSOR</h6>
      <h3>How it Works</h3>

      <div
        className={styles['how-it-works-mobile']}
        style={{ backgroundImage: `url(/sponsor/how-it-works.png)` }}
      />

      <small>Our process for owners of institutional-quality assets</small>
      <p>
        Pillar underwrites the GP <span>to institutional standards</span>
      </p>

      <div className={styles['how-it-works-cards']}>
        <div className={styles['how-it-works-cards-small']}>
          <img src="/sponsor/warring.svg" />
          <h4>GP does not pass due diligence</h4>
          <p>
            <span>Pillar works with GP</span> to shore up shortfailds by introducing third party service
            provides and/or instituting asset management oversight
          </p>
        </div>
        <div className={styles['how-it-works-cards-icon']}>
          <img src="/sponsor/step-blue.svg" />
        </div>
        <div className={styles['how-it-works-cards-large']}>
          <img src="/sponsor/check-outline.svg" />
          <h4>GP passes due diligence</h4>
          <div className={styles['how-it-works-cards-large-row']}>
            <p>Sponsor and Asset are onboarding onto platform</p>

            <div className={styles['how-it-works-cards-large-row-icon']}>
              <img src="/sponsor/step.svg" />
            </div>

            <p>
              Pillar may close the asset on balance sheet and syndicate the risk or offer for best efforts
              execution
            </p>

            <div className={styles['how-it-works-cards-large-row-icon']}>
              <img src="/sponsor/step.svg" />
            </div>
            <p>Post-close ongoing asset reporting via automated ingestion of financial data</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
