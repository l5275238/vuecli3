export function setTimaFn(fn,time=500) {

  let timer
  return function() {
    if(timer){
      clearTimeout(timer)
      timer=null
    }
    timer=setTimeout(fn(),time)
  }
}
