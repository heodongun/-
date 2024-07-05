var container=document.querySelector('.container');
var container1=document.querySelector('.container1')
var container2=document.querySelector('.container2')
var container3=document.querySelector('.container3')
var container4=document.querySelector('.container4')
var container5=document.querySelector('.container5');
var container6=document.querySelector('.container6')
var container7=document.querySelector('.container7')
var container8=document.querySelector('.container8')
var container9=document.querySelector('.container9')
var container10=document.querySelector('.container10');
var container11=document.querySelector('.container11')
var container12=document.querySelector('.container12')
var container13=document.querySelector('.container13')
var container14=document.querySelector('.container14')
var overlay=document.querySelector('.overlay');
var overlay1=document.querySelector('.overlay1')
var overlay2=document.querySelector('.overlay2')
var overlay3=document.querySelector('.overlay3')
var overlay4=document.querySelector('.overlay4')
var overlay5=document.querySelector('.overlay5');
var overlay6=document.querySelector('.overlay6')
var overlay7=document.querySelector('.overlay7')
var overlay8=document.querySelector('.overlay8')
var overlay9=document.querySelector('.overlay9')
var overlay10=document.querySelector('.overlay10');
var overlay11=document.querySelector('.overlay11')
var overlay12=document.querySelector('.overlay12')
var overlay13=document.querySelector('.overlay13')
var overlay14=document.querySelector('.overlay14')
var card=document.querySelector('.card');
var card1=document.querySelector('.card1');
var card2=document.querySelector('.card2');
var card3=document.querySelector('.card3');
var card4=document.querySelector('.card4');
var card5=document.querySelector('.card5');
var card6=document.querySelector('.card6');
var card7=document.querySelector('.card7');
var card8=document.querySelector('.card8');
var card9=document.querySelector('.card9');
var card10=document.querySelector('.card10');
var card11=document.querySelector('.card11');
var card12=document.querySelector('.card12');
var card13=document.querySelector('.card13');
var card14=document.querySelector('.card14');
var pokemon=document.querySelector('.pokemon');
var pokemon1=document.querySelector('.pokemon1');
var pokemon2=document.querySelector('.pokemon2');
var pokemon3=document.querySelector('.pokemon3');
var pokemon4=document.querySelector('.pokemon4');
var pokemon5=document.querySelector('.pokemon5');
var pokemon6=document.querySelector('.pokemon6');
var pokemon7=document.querySelector('.pokemon7');
var pokemon8=document.querySelector('.pokemon8');
var pokemon9=document.querySelector('.pokemon9');
var pokemon10=document.querySelector('.pokemon10');
var pokemon11=document.querySelector('.pokemon11');
var pokemon12=document.querySelector('.pokemon12');
var pokemon13=document.querySelector('.pokemon13');
var pokemon14=document.querySelector('.pokemon14');
pokemon.style='width:0%; height:0%';
pokemon1.style='width:0%; height:0%';
pokemon2.style='width:0%; height:0%';
pokemon3.style='width:0%; height:0%';
pokemon4.style='width:0%; height:0%';
pokemon5.style='width:0%; height:0%';
pokemon6.style='width:0%; height:0%';
pokemon7.style='width:0%; height:0%';
pokemon8.style='width:0%; height:0%';
pokemon9.style='width:0%; height:0%';
pokemon10.style='width:0%; height:0%';
pokemon11.style='width:0%; height:0%';
pokemon12.style='width:0%; height:0%';
pokemon13.style='width:0%; height:0%';
pokemon14.style='width:0%; height:0%';
overlay.style='filter:opacity(0)';
overlay1.style='filter:opacity(0)';
overlay2.style='filter:opacity(0)';
overlay3.style='filter:opacity(0)';
overlay4.style='filter:opacity(0)';
overlay5.style='filter:opacity(0)';
overlay6.style='filter:opacity(0)';
overlay7.style='filter:opacity(0)';
overlay8.style='filter:opacity(0)';
overlay9.style='filter:opacity(0)';
overlay10.style='filter:opacity(0)';
overlay11.style='filter:opacity(0)';
overlay12.style='filter:opacity(0)';
overlay13.style='filter:opacity(0)';
overlay14.style='filter:opacity(0)';
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

container8.addEventListener('mouseout',function(){
    overlay8.style='filter:opacity(0)';
    container8.style='transform:perspective(350px) rotateY(0deg) rotateX(0deg)';
})

