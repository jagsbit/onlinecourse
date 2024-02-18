let db=[
    {
        crimg:"react.svg",
        subtitle:"React",
        tutor:"Suraj Kumar Yadav",
        fees:"$50",
        Rate:"4.5"

    },
    {
        crimg:"vue.png",
        subtitle:"Vue Js",
        tutor:"Sourabh Shukhla",
        fees:"$46",
        Rate:"2.5"

        
    },
    {
        crimg:"html.png",
        subtitle:"HTML",
        tutor:"Sumit Keshri",
        fees:"free",
        Rate:"3.9"


    },
    {
        crimg:"angular.svg",
        subtitle:"Angular",
        tutor:"Suraj Kumar yadav",
        fees:"$40",
        Rate:"4.5"

         

    },
    {
        crimg:"node.png",
        subtitle:"Node .js",
        tutor:"Hitesh Choudhry",
        fees:"$45",
        Rate:"4.6"

         


    },
    {
        crimg:"js.png",
        subtitle:"JavaScript",
        tutor:"Jagannath Nayak",
        fees:"free",
        Rate:"4.8"

       

    },
    {
        crimg:"CSS3.svg.png",
        subtitle:"CSS",
        tutor:"Shravan Choudhry",
        fees:"10% dicount on $30",
        Rate:"4.1"

          

    },
    {
        crimg:"boot.svg.png",
        subtitle:"BootStrap",
        tutor:"Jagannath Nayak",
        fees:"free",
        Rate:"4"

        
    }
]
let course=document.querySelectorAll('.course')
let img=document.querySelectorAll('.cr-img')
let title=document.querySelectorAll('.subtitle')
let tutor=document.querySelectorAll('.tutor-name')
let fees=document.querySelectorAll('.abt-course')
let rate=document.querySelectorAll('.rate')

for(let i=0;i<course.length;i++){
    img[i].setAttribute("src",db[i].crimg)
    title[i].innerText=title[i].innerText+" "+db[i].subtitle
    tutor[i].innerText=tutor[i].innerText+" "+db[i].tutor
    fees[i].innerText=fees[i].innerText+" "+db[i].fees
    rate[i].innerText=rate[i].innerText+" "+db[i].Rate

    
}
let paidBtn=document.querySelector('#paid-btn')
let allBtn=document.querySelector('#all-btn')
let freeBtn=document.querySelector('#free-btn')
let discountBtn=document.querySelector('#discount-btn')
let paid=document.querySelectorAll('.paid')
let free=document.querySelectorAll('.free')
let dis=document.querySelectorAll('.discount')
paidBtn.addEventListener('click',()=>{
     for(let i=0;i<free.length;i++){
        free[i].style.display="none"
     }
     for(let i=0;i<paid.length;i++){
        paid[i].style.display="flex"
     }
     for(let i=0;i<dis.length;i++){
        dis[i].style.display="none"
     }
})
freeBtn.addEventListener('click',()=>{
    for(let i=0;i<free.length;i++){
        free[i].style.display="flex"
     }
     for(let i=0;i<paid.length;i++){
        paid[i].style.display="none"
     }
     for(let i=0;i<dis.length;i++){
        dis[i].style.display="none"
     }
})
discountBtn.addEventListener('click',()=>{
    for(let i=0;i<free.length;i++){
        free[i].style.display="none"
     }
     for(let i=0;i<paid.length;i++){
        paid[i].style.display="none"
     }
     for(let i=0;i<dis.length;i++){
        dis[i].style.display="flex"
     }
})
allBtn.addEventListener('click',()=>{
    for(let i=0;i<free.length;i++){
        free[i].style.display="flex"
     }
     for(let i=0;i<paid.length;i++){
        paid[i].style.display="flex"
     }
     for(let i=0;i<dis.length;i++){
        dis[i].style.display="flex"
     }
    
})

