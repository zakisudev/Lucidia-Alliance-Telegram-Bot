import { useNavigate } from 'react-router-dom';
import tt1 from '../assets/images/tutorial01.png';
import tt2 from '../assets/images/tutorial02.png';
import tt3 from '../assets/images/tutorial03.png';
import tt4 from '../assets/images/tutorial04.png';
import { TutorialLayoutProp } from '../utils/types';
import { useState } from 'react';

const TutorialLayout: React.FC<TutorialLayoutProp> = () => {
  const [level, setLevel] = useState(1);
  const navigate = useNavigate();
  const tut1 = {
    title: 'Tap and earn coins',
    description: 'You can use boosters and tricky strategies',
    image: tt1,
  };

  const tut2 = {
    title: 'Upgrade your exchange',
    description: 'Use cards to boost your passive income',
    image: tt2,
  };

  const tut3 = {
    title: 'Invite friends and get bonuses',
    description: 'You and your friend will both receive coins',
    image: tt3,
  };

  const tut4 = {
    title: 'Use coin to get a airdrop',
    description: 'Don&apos; forget to invite your friends, Good Luck!',
    image: tt4,
  };

  const handleTutorialNext = () => {
    if (level === 1) {
      setLevel(2);
    } else if (level === 2) {
      setLevel(3);
    } else {
      setLevel(4);
    }
  };

  const handleTutorialPrev = () => {
    if (level === 2) {
      setLevel(1);
    } else if (level === 3) {
      setLevel(2);
    } else {
      setLevel(3);
    }
  };

  return (
    <div className="initial-bg w-full bg-gray-900 text-white h-full font-bold gap-1 flex flex-col max-w-xl mx-auto z-0">
      <div className="flex flex-col justify-start py-10 items-center h-full z-10 bg-[#010D1D]">
        <div className="flex flex-col gap-8 items-center relative">
          <h1 className="text-[32px] font-semibold text-[#A5FF16] whitespace-nowrap">
            {level === 1
              ? tut1.title
              : level === 2
              ? tut2.title
              : level === 3
              ? tut3.title
              : tut4.title}
          </h1>
          <p className="text-white text-lg">
            {level === 1
              ? tut1.description
              : level === 2
              ? tut2.description
              : level === 3
              ? tut3.description
              : tut4.description}
          </p>
          <div className="flex w-full h-full px-16">
            <img
              className="w-full h-full object-cover"
              src={
                level === 1
                  ? tut1.image
                  : level === 2
                  ? tut2.image
                  : level === 3
                  ? tut3.image
                  : tut4.image
              }
              alt={`tutorial-0${level}`}
            />
          </div>
          {level !== 4 ? (
            <div className="flex gap-4 justify-between items-center w-full px-7 absolute bottom-0">
              <div className="flex gap-2 items-center">
                <button
                  onClick={() => setLevel(4)}
                  className="bg-[#7700FF] text-white font-semibold text-xl px-4 rounded-2xl w-fit py-4 whitespace-nowrap"
                >
                  Skip All
                </button>
                <button
                  onClick={handleTutorialPrev}
                  className="bg-[#7700FF] text-white font-semibold text-xl px-4 rounded-2xl w-fit py-4 whitespace-nowrap"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-7 h-7 rotate-180"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
              <div className="flex gap-2">
                <span
                  className={`text-white font-semibold text-xl rounded-2xl w-4 h-4 whitespace-nowrap ${
                    level === 1 ? 'bg-[#7700FF]' : 'bg-[#360d63]'
                  }`}
                ></span>
                <span
                  className={`text-white font-semibold text-xl rounded-2xl w-4 h-4 whitespace-nowrap ${
                    level === 2 ? 'bg-[#7700FF]' : 'bg-[#360d63]'
                  }`}
                ></span>
                <span
                  className={`text-white font-semibold text-xl rounded-2xl w-4 h-4 whitespace-nowrap ${
                    level === 3 ? 'bg-[#7700FF]' : 'bg-[#360d63]'
                  }`}
                ></span>
                <span
                  className={`text-white font-semibold text-xl rounded-2xl w-4 h-4 whitespace-nowrap ${
                    level === 4 ? 'bg-[#7700FF]' : 'bg-[#360d63]'
                  }`}
                ></span>
              </div>
              <button
                onClick={handleTutorialNext}
                className="bg-[#7700FF] text-white font-semibold text-xl px-4 rounded-2xl w-fit py-4 whitespace-nowrap"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-7 h-7"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          ) : (
            <div className="flex px-10 w-full items-center absolute bottom-0">
              <button
                onClick={() => navigate('/receive-gift')}
                className="bg-[#7700FF] text-white font-semibold text-xl px-4 rounded-2xl w-full py-2 whitespace-nowrap "
              >
                Play
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TutorialLayout;
