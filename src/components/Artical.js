import React, { useEffect, useState } from "react";
import SkeletonArtcles from "./Skeleton/SkeletonArtcles";
import SkeletonElement from "./Skeleton/SkeletonElement";

function Artical() {
   const [articles, setArticels] = useState(null);

   useEffect(() => {
      setTimeout(async () => {
         const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
         );
         const data = await response.json();
         setArticels(data);
      }, 4000);
   }, []);

   return (
      <div className="artical">
         <h2>Articles</h2>
         {articles &&
            articles.map((article, key) => {
               return (
                  <div className="articles">
                     <h3>{article.title}</h3>
                     <p>{article.body}</p>
                  </div>
               );
            })}

         {!articles &&
            [1, 2, 3, 4, 5, 6, 7].map((n) => <SkeletonArtcles key={n} />)}
      </div>
   );
}

export default Artical;
