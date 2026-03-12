import React from 'react';
import styles from './UserProfileCard.module.css';

interface UserProfileCardProps {
  avatarUrl: string;
  name: string;
  title: string;
  location: string;
  description: string;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ avatarUrl, name, title, location, description }) => {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <img className={styles.avatar} src={avatarUrl} alt={`${name}'s avatar`} />
        <div className={styles.userInfo}>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.title}>{title}</p>
          <p className={styles.location}>{location}</p>
        </div>
      </header>
      <section className={styles.description}>
        <p>{description}</p>
      </section>
    </article>
  );
};

export default UserProfileCard;
