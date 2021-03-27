import bug from '../../../assets/bug.png'
import grass from '../../../assets/grass.png'
import poison from '../../../assets/poison.png'
import flying from '../../../assets/flying.png'
import dragon from '../../../assets/dragon.png'
import electric from '../../../assets/electric.png'
import dark from '../../../assets/dark.png'
import fairy from '../../../assets/fairy.png'
import fighting from '../../../assets/fighting.png'
import fire from '../../../assets/fire.png'
import ghost from '../../../assets/ghost.png'
import ground from '../../../assets/ground.png'
import ice from '../../../assets/ice.png'
import normal from '../../../assets/normal.png'
import psychic from '../../../assets/psychic.png'
import rock from '../../../assets/rock.png'
import water from '../../../assets/water.png'
import steel from '../../../assets/steel.png'
import {TypeImage} from './styles'


const TipoDoPokemon = (props) => {
      switch(props.tipoPokemon) {
      case 'grass': 
      return <TypeImage src={grass}/>
      case 'bug':
      return <TypeImage src={bug}/>
      case 'poison':
      return <TypeImage src={poison}/>
      case 'flying':
      return <TypeImage src={flying}/>
      case 'dark':
      return <TypeImage src={dark}/>
      case 'dragon':
      return <TypeImage src={dragon}/>
      case 'electric':
      return <TypeImage src={electric}/>
      case 'fairy':
      return <TypeImage src={fairy}/>
      case 'fighting':
      return <TypeImage src={fighting}/>
      case 'fire':
      return <TypeImage src={fire}/>
      case 'ghost':
      return <TypeImage src={ghost}/>
      case 'ground':
      return <TypeImage src={ground}/>
      case 'ice':
      return <TypeImage src={ice}/>
      case 'normal':
      return <TypeImage src={normal}/>
      case 'psychic':
      return <TypeImage src={psychic}/>
      case 'rock':
      return <TypeImage src={rock}/>
      case 'steel':
      return <TypeImage src={steel}/>
      case 'water':
      return <TypeImage src={water}/>
      default: <TypeImage src={normal}/>
    }
}

export default TipoDoPokemon;