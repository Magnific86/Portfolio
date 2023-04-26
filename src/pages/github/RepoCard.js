import React from "react"
import styles from "./RepoCard.module.css"
import WatchIcon from "../../assets/icons/WatchIcon"
import ForkIcon from "../../assets/icons/ForkIcon"
import StarIcon from "../../assets/icons/StarIcon"
import GithubIcon from "../../assets/icons/GithubIcon"
import LinkIcon from "../../assets/icons/LinkIcon"

export default function RepoCard({ repo = "null" }) {
    return (
        <div className={styles.card}>
            <div>
                <h3 className={styles.title}>{repo.name}</h3>
                <p>{repo.description}</p>
            </div>
            <div className={styles.stats}>
                <div>
                    <div>
                        <WatchIcon className={styles.icon} /> {repo.watchers}
                    </div>
                    <div>
                        <ForkIcon className={styles.icon} /> {repo.forks}
                    </div>
                    <div>
                        <StarIcon className={styles.icon} /> {repo.stargazers_count}
                    </div>
                </div>
                <div>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        <GithubIcon height={20} width={20} className={styles.icon} />
                    </a>
                    {repo.homepage && (
                        <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                            <LinkIcon height={20} width={20} className={styles.icon} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}
