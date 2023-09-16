import { useEffect } from "react";
import useGetDocs from "../../hooks/useGetDocs";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { Option } from "../../types/types";
import { optionAtom } from "../../recoil/atoms";
import { parseOptionResponse } from "../../libraries/parsers";
import "./Options.css"
interface VotesProps {
  postId: string;
}

export default function Votes({ postId }: VotesProps) {
 const { sendRequest: getDocs } = useGetDocs();

 const setOption = useSetRecoilState<Option[]>(optionAtom);
 const options = useRecoilValue(optionAtom);

 useEffect(() => {
   const getOption = async () => {
     const response = await getDocs<Option>({ col: "options" });
     // console.log("getting response?",response);
     if (response) {
       setOption(parseOptionResponse(response));
     }
   };
   getOption();
 }, [setOption, getDocs]);

 // console.log("comments", comments);

 return (
   <div className="option-section">
     {options.map((option) => {
       return (
         <div key={option.id}>
           {option.postId === postId && (
             <div className="vote-option-line">
               <div>{option.optionText}</div>
               <div>{option.userVotes.length}</div>
               <button>Vote</button>
             </div>
           )}
         </div>
       );
     })}
   </div>
 );
}
