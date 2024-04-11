const click=document.querySelector("#click");
const text1=document.querySelector('#text1');
const text2=document.querySelector('#text2');
const click1=document.querySelector('#click1');
const text3=document.querySelector('#text3');
const text4=document.querySelector('#text4');

/*localStorage.setItem('number',2);
localStorage.setItem('1','heodongun');
localStorage.setItem('2','heodongun0922')*/
let error1=0;
click1.addEventListener('click',function(){
  error1=0;
    for(let a=1;a<=localStorage.getItem('number')/1;a+=2){
        if(localStorage.getItem(a)===text3.value){
            error1=1;
        }
    }
    if(error1===0){
    localStorage.setItem(localStorage.getItem('number')/1+1,text3.value);
    localStorage.setItem(localStorage.getItem('number')/1+2,text4.value);
    localStorage.setItem('number',localStorage.getItem('number')/1+2);
    text3.value='';
    text4.value='';
    alert('회원가입됨');
    }
    else{
        alert('아이디중복됨');
    }
})
let error=0;
click.addEventListener('click',function(){
    error=0;
    for(let a=1;a<=localStorage.getItem('number')/1;a+=2){
        if(text1.value===localStorage.getItem(a)){
            if(text2.value===localStorage.getItem(a/1+1)){
                text1.value='';
                 text2.value='';
                alert('login');
                error=1;
            }
        }
    }
    if(error===0){
        alert('오류');
    }
})