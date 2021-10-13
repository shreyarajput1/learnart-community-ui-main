import FeedLayout from "../../layouts/FeedLayout";
import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from "../../components/Card";
import { Link } from "react-router-dom";
import {stockData}from "../../components/data";
import Dropdown from 'react-bootstrap/Dropdown';
import {IoEllipsisHorizontal}from 'react-icons/io5';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { useEffect,useRef } from 'react';
import { BsHeart } from "react-icons/bs";
import { BsHeartFill} from "react-icons/bs";
import { MdBookmarkBorder} from "react-icons/md";
import { FaCommentSlash,FaShare, FaRegComments} from "react-icons/fa";
import {FcShare } from "react-icons/fc";
import LikeButton from"../../components/LikeButton";
import DropDown from "../../components/DropDown";
import Comments from "../../components/Comments";
import Share from "../../components/Share";
//
class Feed extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      
    }
  } 

  render() {
  
     
  return(
   
    
    <div className="Feed">
      
      <FeedLayout>
    <div class="main-content"style={{marginTop:'4rem'}}>
          
      <div class="story-gallery">
    
       
        <div class="story story1" style={{backgroundImage:"url(https://nidhi15151.github.io/social_media_website_design//images/status-1.png)"}}>
            <img src="https://nidhi15151.github.io/social_media_website_design/images/upload.png"/>
            

        </div>
        {stockData.map((data) => {
           if(data.id>="2") 
            return (
            <Link class={data.class}to={data.Storylink} style={{backgroundImage:data.storyurl}}>
                <img src={data.u_img}/>
            </Link>

            )})}
        </div>
            
        <div class="write-post-container">
      
            <Link class="user-profile" to="/profile"style={{textDecoration:"none"}}>
                    
                    <img src="https://nidhi15151.github.io/social_media_website_design/images/profile-pic.png"/>
                    <div>
                        <p>{(localStorage.getItem('Name'))}</p>
                       <small>  Public  <i class="fas fa-caret-down" aria-hidden="true"></i></small>
                    </div>
                   
                </Link>  
               
                <div class="post-input-container">
                    <textarea rows="3" placeholder="What's on your mind, john?"></textarea>
                
                <div class="post-row">   
                    <div class="add-post-links">
                        <a href="#"><img src="https://nidhi15151.github.io/social_media_website_design/images/live-video.png"/> LiveVideo</a>
                        <a href="#"><img src="https://nidhi15151.github.io/social_media_website_design/images/photo.png"/> Photo/Video</a>
                        <a href="#"><img src="https://nidhi15151.github.io/social_media_website_design/images/feeling.png"/>Feeling/Activity</a>
                    </div>
                </div>   
                </div>   
                
        </div>
           
            <div className="stock-container">
        {stockData.map((data) => {            
           
          return (
           
            <div class="post-container">
            <div class="post-row">
                <div class="user-profile">
                    
                <img src={data.profileurl}/>
                    <div>
                        <p>{(localStorage.getItem('Name'))}</p>
                        <span>June 24 2021, 13:40 pm </span>
                    </div>
                </div>
                
                <DropDown/>
                </div>
            
            <p class="post-text">{data.caption}<a href="#">#WebDevelopment</a>
            </p>
            
                <img src={data.posturl} class="post-img"/>
            <div class="post-row">
                <div class="activity-icons">
                    <div>
                
                    <LikeButton/>
                    </div>
                    <div>
                <Comments/>
                </div>
                    <div>
                <Share/></div>
                </div>
                <div class="post-profile-icon">
                    
                <img src="https://nidhi15151.github.io/social_media_website_design/images/profile-pic.png"/>
                <i class="fas fa-caret-down" aria-hidden="true"></i>
                </div>
            </div>
        </div>
            
          );
            
        })}
      </div>

      <button type="button" class="load-more-btn">Load More</button>

        </div>
      </FeedLayout>

    </div>
  );
}
}

export default Feed;



