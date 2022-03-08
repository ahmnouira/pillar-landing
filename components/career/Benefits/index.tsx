import { handleMoveToId } from 'utils';
import styles from './Benefits.module.scss';
interface Props {
  imgSrc: string;
}

const benefits = [
  'Competitive compensation including equity',
  'Comprehensive medical, dental, and vision insurance',
  'Unlimited Paid Time Off',
  'Remote-first working environment (including a WFH equipment stipend)',
  'Decision-making autonomy and ability to make a major impact',
];

const Benefits: React.FC<Props> = ({ imgSrc }) => {
  return (
    <section>
      <img src="" />
      <div className={styles['benefits-content']}>
        <h6>CAREERS</h6>
        <h1>Benefits and Perks</h1>
        {benefits.map((benefit, idx) => (
          <div key={idx}>
            <img src="" />
            <p className={`${styles['large']} large`}>{benefit}</p>
          </div>
        ))}
        <div className={styles['button-container']}>
          <button className="ui-button secondary" onClick={() => handleMoveToId()}>
            OPEN POSITIONS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
