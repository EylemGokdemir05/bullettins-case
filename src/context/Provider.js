import React, {useReducer} from 'react'
import {reducer,ADD_BULLETIN,REMOVE_BULLETIN} from './reducer'
import Context,{initialState} from './store'

const Provider=(props)=>{
    const bullettins=[];
    const [state,dispatch]=useReducer(reducer,{card:[]});

    const addBullettinToCard = (bullettin) => {
        setTimeout(()=>{
            dispatch({type:ADD_BULLETIN,bullettin:bullettin});
        },700);
    }

    const removeBullettinFromCard = (bullettinId) => {
        setTimeout(()=>{
            dispatch({type:REMOVE_BULLETIN,bullettinId:bullettinId});
        },700);
    }

    return(
        <Context.Provider 
            value={{
                bullettins:bullettins,
                card:state.card,
                addBullettinToCard:addBullettinToCard,
                removeBullettinFromCard:removeBullettinFromCard
            }}>
            {props.children}
        </Context.Provider>
    )
}
export default Provider