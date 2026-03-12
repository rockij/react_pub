import React from 'react';
import styles from './ProfileCard.module.css';

interface ProfileCardProps {
  avatarUrl: string;
  name: string;
  jobTitle: string;
  bio: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ avatarUrl, name, jobTitle, bio, buttonText, onButtonClick }) => {
  return (
    <article className={styles.card}>
      <img src={avatarUrl} alt={`${name} avatar`} className={styles.avatar} />
      <header className={styles.header}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.jobTitle}>{jobTitle}</p>
      </header>
      <section className={styles.bio}>
        <p>{bio}</p>
      </section>
      <footer className={styles.footer}>
        <button className={styles.button} onClick={onButtonClick} type="button">
          {buttonText}
        </button>
      </footer>
    </article>
  );
};

export default ProfileCard;
