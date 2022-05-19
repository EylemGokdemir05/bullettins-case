export const ADD_BULLETIN = "ADD_BULLETIN";
export const REMOVE_BULLETIN = "REMOVE_BULLETIN";

const addBullettinToCard = (bullettin,state) => {
    const updateCard = [...state.card];
    const updatedItemIndex = updateCard.findIndex((item)=>console.log('item: ',item));

    if(updatedItemIndex<0){
        updateCard.push({...bullettin,quantity:1});
    } else {
        const updatedItem = {
            ...updateCard[updatedItemIndex]
        };
        updatedItem.quantity++;
        updateCard[updatedItemIndex]=updatedItem;
    }
    return {...state,card:updateCard};
}

const removeBullettinFromCard = (bullettinId,state) => {
    console.log('Removing bullettinId: ',bullettinId);
    const updateCard = [...state.card];
    const updatedItemIndex = updateCard.findIndex((item)=>item.id === bullettin.id);
    
    const updatedItem = {
        ...updateCard[updatedItemIndex]
    };
    updatedItem.quantity--;

    if(updatedItem.quantity<=0){
        updateCard.splice(updatedItemIndex,1);
    } else {
        updateCard[updatedItemIndex]=updatedItem;
    }
    return {...state,card:updateCard};
}

export const reducer = (state,action) => {
    switch (action.type) {
        case "ADD_BULLETIN":
            return addBullettinToCard(action.bullettin,state);
        case "REMOVE_BULLETIN":
            return removeBullettinFromCard(action.bullettinId,state);
        default:
            return state;
    }
}