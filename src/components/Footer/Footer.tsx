import SocialMedia from 'components/SocialMedia'
import React from 'react'

import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.socialMedia}>
        <SocialMedia />
      </p>
      <p className={styles.rights}>© ibarra_photography 2023</p>
    </footer>
  )
}
