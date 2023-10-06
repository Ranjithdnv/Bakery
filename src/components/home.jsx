import React, { useEffect, useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CountContext } from "../context";
import axios from "axios";
import QuestionMarkSharpIcon from "@mui/icons-material/QuestionMarkSharp";
import LightModeSharpIcon from "@mui/icons-material/LightModeSharp";
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import ArrowDownwardSharpIcon from "@mui/icons-material/ArrowDownwardSharp";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PoolOutlinedIcon from "@mui/icons-material/PoolOutlined";
import BeachAccessSharpIcon from "@mui/icons-material/BeachAccessSharp";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";

import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import "./home.css";
function Home() {
  const [subscription, setSubscription] = useState(null);

  const Contexts = useContext(CountContext);
  const [numbercount, setnumbercount] = useState(0);
  const [number, setnumber] = useState("");
  const [datecome, setdatecome] = useState(new Date());
  const [nextweek, setnextweek] = useState(new Date());
  const [paytm, setpaytm] = useState(false);
  const [phonepe, setphonepe] = useState(false);
  const [tick, settick] = useState(false);
  const [dates, setdates] = useState();
  const [tomorrowcoming, settomorrowcoming] = useState(0);
  const [todaycoming, settodaycoming] = useState(0);
  const [sundaycoming, setsundaycoming] = useState(0);
  const [today, settoday] = useState(new Date());
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
    let addnumbertodate = 0;
    if (number === "today") {
      addnumbertodate = 0; //-------------------------------------------------  === string  no state for this problem check condition
    }
    if (number === "tomorrow") {
      addnumbertodate = 1;
    }
    if (number === "this sunday") {
      const dateCopy = new Date();
      console.log(dateCopy);
      console.log(
        "fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
      );
      const nextMonday = new Date(
        dateCopy.setDate(
          dateCopy.getDate() + ((7 - dateCopy.getDay()) % 7 || 7)
        )
      );
      console.log(dateCopy);
      console.log(nextMonday);
      addnumbertodate = dateCopy.getDate();
      console.log(addnumbertodate);
    }

    var todayDate = new Date();
    if (number !== "this sunday") {
      var datecome = new Date(
        todayDate.getFullYear(),
        todayDate.getMonth(),
        todayDate.getDate() + addnumbertodate
      );
    } else {
      var datecome = new Date(
        todayDate.getFullYear(),
        todayDate.getMonth(),
        addnumbertodate
      );
    }

    console.log(number);
    console.log(datecome);
    setdatecome(datecome);
  }, [number]);
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
            if (data.category === "items") {
              setdaily((prev) => [...prev, data.item]);
            }
          });
          Contexts.user();
        })
        .catch((er) => console.log(er));
    };
    getitem();
    ////////////
    const getitemnumber = async () => {
      // settodaycoming(0);
      await axios
        .get("https://bakeryapi.onrender.com/howmuchnumber")
        .then((res) => {
          console.log(res.data);
          res.data.map((date) => {
            if (date.dayofarrival) {
              // console.log("tomorrow");
              setnumbercount((prev) => prev + 1);
              // ------------------------------------------------------console.log(date.toLocaleString());   to    1/1/12------------------------------

              const dayy = date.date;
              const datez = new Date(dayy); //----------see this

              let db_date = datez.getDate();
              let db_day = datez.getDay();
              console.log(datez);
              console.log(date.date);
              console.log(db_date);
              let todaydate = new Date();

              let dayofdate = todaydate.getDate();
              console.log(db_date);
              console.log(dayofdate);
              if (db_date === dayofdate + 1) {
                console.log("gggggggggggggggggggggggggggggggggggggggggggg");
                settomorrowcoming((prev) => prev + 1);
              }
              if (db_date === dayofdate) {
                console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
                // console.log(db_date);
                settodaycoming((prev) => prev + 1);
                // console.log(dayofdate);
              }
              if (db_date === dayofdate + 2) {
                // settomorrowcoming((prev) => prev + 1);
              }
              if (db_day === 0) {
                console.log(
                  "11111111111111111111111111111111111111111111111111111111111111"
                );
                setsundaycoming((prev) => prev + 1);
                console.log(db_day);
                console.log(datez);
              }
            }
          });
        })
        .catch((er) => console.log(er));
    };
    getitemnumber();
  }, []);
  //

  //
  const numaaa = async (e) => {
    e.preventDefault(); //-----------------------------------------------------------------not working function with button ------------------
    console.log("kkkkkkkkk");
    if (!numberid) {
      console.log("kkkkkkkkk");
      if (number) {
        await axios //https://bakeryapi.onrender.com/numberadd   http://localhost:3003/numberadd
          .post("https://bakeryapi.onrender.com/numberadd", {
            dayofarrival: number,
            date: datecome,
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
          date: datecome,
        })
        .then((res) => {
          console.log(res.data); //change here --------------------------------------------------------------
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
  // ----------------------------------------------------------------------------------------------------------------------
  // useEffect(() => {
  //   // Check if the browser supports service workers and PushManager
  //   if ("serviceWorker" in navigator && "PushManager" in window) {
  //     navigator.serviceWorker
  //       .register("/service-worker.js")
  //       .then(async (registration) => {
  //         console.log(
  //           "Service Worker registered with scope:",
  //           registration.scope
  //         );

  //         // Check if the user is already subscribed
  //         const existingSubscription =
  //           await registration.pushManager.getSubscription();

  //         if (existingSubscription) {
  //           setSubscription(existingSubscription);
  //           console.log(subscription);
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Service Worker registration failed:", error);
  //       });
  //   }
  // }, []);
  // console.log(subscription);
  // const subscribeToPush = async () => {
  //   try {
  //     const registration = await navigator.serviceWorker.ready;
  //     const subscription = await registration.pushManager.subscribe({
  //       userVisibleOnly: true,
  //       applicationServerKey:
  //         "BB0IrPkMRgdZYW0Y120IhjA21jYbSTIybVO8xp0dxdCS-Qgc34dGP9571wwI4wyK7UkRMj3TSjEt2H1NjCN0x7E",
  //     });
  //     console.log("00000");
  //     setSubscription(subscription);
  //     // setSubscription({ ...subscription, message: "hhhv" });
  //     // Send the subscription object to your server
  //     // await fetch("http://localhost:3000/subscribe", {
  //     //   method: "POST",
  //     //   body: JSON.stringify(subscription),
  //     //   headers: {
  //     //     "Content-Type": "application/json",
  //     //   },
  //     // }).then((res) => {
  //     //   console.log(res.data);
  //     // });
  //     await axios
  //       .post("http://localhost:3003/subscribe", {
  //         subscription: subscription,
  //         message: "mess",
  //       })
  //       .then((res) => {
  //         console.log(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //     setSubscription(subscription);
  //   } catch (error) {
  //     console.log("Subscription failed:", error);
  //   }
  // };
  //---------------------------------------------
  const copytoclipboard = async (e) => {
    const interval = setTimeout(() => {
      settick(false);
      console.log(
        1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
      );
    }, 1000);

    settick(true);
    navigator.clipboard.writeText("16.341907,81.596551");
    e.preventDefault();
    return () => clearInterval(interval);
  };
  const copytoclipboardphonepe = async (e) => {
    const interval = setTimeout(() => {
      setphonepe(false);
    }, 1000);

    setphonepe(true);
    navigator.clipboard.writeText(9390083894);
    e.preventDefault();
    return () => clearInterval(interval);
  };
  const copytoclipboardpaytm = async (e) => {
    const interval = setTimeout(() => {
      setpaytm(false);
    }, 1000);

    setpaytm(true);
    navigator.clipboard.writeText(9390083894);
    e.preventDefault();
    return () => clearInterval(interval);
  };
  console.log(localStorage.getItem("numberid"));
  console.log(today);
  console.log(TodaySpecial);
  console.log(numbercount);
  console.log(number);
  var date = new Date();
  var now_utc = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );

  console.log(new Date(now_utc));
  console.log(date.toISOString());
  console.log(todaycoming);
  return (
    <>
      {" "}
      <div className={lightmodes ? "bg-light" : "bg-dark"}>
        <div className="App flex flex-col box-border   select-none">
          <div className="topbar flex justify-between items-center px-2 mb-8 gap-x-2  border-gray-400 border-b-8 h-32 w-full py-2 bg-white">
            <div
              onClick={newxnew}
              className="logo text-4xl rounded p-2 basis-36  flex-1"
            >
              <img src="./perupalem-logo.png" className="h-28 w-32" alt="" />
            </div>
            <div className="nameofapp text-4xl font-bold text-blue-300 rounded p-2 flex-1    basis-72    ">
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
          <div className="border-t-2 border-gray-500 ">
            <form className="px-24 py-6   max-sm:px-0">
              <div className="flex  gap-24 text-left justify-around  mb-8   items-center max-sm:gap-0">
                {" "}
                <details className="detail rounded-lg bg-green-200 py-4 px-2">
                  <summary className="font-bold text-black ">
                    Coming on{" "}
                  </summary>
                  <h1 className="font-medium text-slate-500">
                    {" "}
                    today-coming :{todaycoming}
                  </h1>
                  <p className="font-medium text-slate-500">
                    tomorrow-coming :{tomorrowcoming}
                  </p>
                  <div className="font-medium text-slate-500">
                    sunday-coming :{sundaycoming}
                  </div>
                </details>{" "}
                <details className="detail rounded-lg bg-green-200 py-4 px-2  ">
                  <summary className="font-bold text-black  ">
                    Payment Details
                  </summary>
                  <div className="flex items-center  gap-3 ">
                    {" "}
                    <span>
                      <img
                        src="https://imgs.search.brave.com/KNCXZygkMXysSM9J-SxJ0oGOn-6FWUANaMVXfBiQM1w/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dC5icmFuZGZldGNo/LmlvL2lkY0UwT2RH/OGkvaWRqZVFfUDdM/bS5qcGVnP3VwZGF0/ZWQ9MTY2NzU2OTEy/MjQxOA"
                        width="20px"
                        height="20px"
                        alt=""
                      />{" "}
                    </span>{" "}
                    <span
                      className="font-medium text-slate-500 "
                      onClick={copytoclipboardphonepe}
                    >
                      {" "}
                      number : 9390083894{" "}
                      <span>
                        {" "}
                        {phonepe ? (
                          <DoneRoundedIcon className=" text-green-400" />
                        ) : (
                          <ContentCopyRoundedIcon className=" text-blue-600 h-0 w-0" />
                        )}
                      </span>
                    </span>{" "}
                  </div>{" "}
                  <div className="flex items-center  justify-center gap-3">
                    {" "}
                    <span>
                      <img
                        src="https://imgs.search.brave.com/-lErmknYGvqsyBZzrn-oNFpR1WWtq1LA1cF-TAWxq9U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbi1pY29ucy5j/b20vaWNvbnMyLzcz/MC9QTkcvNTEyL3Bh/eXRtX2ljb24taWNv/bnMuY29tXzYyNzc4/LnBuZw"
                        width="20px"
                        height="20px"
                        alt=""
                      />{" "}
                    </span>{" "}
                    <span
                      className="font-medium text-slate-500 "
                      onClick={copytoclipboardpaytm}
                    >
                      {" "}
                      number : 9390083894{" "}
                      <span>
                        {" "}
                        {paytm ? (
                          <DoneRoundedIcon className=" text-green-400" />
                        ) : (
                          <ContentCopyRoundedIcon className=" text-blue-600 h-0 w-0" />
                        )}
                      </span>
                    </span>{" "}
                  </div>
                  <a href="https://wa.me/9390083894">
                    <p className="font-medium text-slate-500">
                      Whatsapp me{" "}
                      <span className="ml-4">
                        <WhatsAppIcon className=" text-blue-400  font-extrabold" />
                      </span>
                    </p>
                  </a>
                  <div className="font-medium text-slate-500"></div>
                </details>
                {/* {today} */}
                {/* {today.map((time) => time)} */}
              </div>
              <fieldset>
                <div className="mb-2 text-orange-500  flex justify-center gap-3  text-2xl">
                  <label htmlFor="">when are you expecting to come </label>
                  <div className="flex ">
                    {" "}
                    <span>
                      <PoolOutlinedIcon className=" text-blue-400" />{" "}
                    </span>{" "}
                    <span>
                      <BeachAccessSharpIcon className=" text-blue-400 rotate-45" />
                    </span>
                  </div>
                </div>{" "}
                <div className="">
                  <input
                    placeholder="today"
                    onChange={(e) => {
                      setnumber(e.target.value);
                    }}
                    className=" rounded opacity-70  placeholder:text-green-400 text-center pb-2 mr-6  text-green-500 bg-transparent border-2 border-orange-300"
                    list="day-list"
                    type="text"
                  />
                  <button
                    onClick={(e) => {
                      numaaa(e);
                    }}
                  >
                    <SendOutlinedIcon className=" text-green-500" />
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

          <div className="main-box border-t-4 border-gray-500 ">
            <div className="userbg-green-200  "></div>
            <div className="details capitalize flex justify-around shadow-2xl m-4 bg-green-200 border-2 p-4 ">
              <details>
                <summary className="font-bold text-black ">Weather</summary>
                <h1 className="font-medium text-slate-500">good</h1>
                <p className="font-medium text-slate-500">winds good</p>
                <div className="font-medium text-slate-500">sunny</div>
              </details>
              <details className="  ">
                <summary className="font-bold text-black ">Details</summary>
                <h1 className="font-medium text-slate-600">Bakery</h1>
                <p className="font-medium text-slate-600">9390083894</p>
                <div className="font-medium text-slate-600">Ranjith</div>{" "}
                <div className="font-medium text-slate-600">
                  latitude : 16.341907
                </div>{" "}
                <div className="font-medium text-slate-600">
                  longitude : 81.596551
                </div>{" "}
                <div onClick={copytoclipboard}>
                  {" "}
                  <span className="font-medium text-slate-600 pl-2 pr-2 rounded active:bg-green-300">
                    copy here
                  </span>{" "}
                  <span>
                    {" "}
                    {tick ? (
                      <DoneRoundedIcon className=" text-green-400" />
                    ) : (
                      <ContentCopyRoundedIcon className=" text-blue-600 h-0 w-0" />
                    )}
                  </span>
                </div>
                <div className="font-medium text-slate-600">
                  copy and paste in google maps to get my shop directions
                </div>
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
                  <div className=" font-semibold text-orange-500  border-2 shadow-2xl border-sky-100 rounded brightness-100 px-2 mt-2 text-lg">
                    <a href="tel:9390083894">
                      Contact me{" "}
                      <span className="ml-4 ">
                        <LocalPhoneRoundedIcon className=" text-blue-400  text-2xl font-extrabold   " />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div>Do you want to buy sea foods ?</div>
                <div>We have these foods to seel today</div>
                <div className=" flex justify-center text-orange-500 flex-col">
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
    </>
  );
}
export default Home;
