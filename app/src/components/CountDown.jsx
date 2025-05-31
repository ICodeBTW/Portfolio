import { useEffect, useState } from "react";

export default function CountDown({ title }) {
  const [timeLeft, setTimeLeft] = useState(864000); // 10 days in seconds

  useEffect(() => {
    const timeInt = setInterval(() => {
      setTimeLeft((currTime) => {
        if (currTime <= 1) {
          clearInterval(timeInt);
          return 0;
        }
        return currTime - 1;
      });
    }, 1000);
    return () => clearInterval(timeInt);
  }, []);

  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Main countdown section - takes up most of the space */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-light text-gray-900 mb-12">{title}</h1>

        {/* Countdown Display */}
        <div className="flex gap-4 md:gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
              <div className="text-3xl md:text-4xl font-bold text-gray-900">
                {days.toString().padStart(2, "0")}
              </div>
            </div>
            <div className="text-sm text-gray-600 mt-2 font-medium">DAYS</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
              <div className="text-3xl md:text-4xl font-bold text-gray-900">
                {hours.toString().padStart(2, "0")}
              </div>
            </div>
            <div className="text-sm text-gray-600 mt-2 font-medium">HOURS</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
              <div className="text-3xl md:text-4xl font-bold text-gray-900">
                {minutes.toString().padStart(2, "0")}
              </div>
            </div>
            <div className="text-sm text-gray-600 mt-2 font-medium">
              MINUTES
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
              <div className="text-3xl md:text-4xl font-bold text-gray-900">
                {seconds.toString().padStart(2, "0")}
              </div>
            </div>
            <div className="text-sm text-gray-600 mt-2 font-medium">
              SECONDS
            </div>
          </div>
        </div>
      </div>

      {/* GitHub link section - takes only required space at bottom */}
      <div className="flex flex-col items-center justify-center bg-gray-50 p-8">
        <p className="text-gray-600 mb-4 text-lg">Meanwhile, check out my</p>
        <a
          href="https://github.com/ICodeBTW"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-lg shadow-lg px-6 py-3 hover:shadow-xl transition-shadow duration-200 flex items-center gap-3"
        >
          <svg
            className="w-6 h-6 text-gray-900"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
          </svg>
          <span className="text-xl font-bold text-gray-900">GitHub</span>
        </a>
      </div>
    </div>
  );
}
