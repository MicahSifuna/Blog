"use client"

import React, { useState } from 'react'
import styles from "./authLinks.module.css";
import Link from 'next/link';

const AuthLinks = () => {

  const [open, setOpen] = useState(false);
  const status = "authenticated";
   return (
    <>
      {status === "authenticated" ? (
        <Link href="/login" className={styles.link}>Login</Link>
      ) : (
        <>
          <Link href="/write"  className={styles.link}>Write</Link>
          <span className={styles.links}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (<div className={styles.responsiveMenu}>
        <Link href='/'>Homepage</Link>
        <Link href='/'>About</Link>
        <Link href='/'>ontact</Link>
        {status === "authenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.links}>Logout</span>
        </>
      )}
        </div>)}
    </>
  )
}

export default AuthLinks