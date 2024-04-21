import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard=(props)=>{
    const{resData}=props;

    
    const {LoggedInUser}=useContext(UserContext)
    const {name,cuisines,avgRating,costForTwo,sla}=resData?.info
    return(
        <div data-testid="resCard" className="p-4 m-4 w-[250px] rounded-lg hover:bg-gray-300 bg-gray-200">
            <img className="rounded-lg" alt="res-logo" src={CDN_URL+resData.info.cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{avgRating}stars</h4>
            <h4> {costForTwo} </h4>
            <h4>{sla?.slaString}</h4>
            <h4>User :{LoggedInUser}</h4>
            
        </div>    
    )
}

//input= RestaurantCard=>RestaurantCardPromted
// export const withPromotedLabel=(RestaurantCard)=>{
//   return (props)=>{
//     return(
//         <div>
//             <label>Promoted</label>
//             <RestaurantCard {...props} />
//         </div>
//     )

//   }
// }

export default RestaurantCard;