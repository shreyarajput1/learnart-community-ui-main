import { MdBookmarkBorder,MdReportProblem} from "react-icons/md";
import {FcShare } from "react-icons/fc";
import React from "react";

import { RiUserUnfollowLine } from "react-icons/ri";
import {IoEllipsisHorizontal}from 'react-icons/io5';
import { HiLink} from "react-icons/hi";
import { FaEye,FaEyeSlash } from "react-icons/fa";
class DropDown extends React.Component { 
    constructor(props) {
      super(props);
      this.state = {
        isOpen: false
      }
    } 
    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
    render() {
        const menuClass =`dropdown-menu${this.state.isOpen ? " show" : ""}`;
      return (
        <div class="dropdown">
  <a class="" onClick={this.toggleOpen} role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
   <IoEllipsisHorizontal/>
  </a>
    <div className={menuClass} aria-labelledby="dropdownMenuLink"style={{position:"absolute",transform: "translate3d(-193px, 35px, 0px)",top:"0px",left:"0px",willChange: "transform",marginTop:"1px"}}>
        <div className="dropdown-item" href="#"><span style={{marginRight:"1rem"}}><MdBookmarkBorder/></span>Save</div>
        <div class="dropdown-item" href="#"><span style={{marginRight:"1rem"}}><RiUserUnfollowLine/></span>Unfollow</div>
            <div class="dropdown-item" href="#"><span style={{marginRight:"1rem"}}><HiLink/></span>Copy link</div>
            <div class="dropdown-item" href="#"><span style={{marginRight:"1rem"}}><FaEyeSlash/></span>I don't want to see this</div>
            <div class="dropdown-item" href="#"><span style={{marginRight:"1rem"}}><MdReportProblem/></span>Report this post</div>
            <div class="dropdown-item" href="#"><span style={{marginRight:"1rem"}}><FaEye/></span>Who can see this post?</div>
         </div>
</div>
      );
    }
  
  }
  export default DropDown;