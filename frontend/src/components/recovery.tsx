import { useDispatch } from "react-redux";
import { incrementStep } from "../redux/counter";
import { AiOutlineEye } from "react-icons/ai";

function Recovery() {
  const dispatch = useDispatch();

  const setSteps = () => {
    dispatch(incrementStep(0));
  };
  return (
    <>
      <div className="w-[50%] relative bg-primary rounded-2xl pb-8">
        {/* top step Counter Container */}
        <div className="flex justify-center items-center absolute -top-5 w-full">
          <div className="bg-bg-color rounded-full flex justify-center items-center h-10 w-10 ">
            <div className="bg-white rounded-full flex justify-center items-center h-7 w-7 ">
              <p className="">1</p>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-16 h-1 rounded-full bg-btnColor opacity-40"></div>

          <div className="bg-bg-color rounded-full flex justify-center items-center h-10 w-10 ">
            <div className="bg-white rounded-full flex justify-center items-center h-7 w-7 opacity-30">
              <p className="">2</p>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-16 h-1 rounded-full bg-btnColor opacity-40"></div>

          <div className="bg-bg-color rounded-full flex justify-center items-center h-10 w-10 ">
            <div className="bg-white rounded-full flex justify-center items-center h-7 w-7 opacity-30">
              <p className="">3</p>
            </div>
          </div>
        </div>

        {/* Steps label */}
        <div className="mt-6 mx-auto w-1/2 flex justify-evenly  ">
          <p className="text-xs text-white">Create Password</p>
          <p className="text-xs text-white opacity-70">Secure wallet</p>
          <p className="text-xs text-white opacity-70">
            Confirm secret
            <br />
            recovery phrase
          </p>
        </div>

        {/* Main Section */}
        <div className="mx-8 my-4">
          {/* Heading Section */}
          <h1 className="text-4xl text-heading font-bold text-center">
            Write down your Secret Recovery Phrase
          </h1>
          <p className="mt-6  text-white-1">
            Write down this 12-word Secret Recovery Phrase and save it in a
            place that you trust and only you can access.
          </p>

          {/* Tips Section */}
          <div className="w-3/5 mx-auto my-4 text-white">
            <h6 className="ml-1">Tips:</h6>
            <ul className="ml-6 list-disc">
              <li className="text-btnColor">
                <span className="text-white">Save in a password manager</span>
              </li>
              <li className="text-btnColor">
                <span className="text-white">Store in a safe deposit box</span>
              </li>
              <li className="text-btnColor">
                <span className="text-white">
                  Write down and store in multiple secret places
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Password Section */}
        <div className="w-3/4 mx-auto rounded-lg  bg-black3 relative">
          {/* parent */}
          <div className="p-4">
            <div className="flex  justify-between items-center gap-2">
              <div className="text-heading bg-btnColorHover border-white border-2 py-2 pr-2 rounded-lg">
                <span className="p-2 border-white border-2 bg-btnColor rounded-lg">
                  1
                </span>
                <span className="ml-2">asperiores</span>
              </div>

              <div className="text-heading bg-btnColorHover border-white border-2 py-2 pr-2 rounded-lg">
                <span className="p-2 border-white border-2 bg-btnColor rounded-lg">
                  2
                </span>
                <span className="ml-2">asperiores</span>
              </div>

              <div className="text-heading bg-btnColorHover border-white border-2 py-2 pr-2 rounded-lg">
                <span className="p-2 border-white border-2 bg-btnColor rounded-lg">
                  3
                </span>
                <span className="ml-2">asperiores</span>
              </div>

              <div className="text-heading bg-btnColorHover border-white border-2 py-2 pr-2 rounded-lg">
                <span className="p-2 border-white border-2 bg-btnColor rounded-lg">
                  4
                </span>
                <span className="ml-2">asperiores</span>
              </div>
            </div>
            <div className="mt-2 flex justify-between items-center gap-2">
              <div className="text-heading bg-btnColorHover border-white border-2 py-2 pr-2 rounded-lg">
                <span className="p-2 border-white border-2 bg-btnColor rounded-lg">
                  1
                </span>
                <span className="ml-2">asperiores</span>
              </div>

              <div className="text-heading bg-btnColorHover border-white border-2 py-2 pr-2 rounded-lg">
                <span className="p-2 border-white border-2 bg-btnColor rounded-lg">
                  2
                </span>
                <span className="ml-2">asperiores</span>
              </div>

              <div className="text-heading bg-btnColorHover border-white border-2 py-2 pr-2 rounded-lg">
                <span className="p-2 border-white border-2 bg-btnColor rounded-lg">
                  3
                </span>
                <span className="ml-2">asperiores</span>
              </div>

              <div className="text-heading bg-btnColorHover border-white border-2 py-2 pr-2 rounded-lg">
                <span className="p-2 border-white border-2 bg-btnColor rounded-lg">
                  4
                </span>
                <span className="ml-2">asperiores</span>
              </div>
            </div>
            <div className="mt-2  flex justify-between items-center gap-2">
              <div className="text-heading bg-btnColorHover border-white border-2 py-2 pr-2 rounded-lg">
                <span className="p-2 border-white border-2 bg-btnColor rounded-lg">
                  1
                </span>
                <span className="ml-2">asperiores</span>
              </div>

              <div className="text-heading bg-btnColorHover border-white border-2 py-2 pr-2 rounded-lg">
                <span className="p-2 border-white border-2 bg-btnColor rounded-lg">
                  2
                </span>
                <span className="ml-2">asperiores</span>
              </div>

              <div className="text-heading bg-btnColorHover border-white border-2 py-2 pr-2 rounded-lg">
                <span className="p-2 border-white border-2 bg-btnColor rounded-lg">
                  3
                </span>
                <span className="ml-2">asperiores</span>
              </div>

              <div className="text-heading bg-btnColorHover border-white border-2 py-2 pr-2 rounded-lg">
                <span className="p-2 border-white border-2 bg-btnColor rounded-lg">
                  4
                </span>
                <span className="ml-2">asperiores</span>
              </div>
            </div>
          </div>

          {/* Overflow Container */}
          <div className="w-full flex flex-col justify-center items-center h-full top-0 absolute rounded-lg backdrop-blur-sm bg-bg-color/70">
            <AiOutlineEye className="text-btnColor" />
            <p className="text-white">Save in a password manager</p>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center flex-col items-center">
          <button
            onClick={setSteps}
            className="bg-btnColor rounded-full w-48 p-3 text-white-1 mt-4 hover:bg-btnColorHover"
          >
            Reveal Recovery Phrase
          </button>
          {/* <button className="bg-btnColor rounded-full w-48 p-3 text-white-1 mt-4 hover:bg-btnColorHover">Import Wallet</button> */}
        </div>
      </div>
    </>
  );
}

export default Recovery;
