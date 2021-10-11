import React from 'react'
import cl from './LikeButton.module.css'

const LikeButton = ({ liked, handleClick }) => {
    return (
        <div className={liked ? cl.liked : cl.unliked} onClick={handleClick}>
        </div>
    )
}

export default LikeButton