import hexagon from '../assets/images/hexagon.png';
import hexagon1 from '../assets/images/hexagon-1.png';
import mainBarContainer from '../assets/images/main-bar-container.png';
import mainBar from '../assets/images/main-bar.png';
import giftWrapper from '../assets/images/gift-wrapper.png';
import coin from '../assets/images/coin.svg';
import alien from '../assets/images/large-head-alien.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReceiveGift = () => {
  const navigate = useNavigate();
  const [gift, setGift] = useState(0);
  const [popup, setPopup] = useState(false);
  const [level, setLevel] = useState(0);

  const storedFirst = localStorage.getItem('first');
  const firstTime = storedFirst ? JSON.parse(storedFirst) : true;

  const handleGift = () => {
    setGift(999);
    setPopup(true);
    setLevel(level + 1);
    localStorage.setItem('level', JSON.stringify(level + 1));
  };

  const handleStartDefense = () => {
    navigate('/home', { state: { firstTime: firstTime } });
  };

  if (gift) {
    localStorage.setItem('first', JSON.stringify(true));
    localStorage.setItem('gift', JSON.stringify(gift));
  }

  return (
    <div className="initial-bg w-full bg-gray-900 text-white h-full font-bold gap-1 flex flex-col max-w-xl mx-auto z-0 relative">
      <div className="flex flex-col justify-start py-10 gap-10 items-center h-full z-10 bg-gradient-to-b from-[#010D1C] to-[#220039]">
        <p>Username</p>
        {/* Defense section */}
        <div className="flex flex-col w-full gap-2 px-4 max-h-32 h-full">
          <p>Defense Level {level}</p>
          <div className="flex flex-col w-full h-full my-auto items-center justify-center relative">
            <div className="flex absolute left-0 right-0 top-0 w-[84px] h-[94px] z-10">
              <img
                src={gift ? hexagon1 : hexagon}
                alt="hex"
                className="w-full h-full"
              />
            </div>
            <div className="flex w-full items-center relative z-0">
              <img
                src={mainBarContainer}
                className="flex items-start w-[90%] ml-8 max-h-[44px] h-fit"
              />
              <img
                src={mainBar}
                className="flex absolute top-0 items-start ml-8 max-h-[44px] h-full"
                style={{ width: gift ? '90%' : '15%' }}
              />
              <h2 className="absolute bottom-1.5 left-28 z-20 text-3xl font-semibold">
                {gift ? '999/999' : '000/000'}
              </h2>
            </div>
          </div>
        </div>

        {/* Detail section */}
        <div className="flex flex-col items-center">
          {gift ? (
            <h2 className="text-xl">Tap to start</h2>
          ) : (
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-white text-lg">Pick up a present from</h2>
              <p className="text-[#C0FF0E]">username</p>
            </div>
          )}
          {/* chevron down filled */}
          <svg
            width="24"
            height="17"
            viewBox="0 0 24 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-6"
          >
            <path
              d="M22.4116 -0.000104904L2.00728 -0.000104904C1.8007 0.000543594 1.5982 0.0575199 1.42159 0.164692C1.24498 0.271864 1.10094 0.425173 1.00498 0.608116C0.909023 0.791061 0.864771 0.996714 0.876995 1.20294C0.889219 1.40916 0.957453 1.60814 1.07435 1.77847L11.2765 16.5149C11.6993 17.1259 12.7173 17.1259 13.1412 16.5149L23.3434 1.77847C23.4615 1.6085 23.5307 1.40941 23.5436 1.20285C23.5565 0.996281 23.5125 0.790133 23.4165 0.606802C23.3204 0.42347 23.176 0.269964 22.9988 0.162968C22.8216 0.0559692 22.6185 -0.000431061 22.4116 -0.000104904Z"
              fill="#7700FF"
            />
          </svg>
        </div>

        {/* Receive section */}
        <div
          className="flex flex-col justify-center items-center gap-4 w-full px-10 h-full"
          style={{
            backgroundImage: `url(${giftWrapper})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '384px',
            height: '250px',
          }}
        >
          {gift ? (
            <>
              <div className="flex flex-col gap-4 items-center justify-center w-full">
                <img
                  src={alien}
                  alt="alien"
                  className="rounded-full w-[118px] h-[118px] object-contain"
                />
                <button
                  onClick={handleStartDefense}
                  className="bg-gradient-to-r from-[#7401FA] via-[#051B43] to-[#7401FA] text-white shadow shadow-black font-semibold text-2xl rounded-xl w-[300px] h-[60px]"
                >
                  Start defense
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="flex gap-4 items-center justify-center w-full mb-12">
                <img
                  src={coin}
                  alt="coin"
                  className="rounded-full w-12 h-12 object-contain shadow-xl shadow-[#7401FA]"
                />
                <h2 className="text-5xl font-semibold">+{gift ? 0 : 999}</h2>
              </div>
              <button
                onClick={handleGift}
                className="bg-gradient-to-r from-[#7401FA] via-[#051B43] to-[#7401FA] text-white shadow shadow-black font-semibold text-2xl rounded-xl w-[300px] h-[60px]"
              >
                Receive a gift
              </button>
            </>
          )}
        </div>

        {/* Level up popup */}
        {gift > 0 && popup && (
          <div
            className="flex absolute top-0 bottom-0 right-0 left-0 inset-0 flex-col gap-4 items-center justify-center max-w-[384px] my-auto w-full mx-auto max-h-[391px] z-50 h-full rounded-xl p-4 shadow-xl shadow-[#7401FA]"
            style={{
              backgroundColor: '#051B43',
              backgroundImage: `url(${giftWrapper})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            <div className="flex flex-col relative w-full items-center h-full">
              <button
                onClick={() => setPopup(false)}
                className="bg-white absolute right-2 top-0 flex justify-center items-center rounded-full w-9 h-9 p-2 text-3xl text-black"
              >
                X
              </button>
              <img
                src={level ? hexagon1 : hexagon}
                alt="hex"
                className="w-[122px] h-[127px]"
              />
              <h2 className="text-3xl">Level up!</h2>
              <div className="flex justify-between w-full gap-4 items-center mt-6 px-4">
                <div className="flex flex-col justify-center items-center">
                  <h3 className="text-[#555899] text-xl ">Multitap</h3>
                  <p className="text-white text-xl">+1</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h3 className="text-[#555899] text-xl ">Energy limit</h3>
                  <p className="text-white text-xl">+500</p>
                </div>
              </div>
              <button
                onClick={() => setPopup(false)}
                className="bg-gradient-to-r from-[#7401FA] via-[#051B43] to-[#7401FA] text-white shadow shadow-black font-semibold text-2xl rounded-xl w-[300px] h-[60px] mt-10"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReceiveGift;
