let s1=document.getElementById("sq1");
let s2=document.getElementById("sq2");
let s3=document.getElementById("sq3");
let s4=document.getElementById("sq4");


s1.addEventListener("mouseenter",function(){
    s1.style.backgroundColor="red";
    let r= Math.floor(Math.random()*100);

    s1.innerHTML=`<h1>${r}</h1>`;
});
s1.addEventListener("mouseleave",function(){
    s1.style.backgroundColor="white";
    s1.innerHTML=`<h1>1</h1>`;
});
let clr="green"
s2.addEventListener("mouseenter",function(){
    if(clr=="green"){
        s2.style.backgroundColor="green";
        clr="red";
    }
    else if(clr=="red"){
        s2.style.backgroundColor="red";
        clr="blue";
    }
    else{
        s2.style.backgroundColor="blue";
        clr="green";
    }
});
s2.addEventListener("mouseleave",function(){
    s2.style.backgroundColor="white";
});

s3.addEventListener("mouseenter",function(){
   // s3.style.backgroundColor="blue";
    let r= Math.floor(Math.random()*256);
    let g= Math.floor(Math.random()*256);
    let b= Math.floor(Math.random()*256);
    s3.style.backgroundColor=`rgb(${r},${g},${b})`;
    
});
s3.addEventListener("mouseleave",function(){
    s3.style.backgroundColor="white";
});
s4.addEventListener("click",function(){
   // s3.style.backgroundColor="blue";
    let r= Math.floor(Math.random()*256);
    let g= Math.floor(Math.random()*256);
    let b= Math.floor(Math.random()*256);
    
    s1.style.backgroundColor=`rgb(${r},${b},${g})`;
    s2.style.backgroundColor=`rgb(${g},${r},${b})`;
    s3.style.backgroundColor=`rgb(${b},${g},${r})`;
    
});
s4.addEventListener("mouseleave",function(){
    s1.style.backgroundColor="white";
    s2.style.backgroundColor="white";
    s3.style.backgroundColor="white";

})



