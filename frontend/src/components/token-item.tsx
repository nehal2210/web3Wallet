
import EthereumIcon from '../assets/images/Group 55.png';



const TokenItem = () => {
    return (
        <div className="w-full h-20 bg-bgColor2 my-2 rounded-lg flex justify-between p-4">
            <div>
                <div className="flex items-center">
                    <img src={EthereumIcon} alt="Ethereum Icon" />
                    <p className="ms-2 text-white">ETH Mannet</p>
                </div>
                <p className="text-xs text-white">0 ETH</p>
            </div>
            <div>
                <p className="text-btnColor cursor-pointer">Send</p>
            </div>
        </div>
    )
}


export default TokenItem;