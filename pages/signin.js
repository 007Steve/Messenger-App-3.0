import React, { useState } from 'react'
import styles from '../styles/Signin.module.css'
import Link from "next/link";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
function Signin() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState()
  return (
    <div className={styles.signin}>
      <form className={styles.signin__form} onSubmit>
        <div className={styles.signUp__logoContainer} >
          <img className={styles.signUp__logo} src="/mlogo.png" alt=""/>
        {/* <LocalFireDepartmentIcon  sx={{ fontSize: 50 }}/> */}
        <h1 className={styles.signUp__logoContainerText}>Messenger</h1>
        </div>
        
        {message ? <h5 className={styles.signUp__error}>{message}</h5> : <></>}

        <div className={styles.signUp__inputContainer}>
          <input
            className={styles.signUp__input}
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className={styles.signUp__inputContainer}>
          <input
            className={styles.signUp__input}
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className={styles.signUp__inputContainer}>
          <input
            className={styles.signUp__input}
            type="password"
            placeholder="Password"
            password
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <div className={styles.signUp__btnSignContainer}>

          {/* <Link href="/Home"> */}
          <button className={styles.signUp__btn} >Sign Up</button>
          {/* </Link> */}
        </div>
        <Link href="/">
          <button className={styles.demo__btn}>Demo</button>
        </Link>
       
      </form>
    </div>
  )
}

export default signin
