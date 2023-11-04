


function PhraseBox({wallet}:any) {
    return ( 
      <div className="p-4 flex flex-wrap align-middle justify-center gap-2">
        
        
        {  
         ["abc","abc","abc","abc","abc","abc","abc","abc","abc","abc","abc","abc"].map((word:string, i:any)=>{
          return(
              <div key={i} className="w-[150px]">
              <div  className="text-heading bg-btnColorHover w-[150px] border-white border-2 py-2 pr-2 rounded-lg">
              <span className="p- 2 border-white border-2 bg-btnColor rounded-lg">
               {i}
              </span>
              <span className="ml-2">{wallet?.phrase[i]?wallet?.phrase[i]:word}</span>
            </div>     
            </div> 
            )
          }) 
      
        }
    </div> );
}

export default PhraseBox;



//   <div className="text-heading bg-btnColorHover border-white border-2 py-2 pr-2 rounded-lg">
      //     <span className="p-2 border-white border-2 bg-btnColor rounded-lg">
      //       2
      //     </span>
      //     <span className="ml-2">{wallet.phrase[1]? wallet.phrase[1] :"asperiores"}</span>
      //   </div>

      //   <div className="text-heading bg-btnColorHover border-white border-2 py-2 pr-2 rounded-lg">
      //     <span className="p-2 border-white border-2 bg-btnColor rounded-lg">
      //       3
      //     </span>
      //     <span className="ml-2">{wallet.phrase[2]? wallet.phrase[2] :"asperiores"}</span>
      //   </div>

      //   <div className="text-heading bg-btnColorHover border-white border-2 py-2 pr-2 rounded-lg">
      //     <span className="p-2 border-white border-2 bg-btnColor rounded-lg">
      //       4
      //     </span>
      //     <span className="ml-2">{wallet.phrase[3]? wallet.phrase[3] :"asperiores"}</span>
      //   </div>
      // </div>
      // <div className="mt-2 flex justify-between items-center gap-2">
      //   <div className="text-heading bg-btnColorHover border-white border-2 py-2 pr-2 rounded-lg">
      //     <span className="p-2 border-white border-2 bg-btnColor rounded-lg">
      //       1
      //     </span>
      //     <span className="ml-2">{wallet.phrase[4]? wallet.phrase[4] :"asperiores"}</span>
      //   </div>

      //   <div className="text-heading bg-btnColorHover border-white border-2 py-2 pr-2 rounded-lg">
      //     <span className="p-2 border-white border-2 bg-btnColor rounded-lg">
      //       2
      //     </span>
      //     <span className="ml-2">{wallet.phrase[5]? wallet.phrase[5] :"asperiores"}</span>
      //   </div>

      //   <div className="text-heading bg-btnColorHover border-white border-2 py-2 pr-2 rounded-lg">
      //     <span className="p-2 border-white border-2 bg-btnColor rounded-lg">
      //       3
      //     </span>
      //     <span className="ml-2">{wallet.phrase[6]? wallet.phrase[6] :"asperiores"}</span>
      //   </div>

      //   <div className="text-heading bg-btnColorHover border-white border-2 py-2 pr-2 rounded-lg">
      //     <span className="p-2 border-white border-2 bg-btnColor rounded-lg">
      //       4
      //     </span>
      //     <span className="ml-2">{wallet.phrase[7]? wallet.phrase[7] :"asperiores"}</span>
      //   </div>
      // </div>
      // <div className="mt-2  flex justify-between items-center gap-2">
      //   <div className="text-heading bg-btnColorHover border-white border-2 py-2 pr-2 rounded-lg">
      //     <span className="p-2 border-white border-2 bg-btnColor rounded-lg">
      //       1
      //     </span>
      //     <span className="ml-2">{wallet.phrase[8]? wallet.phrase[8] :"asperiores"}</span>
      //   </div>

      //   <div className="text-heading bg-btnColorHover border-white border-2 py-2 pr-2 rounded-lg">
      //     <span className="p-2 border-white border-2 bg-btnColor rounded-lg">
      //       2
      //     </span>
      //     <span className="ml-2">{wallet.phrase[9]? wallet.phrase[9] :"asperiores"}</span>
      //   </div>

      //   <div className="text-heading bg-btnColorHover border-white border-2 py-2 pr-2 rounded-lg">
      //     <span className="p-2 border-white border-2 bg-btnColor rounded-lg">
      //       3
      //     </span>
      //     <span className="ml-2">{wallet.phrase[10]? wallet.phrase[10] :"asperiores"}</span>
      //   </div>

      //   <div className="text-heading bg-btnColorHover border-white border-2 py-2 pr-2 rounded-lg">
      //     <span className="p-2 border-white border-2 bg-btnColor rounded-lg">
      //       4
      //     </span>
      //     <span className="ml-2">{wallet.phrase[11]? wallet.phrase[11] :"asperiores"}</span>
      //   </div>
      