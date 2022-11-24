let navItems=document.getElementById('nav-items');
    let readmore=document.getElementById('read-more');
    let newheadings=document.getElementsByClassName('newHeading');
    let imageHeadings=document.getElementsByClassName('image-heading');

    //Mobile view hide/show panel events
    function showMenu(){
      navItems.style.right="0";
    }
    function hideMenu(){
      navItems.style.right="-200px";
     
    }
    //mouseover and mouse out events on the headings on *New* Panel
    for(let i=0;i<newheadings.length;i++){
      newheadings[i].addEventListener("mouseover",()=>{newheadings[i].style.color='#E9AA52';newheadings[i].style.cursor='pointer'} );
      newheadings[i].addEventListener("mouseout",()=>{newheadings[i].style.color='#FFFDFA'})
    }

    //readmore button mouseover and mouseout events
    readmore.addEventListener('mouseover',()=>{readmore.style.background='#00001A';readmore.style.cursor='pointer'});
    readmore.addEventListener('mouseout',()=>{readmore.style.background='#F15D51'});
  
    for(let i=0;i<imageHeadings.length;i++){
      imageHeadings[i].addEventListener('mouseover',()=>{imageHeadings[i].style.color='#F15D51';imageHeadings[i].style.cursor='pointer'});
      imageHeadings[i].addEventListener('mouseout',()=>{imageHeadings[i].style.color='#00001A'})
    }