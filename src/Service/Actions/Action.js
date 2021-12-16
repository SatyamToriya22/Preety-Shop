import {ADD_To_Cart,Remove_To_Cart,Cart_Button} from '../constant'

export function addToCart(data){
    console.log('Action',data)
    return {
        type:ADD_To_Cart,
        data:data
    }
}

export  function removeToCart(data){
    console.log('Action',data)
    return{
        type:Remove_To_Cart,
        data:data
    }
}

export function cartButton(){
    return {
        type:Cart_Button
    }
}