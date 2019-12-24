import React from 'react'; 
export default (prop) =>
    <div className="card bg-primary border-0"  style={{display:(!prop.hide)?'inline-block':'none',minWidth:'200px'}}>
         <div className="card-body text-center p-0 pt-3 border-0">
           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBtyV3MAYOXLzs7dQJp1ttsioiNc5M4vRbjIxCw6zecRcMGU8x' className="img-thumbnail mb-2" style={{height:6.25+'rem',width:6.25+'rem',borderRadius:50+'%'}}/>   
            <div className="text-white p-1"><b>Anshul</b></div>
             <div className="text-white p-1"><b>Patient-123</b></div>
         </div>  
       </div>