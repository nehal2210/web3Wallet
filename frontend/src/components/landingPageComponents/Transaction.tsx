import transactionimage from "../../assets/images/Group 216.png";
import contactimage from "../../assets/images/Group 217.png";
import netwokimage from "../../assets/images/Group 215.png";



const Transaction = () => {
  return (
    <div className="flex   h-[80vh]">
      <div className="flex justify-around  w-full ">
        <div className="w-[25%] ">
          <img src={transactionimage} alt="transactionimages" />
          <p className="mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing. Ipsa
            asperiores a doloribus fugiat placeat.placeat asperiores a doloribus fugiat placeat.
          </p>
        </div>
        <div className="w-[25%]">
          <img src={contactimage} alt="transactionimages" />
          <p className="mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing. Ipsa
            asperiores a doloribus fugiat placeat.placeat asperiores a doloribus fugiat placeat..
          </p>
        </div>
        <div className="w-[25%]">
          <img src={netwokimage} alt="transactionimages" />
          <p className="mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing. Ipsa
            asperiores a doloribus fugiat placeat.placeat asperiores a doloribus fugiat placeat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
