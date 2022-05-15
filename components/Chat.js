import React, { useState } from 'react'
import styles from '../styles/Chat.module.css'
import { Avatar } from '@mui/material';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import ChatCard from './ChatCard';
import MoreOptions from './MoreOptions';
function Chat() {

    const [show, setShow] = useState()
    return (
        <div className={styles.chat}>
            <div className={styles.chat__navContainer}>
                <div className={styles.chat__photoContainer}>
                    <Avatar src="/avatar-1.jpg" />
                    <div>
                        <h4 className={styles.chat__name}>Name</h4>
                    </div>
                </div>

                <div>
                    {show ? <MoreOptions /> : <></>}

                    <ArrowDropDownRoundedIcon className={styles.chat__icons} fontSize="small" onClick={() => setShow(!show)} />
                </div>
            </div>
            <div className={styles.chat__messageContainer}>
                <ChatCard  sender="sender" color="color"/>
                <ChatCard />
                <ChatCard />
                <ChatCard  sender="sender" color="color"/>
                <ChatCard />
                <ChatCard  sender="sender" color="color"/>
                <ChatCard />


            </div>
            <div className={styles.chat__inputContainer}>
                <input className={styles.chat__input} placeholder="Search..."></input>
                <div className={styles.chat__iconsContainer}>
                   
                    <img className={styles.chat__icons} src="/microphone-2.svg" alt=""/>
                    <img className={styles.chat__icons} src="/paperclip-2.svg" alt=""/>
                    <img className={styles.chat__icons} src="/send-3.svg" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Chat
