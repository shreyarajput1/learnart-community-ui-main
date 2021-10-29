import FeedLayout from "../../layouts/FeedLayout";
import React,{useState} from 'react';


import Card from "../../components/Card";
import { Link } from "react-router-dom";
import {stockData}from "../../components/data";

import LikeButton from"../../components/LikeButton";
import DropDown from "../../components/DropDown";
import Comments from "../../components/Comments";
import Share from "../../components/Share";
import 'react-multi-carousel/lib/styles.css';
import Story from "../../components/storycard";



const imgUrls = [
 { src:"https://nidhi15151.github.io/social_media_website_design//images/status-1.png",
    name:"",
    u_img: "https://nidhi15151.github.io/social_media_website_design/images/profile-pic.png",    
         
  },
 { src:"https://nidhi15151.github.io/social_media_website_design/images/status-2.png",
  name:"Amisha Naidu",
  u_img:"https://nidhi15151.github.io/social_media_website_design/images/member-1.png",
    
},
  {src:"https://nidhi15151.github.io/social_media_website_design/images/status-3.png",
  name:"Piyush",
  u_img:"https://nidhi15151.github.io/social_media_website_design/images/member-2.png",
    
},
  {src:"https://nidhi15151.github.io/social_media_website_design/images/status-4.png",
  name:"Twinkle",
  u_img:"https://nidhi15151.github.io/social_media_website_design/images/member-3.png",
    
},
  {src:"https://nidhi15151.github.io/social_media_website_design/images/status-5.png",
    name:"Jack",
    u_img:"https://nidhi15151.github.io/social_media_website_design/images/member-4.png",
    
  }
];
class Feed extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      imgIndex: 0,
      imgUrlLength: imgUrls.length,
      showModal: false,
      rotation: 0
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.nextClick = this.nextClick.bind(this);
    this.prevClick = this.prevClick.bind(this);
    this.rotateImage = this.rotateImage.bind(this);
  }

  openModal(index) {
    this.setState({
      showModal: true,
      imgIndex: index
    });
  }

  closeModal() {
    this.setState({
      showModal: false,
      imgIndex: 0,
      rotation: 0
    });
  }

  nextClick() {
    this.setState(prevState => {
      return {
        imgIndex:
          prevState.imgIndex === prevState.imgUrlLength - 1
            ? 0
            : prevState.imgIndex + 1
      };
    });
  }

  prevClick() {
    this.setState(prevState => {
      return {
        imgIndex:
          prevState.imgIndex === 0
            ? prevState.imgUrlLength - 1
            : prevState.imgIndex - 1
      };
    });
  }

  rotateImage() {
    this.setState(prevState => {
      return {
        rotation: prevState.rotation + 90 <= 270 ? prevState.rotation + 90 : 0
      };
    });
  }

  render() {
    
     
  return(
   
    
    <div className="Feed">
      
      <FeedLayout>
    <div class="main-content"style={{marginTop:'4rem'}}>
       
    <div class="story-gallery">
   
    
    
     <Story imgUrls={imgUrls} 
     show={this.state.showModal} 
     openModal={this.openModal}
      closeModal={this.closeModal}
     
         
          onNext={this.nextClick}
          onPrev={this.prevClick}
          rotateImage={this.rotateImage}
          rotation={this.state.rotation}
          src2={imgUrls[this.state.imgIndex].u_img}
          src={imgUrls[this.state.imgIndex].src}
          name={imgUrls[this.state.imgIndex].name}/>
   
     
    </div>
           
        <div class="write-post-container">
      
            <Link class="user-profile" to="/profile"style={{textDecoration:"none"}}>
                    
                    <img src="https://nidhi15151.github.io/social_media_website_design/images/profile-pic.png"/>
                    <div>
                        <p>{(localStorage.getItem('token'))}</p>
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
                        <p>{(localStorage.getItem('token'))}</p>
                        <span>June 24 2021</span>
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



