
const dark = document.getElementById('dark')
const light = document.getElementById('light')
const negative = document.getElementById('negative')
const cake = document.getElementById('cake')

let tema = temaActual()
if(!tema){
  localStorage.setItem("tema","light")
  temaNuevo(temaActual())
}
else
{
  temaNuevo(temaActual())
}

dark.addEventListener('click', ()=>{
  if (!tema) {
    localStorage.setItem("tema","dark")
    temaNuevo(temaActual())
  } 
  else {
    temaRemove(temaActual())
    temaNuevo("dark")
  }
  tema = temaActual()
});

light.addEventListener('click', ()=>{
  if (!tema) {
    localStorage.setItem("tema","light")
    temaNuevo(temaActual())
  } 
  else {
    temaRemove(temaActual())
    temaNuevo("light")
  }
  tema = temaActual()
});

negative.addEventListener('click', ()=>{
  if (!tema) {
    localStorage.setItem("tema","negative")
    temaNuevo(temaActual())
  } 
  else {
    temaRemove(temaActual())
    temaNuevo("negative")
  }
  tema = temaActual()
});

cake.addEventListener('click', ()=>{
  if (!tema) {
    localStorage.setItem("tema","cake")
    temaNuevo(temaActual())
  } 
  else {
    temaRemove(temaActual())
    temaNuevo("cake")
  }
  tema = temaActual()
});

function temaActual()
{
  return localStorage.getItem("tema")
}
function temaRemove(temaActual)
{
  document.getElementById('container').classList.remove(temaActual)
}
function temaNuevo(temaNuevo)
{
  document.getElementById('container').classList.add(temaNuevo)
  localStorage.setItem("tema",temaNuevo)
}
