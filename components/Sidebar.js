import React from 'react'
import styles from '../styles/Sidebar.module.css'
import MessageCard from './MessageCard';
import Link from 'next/link';
function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar__Container}>
                <div className={styles.sidebar__iconsContainer}>
                    <div className={styles.sidebar__logoContainer}>
                        <img className={styles.sidebar__logo} src="/klo.png" alt="" />
                        <div className={styles.sidebar__logoCenterContainer}>
                            <img src="/home-2.svg" className={styles.sidebar__icons} />
                            <img src="/message.svg" className={styles.sidebar__icons} />
                            <img src="/user-square.svg" className={styles.sidebar__icons} />
                            <img src="/folder-minus.svg" className={styles.sidebar__icons} />
                            <img src="/setting-2.svg" className={styles.sidebar__icons} />
                        </div>
                        <Link href="/signin">
                            <img src="/logout.svg" className={styles.sidebar__icons} />
                        </Link>
                    </div>
                </div>
                <div className={styles.sidebar__messageContainer}>
                    <div className={styles.sidebar__messageContainer__top}>
                        <div className={styles.sidebar__headerContainer}>
                            <h3 className={styles.sidebar__headerContainerText}>Messages</h3>
                            <div className={styles.sidebar__inputContainerIcons}>
                                <img src="/edit.svg" className={styles.input__icons} />
                                <img src="/setting-2.svg" className={styles.input__icons} />
                            </div>

                        </div>
                        <div className={styles.sidebar__inputContainer}>
                            <img src="/search-normal.svg" className={styles.input__icons} />
                            <input placeholder="Search..." className={styles.sidebar__input}></input>
                        </div>
                    </div>
                    <MessageCard />
                    <MessageCard />
                    <MessageCard />
                    <MessageCard />
                    <MessageCard />
                    <MessageCard />
                    <MessageCard />

                </div>
            </div>
        </div>
    )
}

export default Sidebar
