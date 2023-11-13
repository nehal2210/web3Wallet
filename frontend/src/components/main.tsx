import { useDispatch } from "react-redux";
import { incrementStep } from "../redux/counter";

function MainComponenet() {
  const dispatch = useDispatch();

  const setSteps = () => {
    dispatch(incrementStep(1));
  };
  return (
    <>
      <div className="w-[50%] h-[60vh] bg-primary card-shadow z-10 bg-opacity-80 rounded-2xl p-12 flex flex-col justify-between">
        <div>
          <p className="text-4xl font-bold text-center">
            A crypto wallet & gateway to blockchain app
          </p>
          <p className="mt-6">
            Start exploring blockchain applications in seconds. Trusted by over 30
            million users worldwide.
          </p>
        </div>
        <div className="flex justify-center flex-col items-center">
          <button
            onClick={setSteps}
            className="bg-btnColor rounded-full w-48 p-3 text-white-1 hover:bg-btnColorHover"
          >
            Create Wallet
          </button>
          {/* <button className="bg-btnColor rounded-full w-48 p-3 text-white-1 mt-4 hover:bg-btnColorHover">Import Wallet</button> */}
        </div>
      </div>
    </>
  );
}

export default MainComponenet;
