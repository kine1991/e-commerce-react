import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import { connect } from 'react-redux'

import { addItem } from '../../redux/cart/cart.actions'

import './collection-item.styles.scss'

const CollectionItem = ({item, addItem}) => {
// const CollectionItem = ({id, imageUrl, name, price}) => {
    // console.log(id, imageUrl, name, price)
    const {imageUrl, name, price} = item
    return (
        <div className="collection-item">
            <div className="image">
                <div
                    className="image"
                    style={{
                        backgroundImage: `url(${imageUrl})`
                    }}
                />
            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item))
})


export default connect(null, mapDispatchToProps)(CollectionItem)
