import logo from "../../assets/images/logo.png";
import Rectangle  from "../../assets/images/Rectangle.png";


const NonCostodialWallet = () => {
    return(
        <>
        <div className="relative ">
          <div className="absolute  top-10 ms-44 text-white justify-center items-center">
            <img className="w-16" src={logo} alt="logo" />
        
            <h1 className="mt-44 text-7xl font-bold ">Non-Costodial</h1>
            <p className="text-6xl font-bold text-btnColor mt-2">Wallet</p>
            <p className="mt-4" >protect your cripto with non costodiaL Wallets:</p>
            <p className="font-semibold">YOUR KEYS YOUR RULLES</p>
            <button className="bg-secondary-dark text-white rounded-full w-52 h-12 mt-4">Download Extention</button>

            </div>
            <div>
                <img className="h-[100vh] w-[100%]"   src={Rectangle} alt="Rectangle" />
            </div>
            </div>
          
            </>
            
    )
}

export default NonCostodialWallet;