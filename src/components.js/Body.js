import RestaurantCard from "./RestaurantCard";

import { useState, useEffect, useContext} from "react"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body=()=>{
    //local state variable=super powerful variable
    
    const[listOfRestaurants,setlistOfRestaurants]=useState([]);
    const[filteredRestaurant,setFilteredRestaurant]=useState([]);

    const[searchText,setsearchText]=useState("");
    // const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async ()=>{
        const data=await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json=await data.json();
        

        //Optional Chaining
        setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };

    const onlineStatus=useOnlineStatus();

    if(onlineStatus===false)return 
    <h1>Looks like you're offline!!Please check your internet connection!!</h1>
    //Conditional Rendering
    const {LoggedInUser,setUserName}=useContext(UserContext);
   




    return listOfRestaurants.length ===0?<Shimmer/> :(
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4 ">
                    <input type="text"
                    data-testid="searchInput"
                    className="border border-solid border-black" value={LoggedInUser} onChange={(e)=>setUserName
                        (e.target.value)
                    }/>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
                        const filteredRestaurant= listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(filteredRestaurant)
                    }} >Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <label>User :</label>
                    <input className="border border-black p-2"/>
                </div>
            </div>
            <div className="flex flex-wrap">
            {
             filteredRestaurant.map((restaurant)=>(<Link  key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>))
            }
            </div>
        </div>
    );
};

export default Body;