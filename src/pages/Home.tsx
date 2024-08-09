import React, { useState, useEffect } from 'react';
import HomeIcon from '../assets/images/Home.svg';
import DefenseIcon from '../assets/images/Gun.svg';
import MissionIcon from '../assets/images/Mission.svg';
import TroopsIcon from '../assets/images/Troops.svg';
import Flag from '../assets/images/Flag.svg';
import hexagonLvl12 from '../assets/images/hexagon-level12.png';
import hexagon1 from '../assets/images/hexagon-1.png';
import mainBarContainer from '../assets/images/main-bar-container.png';
import mainBar from '../assets/images/main-bar.png';
import Alien from '../assets/images/Alien.png';
import AlienBg from '../assets/images/alien-bg.png';
import Energy from '../assets/images/Energy.svg';
import Boost from '../assets/images/Boost.svg';

const App: React.FC = () => {
  const level = localStorage.getItem('level') ?? 1;
  const levelHex =
    Number(level) === 1
      ? hexagon1
      : Number(level) === 2
      ? hexagon1
      : Number(level) === 3
      ? hexagon1
      : hexagonLvl12;
  const levelNames = [
    'Bronze', // From 0 to 4999 coins
    'Silver', // From 5000 coins to 24,999 coins
    'Gold', // From 25,000 coins to 99,999 coins
    'Platinum', // From 100,000 coins to 999,999 coins
    'Diamond', // From 1,000,000 coins to 2,000,000 coins
    'Epic', // From 2,000,000 coins to 10,000,000 coins
    'Legendary', // From 10,000,000 coins to 50,000,000 coins
    'Master', // From 50,000,000 coins to 100,000,000 coins
    'GrandMaster', // From 100,000,000 coins to 1,000,000,000 coins
    'Lord', // From 1,000,000,000 coins to ∞
  ];

  const levelMinPoints = [
    999, // Bronze
    1999, // Silver
    19999, // Gold
    199999, // Platinum
    1999999, // Diamond
    19999999, // Epic
    199999999, // Legendary
    1999999999, // Master
    19999999999, // GrandMaster
    199999999999, // Lord
  ];

  const energyFromStore = localStorage.getItem('gift');

  const [currentEnergy, setCurrentEnergy] = useState(999); // current energy
  const maxEnergy = 999; // maximum energy

  const calculateEnergyBarWidth = () => {
    return (currentEnergy / maxEnergy) * 100;
  };

  const [levelIndex, setLevelIndex] = useState(Number(level) - 1);
  const [points, setPoints] = useState(0);
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>(
    []
  );
  const pointsToAdd = 11 || (Number(level) ? Number(level) : 11);

  const profitPerHour = 3600;
  const [dailyRewardTimeLeft, setDailyRewardTimeLeft] = useState('');
  const [dailyCipherTimeLeft, setDailyCipherTimeLeft] = useState('');
  const [dailyComboTimeLeft, setDailyComboTimeLeft] = useState('');

  const calculateTimeLeft = (targetHour: number) => {
    const now = new Date();
    const target = new Date(now);
    target.setUTCHours(targetHour, 0, 0, 0);

    if (now.getUTCHours() >= targetHour) {
      target.setUTCDate(target.getUTCDate() + 1);
    }

    const diff = target.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    const paddedHours = hours.toString().padStart(2, '0');
    const paddedMinutes = minutes.toString().padStart(2, '0');

    return `${paddedHours}:${paddedMinutes}`;
  };

  useEffect(() => {
    const updateCountdowns = () => {
      setDailyRewardTimeLeft(calculateTimeLeft(0));
      setDailyCipherTimeLeft(calculateTimeLeft(19));
      setDailyComboTimeLeft(calculateTimeLeft(12));
    };

    updateCountdowns();
    const interval = setInterval(updateCountdowns, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (energyFromStore) {
      setCurrentEnergy(Number(energyFromStore));
      localStorage.removeItem('gift');
    }
  }, [energyFromStore]);

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (currentEnergy <= pointsToAdd) {
      return;
    }

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${
      -y / 10
    }deg) rotateY(${x / 10}deg)`;
    setTimeout(() => {
      card.style.transform = '';
    }, 100);

    setPoints(points + pointsToAdd);
    setCurrentEnergy(currentEnergy - pointsToAdd);
    setClicks([...clicks, { id: Date.now(), x: e.pageX, y: e.pageY }]);
  };

  const handleAnimationEnd = (id: number) => {
    setClicks((prevClicks) => prevClicks.filter((click) => click.id !== id));
  };

  const calculateProgress = () => {
    if (levelIndex === 0 && points < 150) {
      return 15;
    }

    const currentLevelMin =
      Number(level) === 1 ? 0 : levelMinPoints[levelIndex];
    const nextLevelMin = levelMinPoints[levelIndex];

    const progress =
      ((points - currentLevelMin) / (nextLevelMin - currentLevelMin)) * 100;
    return Math.min(progress, 100);
  };

  // handle level change
  useEffect(() => {
    const currentLevelMin =
      Number(level) === 1 ? 0 : levelMinPoints[levelIndex];
    const nextLevelMin = levelMinPoints[levelIndex];
    if (points >= nextLevelMin) {
      setLevelIndex(levelIndex + 1);
    } else if (points < currentLevelMin && levelIndex > 0) {
      setLevelIndex(levelIndex - 1);
    }
  }, [points, levelIndex, levelMinPoints, levelNames.length, level]);

  useEffect(() => {
    const pointsPerSecond = Math.floor(profitPerHour / 3600);
    const interval = setInterval(() => {
      setCurrentEnergy((prevEnergy) =>
        Math.min(prevEnergy + pointsPerSecond, maxEnergy)
      );
      // setPoints((prevPoints) => prevPoints + pointsPerSecond);
    }, 1000);
    return () => clearInterval(interval);
  }, [profitPerHour]);

  return (
    <div className="w-full bg-gradient-to-b from-[#010D1C] to-[#220039] text-white h-full font-bold gap-1 flex flex-col max-w-xl mx-auto z-0 overflow-hidden">
      <div className="flex flex-col justify-center gap-4 pt-5 items-center h-full z-10 relative">
        {/* user details */}
        <div className="flex justify-between gap-10 items-center w-full px-4">
          <p className="text-2xl font-semibold">Username</p>
          <img src={Flag} className="w-[35px] h-35px]" alt="flag" />
        </div>
        <p className="px-4 text-base font-medium">
          Your current level is displayed here, collect coins and increase your
          level
        </p>
        <div className="flex flex-col w-full gap-2 px-4 min-h-32 max-h-32 h-full flex-1">
          <p>Defense Level {level}</p>
          <div className="flex flex-col w-full min-h-fit h-full my-auto items-center justify-end relative">
            <div className="flex absolute left-0 right-0 top-0 w-[84px] h-[94px] z-10">
              <img src={levelHex} alt="hex" className="w-full h-full" />
            </div>
            <div className="flex w-full items-center relative z-0">
              <img
                src={mainBarContainer}
                className="flex items-start w-[90%] ml-8 max-h-[47px] h-fit"
              />
              <img
                src={mainBar}
                className="flex absolute top-0 items-start ml-8 max-h-[47px] h-full"
                style={{ width: `${calculateProgress()}%`, maxWidth: '90%' }}
              />
              <h2 className="absolute bottom-1.5 left-28 z-20 text-3xl font-semibold">
                {points}/{levelMinPoints[levelIndex]}
              </h2>
            </div>
            <h3 className="text-center w-full">To the next level</h3>
          </div>
        </div>

        <div
          className="max-w-full mt-4 flex justify-center max-h-full mx-4 flex-shrink"
          style={{
            backgroundImage: `url(${AlienBg})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%',
            maxWidth: '90vw',
            maxHeight: '90vh',
          }}
        >
          <div className="flex items-center justify-center w-full h-full flex-shrink">
            <div
              className="w-80 h-80 max-w-full max-h-full"
              onClick={handleCardClick}
            >
              <div className="w-full h-full rounded-full">
                <img
                  src={Alien}
                  alt="Main Character"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center w-full gap-4 px-12 mt-4">
          <div className="flex flex-col w-full gap-2">
            <div className="flex gap-4 items-center rounded-full w-full max-w-[182px] bg-gradient-to-r from-[#7700FF] to-transparent">
              <img
                src={Energy}
                alt="energy"
                className="w-[58px] h-[58px] rounded-full bg-[#7700FF] p-2 shadow-lg shadow-[#7700FF]"
              />
              <h2 className="text-2xl font-semibold">
                {currentEnergy > 0
                  ? `${currentEnergy} / ${maxEnergy}`
                  : `0 / ${maxEnergy}`}
              </h2>
            </div>
            <h2 className="text-base font-semibold">Energy</h2>
          </div>
          <div className="flex flex-col items-center gap-2">
            <button className="flex gap-4 items-center rounded-full w-[58px] h-[58px] bg-[#7700FF] shadow-lg shadow-[#7700FF]">
              <img
                src={Boost}
                alt="boost"
                className="w-[58px] h-[58px] p-2.5"
              />
            </button>
            <h2 className="text-base font-semibold">Boost</h2>
          </div>
        </div>

        <div className="flex justify-around h-[87px] mt-auto w-full max-w-xl py-2 bg-gradient-to-b from-[#010D1D] to-[#210038]">
          <button className="flex flex-col items-center justify-center gap-1.5 w-full">
            <img src={HomeIcon} alt="home" className="w-[30px] h-[30px]" />
            <p className="text-sm font-medium">Home</p>
          </button>
          <button className="flex flex-col items-center justify-center gap-1.5 w-full">
            <img src={DefenseIcon} alt="home" className="w-[44px] h-[30px]" />
            <p className="text-sm font-medium">Defense</p>
          </button>
          <button className="flex flex-col items-center justify-center gap-1.5 w-full">
            <img src={MissionIcon} alt="home" className="w-[37px] h-[30px]" />
            <p className="text-sm font-medium">Missions</p>
          </button>
          <button className="flex flex-col items-center justify-center gap-1.5 w-full">
            <img src={TroopsIcon} alt="home" className="w-[30px] h-[30px]" />
            <p className="text-sm font-medium">Troops</p>
          </button>
        </div>
      </div>

      {clicks.map((click) => (
        <div
          key={click.id}
          className="absolute text-5xl font-bold opacity-0 text-white pointer-events-none z-50"
          style={{
            top: `${click.y - 42}px`,
            left: `${click.x - 28}px`,
            animation: `float 1s ease-out`,
          }}
          onAnimationEnd={() => handleAnimationEnd(click.id)}
        >
          {pointsToAdd}
        </div>
      ))}
    </div>
  );
};

export default App;
