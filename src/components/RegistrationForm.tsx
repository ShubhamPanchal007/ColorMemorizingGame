import {
  ChangeEvent,
  FormEvent,
  forwardRef,
  MutableRefObject,
  useState,
} from "react";

type props = {
  Gamescore: number;
  forwardedRef: MutableRefObject<HTMLButtonElement | null>;
  startGame: () => void;
  confettiHandler: () => void;
};
function RegistrationForm({
  Gamescore,
  forwardedRef,
  startGame,
  confettiHandler,
}: props) {
  const [showForm, setShowform] = useState(true);
  const [userData, setUserData] = useState({
    name: "",
    contact: "",
    society: "",
    flatNumber: "",
    GameScore: 0,
  });
  const isFormValid = () => {
    const { name, contact, flatNumber, society } = userData;
    console.log(userData);
    if (name && contact && flatNumber && society) {
      return true;
    }
    return false;
  };

  // const handleReg = async (e: React.SyntheticEvent) => {
  //   e.preventDefault();
  //   try {
  //     if (isFormValid()) {
  //       console.log("Im in");
  //       const requestOptions = {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(userData),
  //       };
  //       const res = await fetch(
  //         "http://localhost:5000/userReg",
  //         requestOptions
  //       );
  //       console.log(res);
  //     }
  //     console.log("I am out");
  //   } catch (error: any) {
  //     console.log(error.message);
  //   }
  // };
  const handleFormVisibility = () => {
    if (isFormValid()) {
      setShowform((prev) => !prev);
      startGame();
      confettiHandler();
    }
  };
  return (
    <>
      <div
        className={`${
          showForm ? "" : " -translate-y-[80rem] invisible"
        } absolute w-full flex justify-center  backdrop-blur-[2px] z-40 transition ease-in-out delay-150 duration-700 `}
      >
        <form
          className="max-w-lg  bg-gradient-to-tr from-[#ccecff] via-[#82d5ff] to-[#ccecff] rounded p-10 z-40"
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdKfDiLu5fprYhI9Hbhymuf3K7akbZ7QUdbhlXieSzyZnMQrQ/formResponse"
          // onSubmit={(e: React.SyntheticEvent) => handleReg(e)}
        >
          <div className="text-center  mb-5 text-3xl italic font-Game">
            Country Delight's Color Memorization Game
          </div>
          <img
            src="https://lh5.googleusercontent.com/dlA_x4giofI8BZwxPVgZ0pM6joyF5oGV7izDjjqOtq4HFcoizhmOsFcnLyp-POJL7M7KeJLBS2qp5Ty6Z6hyKd0gsRjJ6cUg4l-U2XpH01uhhK5l0BgGOPJyn5vNXsMKJA=w1600"
            className="object-contain bg-cover mb-5 rounded"
            alt=""
          />
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
                htmlFor="entry.1367960918"
              >
                Name*
              </label>
              <input
                className="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-white"
                id="grid-first-name"
                type="text"
                name="entry.1367960918"
                placeholder="Ex- Abhay"
                required={true}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setUserData({ ...userData, name: e.target.value })
                }
              />
              {/* <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
                htmlFor="entry.879350510"
              >
                Contact Number*
              </label>
              <input
                className="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-white"
                type="tel"
                name="entry.879350510"
                placeholder="Ex- 7098-89...."
                required={true}
                max={10}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setUserData({ ...userData, contact: e.target.value })
                }
              />
              {/* <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
            </div>
          </div>

          <div className=" relative w-64 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 items-center">
            <p className="text-sm mb-2">Select Society*</p>
            <div className="flex ">
              <label htmlFor="Omaxe Heights">
                <input
                  name="entry.729138774"
                  type={"radio"}
                  value="Omaxe Heights"
                  id="Omaxe Heights"
                  required={true}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setUserData({ ...userData, society: e.target.value })
                  }
                />
                Omaxe Heights
              </label>
            </div>
            <div className="flex mt-1">
              <label htmlFor="Pan Oasis">
                <input
                  name="entry.729138774"
                  type={"radio"}
                  id="Pan Oasis"
                  value={"Pan Oasis"}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setUserData({ ...userData, society: e.target.value })
                  }
                />
                Pan Oasis
              </label>
            </div>
            <div className="flex mt-1">
              <label htmlFor="RPS Green Valley">
                {" "}
                <input
                  name="entry.729138774"
                  type={"radio"}
                  id="RPS Green Valley"
                  value={"RPS Green Valley"}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setUserData({ ...userData, society: e.target.value })
                  }
                />
                RPS Green Valley
              </label>
            </div>
            <div className="flex mt-1">
              <label htmlFor="Express Zeinth">
                <input
                  name="entry.729138774"
                  type={"radio"}
                  id="Express Zeinth"
                  value="Express Zeinth"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setUserData({ ...userData, society: e.target.value })
                  }
                />
                Express Zeinth
              </label>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6 mt-4">
            <div className="w-full px-3">
              <div className="text-gray-600 text-sm italic flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3 flex mr-1 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
                <p>
                  Your information is safe and encrypted by Country Delight®.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="entry.2108872300"
              >
                Flat Number*
                <input
                  className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mt-2"
                  id="grid-zip"
                  type="text"
                  name="entry.2108872300"
                  placeholder="Ex- 90F1"
                  required={true}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setUserData({ ...userData, flatNumber: e.target.value })
                  }
                />
              </label>
            </div>
            <p className="italic text-gray-800 text-sm ml-4 mb-4 items-center">
              *Your game score will be automatically applied after you play*
            </p>
            <div className="w-full  px-3 mb-6 md:mb-0">
              <label
                className="block  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="entry.1423849770"
              >
                <input
                  className="appearance-none invisible block w-full  text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mt-2"
                  id="grid-zip"
                  type="text"
                  readOnly
                  name="entry.1423849770"
                  value={Gamescore}
                  placeholder=""
                />
              </label>
            </div>
          </div>

          <div className="w-full flex justify-end mt-5">
            <div
              className="bg-gradient-to-tr from-[#0066a1] via-[#067ebb] to-[#0066a1] text-white rounded p-2 font-Game flex text-center justify-center w-full cursor-pointer"
              onClick={() => handleFormVisibility()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 rotate-6 fill-red-500 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
              PLAY&WIN EXICITNG PRIZES
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </div>
          </div>
          <button
            ref={forwardedRef}
            type="submit"
            className="invisible"
          ></button>
        </form>
      </div>
    </>
  );
}

export default RegistrationForm;
