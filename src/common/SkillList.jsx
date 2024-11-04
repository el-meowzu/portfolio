import React from 'react';
import SkillRating from './SkillRating';
import styles from '../sections/Skills/SkillsStyles.module.css';

const SkillList = ({ src, skill,rating }) => {
  return (
    <div className={styles.skillItem}>
      <span className={styles.skillInfo}>
        <img src={src} alt={`${skill} logo`} />
        <p>{skill}</p>
      </span>
      <SkillRating rating={rating}/>
    </div>
  );
};

export default SkillList;