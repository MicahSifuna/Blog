import React from 'react'
import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../themeToggle/ThemeToggle';
import AuthLinks from '../authLinks/AuthLinks';
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/insta.jpeg" alt="instagram" height={24} width={24} />
        <Image src="/linkin.png" alt="linkedin" height={24} width={24} />
        <Image src="/twit.jpeg" alt="twitter" height={24} width={24} />
        <Image src="/yt2.png" alt="youtube" height={24} width={24} />
      </div>
      <div className={styles.logo}>GIS Post</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        <Link href="/" className={styles.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar