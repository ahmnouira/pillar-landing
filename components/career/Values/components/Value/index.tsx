import React from 'react';
import { ValueType } from 'types/value';

interface Props {
  value: ValueType;
  styles: any;
}

const Value: React.FC<Props> = ({ value, styles }) => {
  return (
    <div className={styles['person-card']}>
      <img className={styles['person-card-image']} src={value.icon} alt={value.title} />
      <h4>{value.title}</h4>
      <p>{value.subTitle}</p>
    </div>
  );
};

export default Value;
