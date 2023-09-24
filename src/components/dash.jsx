import React, { useState } from "react";
import axios from "axios";
import CategoryIcon from "@mui/icons-material/Category";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
const Dash = () => {
  const [Category, setCategory] = useState("");
  const [imgs, setImgs] = useState();
  const [filename, setfilename] = useState("");
  const [file, setFile] = useState();

  const handleChnage = (e) => {
    setFile(e.target.files[0]);
    const f = e.target.files[0];
    const names = f.name;
    const name = names.split(".");
    setfilename(name[0]);
    console.log(name[0]);
    const data = new FileReader();
    data.addEventListener("load", () => {
      setImgs(data.result);
    });
    data.readAsDataURL(e.target.files[0]);
  };
  const checkm = async (event) => {
    event.preventDefault();
    setfilename("");
    // const data = {
    //   ...Contexts.us,
    //   desc: text,
    //   img: filename[filename.length * 1 - 1],
    //   category: category,
    // };
    // console.log(data);
    // setpostdata([...postdata, data]);
    await axios
      .post("https:///bigserver.onrender.com/postmessage")
      .then((res) => {
        console.log(res.data.post._id);
      })
      .catch((er) => console.log(er));
  };
  console.log(Category);
  return (
    <div className="flex justify-center  items-center h-screen  gap-y-24  bg-blue-200   ">
      <div className="flex justify-center items-center h-auto p-8 bg-blue-300 w-96 gap-y-8 shadow-2xl  flex-col">
        <div className="relative transition-all duration-100  ease-linear  group">
          <div className=" opacity-0 transition-all duration-100  ease-linear  -left-4 absolute -top-12 font-mono rounded-lg border-2 px-2 border-green-400  group-hover:opacity-100 group-hover:border-green-400">
            add image
          </div>

          <label className="" htmlFor="file">
            {" "}
            <FileUploadOutlinedIcon className=" text-blue-500" />
          </label>
          <div className=" hidden">
            <input
              id="file"
              type="file"
              // onChange={(e) => setFile(e.target.files[0])}
              onChange={handleChnage}
            />
          </div>
          <div>{filename} </div>
        </div>

        <button onClick={checkm}> upload</button>
        <details className=" text-blue-500">
          <summary>{/* <CategoryIcon /> */}</summary>
          <div
            className=" font-semibold transition-all  duration-1000 ease-out  border-blue-300 hover:border-slate-500 border-b-2"
            onClick={() => {
              setCategory("special");
            }}
          >
            special
          </div>
          <div
            className="font-semibold transition-all  duration-1000 ease-out  border-blue-300 hover:border-slate-500 border-b-2"
            onClick={() => {
              setCategory("items");
            }}
          >
            items
          </div>
          <div
            className="font-semibold transition-all  duration-1000 ease-out  border-blue-300 hover:border-slate-500 border-b-2"
            onClick={() => {
              setCategory("othershops");
            }}
          >
            othershops
          </div>
          <div
            className="font-semibold transition-all  duration-1000 ease-out  border-blue-300 hover:border-slate-500 border-b-2"
            onClick={() => {
              setCategory("shoot");
            }}
          >
            shoot
          </div>{" "}
          <div
            className="font-semibold transition-all  duration-1000 ease-out  border-blue-300 hover:border-slate-500 border-b-2"
            onClick={() => {
              setCategory("mainbeach");
            }}
          >
            mainbeach
          </div>
          <div
            className="font-semibold transition-all  duration-1000 ease-out    border-blue-300 hover:border-slate-500 border-b-2"
            onClick={() => {
              setCategory("otherplaces");
            }}
          >
            otherplaces
          </div>
        </details>
      </div>
    </div>
  );
};

export default Dash;
