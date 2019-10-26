import util from '../../helpers/utilities';

let strength = 100;

const flee = () => {
  if (strength > 0) {
    strength += 1;
    document.getElementById('proFight').value = strength;
  }
};

const slap = () => {
  if (strength > 0) {
    strength -= 10;
    document.getElementById('proFight').value = strength;
  }
};

const fightDiv = () => {
  const domString = `
  <div>
  <h2>Fight</h2>
  <button type="submit" id="run">Running Away (Bravely)</button>
  <button type="submit" id="hit">Committing Violence</button>
  <div><progress id="proFight" value="50" max="100"></progress></div>
  </div>
  `;
  util.printToDom('fight', domString);
  document.getElementById('run').addEventListener('click', flee);
  document.getElementById('hit').addEventListener('click', slap);
};

export default { fightDiv, strength };
