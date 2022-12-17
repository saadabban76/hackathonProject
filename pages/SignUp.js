import { Formik } from "formik";
import React, { useState } from "react";

const SignUp = () => {
  const [usn, setUsn] = useState();
  const [password, setPassword] = useState();
  const [cPassword, setCpassword] = useState();
  console.log(cPassword);
  // Formik

  return (
    <div className="p-[200px] bg-slate-500">
      {/* Sign up */}
      <div className='container flex flex-col gap-4'>
          <input type='text' value={usn} onChange={(e)=>setUsn(e.target.value)} className='bg-white' placeholder='USN' />
          <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='bg-white' placeholder='password' />
          <input type='password' value={cPassword} onChange={(e)=>setCpassword(e.target.value)} className='bg-white' placeholder='confirm password' />
          <button className='bg-orange-400 p-4'>Sign Up</button>
          <p> If already Registered Please Sign In</p>
          {/* <button onClick={()=>} className='bg-yellow-400 p-4'>Sign IN</button> */}
      </div>
    </div>
  );
};

export default SignUp;
