import React from "react";
import CollectionPreview from "../../components/preview-collection-component/preview-collection.component";

import SHOPDATA from "./shop.data";

const ShopPage = () => {
  const state = {
    collections: SHOPDATA,
  };
  const collections = state.collections;
  console.log(collections);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
