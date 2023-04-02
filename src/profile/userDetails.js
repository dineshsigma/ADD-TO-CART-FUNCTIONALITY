import React, { useState } from 'react';
import SignUpInfo from '../profile/signinfo';
// import OtherInfo from './otherinfo';
import PersonalInfo from '../profile/personalinfo';
import {useSelector,useDispatch} from 'react-redux';




function Form() {
    const [page, setPage] = useState(0);
    const FormTitles = ['Sign Up', "personal Info", "Others"];
    const userCartDetails = useSelector((state) => state.addcart.userDetails);
    console.log("userCartDetails--",userCartDetails);
    const [personalDetails, setPersonalDetails] = useState(
        {
            email: "",
            password: "",
            confirmpassword: ""
            
        }
    )
    let {email,password,confirmpassword}=personalDetails
    let changeHandler = e =>{
        setPersonalDetails({...personalDetails, [e.target.name]: e.target.value})
        
    }

    const Next = (page,personalDetails) => {
        console.log("personalDetails----",personalDetails);
        setPage(page + 1)
    }
    const Prev = (page) => {
        setPage(page - 1)
    }

    const createSignUp = (e) => {
        e.preventDefault();
        console.log("personalDetails---", personalDetails);
        // dispatch(userpersonalDetails(personalDetails)).then((response)=>{
        //     console.log("response--",response.payload);
            
        //   });

    }
   

    console.log("page---",page);
    const pageDisplay = () => {
        if (page === 0) {
            return (
        
                <div className='personal-info-container' >
                    <input type="email" placeholder="Email" name="email"   value={email} onChange={changeHandler} />
                    <input type="password" placeholder="password..." name="password" onChange={changeHandler} value={password} />
                    <input type="password" placeholder="ConfirmPassword..." name="confirmpassword" onChange={changeHandler} value={confirmpassword} />
                </div>
          
        )

        } else if (page === 1) {
            return <PersonalInfo />
        }
        else {
            // return <OtherInfo />
        }
    }

    return (
        <div className='form'>
            <div className='progressbar'>
                <div style={{ "width": page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%" }}></div>
            </div>
            <div className='form-container'>
                <div className='header'>
                    <h1>{FormTitles[page]}</h1>
                </div>
                <div className='body' > {pageDisplay()}
                </div>
                <div className='footer'>
                    <button disabled={page == 0} onClick={() => Prev(page)}>Prev</button>
                    <button disabled={page == FormTitles.length - 1} onClick={() => Next(page)}>Next</button>
                </div>
            </div>

        </div>
    )
}

export default Form