import util from '../../helpers/utilities';
import eat from '../eat/eat';
import fight from '../fight/fight';
import play from '../play/play';
import sleep from '../sleep/sleep';

const work = () => {
  const overall = (eat.full + fight.strength + play.fun + sleep.energy) / 4;
  document.getElementById('proOverall').value = overall;
};

const overallProgress = () => {
  work();
  const domString = `
  <div>
  <h2>Overall Progress</h2>
  <div><progress id="proOverall" value="100" max="100"></progress></div>
  </div>
  `;
  util.printToDom('progress', domString);
};

export default { overallProgress };
