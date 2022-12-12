import React from "react";

function Instructions() {
  return (
    <div className='bg-white mt-4 rounded'>
      <h2 className='px-2 text-lg'>Note: </h2>
      <div className='p-2'>
        <ul>
          <li>Age for the candidates is limit is 18-65.</li>
          <li>The monthly fee is 500 rupees.</li>
          <li>
            Candidates can change the batch in different months but not in the
            same month.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Instructions;
