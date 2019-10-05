import util from '../../helpers/utilities';

let fun = 100;

const playTime = () => {
  if (fun < 100 || fun === 50) {
    fun += 10;
    document.getElementById('proPlay').value = fun;
  }
};

const lameTime = () => {
  if (fun > 0) {
    fun -= 3;
    document.getElementById('proPlay').value = fun;
  }
};

const playDiv = () => {
  const domString = `
  <div>
  <h2>Play</h2>
  <button type="submit" id="superFun">Super Fun Activity</button>
  <button type="submit" id="slightFun">Slightly Fun Activity</button>
  <div><progress id="proPlay" value="50" max="100"></progress></div>
  </div>
  `;
  util.printToDom('play', domString);
  document.getElementById('superFun').addEventListener('click', playTime);
  document.getElementById('slightFun').addEventListener('click', lameTime);
};

export default { playDiv };
