import React from "react";
import img1 from "../../assets/images/gettyimages-1248057082-612x612.jpg";
import img2 from "../../assets/images/istockphoto-1322680241-612x612.jpg";
import img3 from "../../assets/images/tree-736885__480.jpg";

const gallary = () => {
  return (
    <div className="text-center">
      <h2 className="font-bold">Lets make it happen</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        odit sunt minus consequuntur assumenda dolorem tempore? Ipsam dolore
        delectus repudiandae?
      </p>
      <div className="flex gap-2 justify-center items-center rounded">
        <img className="w-60 h-96 " src={img1} alt="" />

        <div className="grid grid-cols-4 gap-2 mt-8">
          <img className="w-60 h-72" src={img2} alt="" />
          <img className="w-72 h-60" src={img3} alt="" />
          <img className="w-72 h-60" src={img1} alt="" />
          <img className="w-72 h-60" src={img2} alt="" />
          <img className="w-72 h-60" src={img3} alt="" />
          <img className="w-72 h-60" src={img2} alt="" />
          <img className="w-72 h-60" src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default gallary;
