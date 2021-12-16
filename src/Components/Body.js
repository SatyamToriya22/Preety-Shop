import {Products} from "../prodData"
export default function Body(props) {
    var sum=0;
    for(let i in props.cartData.cartFunctions){
        if(props.cartData.cartFunctions[i].cartData !==undefined){
            sum+=(props.cartData.cartFunctions[i].cartData.price)
        }
    }
    console.log('total', sum)
    return <>
    {console.log('Body',props)}
        <div className='Products'>
            <div className='Prod1 prod'>
                <img className='my-1'src='https://cdn.cliqueinc.com/cache/posts/237368/russian-fashion-237368-1506702275869-image.700x0c.jpg' />
                <h5>{Products.prod1.name}</h5>
                <h5>Price - $ {Products.prod1.price}</h5>
                <button onClick={() => { props.addToCartHandler(Products.prod1)}}  className='btn btn-addcart mx-3 my-1'>Add To Cart</button>
                <button onClick={() => {props.removeToCartHandler(Products.prod1)}}className='btn btn-removecart'>Remove To Cart</button>
            </div>
            <div className='Prod2 prod'>
                <img className='my-1'src='http://www.liveenhanced.com/wp-content/uploads/2018/04/male-model-poses-26.jpg' />
                <h5>{Products.prod2.name}</h5>
                <h5>Price - $ {Products.prod2.price}</h5>
                <button onClick={() => {props.addToCartHandler(Products.prod2)}}className='btn btn-addcart mx-3 my-1'>Add To Cart</button>
                <button onClick={() => {props.removeToCartHandler(Products.prod2)}}className='btn btn-removecart'>Remove To Cart</button>
            </div>
            
        </div>
    </>
}