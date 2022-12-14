import React from 'react'
import {CommentBoxContainer, ContainerPersonAndFirst,PersonContainer,
  FirstContainer,SecondContainer,ThirdContainer} from './CommentBox_styled'

import {BsFillPersonFill} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/./ai'
import {IoMdThumbsUp}from 'react-icons/./io'
import {IoMdThumbsDown}from 'react-icons/./io'

const CommentBox = ({user,comment}) => {
  return (
    <CommentBoxContainer>
      <ContainerPersonAndFirst>
       <PersonContainer>
          <BsFillPersonFill/>
       </PersonContainer>
       <FirstContainer>
          <h4>
          {user}
          </h4>
          <p>
          14 diciembre 2022
          </p>
       </FirstContainer>
     </ContainerPersonAndFirst>
      <SecondContainer>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <h2>4,7</h2>
      </SecondContainer>
      <p>
       {comment}
      </p>
      <ThirdContainer>
         <h3>8,2K</h3>
         <IoMdThumbsUp/>
         <h3>200</h3>
         <IoMdThumbsDown/>
      </ThirdContainer>
    </CommentBoxContainer>


  )
}

export default CommentBox