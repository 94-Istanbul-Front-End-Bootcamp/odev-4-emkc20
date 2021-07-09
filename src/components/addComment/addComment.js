import React from 'react'
import ReactStars from 'react-rating-stars-component'

export default function AddComment(props) {
    return (
        <div>
            <textarea onChange={props.handleChange}></textarea>
            <ReactStars onChange={props.ratingChanged}></ReactStars>
            <button onClick={props.handleComment}>Tıklayınız</button>
        </div>
    )
}
