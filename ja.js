const ranking=document.getElementById('ranking')
const ranking_name=document.getElementById('ranking_name')
var container=document.querySelector('.container');
var container1=document.querySelector('.container1')
var container2=document.querySelector('.container2')
var container5=document.querySelector('.container5');
var container6=document.querySelector('.container6')
var container7=document.querySelector('.container7')
var container10=document.querySelector('.container10');
var container11=document.querySelector('.container11')
var container12=document.querySelector('.container12')
var container15=document.querySelector('.container15');
var container16=document.querySelector('.container16')
var container17=document.querySelector('.container17')
var overlay=document.querySelector('.overlay');
var overlay1=document.querySelector('.overlay1')
var overlay2=document.querySelector('.overlay2')
var overlay5=document.querySelector('.overlay5');
var overlay6=document.querySelector('.overlay6')
var overlay7=document.querySelector('.overlay7')
var overlay10=document.querySelector('.overlay10');
var overlay11=document.querySelector('.overlay11')
var overlay12=document.querySelector('.overlay12')
var overlay15=document.querySelector('.overlay15');
var overlay16=document.querySelector('.overlay16')
var overlay17=document.querySelector('.overlay17')
var card=document.querySelector('.card');
var card1=document.querySelector('.card1');
var card2=document.querySelector('.card2');
var card5=document.querySelector('.card5');
var card6=document.querySelector('.card6');
var card7=document.querySelector('.card7');
var card10=document.querySelector('.card10');
var card11=document.querySelector('.card11');
var card12=document.querySelector('.card12');
var card15=document.querySelector('.card15');
var card16=document.querySelector('.card16');
var card17=document.querySelector('.card17');
var pokemon=document.querySelector('.pokemon');
var pokemon1=document.querySelector('.pokemon1');
var pokemon2=document.querySelector('.pokemon2');
var pokemon5=document.querySelector('.pokemon5');
var pokemon6=document.querySelector('.pokemon6');
var pokemon7=document.querySelector('.pokemon7');
var pokemon10=document.querySelector('.pokemon10');
var pokemon11=document.querySelector('.pokemon11');
var pokemon12=document.querySelector('.pokemon12');
var pokemon15=document.querySelector('.pokemon15');
var pokemon16=document.querySelector('.pokemon16');
var pokemon17=document.querySelector('.pokemon17');
pokemon.style='width:0%; height:0%';
pokemon1.style='width:0%; height:0%';
pokemon2.style='width:0%; height:0%';
pokemon5.style='width:0%; height:0%';
pokemon6.style='width:0%; height:0%';
pokemon7.style='width:0%; height:0%';
pokemon10.style='width:0%; height:0%';
pokemon11.style='width:0%; height:0%';
pokemon12.style='width:0%; height:0%';
pokemon15.style='width:0%; height:0%';
pokemon16.style='width:0%; height:0%';
pokemon17.style='width:0%; height:0%';
overlay.style='filter:opacity(0)';
overlay1.style='filter:opacity(0)';
overlay2.style='filter:opacity(0)';
overlay5.style='filter:opacity(0)';
overlay6.style='filter:opacity(0)';
overlay7.style='filter:opacity(0)';
overlay10.style='filter:opacity(0)';
overlay11.style='filter:opacity(0)';
overlay12.style='filter:opacity(0)';
overlay15.style='filter:opacity(0)';
overlay16.style='filter:opacity(0)';
overlay17.style='filter:opacity(0)';
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

container5.addEventListener('mouseout',function(){
    overlay5.style='filter:opacity(0)';
    container5.style='transform:perspective(350px) rotateY(0deg) rotateX(0deg)';
})

container6.addEventListener('mouseout',function(){
    overlay6.style='filter:opacity(0)';
    container6.style='transform:perspective(350px) rotateY(0deg) rotateX(0deg)';
})

container7.addEventListener('mouseout',function(){
    overlay7.style='filter:opacity(0)';
    container7.style='transform:perspective(350px) rotateY(0deg) rotateX(0deg)';
})

container10.addEventListener('mouseout',function(){
    overlay10.style='filter:opacity(0)';
    container10.style='transform:perspective(350px) rotateY(0deg) rotateX(0deg)';
})
container11.addEventListener('mouseout',function(){
    overlay11.style='filter:opacity(0)';
    container11.style='transform:perspective(350px) rotateY(0deg) rotateX(0deg)';
})

