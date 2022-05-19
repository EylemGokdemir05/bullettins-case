import React, {createContext} from 'react'

export default React.createContext({
    bullettins:[],
    total: 0,
    card: [],
    addBullettinToCard: bullettin => {},
    removeBullettinFromCard: bullettinId => {}
});