const mainContainer = document.querySelector('.main-container')
const setGridSize = document.querySelector('.grid-size')

const eraser= document.querySelector('.eraser')
const red = document.querySelector('.red')
const blue = document.querySelector('.blue')
const rainbow = document.querySelector('.rainbow')


function etchASketch(gridSize) {
  for (let i = 1; i <= gridSize; i++) {
    const divi = document.createElement('div')
    divi.style.cssText = 
    'flex: 1; display: flex; flex-direction: column'
    mainContainer.appendChild(divi)
  
    for(let j = 1; j <= gridSize; j++) {
      const divij = document.createElement('div')
      divij.style.cssText = 
      'border: 1px solid black; flex: 1'
      divi.appendChild(divij)
  
      let color = 'green'
  
      eraser.addEventListener('click', () => color = '')
      red.addEventListener('click', () => color = 'red')
      blue.addEventListener('click', () => color = 'blue')
      rainbow.addEventListener('click', () => color = getRandomColor())
  
      divij.addEventListener('mouseover', () => {
        divij.style.backgroundColor = color
      })
    }
  }
}

etchASketch(16);