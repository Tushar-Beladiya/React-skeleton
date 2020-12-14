import React, { useEffect, useState } from "react";
import SkeletonProfile from "./Skeleton/SkeletonProfile";

function User() {
   const [profile, setProfile] = useState(null);
   useEffect(() => {
      setTimeout(async () => {
         const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
         );
         const data = await response.json();
         setProfile(data);
      }, 4000);
   }, []);

   return (
      <div>
         <h2 className="user">User Details</h2>
         {profile && (
            <div className="profile">
               <h3>{profile.username}</h3>
               <p>{profile.email}</p>
               <a href={profile.website}>{profile.website}</a>
            </div>
         )}
         {!profile && <SkeletonProfile />}
      </div>
   );
}

export default User;
