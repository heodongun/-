var container=document.querySelector('.container');
var container1=document.querySelector('.container1')
var container2=document.querySelector('.container2')
var container3=document.querySelector('.container3')
var container4=document.querySelector('.container4')
var overlay=document.querySelector('.overlay');
var overlay1=document.querySelector('.overlay1')
var overlay2=document.querySelector('.overlay2')
var overlay3=document.querySelector('.overlay3')
var overlay4=document.querySelector('.overlay4')
var card=document.querySelector('.card');
var card1=document.querySelector('.card1');
var card2=document.querySelector('.card2');
var card3=document.querySelector('.card3');
var card4=document.querySelector('.card4');
var pokemon=document.querySelector('.pokemon');
var pokemon1=document.querySelector('.pokemon1');
var pokemon2=document.querySelector('.pokemon2');
var pokemon3=document.querySelector('.pokemon3');
var pokemon4=document.querySelector('.pokemon4');
pokemon.style='width:0%; height:0%';
pokemon1.style='width:0%; height:0%';
pokemon2.style='width:0%; height:0%';
pokemon3.style='width:0%; height:0%';
pokemon4.style='width:0%; height:0%';
overlay.style='filter:opacity(0)';
overlay1.style='filter:opacity(0)';
overlay2.style='filter:opacity(0)';
overlay3.style='filter:opacity(0)';
overlay4.style='filter:opacity(0)';
var flag=1;

container.addEventListener('mouseout',function(){
    overlay.style='filter:opacity(0)';
    container.style='transform:perspective(350px) rotateY(0deg) rotateX(0deg)';
})

container1.addEventListener('mouseout',function(){
    overlay1.style='filter:opacity(0)';
    container1.style='transform:perspective(350px) rotateY(0deg) rotateX(0deg)';
})

container2.addEventListener('mouseout',function(){
    overlay2.style='filter:opacity(0)';
    container2.style='transform:perspective(350px) rotateY(0deg) rotateX(0deg)';
})

container3.addEventListener('mouseout',function(){
    overlay3.style='filter:opacity(0)';
    container3.style='transform:perspective(350px) rotateY(0deg) rotateX(0deg)';
})

container4.addEventListener('mouseout',function(){
    overlay4.style='filter:opacity(0)';
    container4.style='transform:perspective(350px) rotateY(0deg) rotateX(0deg)';
})

container.addEventListener('mousemove',function(e){
    var x=e.offsetX;
    var y=e.offsetY;
    var yy=1/-5*x+20;
    var xx=4/30*y-20;
    overlay.style=`background-position:${x/5+y/5}%`;
    container.style=`transform : perspective(350px) rotateY(${yy}deg) rotateX(${xx}deg)`;
})

container1.addEventListener('mousemove',function(e){
    var x=e.offsetX;
    var y=e.offsetY;
    var yy=1/-5*x+20;
    var xx=4/30*y-20;
    overlay1.style=`background-position:${x/5+y/5}%`;
   container1.style=`transform : perspective(350px) rotateY(${yy}deg) rotateX(${xx}deg)`;
})


container2.addEventListener('mousemove',function(e){
    var x=e.offsetX;
    var y=e.offsetY;
    var yy=1/-5*x+20;
    var xx=4/30*y-20;
    overlay2.style=`background-position:${x/5+y/5}%`;
   container2.style=`transform : perspective(350px) rotateY(${yy}deg) rotateX(${xx}deg)`;
})
container3.addEventListener('mousemove',function(e){
    var x=e.offsetX;
    var y=e.offsetY;
    var yy=1/-5*x+20;
    var xx=4/30*y-20;
    overlay3.style=`background-position:${x/5+y/5}%`;
   container3.style=`transform : perspective(350px) rotateY(${yy}deg) rotateX(${xx}deg)`;
})

container4.addEventListener('mousemove',function(e){
    var x=e.offsetX;
    var y=e.offsetY;
    var yy=1/-5*x+20;
    var xx=4/30*y-20;
    overlay4.style=`background-position:${x/5+y/5}%`;
   container4.style=`transform : perspective(350px) rotateY(${yy}deg) rotateX(${xx}deg)`;
})

