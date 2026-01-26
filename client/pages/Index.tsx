export default function Index() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B1215] relative overflow-hidden">
      {/* Glowing blur effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-cyan/10 rounded-full blur-[100px]" />
      
      {/* Main content */}
      <div className="relative z-10 w-full max-w-sm px-6 py-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <h1 className="text-2xl font-bold text-white text-center leading-8 tracking-tight">
            Welcome to your<br />reading dashboard
          </h1>
          <p className="text-base text-white/60 text-center leading-relaxed tracking-tight">
            Track progress, stay consistent, and build smarter reading habits.
          </p>
        </div>

        {/* Feature cards */}
        <div className="flex flex-col gap-4 mb-8">
          {/* Today's goals card */}
          <div className="flex items-start gap-4 p-4 pb-5 rounded-2xl border border-white/10 bg-white/5">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan/20 flex-shrink-0">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 18.3333C14.6024 18.3333 18.3334 14.6024 18.3334 9.99999C18.3334 5.39762 14.6024 1.66666 10 1.66666C5.39765 1.66666 1.66669 5.39762 1.66669 9.99999C1.66669 14.6024 5.39765 18.3333 10 18.3333Z"
                  stroke="#00CCDD"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z"
                  stroke="#00CCDD"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.99998 11.6667C10.9205 11.6667 11.6666 10.9205 11.6666 10C11.6666 9.07954 10.9205 8.33334 9.99998 8.33334C9.07951 8.33334 8.33331 9.07954 8.33331 10C8.33331 10.9205 9.07951 11.6667 9.99998 11.6667Z"
                  stroke="#00CCDD"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <h3 className="text-sm font-semibold text-white leading-5 tracking-tight">
                Today's goals
              </h3>
              <p className="text-xs text-white/60 leading-[1.625]">
                See your daily reading targets and track progress in real time.
              </p>
            </div>
          </div>

          {/* Leaderboards card */}
          <div className="flex items-start gap-4 p-4 pb-5 rounded-2xl border border-white/10 bg-white/5">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan/20 flex-shrink-0">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.00002 7.50001H3.75002C3.19749 7.50001 2.66758 7.28052 2.27688 6.88982C1.88618 6.49912 1.66669 5.96921 1.66669 5.41668C1.66669 4.86414 1.88618 4.33424 2.27688 3.94354C2.66758 3.55284 3.19749 3.33334 3.75002 3.33334H5.00002"
                  stroke="#00CCDD"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 7.50001H16.25C16.8025 7.50001 17.3324 7.28052 17.7231 6.88982C18.1138 6.49912 18.3333 5.96921 18.3333 5.41668C18.3333 4.86414 18.1138 4.33424 17.7231 3.94354C17.3324 3.55284 16.8025 3.33334 16.25 3.33334H15"
                  stroke="#00CCDD"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.33331 18.3333H16.6666"
                  stroke="#00CCDD"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.33331 12.2167V14.1667C8.33331 14.625 7.94165 14.9833 7.52498 15.175C6.54165 15.625 5.83331 16.8667 5.83331 18.3333"
                  stroke="#00CCDD"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.6667 12.2167V14.1667C11.6667 14.625 12.0584 14.9833 12.475 15.175C13.4584 15.625 14.1667 16.8667 14.1667 18.3333"
                  stroke="#00CCDD"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 1.66666H5V7.49999C5 8.82607 5.52678 10.0978 6.46447 11.0355C7.40215 11.9732 8.67392 12.5 10 12.5C11.3261 12.5 12.5979 11.9732 13.5355 11.0355C14.4732 10.0978 15 8.82607 15 7.49999V1.66666Z"
                  stroke="#00CCDD"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <h3 className="text-sm font-semibold text-white leading-5 tracking-tight">
                Leaderboards
              </h3>
              <p className="text-xs text-white/60 leading-[1.625]">
                Compare article reads and move toward awards with your campus community.
              </p>
            </div>
          </div>

          {/* Your performance card */}
          <div className="flex items-start gap-4 p-4 pb-5 rounded-2xl border border-white/10 bg-white/5">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan/20 flex-shrink-0">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 2.5V15.8333C2.5 16.2754 2.67559 16.6993 2.98816 17.0118C3.30072 17.3244 3.72464 17.5 4.16667 17.5H17.5"
                  stroke="#00CCDD"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 14.1667V7.5"
                  stroke="#00CCDD"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.8333 14.1667V4.16669"
                  stroke="#00CCDD"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.66669 14.1667V11.6667"
                  stroke="#00CCDD"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <h3 className="text-sm font-semibold text-white leading-5 tracking-tight">
                Your performance
              </h3>
              <p className="text-xs text-white/60 leading-[1.625]">
                Review monthly trends in reading time, articles, and sharing.
              </p>
            </div>
          </div>
        </div>

        {/* CTA button */}
        <button className="w-full py-3.5 px-6 rounded-[14px] bg-cyan text-white text-sm font-semibold leading-5 tracking-tight shadow-[0_10px_15px_-3px_rgba(0,204,221,0.25),0_4px_6px_-4px_rgba(0,204,221,0.25)] hover:bg-cyan/90 transition-colors">
          Get started
        </button>
      </div>
    </div>
  );
}
