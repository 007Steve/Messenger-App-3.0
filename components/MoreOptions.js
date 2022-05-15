import React from 'react'
import styles from '../styles/MoreOptions.module.css'
import SettingsIcon from '@mui/icons-material/Settings';
import CreateIcon from '@mui/icons-material/Create';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
function MoreOptions() {
    return (
        <div className={styles.moreOptions}>
              <div className={styles.moreOptions__iconContainer}>
                <CreateIcon sx={{ fontSize: 20 }} className={styles.moreOptions__icon} />
                <p className={styles.moreOptions__iconText}>Rename</p>
            </div>
            <div className={styles.moreOptions__iconContainer}>
                <SettingsIcon sx={{ fontSize: 20 }} className={styles.moreOptions__icon} />
                <p className={styles.moreOptions__iconText}>Settings</p>
            </div>
            <div className={`${styles.moreOptions__iconContainer} ${ styles.moreOptions__delete}`}>
                <DeleteForeverRoundedIcon sx={{ fontSize: 20 }} className={`${styles.moreOptions__icon }  ${styles.moreOptions__iconDelete }`} />
                <p className={`${styles.moreOptions__iconText} ${ styles.moreOptions__iconDelete} `}>Delete</p>
            </div>
        </div>
    )
}

export default MoreOptions
