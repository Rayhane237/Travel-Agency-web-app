import React from 'react';
import "./Plan.css";
import HomePlan from './PlanCompos/Homeplan/HomePlan';
import PlanPicsText from './PlanCompos/PlanPicsText';
import Destinations from './PlanCompos/Destinations';
import ShowPlan from './PlanCompos/ShowPlan';
import Footer from './PlanCompos/Footer';
import Comments from './PlanCompos/Comments';

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
      <div className="comp6">
        <Footer />
      </div>
    </div>
  );
}

export default Plan;