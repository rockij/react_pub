import React from 'react';
import styles from './UserProfileCard.module.css';

export interface UserProfileCardProps {
  name: string;
  role: string;
  avatarSrc: string;
  description: string;
  tags?: string[];
}

const Tag: React.FC<{ label: string }> = ({ label }) => {
  return <span className={styles.tag}>{label}</span>;
};

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  name,
  role,
  avatarSrc,
  description,
  tags = [],
}) => {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <img src={avatarSrc} alt={`${name} avatar`} className={styles.avatar} />
        <div>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.role}>{role}</p>
        </div>
      </header>
      <p className={styles.description}>{description}</p>
      {tags.length > 0 && (
        <section className={styles.tagsSection} aria-label="User tags">
          {tags.map((tag, idx) => (
            <Tag key={idx} label={tag} />
          ))}
        </section>
      )}
    </article>
  );
};

export default UserProfileCard;
