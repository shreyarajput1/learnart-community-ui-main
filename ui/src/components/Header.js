import { Link ,Redirect} from "react-router-dom";
import React from 'react';



class Header extends React.Component{
        state = {
        isOpen: false,
        islogout: false
      };
    
    
      toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
      signOut = () => {
        localStorage.removeItem("token");
        this.setState({
          islogout: true
        });
      };
      render() {
        const menuClass =`dropdown-menu${this.state.isOpen ? " show" : ""} `;
        if (this.state.islogout) {
            return <Redirect to="/" />;
          }
        return(
    
    <nav class="navbar fixed-top">
       
        <div class="nav-left ">
              <Link to="/feed" className="text-white ">
              <img src="https://www.learnart.in/assets/logos/type-white.png" class="logo"/> 
              </Link>

              <ul>
                <li><img src="https://nidhi15151.github.io/social_media_website_design/images/notification.png"/></li>
                <li><img src="https://nidhi15151.github.io/social_media_website_design/images/inbox.png"/></li>
                <li><img src="https://nidhi15151.github.io/social_media_website_design/images/video.png"/></li>
            </ul>
        </div>
        
       
        <div class="nav-right">
            <div class="search-box">
                <img src="https://nidhi15151.github.io/social_media_website_design/images/search.png"/>
                <input type="text" placeholder="Search"/>
            </div>
            
            <div class="nav-user-icon online" onClick={this.toggleOpen}>
        <div>
         <img class=""src="https://nidhi15151.github.io/social_media_website_design/images/profile-pic.png"/>
        </div>
        
        <div className={menuClass} id="settings" aria-labelledby="dropdownMenuButton"style={{position:"absolute",transform: "translate3d(-190px, 40px, 0px)",top:"0px",left:"0px",willChange: "transform",marginTop:"1px",marginBottom:"1px"}}>
       
        <div id="dark-btn" class="">
                <span></span>
            </div>
            <div class="settings-menu-inner"style={{padding:"5px"}}>
                <div class="user-profile">
                    <img src="https://nidhi15151.github.io/social_media_website_design/images/profile-pic.png"/>
                    <div>
                        <p>{localStorage.getItem('Name')}</p>
                        <a href="#">See your profile</a>
                    </div>
                </div>

                <hr></hr>
    
                <div class="user-profile">
                    <img src="https://nidhi15151.github.io/social_media_website_design/images/feedback.png"/>
                    <div>
                        <p>Give Feedback</p>
                        <a href="#">Help us to improve the new design</a>
                    </div>
                </div>
                <hr/>
                
                <div class="settings-links">
                    <img src="https://nidhi15151.github.io/social_media_website_design/images/setting.png" class="settings-icon"/>
                    <a href="#">Settings &amp; Privacy<img src="https://nidhi15151.github.io/social_media_website_design/images/arrow.png" style={{width:"10px" ,marginLeft:"50px"}}/></a>
                </div>

                <div class="settings-links">
                    <img src="https://nidhi15151.github.io/social_media_website_design/images/help.png" class="settings-icon"/>
                    <a href="#">Help &amp; Support<img src="https://nidhi15151.github.io/social_media_website_design/images/arrow.png"style={{width:"10px",marginLeft:"50px"}}/></a>
                </div>

                <div class="settings-links">
                    <img src="https://nidhi15151.github.io/social_media_website_design/images/display.png" class="settings-icon"/>
                    <a href="#">Display &amp; Accessibility<img src="https://nidhi15151.github.io/social_media_website_design/images/arrow.png"style={{width:"10px",marginLeft:"50px"}}/></a>
                </div>

                <div class="settings-links">
                    <img src="https://nidhi15151.github.io/social_media_website_design/images/logout.png" class="settings-icon"/>
                    <a  href="" onClick={this.signOut}>Logout <img src="https://nidhi15151.github.io/social_media_website_design/images/arrow.png" style={{width:"10px",marginLeft:"50px"}}/></a>
                </div>

            </div>
             
        </div>
      </div>
        </div>

      

        
        
    </nav>
    
  
   
  );
}
}

export default Header;