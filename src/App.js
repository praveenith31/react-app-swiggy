import React, {useEffect, useState} from 'react';
import './App.css';
/** Components */
import LeftNavigation from './components/LeftNavigation';
import Restaurants from './components/Restaurants';

function App() {
  const [restaurantInfo, getRestaurantInfo] = useState([]);
  const [sellAllInfo, updateSeeAllFlow] = useState(false);

  /** Call API to get Restaurant Information */
  useEffect(() => {
    fetch('http://cdn.adpushup.com/reactTask.json')
    .then(response => response.json())
    .then(data => getRestaurantInfo(data));
  }, []);
  return (
    <div className="App row">
     {
       restaurantInfo.length === 0 ? 
       (<div>Loading Restaurants ...</div>) : 
       <React.Fragment>
          <LeftNavigation restaurantSectionList={restaurantInfo} updateSeeAllFlow={updateSeeAllFlow}  />
          <Restaurants restaurantSectionList={restaurantInfo} sellAllInfo={sellAllInfo} />  
       </React.Fragment>
     }
    </div>
  );
}

export default App;
