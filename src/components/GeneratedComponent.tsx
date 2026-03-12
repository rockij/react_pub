import React from 'react';
import styles from './ProfileCard.module.css';

export interface ProfileCardProps {
  avatarUrl: string;
  name: string;
  title: string;
  description: string;
  followersCount: number;
  followingCount: number;
  postsCount: number;
}

const StatItem: React.FC<{ label: string; count: number }> = ({ label, count }) => (
  <div className={styles.statItem}>
    <span className={styles.statCount}>{count}</span>
    <span className={styles.statLabel}>{label}</span>
  </div>
);

const ProfileCard: React.FC<ProfileCardProps> = ({ avatarUrl, name, title, description, followersCount, followingCount, postsCount }) => {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <img src={avatarUrl} alt={`${name} avatar`} className={styles.avatar} />
        <div className={styles.userInfo}>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.title}>{title}</p>
        </div>
      </header>
      <section className={styles.descriptionSection}>
        <p className={styles.description}>{description}</p>
      </section>
      <section className={styles.statsSection}>
        <StatItem label="Followers" count={followersCount} />
        <StatItem label="Following" count={followingCount} />
        <StatItem label="Posts" count={postsCount} />
      </section>
    </article>
  );
};

export default ProfileCard;
