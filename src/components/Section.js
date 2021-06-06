import React, { useState } from 'react';
import Tile from './Tile';
const MAX_LIMIT = 5;

const RestaurantSection = ({sectionInfo}) => {
    const [showMoreRestaurants, updateShowRestaurants] = useState(false);
    return (
        <div className="row restaurantSection" id={sectionInfo.category}>
            <h2 className="sectionHeading">{sectionInfo.category}</h2>
            <div>
            {sectionInfo.restaurantList.map((restaurant, index) => {
                if(!showMoreRestaurants) {
                    if(index === MAX_LIMIT) {
                        return (
                            <div className="col-xs-12 tileWrapper col-md-4">
                                <button className="moreRestaurant" onClick={() => {updateShowRestaurants(true)}}>+ {sectionInfo.restaurantList.length - MAX_LIMIT} More</button>
                            </div>
                        ) 
                    } else if (index > MAX_LIMIT) {
                        return null;
                    }
                }
                return (
                    <Tile restaurant={restaurant} />
                )
            })}
            </div>
        </div>
    )
}

export default RestaurantSection;