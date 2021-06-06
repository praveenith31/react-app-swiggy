import React, {useRef} from 'react';
import {IMAGE_URLS_ARRAY} from './constants';

const Tile = ({restaurant}) => {
    const imageURL = useRef();
    if(!imageURL.current) {
        imageURL.current = IMAGE_URLS_ARRAY[Math.floor(Math.random() * (IMAGE_URLS_ARRAY.length - 1))];
    }
     
    return (
    <div className="col-xs-12 col-md-4 tileWrapper">
            <a href={'#'} className="tileAnchor">
                <div className="tile">
                    <div className="imgWrapper">
                        <img className="_2tuBw _12_oN" alt={restaurant.name} width="254" height="160" src={imageURL.current} />
                    </div>
                    <div className="restaurantInfo">
                    <div className="tileHeading">
                        <div className="restaurantName">{restaurant.name}</div>
                        <div className="foodTypes">{restaurant.food_types && restaurant.food_types.join(` ,`)}</div>
                    </div> 
                    <div className="deliveryInfo">
                        <div className="starRating">{restaurant.ratings ? 
                        `${restaurant.ratings} ` : 
                        <span><span><img src="../assets/img/star-fill.svg" alt="Bootstrap" width="10" height="10" />
                        </span><span>  --</span></span>}
                        </div>
                        <span className="dot">•</span>
                        <span>{restaurant.delivery_time}</span>
                        <span className="dot">•</span>
                        <span>{`${restaurant.price_for_two} for two`}</span>
                    </div>  
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Tile;