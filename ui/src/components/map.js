{stockData.slice(1,5).map((data) => {

    return(
        <>
    <button class={data.class}style={{backgroundImage:data.storyurl}}>
        <img src={data.u_img}/>
    </button>
    
    
      </>
    )})}
    