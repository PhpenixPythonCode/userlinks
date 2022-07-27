//You can edit these
var discordID = '307919920820125698'
var username = 'Pinapplekat'


//HTML formatted vv
var about = `
Online, I go by the name 'Pinapplekat'. That is (hopefully obviously) not my real name. I am a (wannabe) fullstack web developer, started learning HTML at age 10, when I got a childrens book that taught web design. 
<br><br>
 You can view my GitHub projects by clicking the GitHub button.
 <br> Wanna talk? Check out my Discord server or my Twitter!
`

const links = [
    {
        'name': 'YouTube',
        'url': 'https://youtube.com/pinapplekat'
    },
    {
        'name': 'Twitter',
        'url': 'https://twitter.com/tpinapplekat'
    },
    {
        'name': 'GitHub',
        'url': 'https://github.com/PhpenixPythonCode'
    },
    {
        'name': 'Discord',
        'url': 'https://discord.gg/jqURvaA2nu'
    },
    {
        'name': 'Patreon',
        'url': 'https://patreon.com/elijahryerson'
    },
    {
        'name': 'About',
        'url': 'javascript:aboutModal()'
    }
]



//ACTUAL CODE vv

var lightMode = localStorage.getItem('lightMode')
if(lightMode == null) lightMode = false
console.log(lightMode)
if(lightMode == 'true'){
    lightMode = true
    document.body.classList = 'light-mode'
}else{
    lightMode = false
    document.body.classList = ''
}
function toggleTheme(){
    lightMode = !lightMode
    localStorage.setItem('lightMode', lightMode)
    if(lightMode == true){
        document.body.classList = 'light-mode'
    }else{
        document.body.classList = ''
    }
}


document.getElementById('desc').innerHTML = about

function closeModal(){
    document.getElementById('modal').style.display = 'none'
}

document.addEventListener('keydown', (e) => {
    if(e.key == 'Escape'){
        closeModal()
    }
})

function aboutModal(){
    document.getElementById('modal').style.display = ''
}



var score = 0

var mouseLeft
var mouseDown = false
var interval

document.getElementById('name').innerText = username



document.addEventListener('mousedown', () => {
    mouseDown = true
    createShape()
    interval = setInterval(() => {
        createShape()
    }, 400)

    document.getElementById('cursor2').style.opacity = '1'

    
})
document.addEventListener('mouseup', () => {
    mouseDown = false
    clearInterval(interval)

    document.getElementById('cursor2').style.opacity = ''
})

document.body.addEventListener('contextmenu', (e) => {
    e.preventDefault()
})
document.getElementById('cursor1').style.opacity = '0'
links.forEach(link => {
    const btn = document.createElement('a')
    btn.href = link.url
    btn.setAttribute('draggable', 'false')
    btn.innerText = link.name
    document.getElementById('buttons').appendChild(btn)
})
document.getElementById('cursor2').style.opacity = '0'

document.addEventListener('mousemove', (e) => {
    document.getElementById('cursor1').style.opacity = '1'
    document.getElementById('cursor1').style.top = e.pageY+'px'
    document.getElementById('cursor1').style.left = e.pageX+'px'

    mouseLeft = e.pageX
    var mouseTop = e.pageY

    document.getElementById('cursor2').style.opacity = ''
    document.getElementById('cursor2').style.top = mouseTop+'px'
    document.getElementById('cursor2').style.left = mouseLeft+'px'
})

document.addEventListener('mouseleave', (e) => {
    document.getElementById('cursor1').style.opacity = '0'
    document.getElementById('cursor2').style.opacity = '0'
})

