// DOM Selectors


const prevBtn = document.getElementById("arrow-left")
const nextBtn = document.getElementById("arrow-right")
const slideArray = document.querySelectorAll('.slide')


let current = 0
const reset = ()=>{
  slideArray.forEach((slide)=>{
    slide.style.display = 'none'
  })

}
const startSlider = ()=>{
 reset();
  slideArray[0].style.display="block"
}


const nextImage=  ()=>{
  reset()
  slideArray[current].style.block="none" 
  if(current===slideArray.length-1){
    slideArray[0].style.display="block"
    current=0
    return
  }
   
    slideArray[current+1].style.display="block"
    current+=1
  console.log('current' +current)

}


const prevImage=  ()=>{
  console.log(current)
  reset()
  slideArray[current].style.block="none" 
  if(current===0){
    slideArray[slideArray.length-1].style.display="block"
    current=slideArray.length-1
    return
  }
   
    slideArray[current-1].style.display="block"
    current--
  console.log('current' +current)

}

prevBtn.addEventListener('click',()=>{
  console.log('left button clicked')
})


nextBtn.addEventListener('click',()=>{
  nextImage()
  console.log('next clicked')
})

prevBtn.addEventListener('click',()=>{
  prevImage()
  console.log('next clicked')
})




// Start Slider
startSlider()



  // Auto Sliding
  setInterval(()=>{
    nextImage()
  },3000)