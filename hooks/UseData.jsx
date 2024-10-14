import React, { useState } from 'react'
import Dados from '../data/Data'

const UseData = () => {
    const [data , setData] = useState(Dados)

  return {data,setData}


}

export default UseData