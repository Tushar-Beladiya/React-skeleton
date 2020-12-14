import React from "react";
import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";

function SkeletonArtcles({ theme }) {
   const themeClass = theme || "light";
   return (
      <div className={`skeleton__wrapper ${themeClass}`}>
         <div className="skeleton__article">
            <SkeletonElement type="title" />
            <SkeletonElement type="text" />
            <SkeletonElement type="text" />
            <SkeletonElement type="text" />
         </div>
         <Shimmer />
      </div>
   );
}
export default SkeletonArtcles;
