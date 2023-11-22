
import logo from "../../assets/images/logo.png";

const LandingFooter =()=>{
    return(
<div className="bg-bgShade h-[50vh] w-full mt-16 ">
    <div className="flex justify-around p-8">
        <div className="mt-12">
        <img className="w-16 " src={logo} alt="logo" />
        <h1 className="text-2xl font-semibold mt-8">Download Chrome Extention</h1>
        <button className="bg-secondary-dark text-white rounded-full w-52 h-12 mt-4 ">Download Extention</button>

        </div >
        <div className="flex">
            <div className="flex flex-col p-10 ">
                <h1 className="text-2xl font-semibold">features</h1>
                <p className="mt-2">Multichain Wallet</p>
                <p className="mt-2">Dual Encription</p>
                <p className="mt-2">Security</p>
                <p className="mt-2">Multiple Accounts</p>
                <p className="mt-2">Multiple Networks</p>

            </div>
            <div className="flex flex-col p-10">
                <h1 className="text-2xl font-semibold">Build</h1>
                <p className="mt-2"> Developer Docs</p>
                <p className="mt-2">Wallet Core</p>
                <p className="mt-2">Get Asset</p>
                

            </div>       
            <div className="flex flex-col p-10 ">
                <h1 className="text-2xl font-semibold">Support</h1>
                <p className="mt-2">FAQ</p>
                <p className="mt-2">Community Forum</p>
                <p className="mt-2">Contact Us</p>
         

            </div>         
            <div className="flex flex-col p-10">
                <h1 className="text-2xl font-semibold">About</h1>
                <p className="mt-2">About Us</p>
                <p className="mt-2">Terms of Service</p>
                <p className="mt-2">Privacy Policy</p>
                <p className="mt-2"> Blog</p>

            </div>
        </div>
    </div>
    <div className="flex justify-end pr-56">
        <p>CopyRight@2023 Exodus Movement</p>
    </div>
    

</div>
    )
}

export default LandingFooter;