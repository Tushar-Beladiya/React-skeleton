import React from "react";
import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";

function SkeletonProfile({ theme }) {
   const themeClass = theme || "light";
   return (
      <div className={`skeleton__wrapper ${themeClass}`}>
         <div className="skeleton__profile">
            <div>
               <SkeletonElement type="avatar" />
            </div>
            <div>
               <SkeletonElement type="title" />
               <SkeletonElement type="text" />
               <SkeletonElement type="text" />
            </div>
         </div>
         <Shimmer />
      </div>
   );
}

export default SkeletonProfile;
