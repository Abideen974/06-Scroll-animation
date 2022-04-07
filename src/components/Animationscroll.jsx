import React from 'react'
import './anisc.css'
function AnimationScroll() {
  const boxes = document.querySelectorAll('.box');
  window.addEventListener("scroll",checkBoxes);

    function checkBoxes () {
      const targit = window.innerHeight / 5 * 4;

      
      boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop < targit) {
         box.classList.add('show');
       
          
        }else{
           box.classList.remove('show');
       
        }
       
      })
    }
    checkBoxes()
  return (
    <>
        <h1>Scroll to see the animation</h1>
        <div className="box"><h2>Content</h2> </div>
        <div className="box"><h2>Content</h2></div>
        <div className="box"><h2>Content</h2></div>
        <div className="box"><h2>Content</h2></div>
        <div className="box"><h2>Content</h2></div>
        <div className="box"><h2>Content</h2></div>
        
    </>
  )
}

export default AnimationScroll