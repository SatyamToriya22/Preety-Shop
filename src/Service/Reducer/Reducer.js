import { ADD_To_Cart, Remove_To_Cart,Cart_Button } from '../constant'

export default function cartFunctions(state = [{cartBtn:false}], action) {
    switch (action.type) {
        case ADD_To_Cart:
            return [
                ...state,
                { cartData: action.data }
                
            ]
            case Remove_To_Cart:
                for(let i of state){
                    // console.log('item',i.cartData)
                    // console.log('item action',action)
                    if(i.cartData){
                       if(i.cartData===action.data){
                        state.splice(state.indexOf(i),1)
                        console.log('enterrrrr')
                        break;
                        } 
                    }
                    
                    
                }
                return [
                    ...state
                ]
                
            case Cart_Button:
                console.log('state',state)
                for (let i=0 ;i<state.length;i++){
                    if(state[i].cartBtn===true){
                        state[i].cartBtn=false
                        console.log(state[i].cartBtn)
                    }
                    else{
                        state[i].cartBtn=true
                    }
                }
                return [
                    ...state
                ]
            default:
                return state
    }
}