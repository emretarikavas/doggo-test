import React from 'react'
import styles from './HomeContainer.module.css'
import PersonCard from '../PersonCard/PersonCard'

function HomeContainer() {
  return (
    <div className={styles.HomeContainer}>
      <PersonCard />
    </div>
  )
}

export default HomeContainer
