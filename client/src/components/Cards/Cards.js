import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

const Cards = () => {
    return (
        <div className='cards'>
            <h1>Which universe is your favorite?</h1>
            <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items '>
                    <CardItem 
                    src='/images/DCcomics.jpg'
                    text='Explore your favorite DC characters, heroes and villains alike!!'
                    label='DC'
                    path='/dc'
                    />
                     <CardItem 
                    src='/images/marvel_logo.jpg'
                    text='Delve into great men like Captian America or Villainous men like Thanos'
                    label='Marvel'
                    path='/marvel'
                    />
               
                </ul>

            </div>
            </div>
            
        </div>
    )
}

export default Cards
