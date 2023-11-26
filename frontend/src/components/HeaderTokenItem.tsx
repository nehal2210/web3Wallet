import { useDispatch, useSelector } from 'react-redux';
import EthereumIcon from '../assets/images/Group 55.png';
import { RootState } from '../redux/store';
import { setCurrentNetwork } from '../redux/wallet';

const HeaderTokenItem = ({ SetIsEditable, network,setExploreNetwork,setOpenNetworkModal }: any) => {
    const currentNetwork = useSelector((state: RootState) => state.wallet.currentNetwork)

    const dispatch = useDispatch();
    const handleDetails = ()=>{
        setExploreNetwork(network)
        SetIsEditable(false)
        setOpenNetworkModal(true)
    }
    return (
        <div onClick={() => dispatch(setCurrentNetwork(network))} className={currentNetwork === network ? 'w-30 h-30 bg-green my-2 rounded-lg flex justify-between mt-5 cursor-pointer border-[3px] border-btnColorHover' : 'w-30 h-30 bg-green  my-2 rounded-lg flex justify-between mt-5 cursor-pointer'}>
            <div className="flex items-center p-3 ">
                <img src={EthereumIcon} alt="Ethereum Icon" />
                <p className="ms-2 text-black font-semibold">{network.name}</p><p className="text-btnColor ms-2 text-sm">-(selected)</p>
            </div>
            <div>
                <p onClick={(e) => {e.stopPropagation(); handleDetails()}} className="text-btnColor cursor-pointer p-3">Details</p>
            </div>
        </div>
    )
}

export default HeaderTokenItem;