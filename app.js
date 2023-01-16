const excusa = document.querySelector('#excusa')
const button = document.querySelector('#btn')

window.addEventListener('load',()=>{
    excusa.innerHTML = generatorExcuses()
})

button.addEventListener('click',()=>{
    location.reload()
})




function generatorExcuses() {
  const names = ['Chavez', 'CICP', 'Tuparamo', 'Diosdado'];
  const place = ['in Barinas', 'in Apure', 'in Finca', 'in Hatillo'];
  const objects = ['Homework', 'Laptop', 'Car', 'Shoes'];
  const situations = ['Stole my', 'Eat my', 'Took my', 'Kick my'];

  let namesIndex = Math.floor(Math.random() * names.length);
  let placesIndex = Math.floor(Math.random() * place.length);
  let objectsIndex = Math.floor(Math.random() * objects.length);
  let situationsIndex = Math.floor(Math.random() * situations.length);

  return (
    names[namesIndex] +
    ' ' +
    place[placesIndex] +
    ' ' +
    situations[situationsIndex] +
    ' ' +
    objects[objectsIndex] 
  );
}



