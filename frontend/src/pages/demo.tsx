import React from "react";
import type { RootState } from '../redux/store';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../redux/counter";
import { AiFillAlert } from "react-icons/ai";
import { BallTriangle } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DatePicker } from "antd";


function Demo() {
    const count = useSelector((state: RootState) => state.user.value)
    const dispatch = useDispatch();


    const notify = () => toast("Wow so easy!");
    return (
        <>
            <div className="flex justify-center items-center">
                <h1 className="text-3xl font-bold underline text-red-500">
                    Hello world!
                </h1>
                <p className="ms-4 text-3xl font-bold underline text-red-500">

                    <AiFillAlert />
                </p>
            </div>

            <div className="flex justify-center items-center mt-4">
                <h3 className="text-3xl font-bold text-blue-600">This is Redux Count: {count}</h3>
            </div>
            <div className="flex justify-center items-center">
                <button className="border-solid border-2 border-indigo-600 p-1 rounded-md m-2" onClick={() => dispatch(increment())}>Increment</button>
                <button className="border-solid border-2 border-indigo-600 p-1 rounded-md m-2" onClick={() => dispatch(decrement())}>Decrement</button>
                <button className="border-solid border-2 border-indigo-600 p-1 rounded-md m-2" onClick={() => dispatch(incrementByAmount(30))}>increment by 30</button>

            </div>


            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                visible={true}
            />
            <h2 className="ms-4">Loading...</h2>



            <div className="mt-4">
                <button className="border-solid border-2 border-indigo-600 p-1 rounded-md m-2" onClick={notify}>Notify!</button>
                <ToastContainer />

                <DatePicker />
            </div>


        </>
    );
}

export default Demo;