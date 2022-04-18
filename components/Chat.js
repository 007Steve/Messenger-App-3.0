import React from 'react'
import styles from '../styles/Chat.module.css'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';
function Chat() {
    return (
        <div className={styles.chat}>
            <div className={styles.chat__navContainer}>Nav</div>
            <div className={styles.chat__messageContainer}>
            </div>
            <div className={styles.chat__inputContainer}>
                <input className={styles.chat__input} placeholder="Search..."></input>
                <div className={styles.chat__iconsContainer}>
                    <MicIcon className={styles.chat__icons} fontSize="small" />
                    <AttachFileIcon className={styles.chat__icons} fontSize="small"/>
                    <SendIcon className={styles.chat__icons} fontSize="small"/>
                </div>
            </div>
        </div>
    )
}

export default Chat
