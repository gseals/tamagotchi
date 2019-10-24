import util from '../../helpers/utilities';

let energy = 50;

const smallSleep = () => {
  if (energy > 0) {
    energy += 50;
    document.getElementById('proSleep').value = energy;
  }
};

const bigSleep = () => {
  if (energy > 0) {
    energy += 60;
    document.getElementById('proSleep').value = energy;
  }
};

const sleepDiv = () => {
  const domString = `
  <div>
  <h2>Sleep</h2>
  <button type="submit" id="nap">Nap</button>
  <button type="submit" id="slumber">Deep Slumber</button>
  <div><progress id="proSleep" value="50" max="100"></progress></div>
  </div>
  `;
  util.printToDom('sleep', domString);
  document.getElementById('nap').addEventListener('click', smallSleep);
  document.getElementById('slumber').addEventListener('click', bigSleep);
};

export default { sleepDiv, energy };
