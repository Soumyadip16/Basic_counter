// const inbtn=document.querySelector(".inc");
// const rebtn=document.querySelector(".res");
// const decbtn=document.querySelector(".dec");

var counter=0;

const number=document.querySelector(".number");

document.querySelector(".dec").addEventListener("click",function(){
    counter-=1;
    number.textContent=counter;
    });


document.querySelector(".res").addEventListener("click",function(){
    counter=0;
   // var q=counter;
    number.textContent=counter;
    });

    
        
document.querySelector(".inc").addEventListener("click",function(){
    counter+=1;
    //var p=counter;
    number.textContent=counter;
    });
            