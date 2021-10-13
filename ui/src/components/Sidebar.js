import { Link } from "react-router-dom";

function Sidebar() {
  return(
    <div className="Sidebar" style={{height:'100%'}}>
      <div className="left-sidebar">
        <div className="imp-links">
            <a href="#">
              <img src="https://nidhi15151.github.io/social_media_website_design/images/news.png" />
              Latest News
            </a>
            <a href="#">
              <img src="https://nidhi15151.github.io/social_media_website_design/images/friends.png" />
              Friends
            </a>
            <a href="#">
              <img src="https://nidhi15151.github.io/social_media_website_design/images/group.png" />
              Groups
            </a>
            <a href="#">
              <img src="https://nidhi15151.github.io/social_media_website_design/images/marketplace.png" />
              Marketplace
            </a>
            <a href="#">
              <img src="https://nidhi15151.github.io/social_media_website_design/images/watch.png" />
              Watch
            </a>
        </div>
        <div class="shortcut-links">
                <p>Your Shortcuts</p>
                <a href="#"><img src="https://nidhi15151.github.io/social_media_website_design/images/shortcut-1.png"/>Web Developers</a>
                <a href="#"><img src="https://nidhi15151.github.io/social_media_website_design/images/shortcut-2.png"/>Web Design Course</a>
                <a href="#"><img src="https://nidhi15151.github.io/social_media_website_design/images/shortcut-3.png"/>Full Stack Development</a>
                <a href="#"><img src="https://nidhi15151.github.io/social_media_website_design/images/shortcut-4.png"/>Website Experts</a>


            </div>
      </div>
    </div>
  );
}

export default Sidebar;