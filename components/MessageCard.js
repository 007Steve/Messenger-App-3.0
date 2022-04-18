import React from 'react'
import styles from '../styles/MessageCard.module.css'
import { Avatar } from '@mui/material'
function MessageCard() {
    return (
        <div className={styles.messageCard}>
            <Avatar sx={{ fontSize: 40 }} src="/avatar-1.jpg" />
            <div className={styles.messageCard__infoContainer}>
                <h5 className={styles.messageCard__name}>Name</h5>
                <p className={styles.messageCard__texts}>Text goes here ...</p>
            </div>
        </div>
    )
}

export default MessageCard
