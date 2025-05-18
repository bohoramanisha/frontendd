const Hotel=document. getElementById(Hotel);
const navlink=document.getElementById(navlink);

Hotel.addEventListener("click",()=>(navlink.classList.toggle('active')));
navlink, classlist("active");

const text="Welcome to Our Hotel";
const typetext=document.getElementById('typed-text');
let index = 0;

function type(){
   if(index < text.length){
   typetext.textContent +=text.charAt(index);
   index;
    setTimeout(type,150);
   }
}
type();

const project = [
   {
      Image:"Restaurant.jpg",
      title:"Restaurant",
      description:"",
   },
   {
      Image:"Restaurant.jpg",
      title:"Restaurant",
      description:"About the hotel",
   },
   {
      Image:"Restaurant.jpg",
      title:"Restaurant",
      description:"About  the resturant",
   },
]
const container=document.getElementById("project");
   
project.forEach(project => {
     const card=document.createElement("div");
     card.className="project";
     card.innerHTML="";
   <img src ="${restaurant.jpg}" alt="${project.title}"/>
<h3>${Project-title}</h3>  
<p>${project.description}</p> 
`;
container .appendChild(item);
}); 