container9.addEventListener('mouseout',function(){
    overlay9.style='filter:opacity(0)';
    container9.style='transform:perspective(350px) rotateY(0deg) rotateX(0deg)';
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

container13.addEventListener('mouseout',function(){
    overlay13.style='filter:opacity(0)';
    container13.style='transform:perspective(350px) rotateY(0deg) rotateX(0deg)';
})

container14.addEventListener('mouseout',function(){
    overlay14.style='filter:opacity(0)';
    container14.style='transform:perspective(350px) rotateY(0deg) rotateX(0deg)';
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
container8.addEventListener('mousemove',function(e){
    var x=e.offsetX;
    var y=e.offsetY;
    var yy=1/-5*x+20;
    var xx=4/30*y-20;
    overlay8.style=`background-position:${x/5+y/5}%`;
   container8.style=`transform : perspective(350px) rotateY(${yy}deg) rotateX(${xx}deg)`;
})

container9.addEventListener('mousemove',function(e){
    var x=e.offsetX;
    var y=e.offsetY;
    var yy=1/-5*x+20;
    var xx=4/30*y-20;
    overlay9.style=`background-position:${x/5+y/5}%`;
   container9.style=`transform : perspective(350px) rotateY(${yy}deg) rotateX(${xx}deg)`;
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

container13.addEventListener('mousemove',function(e){
    var x=e.offsetX;
    var y=e.offsetY;
    var yy=1/-5*x+20;
    var xx=4/30*y-20;
    overlay13.style=`background-position:${x/5+y/5}%`;
   container13.style=`transform : perspective(350px) rotateY(${yy}deg) rotateX(${xx}deg)`;
})

container14.addEventListener('mousemove',function(e){
    var x=e.offsetX;
    var y=e.offsetY;
    var yy=1/-5*x+20;
    var xx=4/30*y-20;
    overlay14.style=`background-position:${x/5+y/5}%`;
   container14.style=`transform : perspective(350px) rotateY(${yy}deg) rotateX(${xx}deg)`;
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

container8.addEventListener('click',function(){
    if(flag==1){
    overlay8.style='filter:opacity(0)';
    card8.style="width:0%";
    card8.style="height:0%";
    pokemon8.style= 'width:440px';
    pokemon8.style= 'height:620px';
    pokemon8.style='opacity:100%';
    overlay8=1;
    container8=1;
    setTimeout(() => {
        flag=0;
    }, 100);
}
})

container9.addEventListener('click',function(){
    if(flag==1){
    overlay9.style='filter:opacity(0)';
    card9.style="width:0%";
    card9.style="height:0%";
    pokemon9.style= 'width:440px';
    pokemon9.style= 'height:620px';
    pokemon9.style='opacity:100%';
    overlay9=1;
    container9=1;
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

container1.addEventListener('click',function(){
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

container13.addEventListener('click',function(){
    if(flag==1){
    overlay13.style='filter:opacity(0)';
    card13.style="width:0%";
    card13.style="height:0%";
    pokemon13.style= 'width:440px';
    pokemon13.style= 'height:620px';
    pokemon13.style='opacity:100%';
    overlay13=1;
    container13=1;
    setTimeout(() => {
        flag=0;
    }, 100);
}
})

container14.addEventListener('click',function(){
    if(flag==1){
    overlay14.style='filter:opacity(0)';
    card14.style="width:0%";
    card14.style="height:0%";
    pokemon14.style= 'width:440px';
    pokemon14.style= 'height:620px';
    pokemon14.style='opacity:100%';
    overlay14=1;
    container14=1;
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

pokemon8.addEventListener('click',function(){
    if(flag==0){
        card8.style="width:100%";
        card8.style="height:100%";
        overlay8=document.querySelector('.overlay8');
        container8=document.querySelector('.container8');
        pokemon8.style='opacity:0%';
        pokemon8.style='height:0px';
        pokemon8.style='width:0px';
        container8.style='transform:perspective(350px) rotateY(0deg) rotateX(0deg)';
        setTimeout(()=>{
            flag=1;
        },100)
        }
})

pokemon9.addEventListener('click',function(){
    if(flag==0){
        card9.style="width:100%";
        card9.style="height:100%";
        overlay9=document.querySelector('.overlay9');
        container9=document.querySelector('.container9');
        pokemon9.style='opacity:0%';
        pokemon9.style='height:0px';
        pokemon9.style='width:0px';
        container9.style='transform:perspective(350px) rotateY(0deg) rotateX(0deg)';
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

pokemon13.addEventListener('click',function(){
    if(flag==0){
        card13.style="width:100%";
        card13.style="height:100%";
        overlay13=document.querySelector('.overlay13');
        container13=document.querySelector('.container13');
        pokemon13.style='opacity:0%';
        pokemon13.style='height:0px';
        pokemon13.style='width:0px';
        container13.style='transform:perspective(350px) rotateY(0deg) rotateX(0deg)';
        setTimeout(()=>{
            flag=1;
        },100)
        }
})

pokemon14.addEventListener('click',function(){
    if(flag==0){
        card14.style="width:100%";
        card14.style="height:100%";
        overlay14=document.querySelector('.overlay14');
        container14=document.querySelector('.container14');
        pokemon14.style='opacity:0%';
        pokemon14.style='height:0px';
        pokemon14.style='width:0px';
        container14.style='transform:perspective(350px) rotateY(0deg) rotateX(0deg)';
        setTimeout(()=>{
            flag=1;
        },100)
        }
})