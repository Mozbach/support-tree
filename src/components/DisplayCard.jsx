import {React} from 'react';

function DisplayCard({param5, onClose, onDataChange}) {

const switchModal = () => {
  onClose();
}
const passProblemId = (problemId) => {
  console.log("Problem ID is: " + problemId);
  onDataChange(problemId);
}

return (
  <>
    <dialog className="firstLevelDialogue" open={param5.length > 0}>
      <button className="closeModalButton" onClick={switchModal}>※</button>
      <h3>Query List</h3>
      {param5 && param5.map((problem, index) => (
        <div className="holdsLoop" key={index}>
          <button onClick={() => passProblemId(problem.link)} className="modalProblemLink">{problem.problemName}</button>
        </div>
      ))}
    </dialog>
  </>
  );
}

export default DisplayCard;