import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectios } from '../../redux/shop/shop.selectors'


import CollectionPreview from '../preview-collection/collection-preview.component'

import './collections-overview.styles.scss'

const CollectionsOverview = ({collections}) => {
    return (
        <div className="collections-overview">
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectios
})

export default connect(mapStateToProps)(CollectionsOverview)




// const mapStateToProps = state => ({
//     collections: state.shop.collections
// })