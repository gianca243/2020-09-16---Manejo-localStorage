
const dark = document.getElementById('dark')
const light = document.getElementById('light')
const negative = document.getElementById('negative')
const cake = document.getElementById('cake')
let tema = localStorage.getItem("tema")
if (tema != null) {
  tema = localStorage.getItem("tema")
  if (tema == 'dark') {
    document.getElementById('container').classList.add('dark')
    localStorage.setItem("tema","dark")
  } else {
    if (tema == 'light') {
      document.getElementById('container').classList.add('light')
      localStorage.setItem("tema","light")
    } else {
      if (tema == 'negative') {
        document.getElementById('container').classList.add('negative')
        localStorage.setItem("tema","negative")
      } else {
        if(tema == "cake"){
          document.getElementById('container').classList.add('cake')
          localStorage.setItem("tema","cake")
        }
      }
    }    
  }
} 
dark.addEventListener('click', ()=>{
  console.log("tema evento", tema);
  if (tema != null) {
    document.getElementById('container').classList.replace(tema,'dark')
    console.log('omg',document.getElementById('container').classList);
    localStorage.setItem("tema","dark")
    console.log("oscuro1"); 
  } else {
    document.getElementById('container').classList.add('dark')
    localStorage.setItem("tema","dark")
    console.log("oscuro");
  }
  tema = localStorage.getItem("tema")
})
light.addEventListener('click', ()=>{
  console.log("tema evento", tema);
  if (tema != null) {
    document.getElementById('container').classList.replace(tema,'light')
    console.log('omg',document.getElementById('container').classList);
    localStorage.setItem("tema","light")
    console.log("claro1");
  } else {
    document.getElementById('container').classList.add('light')
    localStorage.setItem("tema","light")
    console.log("claro");
  } 
  tema = localStorage.getItem("tema")
})
negative.addEventListener('click', ()=>{
  console.log("tema evento", tema);
  if (tema != null) {
    document.getElementById('container').classList.replace(tema,'negative')
    console.log('omg',document.getElementById('container').classList);
    localStorage.setItem("tema","negative")
    console.log("negative");
  } else {
    document.getElementById('container').classList.add('negative')
    localStorage.setItem("tema","negative")
    console.log("negative");
  } 
  tema = localStorage.getItem("tema")
})
cake.addEventListener('click', ()=>{
  console.log("tema evento", tema);
  if (tema != null) {
    document.getElementById('container').classList.replace(tema,'cake')
    console.log('omg',document.getElementById('container').classList);
    localStorage.setItem("tema","cake")
    console.log("cake");
  } else {
    document.getElementById('container').classList.add('cake')
    localStorage.setItem("tema","cake")
    console.log("cake");
  } 
  tema = localStorage.getItem("tema")
})

