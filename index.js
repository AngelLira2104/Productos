const divProductos = document.getElementById("divproductos");
const alertError = document.getElementById("alertError");
const URLMain = "https://fakestoreapi.com/products/";
let cont = 0;
function getData(){
  fetch(URLMain).then((response)=> {//fetch regresa una promesa 
    console.log(response);
    response.json().then((res)=>{
        divProductos.innerHTML = `Titulo: ${res[1].title}
        <br/>
        precio: ${res[1].price}`;
    });
  }).catch((err)=>{
    alertError.innerText=`Problema al traer la informacion ${err}`;
    alertError.style.display="block";
  });
}//getDat

function Crearcatas(res){
    fetch(URLMain).then((response)=> {//fetch regresa una promesa 
        console.log(response);
        response.json().then((res)=>{
            divProductos.insertAdjacentHTML("beforeend",
       `<div class="card" style="width: 18rem;">
  <img src="${res[1].image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${res[1].title}</h5>
    <p class="card-text">${res[1].description.substring(1,144)}..</p>
  </div>
</div>`,)
        });
      }).catch((err)=>{
        alertError.innerText=`Problema al traer la informacion ${err}`;
        alertError.style.display="block";
      });
}

function catas(res){
    fetch(URLMain).then((response)=> {//fetch regresa una promesa 
        console.log(response);
        response.json().then((res)=>{
            res.forEach((yo) => {
            divProductos.insertAdjacentHTML("beforeend",
       `<div class="card" style="width: 18rem;">
  <img src="${yo.image}" class="card-img-top width="250px" height="250px"" alt="...">
  <div class="card-body">
    <h5 class="card-title">${yo.title}</h5>
    <p class="card-text">${yo.description.substring(1,144)}..</p>
  </div>
</div>`,) });
        });
      }).catch((err)=>{
        alertError.innerText=`Problema al traer la informacion ${err}`;
        alertError.style.display="block";
      });
}

catas();