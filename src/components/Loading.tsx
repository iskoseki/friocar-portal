import React from "react";
import { MutatingDots } from "react-loader-spinner";
export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#b91c1c"
        secondaryColor="#b91c1c"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
