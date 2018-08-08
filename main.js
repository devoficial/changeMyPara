const para = document.querySelector("p");
const color = document.querySelector("input[type='color']");
const size = document.querySelector("#size");
const underline = document.querySelector("#underline");
const italic = document.querySelector("#italic");
const weight = document.querySelector("#weight");

italic.addEventListener("change",(e) => {
  design(e.target.checked,para,"--style","italic","normal");  
})
underline.addEventListener("change",(e) => {
  design(e.target.checked,para,"--decor","underline","none");
})

color.addEventListener("change",(e) => {
  para.style.setProperty("--smbox-main-color",e.target.value);
})

size.addEventListener("change",(e) => {
  para.style.setProperty("--size",`${e.target.value}px`);
})

weight.addEventListener("change",(e) => {
  para.style.setProperty("--weight",e.target.value);
})

function design(bool,el,key,val1,val2){
  if(bool){
    el.style.setProperty(key,val1);
  }else{
    el.style.setProperty(key,val2);
  }
}

