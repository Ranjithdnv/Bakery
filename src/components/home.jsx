import React, { useEffect, useState, useRef } from "react";
import QuestionMarkSharpIcon from "@mui/icons-material/QuestionMarkSharp";
import "./home.css";
function Home() {
  const [mainbeach, setmainbeach] = useState([
    "./beach1.jpg",
    "./beach2.jpg",
    "./beach3.jpg",
    "./beach4.jpg",
  ]);
  const [Others, setOthers] = useState([
    "./beach1.jpg",
    "./beach2.jpg",
    "./beach3.jpg",
    "./beach4.jpg",
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
  ]);
  return (
    <div>
      <div className="App flex flex-col box-border ">
        <div className="topbar flex justify-between items-center px-2 mb-8 gap-x-2 border-black border-b-8 h-24 w-full py-2 bg-blue-200">
          <div className="logo text-4xl bg-blue-300 rounded p-2 flex-2  ">
            logo
          </div>
          <div className="nameofapp text-4xl font-extrabold rounded p-2 bg-blue-300 flex-1 ">
            bakery
          </div>
        </div>
        <div className="main-box ">
          <div className="userbg-green-200  "></div>
          <div className="details capitalize flex justify-around shadow-2xl m-4 bg-green-200 border-2 p-4 ">
            <details>
              <summary className="font-bold">Details</summary>
              <h1 className="font-medium">Bakery</h1>
              <p className="font-medium">9390083894</p>
              <div className="font-medium">Ranjith</div>
            </details>{" "}
            <details>
              <summary className="font-bold">Weather</summary>
              <h1 className="font-medium">good</h1>
              <p className="font-medium">winds good</p>
              <div className="font-medium">sunny</div>
            </details>
          </div>
          <div>Today special</div>
          <div className="today-special h-80 overflow-scroll  shadow-2xl p-4 m-4  bg-blue-100 border-sky-100 border-2">
            {TodaySpecial.map((images) => (
              <div>
                {" "}
                <div className="my-2 w-full object-contain bg-cover  ">
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
          <div>Foods Available for you</div>
          <div className="daily-items shadow-2xl px-4 m-4 rounded-sm  w-fill  overflow-scroll  border-sky-100 border-2">
            {TodaySpecial.map((images) => (
              <div className="daily w-84  object-cover h-64 ">
                <img
                  src={images}
                  className=" w-84  object-cover h-64 bg-cover "
                  alt=""
                />
              </div>
            ))}
          </div>
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
