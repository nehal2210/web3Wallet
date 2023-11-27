import transactionimage from "../../assets/images/Group 216.png";
import contactimage from "../../assets/images/Group 217.png";
import netwokimage from "../../assets/images/Group 215.png";



const Transaction = () => {
  return (
    <div className="flex justify-center w-full h-[80vh]">
      <div className="flex justify-evenly w-[100%] ">
        <div className="w-[25%] ">
          <img src={transactionimage} alt="transactionimages" />
          <p className="mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            asperiores a doloribus fugiat placeat.
          </p>
        </div>
        <div className="w-[25%]">
          <img src={contactimage} alt="transactionimages" />
          <p className="mt-8">
            Lorem ipsum dolor sit amet consectetur as a doloribus fugiat placeat
            voluptas.
          </p>
        </div>
        <div className="w-[25%]">
          <img src={netwokimage} alt="transactionimages" />
          <p className="mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            asperiores a d.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
