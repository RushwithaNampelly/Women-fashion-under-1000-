// HERO SLIDER

const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");

if(slides && dots.length > 0){

let index = 0;

function autoSlide(){

index++;

if(index >= dots.length){
index = 0;
}

slides.style.transform =
`translateX(-${index * 100}vw)`; // FIXED

dots.forEach(dot=>{
dot.classList.remove("active");
});

dots[index].classList.add("active");

}

setInterval(autoSlide,3000);

}



// DROPDOWN

const dropdown = document.querySelector(".dropdown");
const subcategories = document.querySelector(".subcategories");

if(dropdown && subcategories){

dropdown.addEventListener("click",(e)=>{

e.stopPropagation();

subcategories.classList.toggle("show");

});

document.addEventListener("click",()=>{

subcategories.classList.remove("show");

});

}



// PRODUCTS

fetch("data.json")

.then(response => response.json())

.then(data=>{

const container =
document.getElementById("products");

if(!container) return;

const page =
window.location.pathname
.split("/")
.pop()
.replace(".html","");

const filtered =
data.filter(product =>
product.category === page
);

container.innerHTML="";

filtered.forEach(product=>{

container.innerHTML += `

<div class="card">

<img src="${product.image}">

<div class="card-content">

<h3>${product.title}</h3>

<p>${product.description}</p>

<span class="price">${product.price}</span>
<a href="${product.link}"
class="buy-btn"
target="_blank">

Buy Now

</a>

</div>

</div>

`;

});

// SEARCH PRODUCTS

const searchBox = document.getElementById("searchBox");

if(searchBox){

searchBox.addEventListener("input",()=>{

const searchValue =
searchBox.value.toLowerCase();

const cards =
document.querySelectorAll(".card");

cards.forEach(card=>{

const title =
card.querySelector("h3")
.innerText
.toLowerCase();

const description =
card.querySelector("p")
.innerText
.toLowerCase();

if(
title.includes(searchValue) ||
description.includes(searchValue)
){

card.style.display="";

}else{

card.style.display="none";

}

});

});

}

})

.catch(error=>{

console.log(error);

});
// MOBILE MENU

const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

if(menuIcon && navLinks){

menuIcon.addEventListener("click", ()=>{

navLinks.classList.toggle("show");

});

}