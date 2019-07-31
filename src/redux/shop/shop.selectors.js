import { createSelector } from 'reselect'

const selectShop = state => state.shop

export const selectCollectios = createSelector(
    [selectShop],
    (shop) => {
        // console.log('reselect  ---   selectCollectios')
        return shop.collections
    }
)