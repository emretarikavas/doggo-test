import React from 'react'
import styles from './SideNav.module.css'
import Link from 'next/link'

function SideNav() {
  return (
    <div className={styles.container}>
      <Link href={'/'}>
        <a className={styles.MenuItems}>Anasayfa</a>
      </Link>

      <Link href={'/favorites'}>
        <a className={styles.MenuItems}>Favoriler</a>
      </Link>
    </div>
  )
}

export default SideNav
