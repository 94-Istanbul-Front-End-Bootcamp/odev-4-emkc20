import React from 'react'
import ReactStars from 'react-rating-stars-component'

 function Comment({comments}) {
    return (
        <div>
            {

               comments.length === 0 ? <h2>Yorum yok</h2> :

                comments.map(comment=>(<h3>{comment.text} < ReactStars value={comment.vote} edit={false}></ReactStars> </h3>)) 





            }
        </div>
    )
}

export default Comment