container.addEventListener('click',function(){
    if(flag==1){
    overlay.style='filter:opacity(0)';
    card.style="width:0%";
    card.style="height:0%";
    pokemon.style= 'width:440px';
    pokemon.style= 'height:620px';
    pokemon.style='opacity:100%';
    overlay=1;
    container=1;
    setTimeout(() => {
        flag=0;
    }, 100);
}
})

container1.addEventListener('click',function(){
    if(flag==1){
    overlay1.style='filter:opacity(0)';
    card1.style="width:0%";
    card1.style="height:0%";
    pokemon1.style= 'width:440px';
    pokemon1.style= 'height:620px';
    pokemon1.style='opacity:100%';
    overlay1=1;
    container1=1;
    setTimeout(() => {
        flag=0;
    }, 100);
}
})

container2.addEventListener('click',function(){
    if(flag==1){
    overlay2.style='filter:opacity(0)';
    card2.style="width:0%";
    card2.style="height:0%";
    pokemon2.style= 'width:440px';
    pokemon2.style= 'height:620px';
    pokemon2.style='opacity:100%';
    overlay2=1;
    container2=1;
    setTimeout(() => {
        flag=0;
    }, 100);
}
})

container3.addEventListener('click',function(){
    if(flag==1){
    overlay3.style='filter:opacity(0)';
    card3.style="width:0%";
    card3.style="height:0%";
    pokemon3.style= 'width:440px';
    pokemon3.style= 'height:620px';
    pokemon3.style='opacity:100%';
    overlay3=1;
    container3=1;
    setTimeout(() => {
        flag=0;
    }, 100);
}
})

container4.addEventListener('click',function(){
    if(flag==1){
    overlay4.style='filter:opacity(0)';
    card4.style="width:0%";
    card4.style="height:0%";
    pokemon4.style= 'width:440px';
    pokemon4.style= 'height:620px';
    pokemon4.style='opacity:100%';
    overlay4=1;
    container4=1;
    setTimeout(() => {
        flag=0;
    }, 100);
}
})


pokemon.addEventListener('click',function(){
    if(flag==0){
        card.style="width:100%";
        card.style="height:100%";
        overlay=document.querySelector('.overlay');
        container=document.querySelector('.container');
        pokemon.style='opacity:0%';
        pokemon.style='height:0px';
        pokemon.style='width:0px';
        container.style='transform:perspective(350px) rotateY(0deg) rotateX(0deg)';
        setTimeout(()=>{
            flag=1;
        },100)
        }
})

pokemon1.addEventListener('click',function(){
    if(flag==0){
        card1.style="width:100%";
        card1.style="height:100%";
        overlay1=document.querySelector('.overlay1');
        container1=document.querySelector('.container1');
        pokemon1.style='opacity:0%';
        pokemon1.style='height:0px';
        pokemon1.style='width:0px';
        container1.style='transform:perspective(350px) rotateY(0deg) rotateX(0deg)';
        setTimeout(()=>{
            flag=1;
        },100)
        }
})

pokemon2.addEventListener('click',function(){
    if(flag==0){
        card2.style="width:100%";
        card2.style="height:100%";
        overlay2=document.querySelector('.overlay2');
        container2=document.querySelector('.container2');
        pokemon2.style='opacity:0%';
        pokemon2.style='height:0px';
        pokemon2.style='width:0px';
        container2.style='transform:perspective(350px) rotateY(0deg) rotateX(0deg)';
        setTimeout(()=>{
            flag=1;
        },100)
        }
})

pokemon3.addEventListener('click',function(){
    if(flag==0){
        card3.style="width:100%";
        card3.style="height:100%";
        overlay3=document.querySelector('.overlay3');
        container3=document.querySelector('.container3');
        pokemon3.style='opacity:0%';
        pokemon3.style='height:0px';
        pokemon3.style='width:0px';
        container3.style='transform:perspective(350px) rotateY(0deg) rotateX(0deg)';
        setTimeout(()=>{
            flag=1;
        },100)
        }
})

pokemon4.addEventListener('click',function(){
    if(flag==0){
        card4.style="width:100%";
        card4.style="height:100%";
        overlay4=document.querySelector('.overlay4');
        container4=document.querySelector('.container4');
        pokemon4.style='opacity:0%';
        pokemon4.style='height:0px';
        pokemon4.style='width:0px';
        container4.style='transform:perspective(350px) rotateY(0deg) rotateX(0deg)';
        setTimeout(()=>{
            flag=1;
        },100)
        }
})