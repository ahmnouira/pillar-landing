import styles from './HowItWorks.module.scss';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const HowItWorks: React.FC = () => {
  return (
    <section className={styles['how-it-works']}>
      <h3>How it Works</h3>
      <h6>Our process for owners of institutional-quality assets</h6>
      <p>
        Pillar underwrites the GP <span>to institutional standards</span>
      </p>

      <div className={styles['how-it-works-cards']}>
        <div className={styles['how-it-works-cards-small']}>
          <WarningAmberOutlinedIcon htmlColor="#FFD130" />
          <h4>GP does not pass due diligence</h4>
          <p>
            <span>Pillar works with GP</span> to shore up shortfalls by introducing third-party service
            providers and/or instituting asset management oversight
          </p>
        </div>
        <div className={styles['how-it-works-cards-icon']}>
          <ArrowForwardIosIcon htmlColor="#00838F" />
        </div>
        <div className={styles['how-it-works-cards-large']}>
          <CheckCircleOutlineIcon htmlColor="#00838F" />
          <h4>GP passes due diligence</h4>
          <div className={styles['how-it-works-cards-large-row']}>
            <p>Sponsor and Asset are onboarded onto platform</p>

            <div className={styles['how-it-works-cards-large-row-icon']}>
              <ArrowForwardIosIcon />
            </div>

            <p>
              Pillar may close the asset on balance sheet and syndicate the risk or offer for best efforts
              execution
            </p>

            <div className={styles['how-it-works-cards-large-row-icon']}>
              <ArrowForwardIosIcon />
            </div>
            <p>Post-close ongoing asset reporting via automated ingestion of financial data</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
