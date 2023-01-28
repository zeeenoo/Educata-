import React from 'react'

function Signin() {
  const [showsignup, setShowsignup] = React.useState(false);
  const [signupData, setSignupData] = React.useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: ""
  })

  function handleChange(event){
    const {name, value} = event.target
    setSignupData(prevFilterData => {
        return {
            ...prevFilterData,
            [name]: value
        }

    })
}


  return (
    <>
      <button
        className='border-2 rounded-2xl py-1 px-4 font-bold border-[#242145] hover:bg-[#242145] hover:text-white transition-colors duration-500 mr-4'        type="button"
        onClick={() => setShowsignup(true)}
      >
        Sign-up
      </button>
      
      {showsignup ? (
        <>
          <div className="max-w-[800px] justify-center items-center flex fixed inset-0 z-50 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Sign up</h3>

                  <button className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold"
                    onClick={() => setShowsignup(false)}>
                    x
                  </button>
                </div>


                {/*body*/}
                <div className=" p-6 ">

                <form className="">
                    <div className='flex w-full'>
                        <div className='mr-4 flex-1'>
                            <label for="firstname" className="mb-2 text-[20px] font-medium">First Name</label>
                            <input type="text" name="firstname" value={signupData.firstname} id="firstname" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-4" placeholder="First Name" required/>
                        </div>
                        <div className='flex-1'>
                            <label for="lastname" className="mb-2 text-[20px] font-medium">Last Name</label>
                            <input type="text" value={signupData.lastname} name="lastname" id="lastname" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-4" placeholder="Last Name" required/>
                        </div>
                    </div>
                    <div>
                        <label for="phone" className="mb-2 text-[20px] font-medium">phone number</label>
                        <input type="text" name="phone" id="phone" value={signupData.phone} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-4" placeholder="+213 **********" required/>
                    </div>
                    <div>
                        <label for="email" className="mb-2 text-[20px] font-medium">Your email</label>
                        <input type="email" name="email" id="email" value={signupData.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-4" placeholder="name@company.com" required/>
                    </div>
                    <div>
                        <label for="password" className="mb-2 text-[20px] font-medium">Your password</label>
                        <input type="password" name="password" id="password" value={signupData.password} onChange={handleChange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-6" required/>
                    </div>
                    <div className="xs:flex justify-between mb-4 xs:px-4">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded " required/>
                            </div>
                            <label for="remember" className="ml-2 text-sm font-medium text-gray-900">Remember me</label>
                        </div>
                        
                        <a href="#" className="text-sm hover:underline text-blue-700">Lost Password?</a>
                    </div>
                    <button type="submit" className="w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 mb-4">Sign up</button>
                    <div className="text-sm font-medium text-gray-500">
                        Already have an account? <a href="#" className="text-blue-700 hover:underline">Sign in</a>
                    </div>
                </form>


                </div>
              </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default Signin