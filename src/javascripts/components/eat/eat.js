import util from '../../helpers/utilities';

let currentLength = document.getElementById('progress').value;

const increase = () => {
  if (currentLength < 90) {
    currentLength += 10;
    document.getElementById('progress').value = currentLength;
  } else if ((currentLength > 90 && currentLength < 100)) {
    currentLength = 100;
    document.getElementById('progress').value = currentLength;
  }
};

const decrease = () => {
  if (currentLength > 10) {
    currentLength -= 10;
    document.getElementById('progress').value = currentLength;
  } else if (currentLength > 0 && currentLength < 10) {
    currentLength = 0;
    document.getElementById('progress').value = currentLength;
  }
};

const eatDiv = () => {
  const domString = `
  <div>
  <h2>Eat</h2>
  <button type="submit" id="healthy">Healthy Food</button>
  <button type="submit" id="unhealthy">Unhealthy Food</button>
  <div><progress id="progress" value="60" max="100"></progress></div>
  </div>
  `;
  util.printToDom('eat', domString);
  document.getElementById('healthy').addEventListener('click', increase);
  document.getElementById('unhealthy').addEventListener('click', decrease);
};

export default {
  eatDiv,
};
