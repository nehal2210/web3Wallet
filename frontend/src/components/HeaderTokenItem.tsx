import EthereumIcon from '../assets/images/Group 55.png';

const HeaderTokenItem = ({ openNet, network,setExploreNetwork }: any) => {

    const handleDetails = ()=>{
        setExploreNetwork(network)
        openNet(true)
    }
    return (
        <div className="w-30 h-30 bg-green hover:border-2 border-2 border-primary my-2 rounded-lg flex justify-between mt-5">
            <div className="flex items-center p-3 ">
                <img src={EthereumIcon} alt="Ethereum Icon" />
                <p className="ms-2 text-black font-semibold">{network.name}</p><p className="text-btnColor ms-2 text-sm">-(selected)</p>
            </div>
            <div>
                <p onClick={() => handleDetails()} className="text-btnColor cursor-pointer p-3">Details</p>
            </div>
        </div>
    )
}

export default HeaderTokenItem;