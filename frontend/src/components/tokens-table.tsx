import { useState } from 'react';
import { BiPlus, BiRevision } from "react-icons/bi";
import TokenItem from "./token-item";
import ActivityItem from "./ActivityItem";
import { Link } from 'react-router-dom';


const TokensTable = ({ tableHeading, date }: any) => {

    const [TokenItemData, setTokenItemData] = useState([
        {
            name: 'ETH Mannet',
            value: '0 ETH',
            btn: 'send'
        },
        {
            name: 'ETH',
            value: '284 ETH',
            btn: 'send'
        },
        {
            name: 'ETHER',
            value: '453 ETH',
            btn: 'send'
        },
        {
            name: 'Bit coin',
            value: '3455 BIT',
            btn: 'send'
        }
    ]);


    const [activityItemData, setActivityItemData] = useState([
        {
            status: 'Received',
            isConfirm: true,
            date: 'Oct 09, 2023',
            value: '0.2 ETH',
            valueInDollar: '$ 1220 USD',
        },
        {
            status: 'Sending',
            isConfirm: false,
            date: 'Oct 09, 2023',
            value: '0.2 ETH',
            valueInDollar: '$ 1220 USD',
        },
        {
            status: 'Sending',
            isConfirm: false,
            date: 'Oct 09, 2023',
            value: '0.2 ETH',
            valueInDollar: '$ 1220 USD',
        },
        {
            status: 'Received',
            isConfirm: true,
            date: 'Oct 09, 2023',
            value: '0.2 ETH',
            valueInDollar: '$ 1220 USD',
        }
    ])

    return (
        <div className="w-[48%] h-[340px] rounded-xl bg-bgColor flex flex-col items-center p-2">
            <div className="flex justify-center">
                <p className="text-heading text-xl">{tableHeading}</p>
            </div>
            <div className="w-[94%] h-1 my-2 bg-btnColor"></div>

            <p className="text-heading my-1 ms-4 w-full">{date}</p>

            <div className="px-2 w-full max-h-[400px] h-[80%] overflow-x-auto" id="style-4">
                {
                    tableHeading === 'Tokens' ?
                        <>
                            {TokenItemData.map(data => {
                                return (
                                    <TokenItem data={data} />
                                )
                            })}
                        </>
                        :
                        <>
                            {
                                activityItemData.map(data => {
                                    return (
                                        <ActivityItem data={data} />
                                    )
                                })
                            }
                        </>

                }

            </div>

            <div className="flex justify-between w-full px-4 mt-1">
                <div className="flex items-center cursor-pointer">
                    <div className="w-4 h-4 border border-btnColor flex justify-center items-center">
                        <BiPlus className="text-btnColor" />
                    </div>
                    <Link to='/import-tokens'>
                    <p className="text-btnColor ms-2 text-sm">Import Token</p>
                    </Link>
                </div>

                <div className="flex items-center cursor-pointer">
                    <div className="w-4 h-4 border border-btnColor flex justify-center items-center">
                        <BiRevision className="text-btnColor" />
                    </div>
                    <p className="text-btnColor ms-2 text-sm">Refresh List</p>
                </div>
            </div>

            <div className="flex justify-between cursor-pointer">

            </div>
        </div>
    )
}


export default TokensTable;