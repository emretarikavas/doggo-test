import React, { useState, useEffect } from 'react'
import styles from './PersonCard.module.css'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import GroupsIcon from '@mui/icons-material/Groups'
import Search from '../Search/Search'
import Repos from '../Repos/Repos'

const PersonCard = () => {
  const [data, setData] = useState({})
  const [username, setUsername] = useState('tarikkavas')
  const [repositories, setRepositories] = useState([])
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    submitHandler()
  }, [])

  const onChangeHandler = (e) => {
    setUsername(e.target.value)
  }

  const submitHandler = async (e) => {
    if (e) {
      e.preventDefault()
    }

    try {
      const profile = await fetch(`https://api.github.com/users/${username}`)
      const profileJson = await profile.json()

      const repositories = await fetch(profileJson.repos_url)
      let repoJson = await repositories.json()

      repoJson = repoJson.sort((a, b) => {
        const adate = new Date(a.created_at)
        const bdate = new Date(b.created_at)
        return bdate - adate
      })

      if (profileJson) {
        setNotFound(false)
        setData(profileJson)
        setRepositories(repoJson)
      } else {
        setData({})
        setRepositories([])
        setNotFound(true)
      }
    } catch (e) {
      setData({})
      setRepositories([])
      setNotFound(true)
    }
  }

  return (
    <div>
      <Search
        submitHandler={submitHandler}
        username={username}
        onChangeHandler={onChangeHandler}
      />
      {notFound && <p className={styles.notFound}>Kullanıcı Bulunamadı</p>}

      <div className={styles.cardContent}>
        <img
          src={data.avatar_url}
          alt={data.avatar_url}
          width={200}
          height={200}
        />
        <div>
          <h2>{data.name}</h2>
          <p>{data.login}</p>
        </div>

        <div className={styles.iconContainer}>
          <LocationOnIcon />
          <p>{data.location}</p>
        </div>

        <div className={styles.iconContainer}>
          <LocationCityIcon />
          <p>{data.company}</p>
        </div>

        <div className={styles.iconContainer}>
          <MenuBookIcon />
          <p>Repository: {data.public_repos}</p>
        </div>

        <div className={styles.iconContainer}>
          <p>{data.followers} Takipçiler</p>
          <p>{data.following} Takip Edenler</p>
        </div>
      </div>

      <Repos repositories={repositories} />

    </div>
  )
}

export default PersonCard
