import React,{useState} from 'react';
import SignUpInfo from './signupinfo';
import OtherInfo from './otherinfo';
import PersonalInfo from './personalinfo';



function Form(){
    const [page,setPage] = useState(0);
    const FormTitles = ['Sign Up',"personal Info","Others"];

    const Next =(page)=>{
        setPage(page+1)
    }
    const Prev =(page)=>{
        setPage(page-1)
    }
    const pageDisplay =() =>{
        if(page === 0){
            return <SignUpInfo/>
             
        }else if(page === 1){
            return <PersonalInfo/>
        }
        else{
            return <OtherInfo/>
        }
    }

    return(
        <div className='form'>
             <div className='progressbar'>
                 <div  style={{"width":page ===0 ? "33.3%" : page ===1 ? "66.6%" : "100%"}}></div>
             </div>
             <div className='form-container'>
                 <div className='header'>
                     <h1>{FormTitles[page]}</h1> 
                 </div>
                     <div className='body' > {pageDisplay()}
                      </div>
                     <div className='footer'> 
                     <button  disabled={page == 0} onClick={()=>Prev(page)}>Prev</button>
                     <button disabled={page == FormTitles.length-1} onClick={()=>Next(page)}>Next</button>
                     </div>
             </div>

        </div>
    )
}

export default Form