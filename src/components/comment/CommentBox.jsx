import React, { useState } from 'react'
import {CommentBoxContainer, ContainerPersonAndFirst,PersonContainer,
  FirstContainer,SecondContainer,ThirdContainer,ButtonLike} from './CommentBox_styled'

import {BsFillPersonFill} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/./ai'
import {IoMdThumbsUp}from 'react-icons/./io'
import {IoMdThumbsDown}from 'react-icons/./io'

const CommentBox = ({user,comment}) => {
  
  const likes = Math.floor(Math.random()* 500);
  const dislikes = Math.floor(Math.random()* 200);

  const [like, setlikes] = useState(likes);
  const [dislike, setdislikes] = useState(dislikes);
  
  const addlikes = () =>{
    let livalor = document.getElementById("like").value;
    let disvalor= document.getElementById("dislike").value

    if(livalor === "0" && disvalor === "0"){        //Si ambos value estan en 0 se suma solo el like
      document.getElementById("like").value = "1"
      return setlikes(like+1)
    }else if(livalor === "1" && disvalor === "0"){ //Si like esta en 1 y dislike en 0 se le quita 1 a like
      document.getElementById("like").value = "0"
      return setlikes(like-1)
    }else if ( livalor === "0" && disvalor === "1"){//Si like esta en 0 y dislike en 1 se le quita 1 a dislike y se le suma 1 a like
      document.getElementById("like").value = "1"
      document.getElementById("dislike").value = "0"
      return (setlikes(like+1), setdislikes(dislike -1))
    }
  }

  const addislikes = () =>{
    let livalor = document.getElementById("like").value;
    let disvalor= document.getElementById("dislike").value

    if(disvalor === "0" && livalor === "0"){        
      document.getElementById("dislike").value = "1"  //En caso de que no se haya votado todavia
      return setdislikes(dislike+1)

    }else if(disvalor === "1" && livalor === "0"){ 
      document.getElementById("dislike").value = "0"  //Cuando se vota al mismo 2 veces
      return setdislikes(dislike-1)

    }else if ( disvalor === "0" && livalor === "1"){
      document.getElementById("dislike").value = "1"    //Y cuando esta votada la cotraparte.
      document.getElementById("like").value = "0"
      return (setdislikes(dislike+1), setlikes(like -1))
    }
  }


  console.log(like)
  return (
    <CommentBoxContainer>
      <ContainerPersonAndFirst>
      <PersonContainer>
          <BsFillPersonFill/>
      </PersonContainer>
      <FirstContainer>
          <h4>
          {comment}
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
        <h3>{like}</h3>
        <ButtonLike onClick={addlikes} value="0" id='like'>
          <IoMdThumbsUp/>
        </ButtonLike>
          <h3>{dislike}</h3>
        <ButtonLike onClick={addislikes} value="0" id='dislike'>
          <IoMdThumbsDown/>
          </ButtonLike>
      </ThirdContainer>
    </CommentBoxContainer>


  )
}

export default CommentBox