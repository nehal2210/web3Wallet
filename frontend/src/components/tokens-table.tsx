import { BiPlus, BiRevision } from "react-icons/bi";
import TokenItem from "./token-item";


const TokensTable = () => {
    return (
        <div className="w-[48%] h-[370px] rounded-xl bg-bgColor flex flex-col items-center p-2">
            <div className="flex justify-center">
                <p className="text-heading text-xl">Tokens</p>
            </div>
            <div className="w-[94%] h-1 my-2 bg-btnColor"></div>

            <div className="px-2 w-full max-h-[400px] h-[80%] overflow-x-auto" id="style-4">
                <TokenItem />
                <TokenItem />
                <TokenItem />
                <TokenItem />
                <TokenItem />
            </div>

            <div className="flex justify-between w-full px-4 mt-1">
                <div className="flex items-center cursor-pointer">
                    <div className="w-4 h-4 border border-btnColor flex justify-center items-center">
                        <BiPlus className="text-btnColor" />
                    </div>
                    <p className="text-btnColor ms-2 text-sm">Import Token</p>
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