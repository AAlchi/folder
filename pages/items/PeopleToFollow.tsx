import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Image from "./Image";

const PeopleToFollow = () => {
  const [post, setPost] = useState("");

  return (
    <div>
      <div className="flex flex-col bg-slate-200 gap-10 p-10">
        <h1 className="text-2xl">Consider following</h1>
        <div style={{ height: "270px" }} className="flex gap-3 overflow-auto">
          <Image imageUrl="./file.jpg" imageName="file" type="rectangle" />
          <Image imageUrl="./logo.png" imageName="file" type="rectangle" />
          <Image imageUrl="./tech.jpg" imageName="file" type="rectangle" />
          <Image imageUrl="./tech.jpg" imageName="file" type="rectangle" />
          <Image imageUrl="./tech.jpg" imageName="file" type="rectangle" />
        </div>
      </div>
    </div>
  );
};

export default PeopleToFollow;
