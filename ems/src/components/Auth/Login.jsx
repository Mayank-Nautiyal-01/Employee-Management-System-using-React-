import {useState} from 'react'

function Login({handleLogin}) {

  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');

  const submitHandler=(e)=>{
    e.preventDefault();
    handleLogin(email,password);
    // console.log("login done");
    setEmail("")
    setPassword("")
  }
  return (

    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-700 rounded-xl p-10">
        <form onSubmit={(e)=>submitHandler(e)} className="flex flex-col items-center justify-center gap-5">
          <input value={email} onChange={(e)=>setEmail(e.target.value)} required
            className="w-full  text-xl text-white outline-none bg-transparent border-2 px-5 py-3 border-emerald-600 rounded-full placeholder:text-gray-500 "
            type="email"
            placeholder="Enter your email"
          />

          <input value={password} onChange={(e)=>setPassword(e.target.value)} required
            className="w-full  text-white text-xl outline-none bg-transparent border-2 px-5 py-3 border-emerald-600 rounded-full placeholder:text-gray-500 "
            type="password"
            placeholder="Enter your password"
          />

          <button className="mt-5 text-white text-xl border-none outline-none border-2 px-5 py-3 bg-emerald-500 rounded-full ">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
