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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim mattis a, id vulputate commodo
          pretium dictum adipiscing arcu.
        </p>
        <div className={styles['button-container']}>
          <button className="ui-button-2" onClick={() => handleMoveToId()}>
            OPEN POSITIONS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
