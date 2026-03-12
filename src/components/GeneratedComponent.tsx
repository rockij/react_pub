import React from 'react';
import styles from './UserProfileCard.module.css';

export interface UserProfileCardProps {
  avatarUrl: string;
  userName: string;
  userTitle: string;
  description: string;
  socialLinks: Array<{ id: string; label: string; url: string }>;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ avatarUrl, userName, userTitle, description, socialLinks }) => {
  return (
    <section className={styles.card} aria-label="User Profile">
      <img src={avatarUrl} alt={`${userName} avatar`} className={styles.avatar} />
      <header className={styles.header}>
        <h1 className={styles.userName}>{userName}</h1>
        <p className={styles.userTitle}>{userTitle}</p>
      </header>
      <p className={styles.description}>{description}</p>
      <nav aria-label="Social media links">
        <ul className={styles.socialList}>
          {socialLinks.map(({ id, label, url }) => (
            <li key={id} className={styles.socialItem}>
              <a href={url} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default UserProfileCard;