container12.addEventListener('mouseout',function(){
    overlay12.style='filter:opacity(0)';
    container12.style='transform:perspective(350px) rotateY(0deg) rotateX(0deg)';
})


container15.addEventListener('mouseout',function(){
    overlay15.style='filter:opacity(0)';
    container15.style='transform:perspective(350px) rotateY(0deg) rotateX(0deg)';
})
container16.addEventListener('mouseout',function(){
    overlay16.style='filter:opacity(0)';
    container16.style='transform:perspective(350px) rotateY(0deg) rotateX(0deg)';
})

container17.addEventListener('mouseout',function(){
    overlay17.style='filter:opacity(0)';
    container17.style='transform:perspective(350px) rotateY(0deg) rotateX(0deg)';
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
container5.addEventListener('mousemove',function(e){
    var x=e.offsetX;
    var y=e.offsetY;
    var yy=1/-5*x+20;
    var xx=4/30*y-20;
    overlay5.style=`background-position:${x/5+y/5}%`;
    container5.style=`transform : perspective(350px) rotateY(${yy}deg) rotateX(${xx}deg)`;
})

container6.addEventListener('mousemove',function(e){
    var x=e.offsetX;
    var y=e.offsetY;
    var yy=1/-5*x+20;
    var xx=4/30*y-20;
    overlay6.style=`background-position:${x/5+y/5}%`;
   container6.style=`transform : perspective(350px) rotateY(${yy}deg) rotateX(${xx}deg)`;
})


container7.addEventListener('mousemove',function(e){
    var x=e.offsetX;
    var y=e.offsetY;
    var yy=1/-5*x+20;
    var xx=4/30*y-20;
    overlay7.style=`background-position:${x/5+y/5}%`;
   container7.style=`transform : perspective(350px) rotateY(${yy}deg) rotateX(${xx}deg)`;
})
container10.addEventListener('mousemove',function(e){
    var x=e.offsetX;
    var y=e.offsetY;
    var yy=1/-5*x+20;
    var xx=4/30*y-20;
    overlay10.style=`background-position:${x/5+y/5}%`;
   container10.style=`transform : perspective(350px) rotateY(${yy}deg) rotateX(${xx}deg)`;
})


container11.addEventListener('mousemove',function(e){
    var x=e.offsetX;
    var y=e.offsetY;
    var yy=1/-5*x+20;
    var xx=4/30*y-20;
    overlay11.style=`background-position:${x/5+y/5}%`;
   container11.style=`transform : perspective(350px) rotateY(${yy}deg) rotateX(${xx}deg)`;
})
container12.addEventListener('mousemove',function(e){
    var x=e.offsetX;
    var y=e.offsetY;
    var yy=1/-5*x+20;
    var xx=4/30*y-20;
    overlay12.style=`background-position:${x/5+y/5}%`;
   container12.style=`transform : perspective(350px) rotateY(${yy}deg) rotateX(${xx}deg)`;
})


container15.addEventListener('mousemove',function(e){
    var x=e.offsetX;
    var y=e.offsetY;
    var yy=1/-5*x+20;
    var xx=4/30*y-20;
    overlay15.style=`background-position:${x/5+y/5}%`;
   container15.style=`transform : perspective(350px) rotateY(${yy}deg) rotateX(${xx}deg)`;
})


container16.addEventListener('mousemove',function(e){
    var x=e.offsetX;
    var y=e.offsetY;
    var yy=1/-5*x+20;
    var xx=4/30*y-20;
    overlay16.style=`background-position:${x/5+y/5}%`;
   container16.style=`transform : perspective(350px) rotateY(${yy}deg) rotateX(${xx}deg)`;
})
container17.addEventListener('mousemove',function(e){
    var x=e.offsetX;
    var y=e.offsetY;
    var yy=1/-5*x+20;
    var xx=4/30*y-20;
    overlay17.style=`background-position:${x/5+y/5}%`;
   container17.style=`transform : perspective(350px) rotateY(${yy}deg) rotateX(${xx}deg)`;
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

container5.addEventListener('click',function(){
    if(flag==1){
    overlay5.style='filter:opacity(0)';
    card5.style="width:0%";
    card5.style="height:0%";
    pokemon5.style= 'width:440px';
    pokemon5.style= 'height:620px';
    pokemon5.style='opacity:100%';
    overlay5=1;
    container5=1;
    setTimeout(() => {
        flag=0;
    }, 100);
}
})

container6.addEventListener('click',function(){
    if(flag==1){
    overlay6.style='filter:opacity(0)';
    card6.style="width:0%";
    card6.style="height:0%";
    pokemon6.style= 'width:440px';
    pokemon6.style= 'height:620px';
    pokemon6.style='opacity:100%';
    overlay6=1;
    container6=1;
    setTimeout(() => {
        flag=0;
    }, 100);
}
})

container7.addEventListener('click',function(){
    if(flag==1){
    overlay7.style='filter:opacity(0)';
    card7.style="width:0%";
    card7.style="height:0%";
    pokemon7.style= 'width:440px';
    pokemon7.style= 'height:620px';
    pokemon7.style='opacity:100%';
    overlay7=1;
    container7=1;
    setTimeout(() => {
        flag=0;
    }, 100);
}
})


container10.addEventListener('click',function(){
    if(flag==1){
    overlay10.style='filter:opacity(0)';
    card10.style="width:0%";
    card10.style="height:0%";
    pokemon10.style= 'width:440px';
    pokemon10.style= 'height:620px';
    pokemon10.style='opacity:100%';
    overlay10=1;
    container10=1;
    setTimeout(() => {
        flag=0;
    }, 100);
}
})

container11.addEventListener('click',function(){
    if(flag==1){
    overlay11.style='filter:opacity(0)';
    card11.style="width:0%";
    card11.style="height:0%";
    pokemon11.style= 'width:440px';
    pokemon11.style= 'height:620px';
    pokemon11.style='opacity:100%';
    overlay11=1;
    container11=1;
    setTimeout(() => {
        flag=0;
    }, 100);
}
})

container12.addEventListener('click',function(){
    if(flag==1){
    overlay12.style='filter:opacity(0)';
    card12.style="width:0%";
    card12.style="height:0%";
    pokemon12.style= 'width:440px';
    pokemon12.style= 'height:620px';
    pokemon12.style='opacity:100%';
    overlay12=1;
    container12=1;
    setTimeout(() => {
        flag=0;
    }, 100);
}
})

container15.addEventListener('click',function(){
    if(flag==1){
    overlay15.style='filter:opacity(0)';
    card15.style="width:0%";
    card15.style="height:0%";
    pokemon15.style= 'width:440px';
    pokemon15.style= 'height:620px';
    pokemon15.style='opacity:100%';
    overlay15=1;
    container15=1;
    setTimeout(() => {
        flag=0;
    }, 100);
}
})

container16.addEventListener('click',function(){
    if(flag==1){
    overlay16.style='filter:opacity(0)';
    card16.style="width:0%";
    card16.style="height:0%";
    pokemon16.style= 'width:440px';
    pokemon16.style= 'height:620px';
    pokemon16.style='opacity:100%';
    overlay16=1;
    container16=1;
    setTimeout(() => {
        flag=0;
    }, 100);
}
})

container17.addEventListener('click',function(){
    if(flag==1){
    overlay17.style='filter:opacity(0)';
    card17.style="width:0%";
    card17.style="height:0%";
    pokemon17.style= 'width:440px';
    pokemon17.style= 'height:620px';
    pokemon17.style='opacity:100%';
    overlay17=1;
    container17=1;
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


pokemon5.addEventListener('click',function(){
    if(flag==0){
        card5.style="width:100%";
        card5.style="height:100%";
        overlay5=document.querySelector('.overlay5');
        container5=document.querySelector('.container5');
        pokemon5.style='opacity:0%';
        pokemon5.style='height:0px';
        pokemon5.style='width:0px';
        container5.style='transform:perspective(350px) rotateY(0deg) rotateX(0deg)';
        setTimeout(()=>{
            flag=1;
        },100)
        }
})

pokemon6.addEventListener('click',function(){
    if(flag==0){
        card6.style="width:100%";
        card6.style="height:100%";
        overlay6=document.querySelector('.overlay6');
        container6=document.querySelector('.container6');
        pokemon6.style='opacity:0%';
        pokemon6.style='height:0px';
        pokemon6.style='width:0px';
        container6.style='transform:perspective(350px) rotateY(0deg) rotateX(0deg)';
        setTimeout(()=>{
            flag=1;
        },100)
        }
})

pokemon7.addEventListener('click',function(){
    if(flag==0){
        card7.style="width:100%";
        card7.style="height:100%";
        overlay7=document.querySelector('.overlay7');
        container7=document.querySelector('.container7');
        pokemon7.style='opacity:0%';
        pokemon7.style='height:0px';
        pokemon7.style='width:0px';
        container7.style='transform:perspective(350px) rotateY(0deg) rotateX(0deg)';
        setTimeout(()=>{
            flag=1;
        },100)
        }
})

pokemon10.addEventListener('click',function(){
    if(flag==0){
        card10.style="width:100%";
        card10.style="height:100%";
        overlay10=document.querySelector('.overlay10');
        container10=document.querySelector('.container10');
        pokemon10.style='opacity:0%';
        pokemon10.style='height:0px';
        pokemon10.style='width:0px';
        container10.style='transform:perspective(350px) rotateY(0deg) rotateX(0deg)';
        setTimeout(()=>{
            flag=1;
        },100)
        }
})

pokemon11.addEventListener('click',function(){
    if(flag==0){
        card11.style="width:100%";
        card11.style="height:100%";
        overlay11=document.querySelector('.overlay11');
        container11=document.querySelector('.container11');
        pokemon11.style='opacity:0%';
        pokemon11.style='height:0px';
        pokemon11.style='width:0px';
        container11.style='transform:perspective(350px) rotateY(0deg) rotateX(0deg)';
        setTimeout(()=>{
            flag=1;
        },100)
        }
})

pokemon12.addEventListener('click',function(){
    if(flag==0){
        card12.style="width:100%";
        card12.style="height:100%";
        overlay12=document.querySelector('.overlay12');
        container12=document.querySelector('.container12');
        pokemon12.style='opacity:0%';
        pokemon12.style='height:0px';
        pokemon12.style='width:0px';
        container12.style='transform:perspective(350px) rotateY(0deg) rotateX(0deg)';
        setTimeout(()=>{
            flag=1;
        },100)
        }
})


pokemon15.addEventListener('click',function(){
    if(flag==0){
        card15.style="width:100%";
        card15.style="height:100%";
        overlay15=document.querySelector('.overlay15');
        container15=document.querySelector('.container15');
        pokemon15.style='opacity:0%';
        pokemon15.style='height:0px';
        pokemon15.style='width:0px';
        container15.style='transform:perspective(350px) rotateY(0deg) rotateX(0deg)';
        setTimeout(()=>{
            flag=1;
        },100)
        }
})

pokemon16.addEventListener('click',function(){
    if(flag==0){
        card16.style="width:100%";
        card16.style="height:100%";
        overlay16=document.querySelector('.overlay16');
        container16=document.querySelector('.container16');
        pokemon16.style='opacity:0%';
        pokemon16.style='height:0px';
        pokemon16.style='width:0px';
        container16.style='transform:perspective(350px) rotateY(0deg) rotateX(0deg)';
        setTimeout(()=>{
            flag=1;
        },100)
        }
})

pokemon17.addEventListener('click',function(){
    if(flag==0){
        card17.style="width:100%";
        card17.style="height:100%";
        overlay17=document.querySelector('.overlay17');
        container17=document.querySelector('.container17');
        pokemon17.style='opacity:0%';
        pokemon17.style='height:0px';
        pokemon17.style='width:0px';
        container17.style='transform:perspective(350px) rotateY(0deg) rotateX(0deg)';
        setTimeout(()=>{
            flag=1;
        },100)
        }
})

window.addEventListener('scroll', function() {
    var ad = document.getElementById('ad');
    var adContainer = ad.parentNode;
    var adTop = adContainer.offsetTop;
    var scrollPosition = window.scrollY;

    if (scrollPosition >= adTop) {
        ad.style.position = 'fixed';
        ad.style.top = '0';
        adContainer.classList.add('fixed');
    } else {
        ad.style.position = 'relative';
        ad.style.top = 'auto';
        adContainer.classList.remove('fixed');
    }
});
