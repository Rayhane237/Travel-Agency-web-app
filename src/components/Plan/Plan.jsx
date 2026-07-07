import React from 'react';
import "./Plan.css";
import HomePlan from './PlanCompos/Homeplan/HomePlan';
import PlanPicsText from './planPics/PlanPicsText';
import Destinations from './PlanCompos/Destination/Destinations';
import ShowPlan from './PlanCompos/ShowPlan/ShowPlan';
import Footer from '../Footer/Footer';
import Comments from './PlanCompos/Comments/Comments';

function Plan() {
  return (
    <div>
      <div className="comp1">
        <HomePlan />
      </div>
      <div className="comp2">
        <PlanPicsText />
      </div>
      <div className="comp3">
        <Destinations />
      </div>
      <div className="comp4">
        <ShowPlan />
      </div>
      <div className="comp5">
        <Comments />
      </div>
      <br />
      <div className="comp6">
        <Footer />
      </div>
    </div>
  );
}

export default Plan;