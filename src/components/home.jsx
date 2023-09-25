import React, { useEffect, useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CountContext } from "../context";
import axios from "axios";
import QuestionMarkSharpIcon from "@mui/icons-material/QuestionMarkSharp";
import LightModeSharpIcon from "@mui/icons-material/LightModeSharp";
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import ArrowDownwardSharpIcon from "@mui/icons-material/ArrowDownwardSharp";
import "./home.css";
function Home() {
  const Contexts = useContext(CountContext);
  const [numbercount, setnumbercount] = useState(0);
  const [number, setnumber] = useState("");
  const [numberid, setnumberid] = useState(
    localStorage.getItem("numberid") || ""
  );
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

  const [Othershops, setOthershops] = useState([
    "./fried rice.jpg",
    "./full meals.jpg",
  ]);
  const [Others, setOthers] = useState([
    "./beach1.jpg",
    "./beach2.jpg",
    "./beach3.jpg",
    "./beach4.jpg",
    "./beach5.jpg",
  ]);
  const [daily, setdaily] = useState(["./cooling cake.jpg", "./cococola.jpg"]);
  const [TodaySpecial, setTodaySpecial] = useState(["./cooling cake.jpg"]);
  const [ShootPlaces, setShootPlaces] = useState([
    "./beach1.jpg",
    "./beach2.jpg",
    "./beach3.jpg",
    "./beach4.jpg",
    "./beach5.jpg",
  ]);
  const navi = useNavigate();
  useEffect(() => {
    const getitem = async () => {
      await axios
        .get("https://bakeryapi.onrender.com")
        .then((res) => {
          console.log(res.data);
          res.data.map((data) => {
            if (data.category === "special") {
              console.log(0); //----------------------------------------------------
              setTodaySpecial((prev) => [...prev, data.item]); //-------------------------------------------------------------- for loop of sett-----------------
            } //-----------------------------------------------------------------------
            if (data.category === "shoot") {
              setShootPlaces((prev) => [...prev, data.item]);
            }
          });
          Contexts.user();
        })
        .catch((er) => console.log(er));
    };
    getitem();
    ////////////
    const getitemnumber = async () => {
      await axios
        .get("https://bakeryapi.onrender.com/howmuchnumber")
        .then((res) => {
          console.log(res.data);
          res.data.map((date) => {
            if (date.dayofarrival === "tomorrow") {
              console.log("tomorrow");
              setnumbercount((prev) => prev + 1);
            }
          });
        })
        .catch((er) => console.log(er));
    };
    getitemnumber();
  }, []);
  //
  const numaaa = async (e) => {
    e.preventDefault(); //-----------------------------------------------------------------not working function with button ------------------
    console.log("kkkkkkkkk");
    if (!numberid) {
      console.log("kkkkkkkkk");
      if (number) {
        await axios
          .post("https://bakeryapi.onrender.com/numberadd", {
            dayofarrival: number,
          })
          .then((res) => {
            console.log(res.data);
            localStorage.setItem("numberid", res.data._id);
            setnumberid(res.data._id);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      console.log(77777777776);
      await axios
        .put("https://bakeryapi.onrender.com/numberupdate", {
          dayofarrival: number,
          _id: numberid,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const newxnew = () => {
    const a = username;
    if (a === "Ranjith") {
      navi("/dash");
    }
  };

  console.log(localStorage.getItem("numberid"));

  console.log(TodaySpecial);
  console.log(numbercount);
  return (
    <div className={lightmodes ? "bg-light" : "bg-dark"}>
      <div className="App flex flex-col box-border ">
        <div className="topbar flex justify-between items-center px-2 mb-8 gap-x-2  border-gray-400 border-b-8 h-32 w-full py-2 bg-white">
          <div
            onClick={newxnew}
            className="logo text-4xl rounded p-2 basis-36  flex-1"
          >
            <img src="./perupalem-logo.png" className="h-28 w-32" alt="" />
          </div>
          <div className="nameofapp text-4xl font-bold text-blue-300 rounded p-2 flex-1  basis-72    ">
            perupalem bakery
          </div>
        </div>

        <div className="username relative flex justify-around group">
          {" "}
          <div>
            <div className="changemode absolute  font-mono rounded-lg border-2 px-2 border-green-400 transition-all   duration-100 ease-linear text-slate-400 -top-6  left-20 opacity-0 group-hover:opacity-100">
              change mode
            </div>
            <div
              className="lightmode  "
              onClick={() => {
                setlightmodes(!lightmodes);
              }}
            >
              <LightModeSharpIcon
                className={
                  lightmodes ? "light stroke-yellow-200  stroke-1" : "dark "
                }
              />
            </div>
          </div>
          <div
            className={
              !usernamechange
                ? lightmodes
                  ? "text-orange-300  name text-2xl font-bold"
                  : "dark  text-2xl font-bold"
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
            <ModeEditRoundedIcon className={lightmodes ? "modeedit" : ""} />
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
          <ul className="list-disc list-inside  text-left m-2  ml-12  font-semibold text-gray-400">
            <li>ican help for your best experience </li>{" "}
            <li>leave food planning to me</li>{" "}
            <li>i will suggest , if the weather is good or bad</li>
          </ul>
        </div>
        <div>
          <form className="px-24 py-6 ">
            <fieldset>
              <div className="mb-2 text-orange-500  text-lg">
                <label htmlFor="">when are you expecting to come </label>
              </div>{" "}
              <div>
                <input
                  onChange={(e) => {
                    setnumber(e.target.value);
                  }}
                  className=" rounded opacity-70  text-center pb-2  text-green-400 bg-transparent border-2 border-orange-300"
                  list="day-list"
                  type="text"
                />
                <button
                  onClick={(e) => {
                    numaaa(e);
                  }}
                >
                  send
                </button>
              </div>
              <datalist id="day-list">
                <option value="today" />
                <option value="tomorrow" />
                <option value="this sunday" />
                <option value="this week" /> <option value="next week" />{" "}
                <option value="this month" />
              </datalist>
            </fieldset>
          </form>
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
          <div className="today-special h-96 overflow-scroll  shadow-2xl p-4 m-4   border-sky-100 border-2 md:min-h-[40rem]  lg:min-h-[40rem]">
            {TodaySpecial.map((images) => (
              <div>
                <div className="my-2 w-full object-contain bg-cover rounded-lg  overflow-hidden  border-sky-100 ">
                  <img
                    src={images}
                    className=" w-full object-contain "
                    alt=""
                    height="400px"
                    width="800px"
                  />
                </div>
                <div className="text-green-400  font-bold flex justify-around align-middle">
                  <div className="p-1 b  border-sky-100 border-2 w-12 h-8 -mt-12">
                    Book
                  </div>
                  <div className="p-1  border-sky-100  border-2 w-12 h-8 -mt-12">
                    <a href="tel:9390083894">Call</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-xl font-semibold">Foods Available for you</div>{" "}
          <ArrowDownwardSharpIcon className="arrowdown text-green-300" />
          <div className="daily-items shadow-2xl  m-4 rounded-sm  w-fill  overflow-scroll border-sky-100 border-2  lg:min-h-[40rem] md:min-h-[40rem]">
            {daily.map((images) => (
              <div className="daily w-84  object-cover rounded-lg  overflow-hidden m-4 h-96 lg:min-h-[40rem] md:min-h-[40rem]">
                <img
                  src={images}
                  className=" w-84  object-cover h-96 bg-cover md:min-h-[40rem] lg:min-h-[40rem]"
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
            <div className="daily-items shadow-2xl  pr-12 m-4 rounded-sm  w-fill  overflow-scroll border-sky-100 border-2  lg:min-h-[40rem] md:min-h-[40rem]">
              {Othershops.map((images) => (
                <div className="daily w-84  object-cover rounded-lg  overflow-hidden m-4 h-96 lg:min-h-[40rem] md:min-h-[40rem]">
                  <img
                    src={images}
                    className=" w-72  object-cover h-96 bg-cover md:min-h-[40rem] lg:min-h-[40rem]"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="anyother-items p-4 m-4 shadow-2xl text-left rounded-3xl border-sky-100 border-2">
            <div>
              <div className="flex justify-center font-bold text-lg mb-4">
                Feel free to ask any or call
              </div>
              <div className="flex justify-center flex-col items-center">
                {" "}
                <div className=" font-semibold">
                  Do you want me to arrange a dish or drink for your party{" "}
                </div>
                <div className=" font-semibold text-orange-500  text-lg">
                  <a href="tel:9390083894">Contact me </a>
                </div>
              </div>
            </div>
            <div>
              <div>Do you want to buy sea foods ?</div>
              <div>We have these foods to seel today</div>
              <div className=" flex justify-center text-orange-500 flex-col ">
                <ul className="pl-8">
                  <li>crab</li>
                  <li>fish</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="places shadow-2xl p-4 m-4 border-sky-100 border-2">
            <details className="text-center">
              <summary className="font-bold ">Places Near</summary>
              <details>
                <summary className="font-bold text-slate-500">
                  ShootPlaces
                </summary>
                {ShootPlaces.map((images) => (
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
                {mainbeach.map((images) => (
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
