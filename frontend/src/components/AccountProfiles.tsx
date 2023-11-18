import { Dropdown, MenuProps } from "antd";
import { BsGrid, BsThreeDotsVertical } from "react-icons/bs";



const AccountProfiles = ({address,name}:any) => {

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <div className="flex bg-primary p-2 items-center">
                    <div className="border border-btnColor p-1 flex justify-center items-center">
                        <BsGrid className="text-btnColor" />
                    </div>
                    <p className="text-btnColor sm ms-2 underline">Account Details</p>
                </div>
            ),
        }
    ];


    return (
        <div className="w-full h-24 px-3 py-2">
            <div className="w-full px-2 text-black h-full bg-green rounded-lg flex justify-between items-center">
                <div className="flex">
                    <div className="w-[50px] h-[50px] bg-btnColor rounded-full">
                        {/* image */}
                    </div>

                    <div className="ms-2">
                        <p>{name}</p>
                        <p>{address}</p>
                    </div>
                </div>

                <div className="flex items-center">
                    <div>
                        <p>0.2 Eth</p>
                        <p>220 USD</p>
                    </div>

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