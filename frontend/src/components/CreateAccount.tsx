import { BsFillCaretLeftFill, BsX } from "react-icons/bs";
import logo from "../assets/images/logo.png";
import { Input } from "antd";


const CreateAccount = ({ isNewAccount }: any) => {
    return (
        <div className="fixed z-10 top-0 right-0 bottom-0 left-0 w-full h-[100vh] bg-bgColor2 bg-opacity-50 flex flex-col pt-5 items-center">

            <img src={logo} alt="logo" />
            <div className="w-[25%] h-[32%] pb- bg-primary mt-5 border border-white rounded-lg z-40">
            <div className=" flex w-full  justify-between px-4 py-4 mt-3">
               
          <div>
          <BsFillCaretLeftFill className="mt-2  text-btnColor" />

          </div>
          <div>
          <p className="text-heading text-2xl  ">Add Account</p>

          </div>
          <div className=" text-3xl mt-1">
                    <BsX onClick={() => isNewAccount(false)} className="text-btnColor cursor-pointer" />
                </div>
                </div>

               
                <div className=" flex-col justify-center items-center px-5 mt-2" >
                    <label className="text-white-1 ms-2 ">Account Name</label>
                    <Input className="bg-transparant placeholder-btnColor  px-2  text-btnColor text-lg mt-1" placeholder="grey kris" />
                </div>
              
                <div className="flex items-center justify-center mt-3">
                                <button className="px-12 py-2 rounded-full text-white bg-btnColor hover:bg-btnColorHover mt-4">Create</button>
                    </div>




            </div>
        </div>
    )
}


export default CreateAccount;
