if(document.body.opacity = "0%")
setTimeout(() => {document.body.style.opacity = "100%";},1)
let BackgroundAnimationSpeed = 0;
let BackgroundPos = 0;
document.addEventListener("DOMContentLoaded", () => 
{
    BackgroundAnimationSpeed = 15000;
    BackgroundPos+=1920;
    document.body.style.backgroundPositionX = BackgroundPos+"px"
    document.body.style.backgroundPositionY = BackgroundPos+"px"
    setInterval(() => {BackgroundPos+=1920},BackgroundAnimationSpeed)
    setInterval(() => {document.body.style.backgroundPositionY = BackgroundPos+"px" },BackgroundAnimationSpeed)
    setInterval(() => {document.body.style.backgroundPositionX = BackgroundPos+"px" },BackgroundAnimationSpeed)
})
document.addEventListener("beforeunload", () =>
{
    BackgroundAnimationSpeed = 0;
    BackgroundPos=0;
    document.body.style.backgroundPositionX = BackgroundPos+"px"
    document.body.style.backgroundPositionY = BackgroundPos+"px"
    setInterval(() => {BackgroundPos+=0},BackgroundAnimationSpeed)
    setInterval(() => {document.body.style.backgroundPositionY = BackgroundPos+"px" },BackgroundAnimationSpeed)
    setInterval(() => {document.body.style.backgroundPositionX = BackgroundPos+"px" },BackgroundAnimationSpeed)    
})
