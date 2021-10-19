import React from "react";
import PropTypes from "prop-types";
import Modal from 'react-bootstrap/Modal'
import {BiCaretRight}from 'react-icons/bi';
import {BiCaretLeft}from 'react-icons/bi';
import {BsCursorFill} from 'react-icons/bs';
import { Link } from "react-router-dom";

import {IoEllipsisVertical}from 'react-icons/io5';
import {BsFillXDiamondFill}from 'react-icons/bs';
import { RiDivideLine } from "react-icons/ri";

const Story = ({ imgUrls,show, openModal,closeModal,
    onNext,src2,

    onPrev,
   name,
    src
    }) => {
  return (
    <>
      {imgUrls.map((url, index) => {
        return (
          <div key={index}>
            
              <div className="card mx-1" onClick={() => openModal(index)}><img
                key={index}
                className=" gallery-thumbnail"
                src={url.src}
                alt={`Image number ${index + 1}`}
              /> <div class="card-img-overlay" style={{width:"100%",color:"#fff"}}>
              <p class="story"><img src={url.u_img}/></p>
             
              
            </div></div>
            
        
        <Modal show={show} >
        <div className="modal-overlay" >
        
        <div className="user-profile profile mt-2 ml-3" style={{display:"flex",position:"absolute"}}> 
          <img src={src2}/>
          <div>
            <p className="" style={{color:"white"}} >{name}</p>
           
          </div>
          
          </div>
          <span className="close" >
          
          <a href="#" onClick={()=>closeModal()} className="closebutton">
          <BsFillXDiamondFill/>
          </a>
          
          </span> 
          
          
          
         
         
      <div className="modal-body">
      
     
        
        <div className="image-container"style={{ }} >
        
          <div className="left-arrow"onClick={onPrev}>
         
            <BiCaretLeft/>
            
          </div>
          <div className="inner-story1" >
            <img style={{position:"fixed"}}
              src={src}
              style={{ width: "100%" }}
            />
          </div>
          <div className="right-arrow" onClick={onNext}>
           
                <BiCaretRight/>
            
          </div>
        </div>
        <div className="footer storyfooter">
          <input className="message mr-2" type="message" placeholder="Reply.."/> 
            <span>
            <button className="send mt-1">
                <span><BsCursorFill/>
                </span>
                </button>  
            </span>  
          </div>
      </div>
    </div>
       </Modal>
        
         
           
         
     
              
            
          </div>
        );
      })}
   </>
  );
};

Story.propTypes = {
  imgUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
  openModal: PropTypes.func.isRequired
};

export default Story;