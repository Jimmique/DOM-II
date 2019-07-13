// Your code goes here
window.addEventListener("load", function(event) {
    alert("Page is Loaded");
});

const button1 = document.querySelector('#btn1');
    button1.addEventListener('click', function(event){
        event.target.style.color = 'orange';
            event.stopPropagation();
});

const divClick = document.querySelector('#divBorder');
    divClick.addEventListener('click', function(event){
        event.currentTarget.style.border = '3px double orange';
});

const button2 = document.querySelector('#btn2');
    button2.addEventListener('mouseover', function(event){
      event.target.style.background = 'orange';
});

const button3 = document.querySelector('#btn3');
    button3.addEventListener('dblclick', function(event){
        event.target.style.borderColor = 'orange';
            event.target.style.border = '3px dotted orange';
}); 

const img1 = document.querySelector('#img1');
    img1.addEventListener('mouseenter', function(event){
        event.target.style.border = '4px ridge orange';
});

img1.addEventListener('mouseleave', function(event){
    event.target.style.border = 'none';
});

const img4 = document.querySelector('#img4');
  img4.addEventListener('mousedown', function(event){
    event.target.style.opacity = '0';
});

img4.addEventListener('mouseup', function(event){
    event.target.style.opacity = '1';
});

const p = document.querySelector('p');
p.addEventListener('copy', function(event){
  event.preventDefault();  
  alert('CAUGHT YA, dont copy my paragraph!')
});