const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center h-16 w-full bg-black px-4">
        <a href="/">Cancel</a>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-lg text-white">Lucidia Alliance</h1>
          <p className="text-sm text-[#8C8C8C]">bot</p>
        </div>
        <a href="/">
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="13.5"
              cy="13.5"
              r="12.5"
              stroke="white"
              strokeWidth="2"
            />
            <circle cx="6.5" cy="13.5" r="2.5" fill="white" />
            <circle cx="13.5" cy="13.5" r="2.5" fill="white" />
            <circle cx="20.5" cy="13.5" r="2.5" fill="white" />
          </svg>
        </a>
      </div>
    </>
  );
};

export default Header;
