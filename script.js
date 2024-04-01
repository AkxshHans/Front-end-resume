Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });


  gsap.from ("nav h1 ,  nav h5 , #techstack h6 , .move img" ,{
    // scale :0,
    y:-20 ,
    opacity:0,
    duration:1,
    delay :0.5 ,
    stagger : 1

  })
  gsap.from ("#page1 h1 , #page1 p" ,{
    // scale :0,
    y:-20 ,
    opacity:0,
    duration:1,
    delay :0.9 ,
    stagger : 1

  })




  gsap.from ("#techstack h6" ,{
    scale :0,
    opacity:0,

  })
  gsap.to("#techstack h6", {
    y:10,
    repeat:-1,
    duration:1,
    yoyo:true ,
  })

  // Shery.imageEffect("  #imagea #facemeraa", {
  //   style: 2,
  //   debug: true,
  // });

  var rightelem = document.querySelectorAll("#right-elem")


rightelem.forEach(function (elem){
  elem.addEventListener("mouseenter",function(){
    gsap.to(elem.childNodes[3],{
      opacity :1, 
      scale:1
    })
  })
  elem.addEventListener("mouseleave",function(){
    gsap.to(elem.childNodes[3],{
      opacity :0,
      scale:0  
    })
  })
  elem.addEventListener("mousemove",function (dets){
   
    gsap.to(elem.childNodes[3],{
      x:dets.x - elem.getBoundingClientRect().x-50 ,
      y:dets.y - elem.getBoundingClientRect().y-150
    })
    })
  })


  var  page3Center = document.querySelector(".page3-center")
  var video = document.querySelector("#page3 video")
  
  page3Center.addEventListener("click" , function(){
  video.play()
gsap.to( video, {
  transform : "scaleX(1) scaleY(1)",
  opacity:1,
  borderRadius : 0 ,
})
  })
  video.addEventListener("click", function (){
    video.pause()
    gsap.to( video, {
      transform : "scaleX(0.7) scaleY(0)",
      opacity:0,
      borderRadius : "30px" ,
    })

  })

  gsap.from("#page4 #page4left  h5 , #page4 #page4left  h6 , #page4 #page4left  h3 , #page4 #page4left  p , #page4 #page4left  button , #page4 #page4right img , #page4 #page4right h5 " , {
    scale:0,
    y:-20 ,
    duration:0.7,
    stagger :1 ,
    scrollTrigger : {
      trigger:"#page4 #page4left h5 ",
      scroller : "body" ,
      markers:false ,
      start:"bottom 50%" ,
      end:"bottom 70%" 
    }
  })


    gsap.from(" #page5 #page5right  h3 , #page5 #page5right  p , #page5 #page5right  button , #page5 #page5left img , #page5 #page5left h5 " , {
    scale:0,
    y:-20 ,
    duration:0.7,
    stagger :1 ,
    scrollTrigger : {
      trigger:"#page4 #page4right h3  ,  #page5 #page5right  p , #page5 #page5right  button , #page5 #page5left img , #page5 #page5left h5 ",
      scroller : "body" ,
      markers:false ,
      start:"bottom 50%" ,
      end:"bottom 70%" 
    }
  })
