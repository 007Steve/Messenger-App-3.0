import React from 'react'
import { Avatar } from '@mui/material';
import styles from '../styles/ChatCard.module.css'
function ChatCard({ sender,  color}) {
    return (
        <div className={`${styles.chatCard} ${styles[sender]}`}>
            <Avatar src="/avatar-1.jpg"  className={styles.avatar}/>
            <div className={`${styles.chatCard__messageContainer}  `}>
                {/* <div className={styles.chatCard__userContainer}>
                        <h5  className={styles.chatCard__name}>Name</h5>
                        <p className={styles.chatCard__time}>1:00pm</p>
                     </div>  */}
                <p className={`${styles.chatCard__message} ${styles[color]}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus amet ipsa perferendis totam est architecto, blanditiis dolorum error harum culpa fuga quasi accusamus quaerat quam molestias pariatur</p>
            </div>
        </div>
    )
}

export default ChatCard
