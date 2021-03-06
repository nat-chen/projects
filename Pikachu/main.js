(function () {
  let duration = 50;
  let styleText = `
  .view {
    width: 100%;
    height: 165px;
    position: relative;
  }
  
  .nose {
    border-style: solid;
    border-width: 12px;
    border-color: black transparent transparent;
    border-radius: 11px;
    position: absolute;
    left: 50%;
    top: 28px;
    margin-left: -12px;
  }
  
  .eye {
    width: 49px;
    height: 49px;
    background: #2E2E2E;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #000000;
  }
  
  .eye::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background: white;
    position: absolute;
    border-radius: 50%;
    left: 6px;
    top: -1px;
    border: 2px solid #000;
  }
  
  .eye.left {
    right: 50%;
    margin-right: 90px;
  }
  
  .eye.right {
    left: 50%;
    margin-left: 90px;
  }
  
  .face {
    width: 68px;
    height: 68px;
    background: #FC0D1C;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
    top: 85px;
  }
  
  .face.left {
    right: 50%;
    margin-right: 116px;
  }
  
  .face.right {
    left: 50%;
    margin-left: 116px;
  }
  
  .upperLip {
    height: 25px;
    width: 80px;
    border: 2px solid black;
    position: absolute;
    top: 50px;
    background: #FDE348;
  }
  
  .upperLip.left {
    right: 50%;
    border-bottom-left-radius: 40px 25px;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg);
  }
  
  .upperLip.right {
    left: 50%;
    border-bottom-right-radius: 40px 25px;
    border-top: none;
    border-left: none;
    transform: rotate(20deg);
  }
  
  .lowerLip-wrapper {
    bottom: 0;
    position: absolute;
    left: 50%;
    margin-left: -150px;
    z-index: -1;
    height: 110px;
    overflow: hidden;
    width: 300px;
  }
  
  .lowerLip {
    height: 3500px;
    width: 300px;
    background: #990513;
    border-radius: 200px/2000px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    overflow: hidden;
  }
  
  .lowerLip::after {
    content: '';
    position: absolute;
    bottom: -20px;
    width: 100px;
    height: 100px;
    background: #FC4A62;
    left: 50%;
    margin-left: -50px;
    border-radius: 50px;
  }
  
  .code-actionButton {
    position: absolute;
    top: 30px;
    right: 30px;
    display: flex;
    flex-direction: column;
  }` 

  let currentIndex = 1;
  let styleTextLength = styleText.length;
  const codeWrapper = document.querySelector('.code-wrapper');

  const buttons = document.querySelector('.code-actionButton');
  buttons.addEventListener('click', (event) => {
    let button = event.target;
    let speed = button.getAttribute('data-speed');
    switch (speed) {
      case 'slow':
        duration = 100;
        break;
      case 'middle':
        duration = 50;
        break;
      case 'fast':
        duration = 10;
        break;
    }
  }, false);

  
  setTimeout(function run() {
    if (currentIndex <= styleTextLength) {
      let text = styleText.substring(0, currentIndex++);
      document.querySelector('#style').innerText = text;
      document.querySelector('.code-text').innerText = text;
      codeWrapper.scrollTop = codeWrapper.scrollHeight;
      setTimeout(run, duration);
    } 
  }, duration);
})()
