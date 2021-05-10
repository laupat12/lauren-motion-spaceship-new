//IMPORTS
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

//register Plugins
gsap.registerPlugin(GSDevTools);

//**** SELECT ELEMENTS without jQuery ****\\

// jQuery, all instances of .box
//$(".box");

// first instance of .box
//document.querySelector(".box");

// all instances of .box
//document.querySelectorAll(".box");
//example:
//let someBox = document.querySelector("#box");


//page ready listener
let ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
  //add tools
  GSDevTools.create();

  /* add your code here */
  //Variables
  let mainTL = gsap.timeline({id:"main"});
  


  function init(){
    //***********  fadeInTL init ****************

    //*********** zoomTL init ****************
    gsap.set(["#base", "#floor", "#hills"], {transformOrigin:"50% 50%"});
    //*********** spaceshipTL init ****************
    gsap.set([".all"], {x:-20, y:80});
    gsap.set(["#left-flame", "#right-flame"], {display:"none"});
    //*********** liftOffTL init ****************
    

    //*********** flightTL init ****************
    
    //*********** moonLandingTL init ****************


  }

  //Nested Timelines
  //***********  fadeInTL  ****************
  function fadeInTL(){
    let tl = gsap.timeline();

    tl.from("#sky", {alpha:0, duration:4})
    .from("#sun", {alpha:0, duration:1}, "-=2.5")
    .from("#cloud-1", {alpha:0, duration:1}, "-=3")
    .from("#cloud-2", {alpha:0, duration:1}, "-=3.5")
    .from("#cloud-3", {alpha:0, duration:1}, "-=4")
    .from("#cloud-4", {alpha:0, duration:1}, "-=4.5")
    
    

    ;//tl END

    return tl;

  }

  //*********** zoomTL ****************
  function zoomTL(){
    let tl = gsap.timeline();

    tl.from("#base", {duration:3, scale:10, y:"+=700", ease:"power4.out"}, "zoom")
    .from("#floor", {duration:4, scale:10, y:"+=700", ease:"power4.out"}, "zoom")
    .from("#hills", {duration:5, scale:10, y:"+=700", ease:"power4.out"}, "zoom")
    .from(".all", {duration:6, scale:0, y:"+=700", ease:"power4.out"}, "zoom")

    ;//tl END

    return tl;

  }

  //*********** cloudsTL ****************
  function cloudsTL(){
    let tl = gsap.timeline();

    tl.to("#cloud-1, #cloud-2,#cloud-3, #cloud-4", {x:-50, duration:3})
    
    
    ;//tl END

    return tl;

  }

  //*********** spaceshipTL ****************
  function spaceshipTL(){
    let tl = gsap.timeline();

    tl.to("#right-flame", {y:"-=200", duration:4})
    .to(".all",{y:"-=210", duration:0.5})
    .to("#base, #floor, #hills, #cloud-1, #cloud-2, #cloud-3, #cloud-4, #sun",{y:600, duration:0.5,ease:"power4out"})
    

    ;//tl END

    return tl;

  }

  
  //*********** liftOffTL ****************

  function liftOffTL(){
    let tl = gsap.timeline();

    
    

    ;//tl END

    return tl;

  }

  

//*********** moonLandingTL ****************


//*********** flame functions DO NOT INCLUDE IN MAIN TL ****************
function controlFlames(){

  showSmoke();

  console.log('SHOW TIME');
  gsap.set(".flames",{display:"block"});

  flamesTL.to("#left-blue",{duration:0.25, scaleY:.25,yoyo:true, repeat:-1},"flames")
  .to("#left-dark-blue",{duration:0.15, scaleY:.15,yoyo:true, repeat:-1},"flames")
  .to("#right-blue",{duration:0.25, scaleY:.25,yoyo:true, repeat:-1},"flames")
  .to("#right-dark-blue",{duration:0.15, scaleY:.15,yoyo:true, repeat:-1},"flames")

  flamesTL.play()
}

function showSmoke(){
  gsap.set(".smoke",{display:"block"});
}


//1. set initial properties
init();

//2. show content - prevents FOUC
gsap.set('#svg-container',{visibility:"visible"});

//3. BUILD Main timeline
mainTL.add(fadeInTL())
.add(zoomTL(), "-=5")
.add(spaceshipTL(), "-=3")
.add(cloudsTL(), )
//.add(liftOffTL()"-=5")



;//tl END





});//ready END
