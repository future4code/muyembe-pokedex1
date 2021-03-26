import axios from 'axios'
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {BASE_URL} from '../../requisições/requisicoes'

const EvolutionChain = () => {
    const params = useParams();
    const [evolution, setEvolution] = useState([])

 useEffect(() => {
     buscaEvolucao()
 }, [])

    const buscaEvolucao = () => {
        axios
          .get(`${BASE_URL}/evolution-chain/bulbasaur`)
          .then((response) => {
            console.log(response);
            setEvolution(response);
          })
          .catch((error) => {
            console.log(error);
        });


    return (
        <div>
            Hello world
        </div>
    )
}
}

export default EvolutionChain;