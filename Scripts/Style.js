if(document.body.opacity = "0%")
setTimeout(() => {document.body.style.opacity = "100%";},1)
let BackgroundAnimationSpeed = 100;
let BackgroundPos = 0;
setInterval(() => {BackgroundPos+=10},BackgroundAnimationSpeed)
setInterval(() => {document.body.style.backgroundPositionY = BackgroundPos+"px" },BackgroundAnimationSpeed)
setInterval(() => {document.body.style.backgroundPositionX = BackgroundPos+"px" },BackgroundAnimationSpeed)