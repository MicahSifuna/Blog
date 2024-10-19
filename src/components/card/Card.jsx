import React from 'react'
import styles from "../card/card.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  return (
    <div className={styles.container} >
      <div className={styles.imageContainer} >
            <Image src="/p1.jpeg" alt='' fill className={styles.image} />
          </div>
          <div className={styles.textContainer} >
            <div className={styles.detail} >
                  <span className={styles.date} >11.01.23 - </span>
                  <span className={styles.category} >CULTURE</span>
            </div>
            <Link href='/'>
                  <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
            </Link>
            <p className={styles.desc}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Sed error minus quia consectetur eaque sint. Dicta earum a inventore 
                  consequatur, quam laborum vel iste laudantium magnam! Rem accusamus 
                  eligendi veritatis?
            </p>
            <Link href='/' className={styles.link} >Read More</Link>
          </div>
    </div>
  )
}

export default Card