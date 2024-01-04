

//generate a random color
const randomColor = function () {
  let color = '#';
  const hex = '0123456789ABCDEF';
  for (let i = 0; i <= 5; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
console.log(randomColor());

let changeIt;

const changeColor = function () {
  console.log("Clicked Start button")
  if (!changeIt) {
    changeIt = setInterval(changeBGColor, 1000);
  }

  function changeBGColor() {
    console.log("inside", randomColor());
    document.body.style.backgroundColor = randomColor();
  }

}

document.querySelector('#start').addEventListener('click', changeColor);
 
document.querySelector('#stop').addEventListener('click', function () {
  clearInterval(changeIt);
  changeIt = null;
}, false);
