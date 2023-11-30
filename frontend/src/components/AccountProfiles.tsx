import { Dropdown, MenuProps } from "antd";
import { BsGrid, BsThreeDotsVertical } from "react-icons/bs";
import { formateAddress } from "../services/utils";
import { useDispatch, useSelector } from "react-redux";
import { changeAccount, setAccountDetails } from "../redux/wallet";
import { RootState } from "../redux/store";
import { setOpenAccount } from "../redux/counter";
import Avatar, { genConfig } from 'react-nice-avatar'


const AccountProfiles = ({account,avtar}:any) => {

    const currentAccount = useSelector((state: RootState) => state.wallet.currentAccount)
    const dispatch = useDispatch();
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <div className="flex bg-primary p-2 items-center">
                    <div className="border border-btnColor p-1 flex justify-center items-center">
                        <BsGrid className="text-btnColor" />
                    </div>
                    <p onClick={(e) => {e.stopPropagation(); dispatch(setAccountDetails(account))}} className="text-btnColor sm ms-2 underline">Account Details</p>
                </div>
            ),
        }
    ];


    return (
        <div className="w-full h-24 px-3 py-2 cursor-pointer">
            <div onClick={() => {dispatch(changeAccount(account)); dispatch(setOpenAccount(false))}} className={currentAccount.address === account.address ? 'w-full px-2 text-black h-full bg-green rounded-lg flex justify-between items-center border-[3px] border-btnColorHover' : 'w-full px-2 text-black h-full bg-green rounded-lg flex justify-between items-center'}>
                <div className="flex">
                    {/* <div className="w-[50px] h-[50px] bg-btnColor rounded-full"> */}
                    <Avatar className="w-[50px] h-[50px]" {...genConfig(account.address)} />
                    {/* </div> */}

                    <div className="ms-2">
                        <p>{account.name}</p>
                        {/* <p>{address.substring(0, 10 / 2)}...${address.substring(address.length - 10 / 2)}</p> */}
                        <p>{formateAddress(account.address)}</p>
                    </div>
                </div>

                <div className="flex items-center">
                    {/* <div>
                        <p>0.2 Eth</p>
                        <p>220 USD</p>
                    </div> */}

                    <div className="ms-2">
                        <Dropdown menu={{ items }} placement="bottomLeft">
                            <BsThreeDotsVertical className="text-black cursor-pointer" />
                        </Dropdown>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AccountProfiles;