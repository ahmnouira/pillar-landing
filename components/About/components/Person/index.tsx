import React from 'react';
import { PersonType } from 'types/person';

interface Props {
  person: PersonType;
  styles: any;
  show?: boolean;
  toggleShow?: () => void;
}

const Person: React.FC<Props> = ({ person, styles, show, toggleShow }) => {
  return (
    <div className={styles['person-card']}>
      <img className={styles['person-card-image']} src={person.avatar} alt={person.name} />
      <div className={styles['person-card-content']}>
        <h4>{person.name}</h4>
        <div className={styles['person-card-content-role']}>
          <p>{person.role}</p>
        </div>
        <p className={styles['description']}>{show ? person.description : person.summary}</p>
        <p onClick={toggleShow} className={styles['show']}>
          {show ? 'Hide' : 'Expand'}
        </p>
      </div>
    </div>
  );
};

export default Person;
