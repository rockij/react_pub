import React from 'react';
import styles from './ProfileCard.module.css';

export interface ProfileCardProps {
  name: string;
  title: string;
  description: string;
  avatarUrl: string;
  actions: Array<{
    label: string;
    onClick: () => void;
  }>;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, title, description, avatarUrl, actions }) => {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <img src={avatarUrl} alt={`${name} avatar`} className={styles.avatar} />
        <div className={styles.headerText}>
          <h1 className={styles.name}>{name}</h1>
          <h2 className={styles.title}>{title}</h2>
        </div>
      </header>
      <section className={styles.description}>
        <p>{description}</p>
      </section>
      <nav className={styles.actions}>
        {actions.map(({ label, onClick }, index) => (
          <button key={index} className={styles.button} onClick={onClick} type="button">
            {label}
          </button>
        ))}
      </nav>
    </article>
  );
};

export default ProfileCard;
