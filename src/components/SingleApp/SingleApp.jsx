import React, { useContext, useState} from "react";
import data from "../../data/dataApps.json";
import {
   SectionSingle,
   AppSingle,
   AppIcon,
   AddComment,
   AppInfo,
   Category,
   ImageDiv,
   DisplayImage,
   DescriptionDiv,
} from "./SingleApp_Style";
import AppContext from "../../context/AppContext";
import { AiFillStar } from "react-icons/ai";
import ShowAddComment from "../ShowAddComment/ShowAddComment";
import { Platforms, Rating } from "../AppCard/AppCard_styled";
import { MainButton } from "../button/Button_styled";

const SingleApp = () => {


   const { jsonApp , setSingleApp, SingleApp } = useContext(AppContext);

   
   const [viewMore, setViewMore] = useState(false);
   const [openComment,setOpenComment] = useState(false)

   const [user,setUser] = useState("")
   const [comment,setComment] = useState("")

   const userInput = document.getElementById("userInput")
   const commentInput = document.getElementById("commentInput")
   function sendComment (){
      let newComent = {
         "id": jsonApp.find(app => app.app_name === SingleApp.app_name).reviews.length,
      "review":comment,
      "user":user}
      jsonApp.find(app => app.app_name === SingleApp.app_name).reviews.push(newComent)

      userInput.value = "";
      commentInput.value = "";
   }

   return (
      <div>
         {/* {changeData.map((changeData)=>{ */}
         <SectionSingle>
            <AppSingle>
               <AppIcon>
                  <img src={SingleApp.app_icon} />
               </AppIcon>
               <AppInfo>
                  <h4>{SingleApp.app_name}</h4>
                  <Category>
                     <p>{SingleApp.app_category}</p>
                  </Category>
                  <Platforms>
                     <p>{SingleApp.platforms[0]}</p>
                     <p>{SingleApp.platforms[1]}</p>
                     <p>{SingleApp.platforms[2]}</p>
                  </Platforms>
                  <Rating>
                     {SingleApp.rating == 5 ? (
                        <p>
                           {SingleApp.rating}
                           <AiFillStar />
                           <AiFillStar />
                           <AiFillStar />
                           <AiFillStar />
                           <AiFillStar />
                        </p>
                     ) : null}
                     {SingleApp.rating == 4 ? (
                        <p>
                           {SingleApp.rating}
                           <AiFillStar />
                           <AiFillStar />
                           <AiFillStar />
                           <AiFillStar />{" "}
                        </p>
                     ) : null}
                     {SingleApp.rating == 3 ? (
                        <p>
                           {SingleApp.rating}
                           <AiFillStar />
                           <AiFillStar />
                           <AiFillStar />{" "}
                        </p>
                     ) : null}
                     {SingleApp.rating == 2 ? (
                        <p>
                           {SingleApp.rating}
                           <AiFillStar />
                           <AiFillStar />{" "}
                        </p>
                     ) : null}
                     {SingleApp.rating == 1 ? (
                        <p>
                           {SingleApp.rating}
                           <AiFillStar />{" "}
                        </p>
                     ) : null}
                  </Rating>
               </AppInfo>
            </AppSingle>

            <DescriptionDiv>
               {viewMore ? (
                  <>
                     <p>{SingleApp.app_description.slice(0,800)}... </p>
                     <h5 onClick={() => setViewMore(!viewMore)}>See Less</h5>
                  </>
               ) : (
                  <>
                     <p>{SingleApp.app_description.slice(0, 120)}</p>
                     <h5 onClick={() => setViewMore(!viewMore)}>More</h5>
                  </>
               )}
            </DescriptionDiv>

            <ImageDiv>
               <DisplayImage src={SingleApp.photos[0]}></DisplayImage>
               <DisplayImage src={SingleApp.photos[1]}></DisplayImage>
               <DisplayImage src={SingleApp.photos[2]}></DisplayImage>
            </ImageDiv>
         </SectionSingle>
         <AddComment open={openComment}>
            <h4 onClick={()=>setOpenComment(!openComment)}>Add Comment</h4>
            <input placeholder="User" id="userInput" onChange={(e)=>setUser(e.target.value)}></input>
            <input placeholder="Comment" id="commentInput" onChange={(e)=>setComment(e.target.value)} ></input>
            <button onClick={()=>sendComment()}>Send comment</button>
         </AddComment>
         <ShowAddComment SingleApp={SingleApp} />
      </div>
   );
};
export default SingleApp;
