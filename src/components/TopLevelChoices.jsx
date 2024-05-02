import {React, useState} from "react";
// import returnArrayOfObjects from "../data/returns.js";
import secondReturns from '../data/secondReturns.js';
import problemData from '../data/problemData.js';
import ProductList from "./ProductList.jsx";
import DisplayCard from "./DisplayCard.jsx";
import SolutionsDiv from "./SolutionsDiv.jsx";

function TopLevelChoices({onDataChange}) {
    const [showReturn, setShowReturn] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [selectedProblemId, setSelectedProblemId] = useState(null);

    const switchModal = () => {
        setShowReturn(!showReturn);
    }

    const passObjId = (passThisId) => {
        setSelectedProductId(passThisId)
        switchModal();
    }

    const handleDataChange = (problemId) => {
        setSelectedProblemId(problemId);
        switchModal();
    }
    
    return (
        <>
            <div className="troubleshootingMainDiv">
                {showReturn && (
                    <DisplayCard 
                    param5 = {secondReturns.find((item) => item.id === selectedProductId)?.returnArrOfProblems || []}
                    onClose={switchModal}
                    onDataChange = {handleDataChange}
                    problemData={problemData}
                    />
                )}
                <h2>This comes from TopLevelChoices</h2>
                <ProductList products={secondReturns} passObjId={passObjId} />
            </div>

            {selectedProblemId && ( // render solutionsDiv only when a problem is selected)
                <SolutionsDiv problemId={selectedProblemId} problemData={problemData}/>
        )}
        </>
    )
}

export default TopLevelChoices;