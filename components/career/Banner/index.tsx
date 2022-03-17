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
        <div className={styles['banner-content-careers']}>
          <div className={styles['banner-content-careers-container']}>
            <img src="/career/logo.svg"></img>
          </div>
          <h6>CAREERS</h6>
        </div>
        <h1>Come work with us!</h1>
        <p>Want to change the future of private real estate capital? We're hiring!</p>
        <div className={styles['button-container']}>
          <button className="ui-button-2" onClick={() => handleMoveToId()}>
            <a href="https://angel.co/company/pillarmarkets" target="_blank" rel="noopener noreferrer">
              OPEN POSITIONS
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
