import React from 'react';
import { PersonType } from 'types/person';

interface Props {
  person: PersonType;
  styles: any;
}

const Person: React.FC<Props> = ({ person, styles }) => {
  const [show, setShow] = React.useState(false);

  const toggleShow = () => {
    setShow((value) => !value);
  };

  return (
    <div className={styles['person-card']}>
      <img className={styles['person-card-image']} src={person.avatar} alt={person.name} />
      <div className={styles['person-card-content']}>
        <h4>{person.name}</h4>
        <div className={styles['person-card-content-role']}>
          <p>{person.role}</p>
        </div>
        <p className={styles['description']}>{person.description}</p>
        <div onClick={toggleShow}>
          <p className={styles['show']}>{show ? '- Hide' : 'View more'}</p>
        </div>
      </div>
    </div>
  );
};

export default Person;