document.addEventListener('mouseover', (e) => {
    document.getElementById('cursor1').style.opacity = '1'
    document.getElementById('cursor2').style.opacity = ''
})
var cusid_ele = document.getElementsByTagName('a');
for (var i = 0; i < cusid_ele.length; ++i) {
    var item = cusid_ele[i];  

    item.addEventListener('click', () => {
        var clicksound = new Audio('click.mp3')
        clicksound.currentTime = 0
        clicksound.play()
    })

    item.addEventListener('mouseover', (e) => {
        document.getElementById('cursor1').style.opacity = '1'
    document.getElementById('cursor2').style.opacity = ''
        document.getElementById('cursor2').style.width = '50px'
        document.getElementById('cursor2').style.height = '50px'
        document.getElementById('cursor2').style.transform = 'translate(-21px, -21px)'
        
    })
    item.addEventListener('mouseleave', (e) => {
        document.getElementById('cursor2').style.width = ''
        document.getElementById('cursor2').style.height = ''
        document.getElementById('cursor1').style.backgroundColor = 'var(--primary)'
        document.getElementById('cursor2').style.border = '2px solid var(--primary)'
        document.getElementById('cursor2').style.transform = ''
    })
}
var cusid_ele = document.getElementsByTagName('button');
for (var i = 0; i < cusid_ele.length; ++i) {
    var item = cusid_ele[i];  

    item.addEventListener('click', () => {
        var clicksound = new Audio('click.mp3')
        clicksound.currentTime = 0
        clicksound.play()
    })

    item.addEventListener('mouseover', (e) => {
        document.getElementById('cursor1').style.opacity = '1'
    document.getElementById('cursor2').style.opacity = ''
        document.getElementById('cursor2').style.width = '50px'
        document.getElementById('cursor2').style.height = '50px'
        document.getElementById('cursor2').style.transform = 'translate(-21px, -21px)'
        
    })
    item.addEventListener('mouseleave', (e) => {
        document.getElementById('cursor2').style.width = ''
        document.getElementById('cursor2').style.height = ''
        document.getElementById('cursor1').style.backgroundColor = 'var(--primary)'
        document.getElementById('cursor2').style.border = '2px solid var(--primary)'
        document.getElementById('cursor2').style.transform = ''
    })
}



var delay = getRandomInt(7000)
// changeDelay()
function changeDelay(){
    if(mouseDown) {
        delay = 100
        console.log('mousedown')
    }
    if(!mouseDown) {
        delay = getRandomInt(7000)
        console.log('mouseup')
    }
    setTimeout(() => {
        changeDelay()
    },100)
}
function startShapes(){
    
    
    setInterval(() => {

        createShape()
    }, 3000)

    setInterval(() => {
        createParticle()
    }, 500)
}

function createShape(){
    const shape = document.createElement('div')
    shape.classList = 'shape'
    shape.style.opacity = getRandomInt(10) / 10

    shape.style.filter = 'blur('+getRandomInt(10)+'px)'
    var width = getRandomInt(10) * 40 + 'px'
    shape.style.width = width
    shape.style.height = width

    shape.style.transform = 'rotate('+getRandomInt(360)+'deg)'

    shape.style.left = mouseLeft+'px'
    shape.style.bottom = '-'+shape.offsetHeight+'px'

    shape.style.borderRadius = getRandomInt(51)+'%'

    shape.addEventListener('click', () => {
        // shape.classList.add('shape-no')
        // setTimeout(() => {
        //     shape.remove()
        // },1000)
        shape.style.opacity = '0'
        var clicksound = new Audio('click.mp3')
        clicksound.currentTime = 0
        clicksound.play()
        score = score + 1
        document.getElementById('score').innerText = score
    })
    
    
    document.getElementById('shapes').appendChild(shape)
    start(shape)
}

function createParticle(){
    const shape = document.createElement('div')
    shape.classList = 'shape'
    shape.style.opacity = getRandomInt(10) / 10

    shape.style.filter = 'blur('+getRandomInt(10)+'px)'
    var width = getRandomInt(10) * 3 + 'px'
    shape.style.width = width
    shape.style.height = width

    shape.style.transform = 'rotate('+getRandomInt(360)+'deg)'

    shape.style.left = getRandomInt(document.body.offsetWidth)+'px'
    shape.style.bottom = '-'+shape.offsetHeight+'px'

    shape.style.borderRadius = getRandomInt(51)+'%'
    
    
    document.getElementById('shapes').appendChild(shape)
    start(shape)
}


startShapes()

function start(shape){
    shape.classList = 'shape moving'
    setTimeout(() => {
        shape.remove()
    }, 14000)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


var myAudio = new Audio("music.mp3");
myAudio.volume = 0.05;
var isPlaying = false;

function toggleMusic() {
  isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};

document.getElementById('name').addEventListener('click', () => {
    window.open('discord://click-me/users/'+discordID)
})
