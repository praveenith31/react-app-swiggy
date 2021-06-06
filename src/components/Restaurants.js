import React from 'react';
import Section from './Section';
import Tile from './Tile';

const removeCategoryFromArray = (restaurantSectionList) => {
    const arr = [];
    restaurantSectionList.forEach((section) => {
        arr.push(...(section.restaurantList))
    });
    return arr;
}

const RestaurantsSections = ({ restaurantSectionList, sellAllInfo }) => {
    if(sellAllInfo) {
        const flatArray = removeCategoryFromArray(restaurantSectionList);
        return (
        <div className="col-xs-12 col-md-8 row seeAllWrapper">
            {flatArray.map((restaurant) => {
            return <Tile restaurant={restaurant} />
        })}
        </div>);
    }
   const restaurantSectionListArr =  restaurantSectionList.map((section) => {
       if(section.category === 'See All') {
           return null;
       }
    return (
        <Section sectionInfo={section} />
    )
});
    return (<div className="col-xs-12 col-md-8">
            {restaurantSectionListArr}
    </div>)
}

export default RestaurantsSections;