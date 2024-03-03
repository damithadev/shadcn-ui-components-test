import React from "react";

const SingleCard = () => {
  return (
    <div className="my-20 mx-20">
      {/* old card */}
      <div className="flex flex-col bg-slate-100 w-[314px] h-[290px] rounded-2xl mb-10 cursor-pointer">
        <div className="img ">
          <img
            src="flutter.jpg"
            alt=""
            className="w-[314px] h-[145px] object-cover rounded-t-2xl"
          />
        </div>
        <div className="py-5 px-5">
          <h1 className="mb-2 text-sm font-medium text-slate-500">
            By Mozilla Campus Club IIT
          </h1>
          <h1 className="mb-6 text-2xl font-bold">Flutter Bootcamp</h1>
          <div className="flex">
            <h1 className="text-sm font-medium text-slate-500">
              4th Dec @ 9:00 AM
            </h1>
            <h1 className="text-sm font-medium text-slate-500 ml-auto">
              Hackathon
            </h1>
          </div>
        </div>
      </div>

      {/* new card */}
    </div>
  );
};

export default SingleCard;
