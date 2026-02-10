import React, { useContext } from 'react'
import { Productsinfo } from '../../App'

const CatList = () => {
    const products = useContext(Productsinfo) || [];

  return (
    <div>CatList</div>
  )
}

export default CatList