import React from 'react'
import styles from '../styles/Sidebar.module.css'
import BoltIcon from '@mui/icons-material/Bolt';
import SettingsIcon from '@mui/icons-material/Settings';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import MessageCard from './MessageCard';
function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar__Container}>
                <div className={styles.sidebar__iconsContainer}>
                    <div className={styles.sidebar__logoContainer}>
                        <Avatar src="/MLogo.png"  />
                        <div className={styles.sidebar__logoCenterContainer}>
                            <BoltIcon className={styles.sidebar__icons} />
                            <AppsRoundedIcon className={styles.sidebar__icons} />
                            <AppsRoundedIcon className={styles.sidebar__icons} /><CalendarMonthSharpIcon className={styles.sidebar__icons} />
                            <SettingsIcon className={styles.sidebar__icons} />
                        </div>
                        <Avatar />
                    </div>
                </div>
                <div className={styles.sidebar__messageContainer}>
                    <div className={styles.sidebar__inputContainer}>
                        <SearchIcon className={styles.input__icons} />
                        <input placeholder="Search..." className={styles.sidebar__input}></input>
                    </div>
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
