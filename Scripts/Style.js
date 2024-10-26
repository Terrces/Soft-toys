if(document.body.opacity = "0%")
setTimeout(() => {document.body.style.opacity = "100%";},1)
let BackgroundPos = 0;
setInterval(() => {BackgroundPos+=10},100)
setInterval(() => {document.body.style.backgroundPosition = BackgroundPos+"px" },100)