import React from "react";
import { ques } from "./QnA";
import { nanoid } from "nanoid";
// import quesAns from './QuesAns'
const Faq = () => {
  // console.log(ques);
  return (
    <div className="w-full rounded-lg p-8 bg-white flex flex-col gap-8">
      <h1 className="text-[24px] font-bold">Frequently Asked Questions</h1>
      {ques.map((ele, idx) => {
        return (
          <div className="" key={nanoid()}>
            <p className="font-bold">
              {idx + 1}.{ele.ques}
            </p>
            <p
              className="pl-3 pt-1"
              dangerouslySetInnerHTML={{ __html: ele.ans }}
            ></p>
          </div>
        );
      })}
    </div>
  );
};

export default Faq;