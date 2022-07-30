import filtros from './filter.json';
import styles from './Filter.module.scss'
import React from 'react'
import classNames from 'classnames';

type IOpcao = typeof filtros[0];

interface Props {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filter({filtro, setFiltro} : Props) {


  function selectFilter(opcao: IOpcao){
    if(filtro === opcao.id) return setFiltro(null)
    return setFiltro(opcao.id)
  }

  return(
    <div className={styles.filtros}>

      {filtros.map((opcao) => (
          <button key={opcao.id}  onClick={() => selectFilter(opcao)}
           className={classNames({
            [styles.filtros__filtro]: true,
            [styles['filtros__filtro--ativo']]: filtro === opcao.id
           })}>
              {opcao.label}
          </button>
      ))}
    </div>
  )
}