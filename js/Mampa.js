
// dropdown
let dropdownList = document.querySelector('.drop-list');
let mainDropdown = document.querySelector('.dropdown-item')
let dropdown = document.querySelector('.dropdown a');


dropdown.addEventListener('click',function(){
    dropdownList.classList.toggle('hide')

});

let deepDropdownList = document.querySelector('.deepDrop-list');
let deepDropdown = document.querySelector('.deep_dropdown');


deepDropdown.addEventListener('click',function(){
    deepDropdownList.classList.toggle('hide')
});




// main nav


 let navLinks = document.querySelectorAll('.list li a');
 navLinks.forEach(link => {
    link.addEventListener('click',function(){

        navLinks.forEach(link =>  link.style.color = '#385167');
        link.style.color = '#428bca';

    })
 })



// scroll
let about = document.querySelector('.aboutMe');
about.onclick = function(){
    scroll(0,530)
}

let services = document.querySelector('.ourServices');
services.onclick = function(){
    scroll(0,2280)   
}

let portfolio = document.querySelector('.ourPortofolio');
portfolio.onclick = function(){
    scroll(0,3130) 
}

let team = document.querySelector('.ourTeam');
team.onclick = function(){
    scroll(0,4530)  
}
let contact = document.querySelector('.ourContact');
contact.onclick = function(){
    scroll(0,6030)  
}



// slider

let nextBtn = document.getElementById('next');
nextBtn.addEventListener('click',function(){
    slideNext();
})

let prevBtn = document.getElementById('prev');
prevBtn.addEventListener('click',function(){
    slidePrev();

});
setInterval(function(){
    slideNext()
},5000) 

function slideNext(){
    let slideActive = document.querySelector('.slide.active');
    let nextSlide = slideActive.nextElementSibling;

    let pointer = document.querySelector('.pointer.pointerActive');
    let nextPointer = pointer.nextElementSibling;
    
    if (nextSlide != null && nextPointer != null){
        slideActive.classList.remove('active');
        nextSlide.classList.add('active');

        nextPointer.classList.add('pointerActive');  
        pointer.classList.remove('pointerActive');
        
    }else{
        let firstSlide = document.querySelector('.slide');

        let firstPointer = document.querySelector('.pointer');
        pointer.classList.remove('pointerActive');
        firstPointer.classList.add('pointerActive');

        slideActive.classList.remove('active');
        firstSlide.classList.add('active');
    }
    
}

function slidePrev(){
    let slideActive = document.querySelector('.slide.active');
    let prevSlide = slideActive.previousElementSibling;

    let pointer = document.querySelector('.pointer.pointerActive');
    let prevPointer = pointer.previousElementSibling;

    if(prevSlide!= null && prevPointer!= null){
        slideActive.classList.remove('active');
        prevSlide.classList.add('active');

        prevPointer.classList.add('pointerActive');  
        pointer.classList.remove('pointerActive');


    }else{
        
        let parentSlide = slideActive.parentElement;
        let pointerParent = document.querySelector('.scale');

        pointer.classList.remove('pointerActive');
        pointerParent.lastElementChild.classList.add('pointerActive');

        slideActive.classList.remove('active');
        parentSlide.lastElementChild.classList.add('active');
    }
}






// // about divisions

let divs = document.querySelectorAll(".division");

        divs.forEach(div => {
            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = "#428bca";
                div.style.color = "white";
            });

            div.addEventListener("mouseout", () => {
                div.style.backgroundColor = "rgb(244, 244, 252)";
                div.style.color = 'black'
            });
        });



// portfolio
let titles = document.getElementById('titles')
let button1 = titles.children[0]
let button2 = titles.children[1]
let button3 = titles.children[2]
let button4 = titles.children[3]

