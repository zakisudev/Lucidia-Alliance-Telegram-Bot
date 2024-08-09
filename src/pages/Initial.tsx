import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Initial = () => {
  const [country, setCountry] = useState('');
  const navigate = useNavigate();

  const handleSetCountry = () => {
    if (country === '') {
      alert('Please select a country');
    } else {
      navigate('/welcome');
    }
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
          <div className="flex flex-col gap-2 justify-center items-center font-sans mt-36">
            <h2 className="text-white font-semibold text-2xl">
              Please select your country:
            </h2>
            <p className="text-base font-medium">
              You can change this later in the settings
            </p>
            <div className="relative w-[310px] h-[65px] flex items-center text-left pl-8 bg-gradient-to-r from-[#7700FF] via-[#051B43] to-[#7700FF] text-white text-2xl font-semibold rounded-xl mt-3">
              <select
                name="country"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="appearance-none z-10 bg-transparent w-[310px] h-[65px] text-white text-2xl font-semibold"
                required
              >
                <option
                  value=""
                  className="w-[310px] h-[65px] bg-gradient-to-r from-[#7700FF] via-[#051B43] to-[#7700FF] text-white text-2xl font-semibold"
                >
                  Choose country
                </option>
                <option
                  value="us"
                  className="w-[310px] h-[65px] bg-gradient-to-r from-[#7700FF] via-[#051B43] to-[#7700FF] text-white text-2xl font-semibold"
                >
                  United States
                </option>
                <option
                  value="ca"
                  className="w-[310px] h-[65px] bg-gradient-to-r from-[#7700FF] via-[#051B43] to-[#7700FF] text-white text-2xl font-semibold"
                >
                  Canada
                </option>
                <option
                  value="uk"
                  className="w-[310px] h-[65px] bg-gradient-to-r from-[#7700FF] via-[#051B43] to-[#7700FF] text-white text-2xl font-semibold"
                >
                  United Kingdom
                </option>
                <option
                  value="au"
                  className="w-[310px] h-[65px] bg-gradient-to-r from-[#7700FF] via-[#051B43] to-[#7700FF] text-white text-2xl font-semibold"
                >
                  Australia
                </option>
                <option
                  value="nz"
                  className="w-[310px] h-[65px] bg-gradient-to-r from-[#7700FF] via-[#051B43] to-[#7700FF] text-white text-2xl font-semibold"
                >
                  New Zealand
                </option>
              </select>
              <svg
                width="26"
                height="22"
                viewBox="0 0 26 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-4"
              >
                <path
                  d="M23.8967 0.500004L2.10627 0.500004C0.444651 0.500004 -0.564943 2.30085 0.339485 3.68771L11.2347 20.537C11.4244 20.832 11.6868 21.075 11.9976 21.2433C12.3083 21.4117 12.6573 21.5 13.012 21.5C13.3667 21.5 13.7157 21.4117 14.0264 21.2433C14.3372 21.075 14.5996 20.832 14.7893 20.537L25.6635 3.68771C25.8687 3.37549 25.9844 3.01457 25.9985 2.643C26.0127 2.27144 25.9246 1.90301 25.7437 1.57659C25.5628 1.25016 25.2957 0.977845 24.9706 0.788363C24.6455 0.59888 24.2745 0.499258 23.8967 0.500004Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <button
            onClick={handleSetCountry}
            className="bg-[#0DCBF6] active:bg-gradient-to-r from-[#0DCBF6] via-[#051B43] to-[#0DCBF6] text-white font-semibold text-2xl px-8 rounded-xl max-w-[369px] h-[65px] w-full"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Initial;
