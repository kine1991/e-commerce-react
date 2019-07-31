
import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import './cart-icon.styles.scss'


const CartIcon = ({itemCount, toggleCartHidden}) => {
    // console.log('itemCount')
    // console.log(itemCount)
    return (
        <div className='cart-icon' onClick={()=> toggleCartHidden()}>
            <ShoppingIcon className='shopping-icon' />
            <span className="item-count">{itemCount}</span>
        </div>
    )
}



// const mapStateToProps = (state) => {
//     return {
//         itemCount: selectCartItemsCount(state)
//     }
// }
const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)



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
