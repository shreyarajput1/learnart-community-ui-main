

function Card() {
  return(
    <div style={{fontStyle:'lato'}}>
    <div className="card mt-1" style={{position:"absolute", background:''}}>
        
        <div className="card-Title pl-2 pt-1" style={{paddingLeft:""}}>
        <div class="user-profile" >
                   
                    <img classname=""src="https://nidhi15151.github.io/social_media_website_design/images/profile-pic.png"style={{width:"20%"}}

                    />
                    
                        <div>
                            <p style={{color:'black',fontSize:"18px"}}><strong>John Nichol</strong></p>
                            <span style={{color:'black',fontSize:"14px"}}>Senior Journalist </span>
                        </div>
                    </div>
        </div>
        <div className=" Card-body pb-1 mx-2" style={{paddingLeft:""}}>
        <div class="p-1 mt-1 bg-light d-flex justify-content-between rounded">
                    <div class="d-flex flex-column"> <span class="articles">Articles</span> <span class="number1">38</span> </div>
                    <div class="d-flex flex-column"> <span class="followers">Followers</span> <span class="number2">980</span> </div>
                    <div class="d-flex flex-column"> <span class="rating">Rating</span> <span class="number3">8.9</span> </div>
                </div>
        
                <div class="button mt-2 d-flex flex-row align-items-center"> <button class="btn btn-sm btn-outline-primary w-100">Chat</button> <button class="btn btn-sm btn-primary w-100 ml-2">Follow</button> </div>
       

        </div>
    </div>
</div>
  );
}

export default Card;