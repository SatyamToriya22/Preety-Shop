import {connect} from 'react-redux';
import Body from '../Components/Body';
import {addToCart,removeToCart} from '../Service/Actions/Action';


const mapStateToProps=(state) => {
    
    return {cartData:state}
}
const mapDispatchToProps=(dispatch) => {
    return{
        addToCartHandler:(data) => dispatch(addToCart(data)),
        removeToCartHandler:(data) => dispatch(removeToCart(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Body);