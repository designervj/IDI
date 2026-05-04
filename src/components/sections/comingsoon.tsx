import React from "react";

// 🔹 FIXED LAUNCH DATE → 18 December, 11:00 AM
export const LAUNCH_DATE = new Date(2025, 11, 18, 11, 0, 0);
// NOTE: Month 11 = December (0 se start hota hai)

export const ComingSoon = () => {
  const [timeRemaining, setTimeRemaining] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = LAUNCH_DATE.getTime() - now;

      if (distance > 0) {
        setTimeRemaining({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen  flex items-center justify-center px-4"
    style={{backgroundImage:"url('./assets/Image/image (7).png')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition:"bottom"}}
    >
        <div className="bg-white/60 w-full h-[100vh] absolute"></div>
      <div className="max-w-2xl w-[90%] text-center z-50 absolute">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 ">
            Coming Soon 
          </h1>

          <p className="md:text-lg text-sm text-[#008a2c] mb-8 font-semibold ">
         Strengthening Agriculture-Based Livelihoods In The Thar Desert (SABL)
          </p>

          <div className="grid grid-cols-4 gap-1 mb-8">
            <div className="bg-indigo-50 rounded-lg md:p-4 py-4">
              <div className="text-3xl font-bold text-indigo-600">
                {timeRemaining.days}
              </div>
              <div className="md:text-sm text-[11px] text-center  text-gray-600 mt-1">Days</div>
            </div>

            <div className="bg-indigo-50 rounded-lg md:p-4 py-4">
              <div className="text-3xl font-bold text-indigo-600">
                {timeRemaining.hours}
              </div>
              <div className="md:text-sm text-[11px] text-gray-600 mt-1">Hours</div>
            </div>

            <div className="bg-indigo-50 rounded-lg md:p-4 py-4">
              <div className="text-3xl font-bold text-indigo-600">
                {timeRemaining.minutes}
              </div>
              <div className="md:text-sm text-[11px] text-gray-600 mt-1">Minutes</div>
            </div>

            <div className="bg-indigo-50 rounded-lg md:p-4 py-4">
              <div className="text-3xl font-bold text-indigo-600">
                {timeRemaining.seconds}
              </div>
              <div className="md:text-sm text-[11px]  text-gray-600 mt-1">Seconds</div>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            Launch Date:{" "}
            {LAUNCH_DATE.toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
