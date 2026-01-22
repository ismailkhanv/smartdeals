import React, { useReducer } from 'react'

const Reducer = () => {

    const reducerMethod = (state,action)=>{
        switch(action.type){
            case 'count':
                return {...state, count : state.count + 1};

            case 'display':
                return {...state, display : state.display === 'Hello Ik' ? 'Hello Isma' : 'Hello Ik'};
                
                
                default:
                    return state;
            }
        
    }

    let [state,dispatch] = useReducer(reducerMethod, {count:0,display: 'Hello Ik' })
  return (
    <div className='ReduceSection'>
        <div>count: {state.count}</div>
        <div>Message: {state.display}</div>
        <button className='btn' onClick={()=>dispatch({type:'count'})}>Count</button>
        <button className='btn' onClick={()=>dispatch({type:'display'})}>Count Info</button>
    </div>
  )
}

export default Reducer
