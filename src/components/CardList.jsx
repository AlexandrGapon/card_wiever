import React from 'react'
import Card from './Card'
import '../styles/CardList.css'

const CardList = ({ data }) => {
    return (
        <div className='cardList'>
            {data.map(item => <Card
                key={item.id}
                id={item.id}
                title={item.title}
                coverUrl={item.coverUrl}
                year={item.year}
                rating={item.rating}
                liked={item.liked}
                imgError={item.imgError}
            />)}
        </div>
    )
}

export default CardList