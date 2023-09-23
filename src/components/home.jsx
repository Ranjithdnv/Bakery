import React, { useEffect, useState, useRef } from "react";
import QuestionMarkSharpIcon from "@mui/icons-material/QuestionMarkSharp";
import LightModeSharpIcon from "@mui/icons-material/LightModeSharp";
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import ArrowDownwardSharpIcon from "@mui/icons-material/ArrowDownwardSharp";
import "./home.css";
function Home() {
  const [username, setusername] = useState("Ranjith");
  const [usernamechange, setusernamechange] = useState(false);
  const [lightmodes, setlightmodes] = useState(true);
  const [mainbeach, setmainbeach] = useState([
    "./beach1.jpg",
    "./beach2.jpg",
    "./beach3.jpg",
    "./beach4.jpg",
    "./beach5.jpg",
  ]);
  const [Others, setOthers] = useState([
    "./beach1.jpg",
    "./beach2.jpg",
    "./beach3.jpg",
    "./beach4.jpg",
    "./beach5.jpg",
  ]);
  const [TodaySpecial, setTodaySpecial] = useState([
    "./beach1.jpg",
    "./beach2.jpg",
    "./beach3.jpg",
    "./beach4.jpg",
    "./beach5.jpg",
  ]);
  const [ShootPlaces, setShootPlaces] = useState([
    "./beach1.jpg",
    "./beach2.jpg",
    "./beach3.jpg",
    "./beach4.jpg",
    "./beach5.jpg",
  ]);
  return (
    <div className={lightmodes ? "bg-light" : "bg-dark"}>
      <div className="App flex flex-col box-border ">
        <div className="topbar flex justify-between items-center px-2 mb-8 gap-x-2  border-gray-400 border-b-8 h-32 w-full py-2 bg-white">
          <div className="logo text-4xl rounded p-2 basis-36  flex-1">
            <img src="./perupalem-logo.png" className="h-28 w-32" alt="" />
          </div>
          <div className="nameofapp text-4xl font-bold text-blue-300 rounded p-2 flex-1  basis-72    ">
            perupalem bakery
          </div>
        </div>
        <div className="username flex justify-around">
          {" "}
          <div
            className="lightmode"
            onClick={() => {
              setlightmodes(!lightmodes);
            }}
          >
            <LightModeSharpIcon className={lightmodes ? "light" : "dark"} />
          </div>
          <div
            className={
              !usernamechange
                ? "name text-orange-300 text-2xl font-bold"
                : "hidden"
            }
          >
            {username}
          </div>
          <div
            onClick={() => {
              setusernamechange(!usernamechange);
            }}
          >
            {" "}
            <ModeEditRoundedIcon className="modeedit" />
          </div>
          <div className={usernamechange ? "changename" : "hidden"}>
            <input
              className="text-orange-400 text-center rounded   active:outline outline-orange-400 outline-2 outline-offset-2 "
              type="text"
              value={username}
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="m-1 my-2 font-semibold text-gray-500">
          Hi mr {username} , if you are planning to go to perupalem beach then
          you came to right places
        </div>
        <div>
          {" "}
          <ul class="list-disc list-inside  text-left m-2  ml-36  font-semibold text-gray-400">
            <li>ican help for your best experience </li>{" "}
            <li>leave food planning to me</li>{" "}
            <li>i will suggest , if the weather is good or bad</li>
          </ul>
        </div>

        <div className="main-box ">
          <div className="userbg-green-200  "></div>
          <div className="details capitalize flex justify-around shadow-2xl m-4 bg-green-200 border-2 p-4 ">
            <details>
              <summary className="font-bold ">Weather</summary>
              <h1 className="font-medium text-slate-500">good</h1>
              <p className="font-medium text-slate-500">winds good</p>
              <div className="font-medium text-slate-500">sunny</div>
            </details>
            <details>
              <summary className="font-bold">Details</summary>
              <h1 className="font-medium text-slate-600">Bakery</h1>
              <p className="font-medium text-slate-600">9390083894</p>
              <div className="font-medium text-slate-600">Ranjith</div>
            </details>{" "}
          </div>
          <div className="text-xl font-semibold">Today special</div>{" "}
          <ArrowDownwardSharpIcon className="arrowdown text-green-300" />
          <div className="today-special h-80 overflow-scroll  shadow-2xl p-4 m-4   border-sky-100 border-2">
            {TodaySpecial.map((images) => (
              <div>
                {" "}
                <div className="my-2 w-full object-contain bg-cover rounded-lg  overflow-hidden  border-sky-100 ">
                  <img
                    src={images}
                    className=" w-full object-contain "
                    alt=""
                    height="400px"
                    width="800px"
                  />
                </div>
                <div className="text-green-400 flex justify-around align-middle">
                  <div className="p-1 b  border-sky-100 border-2 w-12 h-8 -mt-12">
                    Book
                  </div>
                  <div className="p-1 border-sky-100 border-2 w-12 h-8 -mt-12">
                    <a href="tel:9390083894">Call</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-xl font-semibold">Foods Available for you</div>{" "}
          <ArrowDownwardSharpIcon className="arrowdown text-green-300" />
          <div className="daily-items shadow-2xl  m-4 rounded-sm  w-fill  overflow-scroll border-sky-100 border-2">
            {TodaySpecial.map((images) => (
              <div className="daily w-84  object-cover rounded-lg  overflow-hidden m-4 h-96 ">
                <img
                  src={images}
                  className=" w-84  object-cover h-96 bg-cover "
                  alt=""
                />
              </div>
            ))}
          </div>
          <div className="othershops text-xl font-semibold">
            Foods from other shops
          </div>{" "}
          <ArrowDownwardSharpIcon className="arrowdown text-green-300" />
          <div className="items-others p-4 m-4 shadow-2xl border-sky-100 border-2">
            items
          </div>
          <div className="anyother-items p-4 m-4 shadow-2xl border-sky-100 border-2">
            anyother
          </div>
          <div className="places shadow-2xl p-4 m-4 border-sky-100 border-2">
            <details className="text-center">
              <summary className="font-bold text-black">Places Near</summary>
              <details>
                <summary className="font-bold text-slate-500">
                  ShootPlaces
                </summary>
                {Others.map((images) => (
                  <div>
                    {" "}
                    t
                    <img src={images} alt="" />
                  </div>
                ))}
              </details>{" "}
              <details>
                <summary className="font-bold text-slate-500">
                  Main Beach
                </summary>
                {Others.map((images) => (
                  <div>
                    {" "}
                    t
                    <img src={images} alt="" />
                  </div>
                ))}
              </details>{" "}
              <details>
                <summary className="font-bold text-slate-500">
                  OtherPlaces
                </summary>
                {Others.map((images) => (
                  <div>
                    {" "}
                    <img src={images} alt="" />
                  </div>
                ))}
              </details>
            </details>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
}
export default Home;
