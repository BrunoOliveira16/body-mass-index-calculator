/* ============== Icones para seção Tips ================ */
import Eating from '../assets/images/icon-eating.svg'
import Exercise from '../assets/images/icon-exercise.svg'
import Sleep from '../assets/images/icon-sleep.svg'

/* ============== Icones para seção BmiLimits ================ */
import Gender from '../assets/images/icon-gender.svg'
import Age from '../assets/images/icon-age.svg'
import Muscle from '../assets/images/icon-muscle.svg'
import Pregnancy from '../assets/images/icon-pregnancy.svg'
import Race from '../assets/images/icon-race.svg'

export const TipsData = [
  {
    title: 'Alimentação saudável',
    text: 'A alimentação saudável promove controle de peso, prevenção de doenças, melhor digestão, imunidade, clareza mental e humor.',
    icon: Eating
  },
  {
    title: 'Exercício regular',
    text: 'O exercício melhora o condicionamento físico, ajuda no controle do peso, eleva o humor e reduz o risco de doenças, promovendo o bem-estar e a longevidade.',
    icon: Exercise
  },
  {
    title: 'Sono adequado',
    text: 'O sono melhora a clareza mental, a estabilidade emocional e o bem-estar físico, promovendo a restauração e o rejuvenescimento geral.',
    icon: Sleep
  }
]

export const BmiLimitsData = [
  {
    id: 1,
    title: 'Gênero',
    text: 'O desenvolvimento e a composição da gordura corporal de meninas e meninos variam com a idade. Consequentemente, a idade e o sexo da criança são considerados na avaliação do seu IMC.',
    icon: Gender
  },
  {
    id: 2,
    title: 'Idade',
    text: 'Em indivíduos idosos, o aumento da gordura corporal e a perda muscular podem fazer com que o IMC subestime o conteúdo de gordura corporal.',
    icon: Age
  },
  {
    id: 3,
    title: 'Músculo',
    text: 'O IMC pode classificar erroneamente indivíduos musculosos como com sobrepeso ou obesidade, pois não diferencia músculo de gordura.',
    icon: Muscle
  },
  {
    id: 4,
    title: 'Gravidez',
    text: 'As gestantes experimentam ganho de peso devido ao crescimento do bebê. Manter um IMC pré-gravidez saudável é aconselhável para minimizar os riscos à saúde da mãe e do filho.',
    icon: Pregnancy
  },
  {
    id: 5,
    title: 'Raça',
    text: 'Certos problemas de saúde podem afetar indivíduos de algumas origens negras e asiáticas com IMC mais baixos do que outros. Para saber mais, é aconselhável discutir isso com seu médico de família ou enfermeira.',
    icon: Race
  }
]
