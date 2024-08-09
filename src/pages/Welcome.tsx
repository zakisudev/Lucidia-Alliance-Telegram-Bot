import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();
  const [bonus, setBonus] = useState(0);

  const handleBonusAdd = () => {
    setBonus(10000);
    navigate('/tutorial', { state: { bonus } });
  };

  const handleBonusSkip = () => {
    setBonus(0);
    navigate('/tutorial');
  };

  return (
    <div className="initial-bg w-full bg-gray-900 text-white h-full font-bold gap-1 flex flex-col max-w-xl mx-auto z-0">
      <div
        className="flex flex-col justify-center h-full z-10"
        style={{
          backgroundImage: "url('/src/assets/images/initial-bg-top.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute bottom-0 top-0 right-0 left-0 inset-0 bg-gradient-to-b from-transparent to-[#21003A] to-100% z-0"></div>
        <div className="flex flex-col gap-20 justify-between h-full items-center py-20 z-20">
          <div className="flex flex-col gap-10 justify-between h-full items-center font-sans mt-20 text-[#A5FF16] ">
            <div className="flex flex-col items-center justify-normal gap-2">
              <h2 className="font-medium text-2xl">Welcome to the</h2>
              <h1 className="text-5xl font-bold">Lucidia Alliance</h1>
            </div>

            <div className="flex flex-col text-white font-bold px-8 text-3xl leading-loose">
              <p>
                Welcome to Lucidia! Your gateway to earn tokens and exploring
                exciting in-game assets.
              </p>
              <p>Choose an option to get started:</p>
            </div>

            <div className="flex flex-col gap-3 items-center">
              <button
                onClick={handleBonusAdd}
                className="flex flex-col bg-gradient-to-r from-[#7700FF] from-10% via-[#051B43] via-50% to-[#7700FF] to-0 text-white font-bold text-xl px-8 rounded-xl w-[369px] h-[65px] "
              >
                <p>Proceed with Tutorial</p>
                <p>(Earn 10,000 Token Bonus)</p>
              </button>
              <button
                onClick={handleBonusSkip}
                className="flex flex-col bg-gradient-to-r from-[#B8F60F] via-[#051B43] to-[#B8F60F] text-white font-bold text-xl px-8 rounded-xl w-[369px] h-[65px] mt-4"
              >
                <p>Skip</p>
                <p>(No Bonus)</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
