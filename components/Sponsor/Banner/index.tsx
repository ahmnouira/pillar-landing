import { handleMoveToId } from 'utils';
import styles from './Banner.module.scss';
interface Props {
  imgSrc: string;
}

const Banner: React.FC<Props> = ({ imgSrc }) => {
  return (
    <section
      className={`${styles.banner} padding-wrapper complete`}
      style={{ backgroundImage: `url(${imgSrc})` }}>
      <div className={styles['banner-content']}>
        <div className={styles['banner-content-solutions']}>
          <div className={styles['banner-content-solutions-container']}>
            <img src="/career/logo.svg"></img>
          </div>
          <h6>SOLUTIONS</h6>
        </div>
        <h1>Solve Your Capital Needs By Accessing Interim Liquidity & Retaining Control</h1>
        <p className={`${styles['large']} large`}>
          The Pillar marketplace is designed to accommodate investor capital of varying time horizons and risk
          profiles, solving liquidity needs across the deal lifecycle.
        </p>
        <div className={styles['button-container']}>
          <button className="ui-button-2" onClick={() => handleMoveToId()}>
            SCHEDULE A CALL
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
