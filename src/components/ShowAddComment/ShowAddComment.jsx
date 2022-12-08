import React from 'react'
import CommentBox from '../comment/CommentBox'

const ShowAddComment = ({SingleApp}) => {
    console.log(SingleApp)
  return (
    <React.Fragment>
    <form>
    <input type="text"></input><button>commentar</button>
    </form>
 {SingleApp.reviews.map(coment=>{
    return <CommentBox user ={coment.user} comment={coment.review}></CommentBox>
 })}
    </React.Fragment>
  )
}

export default ShowAddComment

