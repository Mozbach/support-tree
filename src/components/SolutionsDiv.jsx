import React from 'react'


function SolutionsDiv({problemId, problemData}) {

  const theProblem = problemData.find((item) => item.id === problemId);

  return (
    <>
        <div className="solutionsDiv">
            <h2>{theProblem.problemName}</h2>
            <div className="mainProblemDescription">
              <p>
                {theProblem.description}
              </p>
            </div>
              {theProblem.solutionList.map((solution, index) => (
            <div className="problemSolutions" key={index}>
              <h2 className="solutionsTitle">Solution: {solution.solutionId}</h2>
              <br></br>
              <p className="solutionText">{solution.solution}</p>
              <br></br>

            </div>
              ))}

        </div>
    </>
  )
}

export default SolutionsDiv