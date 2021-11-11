import React, { useEffect, useState } from 'react'
import styles from './Repos.module.css'
import StarIcon from '@mui/icons-material/Star'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import GitHubIcon from '@mui/icons-material/GitHub'

import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

function Repos({ repositories }) {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const data = localStorage.getItem('favorites')
    if (data) {
      setFavorites(JSON.parse(data))
    }
  }, [])

  const handleFavorites = (repo) => {
    let favorites = localStorage.getItem('favorites')

    if (favorites) {
      favorites = JSON.parse(favorites)

      const index = favorites.findIndex((fav) => {
        return fav.id === repo.id
      })

      if (index === -1) {
        favorites.push(repo)
      } else {
        favorites.splice(index, 1)
      }
    } else {
      favorites = [repo]
    }
    localStorage.setItem('favorites', JSON.stringify(favorites))
    setFavorites([...favorites])
  }

  return (
    <div className={styles.reposContainer}>
      <VerticalTimeline
        className={styles.verticalTimeline}
        /*style={{ display: repo.name ? 'block' : 'none' }}*/
        lineColor={'#BBBBBB'}
      >
        {repositories.map((repo) => (
          <VerticalTimelineElement
            key={repo.id}
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#333333', color: '#fff' }}
            contentArrowStyle={{
              borderRight: '7px solid  #333333'
            }}
            icon={<GitHubIcon />}
            iconStyle={{ background: '#333333', color: '#fff' }}
            date={new Date(repo.created_at).toLocaleDateString('tr-TR')}
            dateClassName={styles.date}
          >
            <div className={styles.titleContainer}>
              <h3 className="vertical-timeline-element-title">{repo.name}</h3>

              <button
                className={styles.icon}
                onClick={() => handleFavorites(repo)}
              >
                <StarIcon
                  color={
                    favorites.some((fav) => fav.id === repo.id)
                      ? 'primary'
                      : 'secondary'
                  }
                />
              </button>
            </div>

            <br />
            <h4 className="vertical-timeline-element-subtitle">
              {repo.language}
            </h4>
            <p>{repo.description}</p>
            <a target="_blank" className={styles.clone} href={repo.clone_url}>
              Projeye Gitmek İçin Tıklayın
            </a>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  )
}

export default Repos
