import React from "react";

class Login extends React.Component {
  render() {
    function valid(events) {
      console.log(events.target.value);
      if (events.target.value < 8) {
      }
    }
    return (
      <>
        <div className="flex flex-col max-w-[540px] h-screen justify-center items-center mx-auto gap-[20px] bg-midnight">
          <h1 className="text-[30px]">Login</h1>
          <form
            action=""
            className="flex flex-col items-center justify-center p-[20px] gap-[20px] rounded-[20px]"
          >
            <div className="flex flex-col items-center justify-center">
              <input
                onKeyUp={valid}
                type="text"
                placeholder="user-name"
                className="border-2 border-gray-700 rounded-[20px] py-[5px] px-[30px]"
              />
              <label htmlFor="" className="text-red-600">
                UserName is too short!
              </label>
            </div>
            <div className="flex flex-col items-center justify-center">
              <input
                type="password"
                placeholder="password"
                className="border-2 border-gray-700 rounded-[20px] py-[5px] px-[30px]"
              />
              <label htmlFor="" className="text-red-600">
                Password is not strong!
              </label>
            </div>
            <div className="flex flex-col items-center justify-center">
              <input
                type="email"
                placeholder="email"
                className="border-2 border-gray-700 rounded-[20px] py-[5px] px-[30px]"
              />
              <label htmlFor="" className="text-red-600">
                Email not valid!
              </label>
            </div>

            <button className="text-amber-50 bg-green-700 py-[5px] px-[20px] rounded-[20px]">
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Login;
