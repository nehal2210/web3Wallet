import logo from "../../assets/images/logo.png";
import Rectangle from "../../assets/images/Rectangle.png";
import criptolock from "../../assets/images/criptolock.gif"


const NonCostodialWallet = () => {
    return (
        <div className="flex justify-between placeholder w-full h-[98vh]">
            <div className="text-black w-full">
                <img className="w-16" src={logo} alt="logo" />
                <div className="w-full pt-10 flex justify-between">
                    <div>
                        <h1 className="mt-20 text-7xl font-bold ">Non-Costodial <span className="font-bold text-btnColor">Wallet</span></h1>
                        {/* <span className="text-6xl font-bold text-btnColor mt-2">Wallet</span> */}
                        <p className="mt-4 text-xl" >protect your cripto with non costodiaL Wallets:</p>
                        <p className="font-semibold text-xl">YOUR KEYS YOUR RULLES</p>
                        <button className="bg-secondary-dark text-white font-semibold rounded-full w-52 h-12 mt-4">Download Extention</button>
                    </div>
                    <div >
                        <img src={criptolock} alt="Rectangle" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NonCostodialWallet;