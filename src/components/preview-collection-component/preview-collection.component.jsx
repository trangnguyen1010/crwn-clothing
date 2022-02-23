import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

import "./preview-collection.styles.scss";

const CollectionPreview = (props) => {
  const { items, title } = props;
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, ind) => ind < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
