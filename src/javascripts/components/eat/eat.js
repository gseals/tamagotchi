import util from '../../helpers/utilities';

let full = 100;

const health = () => {
  if (full < 100) {
    full += 10;
    document.getElementById('pro').value = full;
  }
};

const junk = () => {
  if (full > 0) {
    full -= 3;
    document.getElementById('pro').value = full;
  }
};

const eatDiv = () => {
  const domString = `
  <div>
  <h2>Eat</h2>
  <button type="submit" id="healthy">Spinach</button>
  <button type="submit" id="unhealthy">Candy Stick</button>
  <div><progress id="pro" value="100" max="100"></progress></div>
  </div>
  `;
  util.printToDom('eat', domString);
  document.getElementById('healthy').addEventListener('click', health);
  document.getElementById('unhealthy').addEventListener('click', junk);
};

export default { eatDiv };
