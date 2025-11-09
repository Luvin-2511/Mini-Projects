const canvas = document.getElementById('frame')
const context = canvas.getContext("2d")

const frames = {
    currentIndex: 0,
    maxIndex: 489
}


let imageLoaded = 0
const images = []

function preloadImages() {
    for (var i = 1; i <= frames.maxIndex; i++){
        const imageUrl = `./Image/frame_${i.toString().padStart(4,"0")}.jpeg`
        const img = new Image()
        img.src = imageUrl
        img.onload =()=>{
            imageLoaded++;
            if(imageLoaded === frames.maxIndex){
                loadImage(frames.currentIndex)
                staranimate()
            }
        }

        images.push(img)
    }
}


function loadImage(index){
    if(index >=0 && index<=frames.maxIndex){
        const img = images[index]
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        const scaleX= canvas.width / img.width
        const scaleY= canvas.height / img.height

        const scale = Math.max(scaleX,scaleY)

        const newWidth = img.width*scale
        const newheight = img.height*scale

        const offsetX = (canvas.width - newWidth)/2
        const offsetY = (canvas.height - newheight)/2

        context.clearRect(0,0, canvas.width , canvas.height)
        context.imageSmoothingEnabled = true
        context.imageSmoothingQuality = "high"
        context.drawImage(img,offsetX,offsetY,newWidth,newheight)
        frames.currentIndex = index
    }
}


function staranimate(){
    var tl = gsap.timeline({
        scrollTrigger :{
            trigger : ".parent",
            start:"top top",
            scrub:2,
        }
    })

    tl.to(frames,{
        currentIndex:frames.maxIndex,
        onUpdate:function(){
            loadImage(Math.floor(frames.currentIndex))
        }
    })
}

preloadImages()