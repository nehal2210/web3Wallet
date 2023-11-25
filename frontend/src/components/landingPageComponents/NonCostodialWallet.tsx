import logo from "../../assets/images/logo.png";
import Rectangle  from "../../assets/images/Rectangle.png";
import criptolock from "../../assets/images/criptolock.gif"


const NonCostodialWallet = () => {
    return(
        <div className="flex justify-between   px-40">
          <div className=" text-black justify-center items-center ms-28">
            <img className="w-16" src={logo} alt="logo" />
        
            <h1 className="mt-20 text-7xl font-bold ">Non-Costodial</h1>
            <p className="text-6xl font-bold text-btnColor mt-2">Wallet</p>
            <p className="mt-4 text-xl" >protect your cripto with non costodiaL Wallets:</p>
            <p className="font-semibold text-xl">YOUR KEYS YOUR RULLES</p>
            <button className="bg-secondary-dark text-white font-semibold rounded-full w-52 h-12 mt-4">Download Extention</button>

            </div>
            <div >
                <img className="w-[600px] h-[500px]"   src={criptolock} alt="Rectangle" />
            </div>
            </div>
            
    )
}

export default NonCostodialWallet;