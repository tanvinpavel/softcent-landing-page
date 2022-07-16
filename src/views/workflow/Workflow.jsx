import React from 'react';
import './workflow.css';


const Workflow = () => {
    return (
        <div id="workflow">
    <div id="container">
        <div id="workflowbanner">
            <h2 style={{fontFamily:"Overlock"}}>
                Workflow
            </h2>
            <img src="./img/Underline.png" alt="" srcset=""/>
        </div>

        <div id="workflowDiv">
            <div class="wDiv1">
                <div id="definngGoal">
                    <div class="innerContainer">
                    <h3>1. Defining Goal</h3>
                    <p>Project analysis, defining project requirements and objectives based on clients needs, cost and effort estimation, creating value and process planning.</p>
                </div>
                </div>
                <div class="innerContainer">
                <h3>2. Product Design</h3>
                <h3>3. Development</h3>
                <h3>4. Testing</h3>
                <h3>5. Product Release</h3>
                <h3>6 .Maintenance Support</h3>
            </div>
            </div>
            <div class="wDiv2">
                <img src="./img/workflow.png" alt="" srcset=""/>
            </div>
        </div>
    </div>
</div>    
    );
};

export default Workflow;