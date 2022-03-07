import React from 'react';

interface Props {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
  styles: any;
}

const PillarCard: React.FC<Props> = ({ imageSrc, title, subtitle, description, styles }) => {
  return (
    <div className={styles['pillar-card']}>
      <div className={styles['pillar-card-content']}>
        <img className={styles['pillar-card-image']} src={imageSrc} alt={title} />
        <div className={styles['pillar-card-text']}>
          <h4>{title}</h4>
          <p className="large">{subtitle}</p>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PillarCard;
