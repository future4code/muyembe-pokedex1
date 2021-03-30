    
    export const onClickPokedex = (history) => {
        history.push('/pokedex')
    }

    export const onClickDetalhes = (history, nomePokemon) => {
        history.push(`/detalhes/${nomePokemon}`)
    }

    export const onClickVoltar = (history) => {
        history.goBack('/')
      }