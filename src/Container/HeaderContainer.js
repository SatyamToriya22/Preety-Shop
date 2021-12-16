import {connect} from 'react-redux';
import Header from '../Components/Header'
import {cartButton} from '../Service/Actions/Action'

export const mapStateToProps=(state) => {
    return {
        cartData:state
    }
}

export const mapDispatchToProps=(dispatch) => {
    return{
        cartButtonHandler: () => {dispatch(cartButton())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)