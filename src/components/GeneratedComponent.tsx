import React from 'react';
import styles from './UserProfileCard.module.css';

interface UserProfileCardProps {
  name: string;
  role: string;
  description: string;
  contactInfo: string;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ name, role, description, contactInfo }) => {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <h1 className={styles.name}>{name}</h1>
        <h2 className={styles.role}>{role}</h2>
      </header>
      <section className={styles.body}>
        <p className={styles.description}>{description}</p>
      </section>
      <footer className={styles.footer}>
        <address className={styles.contact}>{contactInfo}</address>
      </footer>
    </article>
  );
};

export default UserProfileCard;
