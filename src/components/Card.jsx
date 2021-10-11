import React from 'react'
import { useDispatch } from 'react-redux'
import { DELETE_CARD, LOAD_COVER_FAILURE, TOGGLE_LIKE } from '../store/reducer/actions'
import '../styles/Card.css'
import LikeButton from '../UI/LikeButton/LikeButton'
import MovieSvg from './MovieSvg'

const Card = ({ id, title, coverUrl, year, rating, liked, imgError }) => {
    const dispatch = useDispatch()

    const loadImgError = (e) => {
        e.target.onerror = null
        dispatch({
            type: LOAD_COVER_FAILURE,
            payload: {
                id: id,
                error: true
            }
        })
    }

    const deleteCard = () => {
        dispatch({
            type: DELETE_CARD,
            payload: id
        })
    }

    const toggleLike = () => {
        dispatch({
            type: TOGGLE_LIKE,
            payload: {
                id: id,
                liked: !liked
            }
        })
    }

    return (
        <div className='card__container'>
            {
                imgError ?
                    <MovieSvg />
                    :
                    <img
                        src={coverUrl}
                        alt='Cover'
                        className='cover'
                        onError={(e) => loadImgError(e)}
                    />
            }
            <div className='card__description'>
                <span>{title}</span>
                {(year !== 0) && <span>{`(${year})`}</span>}
                <span>{`Rating: ${rating !== 0 ? rating : '-'}`}</span>
            </div>
            <div className='deleteButton' onClick={deleteCard}></div>
            <LikeButton
                liked={liked}
                handleClick={toggleLike}
            />
        </div>
    )
}

export default Card