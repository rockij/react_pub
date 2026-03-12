import React from 'react';
import styles from './AuthorsList.module.css';

export interface Author {
  id: string | number;
  name: string;
  followersCount: number;
  avatarUrl?: string;
}

interface AuthorsListProps {
  title: string;
  authors: Author[];
}

const AuthorItem: React.FC<{author: Author}> = ({ author }) => {
  return (
    <li className={styles.authorItem} key={author.id}>
      {author.avatarUrl && (
        <img
          src={author.avatarUrl}
          alt={`${author.name} avatar`}
          className={styles.avatar}
          loading="lazy"
          width={48}
          height={48}
        />
      )}
      <div className={styles.authorInfo}>
        <h3 className={styles.authorName}>{author.name}</h3>
        <p className={styles.followersCount} aria-label={`${author.followersCount} followers`}>{author.followersCount}</p>
      </div>
    </li>
  );
};

const AuthorsList: React.FC<AuthorsListProps> = ({ title, authors }) => {
  return (
    <section className={styles.authorsSection}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <ul className={styles.authorsList}>
        {authors.map(author => (
          <AuthorItem author={author} key={author.id} />
        ))}
      </ul>
    </section>
  );
};

export default AuthorsList;
