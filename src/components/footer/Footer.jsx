import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src='/logo.png' alt='logo' width={50} height={50} />
          <h1 className={styles.logoText} >GIS blog</h1>
        </div>
        <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Iusto, quod recusandae? Dolorum, incidunt eos perferendis, 
          ipsa itaque possimus totam similique in doloribus, natus officia 
          vel et velit exercitationem ex eaque?
        </p>
        <div className={styles.icons}>
          <Image src="/insta.jpeg" alt="instagram" height={24} width={24} />
          <Image src="/linkin.png" alt="linkedin" height={24} width={24} />
          <Image src="/twit.jpeg" alt="twitter" height={24} width={24} />
          <Image src="/yt2.png" alt="youtube" height={24} width={24} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href='/'>Homepage</Link>
          <Link href='/'>Blog</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href='/'>Style</Link>
          <Link href='/'>Fashion</Link>
          <Link href='/'>Coding</Link>
          <Link href='/'>Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href='/'>Instagram</Link>
          <Link href='/'>Linkedin</Link>
          <Link href='/'>Twitter</Link>
          <Link href='/'>YouTube</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer