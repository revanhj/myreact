import React from 'react';
import Myprofilecard from './pfimg';

export default (prop) =>{
  const sideitems=prop.items;
 // alert(sideitems);
  return(
<React.Fragment>


<div className=' navbar-expand-sm d-flex flex-row bg-primary align-items-streach' style={{minHeight:'100vh !important'}}>
               <div class="collapse navbar-collapse" id="navbarNav">
               <div className='p-0 w-100'>
               <Myprofilecard hide={prop.hide} />
               <div className='accordion' id="accordionExample">
               {sideitems.map((item,index)=>
               <React.Fragment>
                            <a key={index} href={'#'+item.name.replace(' ','')} data-toggle='collapse' className={'d-block p-2 px-3 border-top list-group-item-action bg-primary text-white w-100 m-0 text-nowrap font-weight-bold'} ><i className={'w-25 text-center'+' '+item.icon} ></i><span className={'pl-1 nowrap'}  style={{display:(!prop.hide)?'inline-block':'none'}}>{item.name}</span>
                            </a>
                           
                           {(item.submenu)? <div data-parent="#accordionExample" className='collapse' id={item.name.replace(' ','')}>{item.submenu.map((submenu,index)=><a key={index} data-toggle='collapse' className={'d-block p-2 px-3 border-top border-right list-group-item-action bg-dark text-white collapse '} style={{zIndex:'-20 important'}} ><i className={'mr-1'+' '+submenu.icon} ></i><span  style={{display:(!prop.hide)?'inline-block':'none'}} >{submenu.name}</span>
                            </a>)}
                         
                            
                            </div>:''}
                            

                   </React.Fragment>         
                            
                            )
                            
                            
                            
                            
                            
                            }               
                    </div >  
                    </div>  
                    </div>
    </div>                                       
</React.Fragment>)
}