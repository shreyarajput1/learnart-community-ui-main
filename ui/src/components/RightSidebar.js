import { Link } from "react-router-dom";

function RightSidebar() {
  return(
    <div className="container-fluid RightSidebar" style={{height: '100%'}}>
         <div class="right-sidebar"> 
          <div class="sidebar-title">
                <h4>Events</h4>
                <a href="#">See All</a>
            </div>
          
        <div className="event">
          <div className="left-event">
            <h3>18</h3>
            <span>March</span>
          </div>
          <div className="right-event">
            <h4>Social Media</h4>
            <p><i className="fas fa-map-marker-alt" aria-hidden="true"></i> Tech Park</p>
            <a href="#">More Info</a>
          </div>
        </div>
        <div className="event">
          <div className="left-event">
            <h3>22</h3>
            <span>June</span>
          </div>
          <div className="right-event">
            <h4>Mobile Marketing</h4>
            <p><i className="fas fa-map-marker-alt" aria-hidden="true"></i> Tech Park</p>
            <a href="#">More Info</a>
          </div>
        </div>
        <div className="sidebar-title">
          <h4>Advertisement</h4>
          <a href="#">Close</a>
        </div>
        <img src="https://nidhi15151.github.io/social_media_website_design/images/advertisement.png" className="sidebar-ads" />
        <div className="sidebar-title">
          <h4>Conversation</h4>
          <a href="#">Hide Chat</a>
        </div>
        <div className="online-list">
          <div className="online">
            <img src="https://nidhi15151.github.io/social_media_website_design/images/member-1.png" />
          </div>
          <p>Ali Mina</p>
        </div>
        <div className="online-list">
          <div className="online">
            <img src="https://nidhi15151.github.io/social_media_website_design/images/member-2.png" />
          </div>
          <p>Jack Aston</p>
        </div>
        <div className="online-list">
          <div className="online">
            <img src="https://nidhi15151.github.io/social_media_website_design/images/member-3.png" />
          </div>
          <p>Samona Rose</p>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;