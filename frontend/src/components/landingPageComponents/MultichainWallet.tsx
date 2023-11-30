

import group from "../../assets/images/Group 209.png";
const MultichainWallet = () => {
    return (
        <>      

            <div className="h-[100vh]">
                <div className="bg-bgShade rounded-xl border-white w-full h-[100vh]">
                    <div className="flex flex-col items-center  p-10">
                        <h1 className="text-5xl font-bold">Multichain Web3 Wallet</h1>
                        <p className="font-semibold p-5 pb-0 ">connect to 12+ Network including Etherium, Solana,Bsc with the exodos chrome browser xtension</p>


                    </div>
                    <div className="flex justify-center -mb-4">
                        <img className="w-[100%] h-[70vh]" src={group} alt="" />
                    </div>

                </div>


            </div>

        </>
    )
}
export default MultichainWallet;