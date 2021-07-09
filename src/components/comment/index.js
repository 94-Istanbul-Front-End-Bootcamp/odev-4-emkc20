import React  from 'react'
import Comment from './comment' 

export default function index(props) {
    const {getComments}=props
 console.log("getComments",getComments)
    return (
        <div>
            
               <Comment></Comment>
        </div>
    )
}
 