button1.addEventListener('mouseover',function(){
    button1.classList.add('blue')
})
button1.addEventListener('mouseout',function(){
    button1.classList.remove('blue')
})
button2.addEventListener('mouseover',function(){
    button2.classList.add('blue')
})
button2.addEventListener('mouseout',function(){
    button2.classList.remove('blue')
})
button3.addEventListener('mouseover',function(){
    button3.classList.add('blue')
})
button3.addEventListener('mouseout',function(){
    button3.classList.remove('blue')
})
button4.addEventListener('mouseover',function(){
    button4.classList.add('blue')
})
button4.addEventListener('mouseout',function(){
    button4.classList.remove('blue')
})


let section1 = document.getElementById('sec-one');
let Image1 = section1.firstElementChild                                                                                                   
let Image2 = section1.lastElementChild        

let section2 = document.getElementById('sec-two');
let Image3 = section2.children[0]                                                                                                   
let Image4 = section2.children[1]                                                                                                  
let Image5 = section2.children[2] 

let section3 = document.getElementById('sec-three');
let Image6 = section3.children[0]                                                                                                   
let Image7 = section3.children[1]                                                                                                  
let Image8 = section3.children[2] 
let Image9 = section3.children[3] 


let gallery = document.getElementById('images1')

button1.addEventListener('click',function(){
    button2.classList.remove('blue')
    button3.classList.remove('blue')
    button4.classList.remove('blue')
    button1.classList.add('blue')

    Image1.classList.remove('hide')
    Image2.classList.remove('hide')
    Image3.classList.remove('hide')
    Image4.classList.remove('hide')
    Image5.classList.remove('hide')
    Image6.classList.remove('hide')
    Image7.classList.remove('hide')
    Image8.classList.remove('hide')
    Image9.classList.remove('hide')

    section3.style.display = 'block'
    section2.style.display = 'block'
    section1.style.display = 'block'


})
button2.addEventListener('click',function(){
    button1.classList.remove('blue')
    button3.classList.remove('blue')
    button4.classList.remove('blue')
    button2.classList.add('blue')

    Image1.classList.remove('hide')
    Image2.classList.add('hide')
    Image3.classList.add('hide')
    Image4.classList.add('hide')
    Image5.classList.add('hide')
    Image6.classList.add('hide')
    Image7.classList.remove('hide')
    Image8.classList.remove('hide')
    Image9.classList.add('hide')

    section3.style.display = 'flex'
    section2.style.display = 'block'
    section1.style.display = 'block'
    

})

button3.addEventListener('click',function(){
    button1.classList.remove('blue')
    button2.classList.remove('blue')
    button4.classList.remove('blue')
    button3.classList.add('blue')

    Image1.classList.add('hide')
    Image2.classList.add('hide')
    Image3.classList.remove('hide')
    Image4.classList.remove('hide')
    Image5.classList.add('hide')
    Image6.classList.add('hide')
    Image7.classList.add('hide')
    Image8.classList.add('hide')
    Image9.classList.remove('hide')

    section2.style.display = 'flex'
    section3.style.display = 'flex'
    section1.style.display = 'block'
})
button4.addEventListener('click',function(){
    button1.classList.remove('blue')
    button2.classList.remove('blue')
    button3.classList.remove('blue')
    button4.classList.add('blue')

    Image6.classList.remove('hide')
    Image2.classList.remove('hide')
    Image5.classList.remove('hide')
    Image1.classList.add('hide')
    Image3.classList.add('hide')
    Image4.classList.add('hide')
    Image7.classList.add('hide')
    Image8.classList.add('hide')
    Image9.classList.add('hide')

    section2.style.display = 'flex'
    section3.style.display = 'flex'
    section1.style.display = 'block'
})





// upward button

let upward = document.querySelector('#btn');
window.onscroll = function(){
    if (scrollY >= 400){
        upward.style.display = 'block';
    }else{
        upward.style.display = 'none';
    }
}

upward.addEventListener('click',function(){
    scroll({
        top: 0,
    })
})

