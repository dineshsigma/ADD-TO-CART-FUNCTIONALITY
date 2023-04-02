import React,{useState} from "react"
import {userpersonalDetails} from '../redux/reducer/addcart';
import {useSelector,useDispatch} from 'react-redux';
function SignUpInfo({setPage,page}) {
    const dispatch = useDispatch();
   
    const FormTitles = ['Sign Up', "personal Info", "Others"];
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
        //write
    }
    const createSignUp = (e) => {
        e.preventDefault();
        console.log("personalDetails---", personalDetails);
        dispatch(userpersonalDetails(personalDetails)).then((response)=>{
            console.log("response--",response.payload);
            
          });

    }



    return (
        
            <div className='personal-info-container' >
                <input type="email" placeholder="Email" name="email"   value={email} onChange={changeHandler} />
                <input type="password" placeholder="password..." name="password" onChange={changeHandler} value={password} />
                <input type="password" placeholder="ConfirmPassword..." name="confirmpassword" onChange={changeHandler} value={confirmpassword} />
            </div>
      
    )

}


export default SignUpInfo