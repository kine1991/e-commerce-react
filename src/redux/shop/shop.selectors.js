import { createSelector } from 'reselect'

const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    (shop) => {
        // console.log('reselect  ---   selectCollections')
        return shop.collections
    }
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => {
        // console.log('selectCollectionsForPreview')
        // console.log(collections)
        // console.log(Object.keys(collections))
        // console.log(Object.keys(collections).map(key => {
        //     console.log(collections[key])
        //     return collections[key]
        // }))
        return Object.keys(collections).map(key => collections[key])
    }
  );

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => {
        return collections[collectionUrlParam]
    }
)
// export const selectCollection = collectionUrlParam => createSelector(
//     [selectCollections],
//     collections => {
//         return collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
//     }
// )

// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5,
// }