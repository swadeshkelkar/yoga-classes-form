import "./App.css";
import { useState } from "react";
import bg from "./image/yoga.png";
import Heading from "./components/Heading";
import Form from "./components/Form";
import Instructions from "./components/Instructions";
function App() {
  const [alert,setAlert] = useState(false);
  const [error,setError] = useState(false);

  return (
    <div className=' w-full h-screen bg-gradient-to-r from-sky-500 to-indigo-500'>
      
      <div className='text-gray-600 body-font overflow-hidden'>
        <Heading/>
        <div className='container px-5 py-12 mx-auto font-medium'>
          <div className='flex flex-wrap -m-12'>
            <div className='p-12 md:w-3/5 flex flex-col items-start'>
              <div className='bg-neutral-100 rounded-lg p-4 w-full h-full'>
                <div className='text-center mt-2 mb-2 text-2xl '>
            
                  <span className='bg-white px-4 py-1 rounded'>
                    Fill the following form
                  </span>
                </div>
                <Form setAlert={setAlert} setError={setError}/>
                <Instructions/>
              </div>
            </div>

            <div className='p-12 md:w-2/5 flex flex-col items-start h-full'>
              <img className='rounded-lg' src={bg} alt={'yoga'}></img>
            </div>
          </div>



        </div>
      </div>      
      {alert && <div className='w-fit p-3 rounded h-fit bg-green-600 text-white font-medium mx-auto flex'>
          Payment Success
      </div>}
       
       {error && <div className='w-fit p-3 rounded h-fit bg-red-600 text-white font-medium mx-auto flex'>
          Something went wrong
      </div>}

    </div>
  );
}

export default App;
