import { BsFillArrowDownLeftCircleFill, BsFillArrowUpRightCircleFill } from "react-icons/bs";


const ActivityItem = ({ data }: any) => {
    return (
        <div className="w-full bg-bgColor2 my-2 rounded-lg p-4">
            <div className="flex justify-between">
                <div>
                    <div className="flex items-center">
                        {
                            data.status === 'Received' ?
                                <BsFillArrowDownLeftCircleFill className="text-btnColor text-3xl" />
                                :
                                <BsFillArrowUpRightCircleFill className="text-btnColor text-3xl" />

                        }
                        <div>
                            <p className="ms-2 text-white">{data.status}<span className="text-xs text-btnColor">- {data.date}</span></p>
                            <p className="text-xs text-white ms-2 mt-1">{data.isConfirm ? 'Confirmed' : 'Pending'}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-white">{data.value}</p>
                    <p className="text-white mt-1 text-xs">{data.valueInDollar}</p>
                </div>
            </div>
            {
                !data.isConfirm ?
                    <div className="w-full flex justify-end mt-3">
                        <button className="py-1 text-white px-10 bg-btnColor hover:bg-btnColorHover rounded-full">Cancel</button>
                    </div>
                    :
                    null
            }

        </div>
    )
}


export default ActivityItem;