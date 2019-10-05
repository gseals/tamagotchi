import util from '../../helpers/utilities';

let fun = 100;

const  = () => {
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

const playDiv = () => {
  const domString = `
  <div>
  <h2>Eat</h2>
  <button type="submit" id="healthy">Spinach</button>
  <button type="submit" id="unhealthy">Candy Stick</button>
  <div><progress id="pro" value="50" max="100"></progress></div>
  </div>
  `;
  util.printToDom('eat', domString);
  document.getElementById('healthy').addEventListener('click', health);
  document.getElementById('unhealthy').addEventListener('click', junk);
};

export default { eatDiv };