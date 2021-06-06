import React, {useState} from 'react';

const LeftNav = ({restaurantSectionList, updateSeeAllFlow}) => {
    let totalOptions = 0;
    const [selectedCategory, updateSelectedCategory] = useState(restaurantSectionList && restaurantSectionList[0].category);
    return (<div className="col-xs-12 col-md-4 row">
            <div className="col-xs-5"></div>
            <div className="col-xs-12 col-md-6 leftNavWrapper">
        {
            restaurantSectionList.map((restaurant) => {
                totalOptions = totalOptions + restaurant.restaurantList.length;
                const classes = selectedCategory === restaurant.category ? 'leftNavOption leftNavOptionSelected' : 'leftNavOption';
                return (
                <div className={classes} data-categoryName={restaurant.category} onClick={() => {
                    if(document.getElementById(`${restaurant.category}`)) {
                        document.getElementById(`${restaurant.category}`).scrollIntoView({behavior: 'smooth'});
                    }                 
                    updateSelectedCategory(restaurant.category);
                    updateSeeAllFlow(false);
                }}>
                    <div className="categoryName">{restaurant.category}</div>
                    <div className="options">{restaurant.restaurantList.length} OPTIONS</div>
                </div>)
            })
        }
        <div className="leftNavOption" onClick={() => {
            updateSeeAllFlow(true);
        }}>
            <div className="categoryName">SEE ALL</div>
            {totalOptions > 0 && (<div className="options">{totalOptions} OPTIONS</div>)}
        </div>
        </div>
    </div>);
}

export default LeftNav;