let homescroeEl= document.getElementById("home-score");
let guestscoreEl= document.getElementById("guest-score");
let  count=0;
document.getElementById("home1Btn").addEventListener("click",function(){
    count+=1;
    homescroeEl.textContent=count;
    console.log(count);
})
document.getElementById("home2Btn").addEventListener("click",function(){
    count+=2;
    homescroeEl.textContent=count;
    console.log(count);
})
document.getElementById("home3Btn").addEventListener("click",function(){
    count+=3;
    homescroeEl.textContent=count;
    console.log(count);
})
let count2=0;
document.getElementById("guest1Btn").addEventListener("click",function(){
    count2+=1;
    guestscoreEl.textContent=count2;
    console.log(count2);
})
document.getElementById("guest2Btn").addEventListener("click",function(){
    count2+=2;
    guestscoreEl.textContent=count2;
    console.log(count2);
})
document.getElementById("guest3Btn").addEventListener("click",function(){
    count2+=3;
    guestscoreEl.textContent=count2;
    console.log(count2);
})
