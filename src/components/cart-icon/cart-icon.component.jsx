
import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import './cart-icon.styles.scss'


const CartIcon = (props) => {
    // console.log(props.hidden)
    // console.log(this.props.cart)
    return (
        <div className='cart-icon' onClick={()=> props.toggleCartHidden()}>
            <ShoppingIcon className='shopping-icon' />
            <span className="item-count">0</span>
        </div>
    )
}



// const mapStateToProps = (state) => ({
//     hidden: state.cart.hidden
// })
const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon)



// import React from 'react';
// import { connect } from 'react-redux';

// import { toggleCartHidden } from '../../redux/cart/cart.actions';

// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

// import './cart-icon.styles.scss';

// const CartIcon = ({ toggleCartHidden }) => (
//   <div className='cart-icon' onClick={toggleCartHidden}>
//     <ShoppingIcon className='shopping-icon' />
//     <span className='item-count'>0</span>
//   </div>
// );

// const mapDispatchToProps = dispatch => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden())
// });

// export default connect(
//   null,
//   mapDispatchToProps
// )(CartIcon);

