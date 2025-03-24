import React from "react";

function Header(props) {
  
  const handleLogOut=()=>{
    localStorage.setItem('loggedInUser','')
    // window.location.reload()
    props.changeUser('')
  }
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-1xl font-bold">
        Hello <br />
        <span className="text-2xl font-semibold">
          {props.data?.name || "User"} 👋🏻
        </span>
      </h1>
      <button
        className="bg-red-600 px-4 py-1 text-lg font-medium rounded-sm"
      onClick={handleLogOut} >
        Log Out
      </button>
    </div>
  );
}

export default Header;
