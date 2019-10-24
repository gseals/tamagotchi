import '../styles/main.scss';
import eat from './components/eat/eat';
import play from './components/play/play';
import fight from './components/fight/fight';
import sleep from './components/sleep/sleep';
import overallProgress from './components/overallProgressBar/overallProgress';

const init = () => {
  eat.eatDiv();
  play.playDiv();
  fight.fightDiv();
  sleep.sleepDiv();
  overallProgress.overallProgress();
};

init();
