import { useDispatch } from "react-redux";
import { incrementStep } from "../redux/counter";

function SignUp() {
  const dispatch = useDispatch();

  const setSteps = () => {
    dispatch(incrementStep(2));
  };
  return (
    <>
      <div className="w-[50%] h-[60vh]  bg-primary rounded-2xl p-12">
        <h1 className="text-4xl text-heading font-bold text-center">Sign Up</h1>
        <p className="mt-6 text-center text-white-1">
          Start by signing in with us so you will be directed to your Recovery
          Phase.
        </p>
        <div className="flex justify-center flex-col items-center">
          <div className="mt-12 w-1/2 ">
            <p className="text-white-1 pl-1 mb-1 text-sm">Username</p>
            <input
              type="text"
              className="rounded-lg bg-black3 w-full  text-white p-1 pl-4"
            />
            <p className="mt-4 pl-1 text-white-1  mb-1 text-sm">Password</p>
            <input
              type="password"
              className="rounded-lg bg-black3 w-full text-white p-1 pl-4"
            />
          </div>

          <button
            onClick={setSteps}
            className="bg-btnColor rounded-full w-48 p-3 text-white-1 mt-4 hover:bg-btnColorHover"
          >
            Sign Up
          </button>
          {/* <button className="bg-btnColor rounded-full w-48 p-3 text-white-1 mt-4 hover:bg-btnColorHover">Import Wallet</button> */}
        </div>
      </div>
    </>
  );
}

export default SignUp;
