import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import CollectionPageContainer from '../collection/collection.container'
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";


const ShopPage = ({match, fetchCollectionsStart}) => {
  
  useEffect(() => {
    console.log(33)
    fetchCollectionsStart()
  }, [fetchCollectionsStart])

  return (
    <div className="shop-page" style={{ textAlign: "center", height: "500px"}}>
      {/* <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={!isCollectionsLoaded} {...props} />} /> */}
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
}






const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);



// function* gen(i){
//   yield i;
//   yield i + 10;
// }

// const g = gen(5)
// const gObj = g.next()


// class ShopPage extends Component {
//   componentDidMount() {
//     this.props.fetchCollectionsStart();
//   }
//   render() {
//     const { match } = this.props;
//     return (
//       <div className="shop-page" style={{ textAlign: "center", height: "500px"}}>
//         {/* <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={!isCollectionsLoaded} {...props} />} /> */}
//         <Route
//           exact
//           path={`${match.path}`}
//           component={CollectionsOverviewContainer}
//         />
//         <Route
//           path={`${match.path}/:collectionId`}
//           component={CollectionPageContainer}
//         />
//       </div>
//     );
//   }
// }