


export default function NewsBar() {
    return (
      
        <div className="mantine-Group-root gap-2 border-b border-b-[#efefef] flex w-full clump:pt-[clamp(1rem,4vw,4rem)] sm:flex-row overflow-hidden mantine-dghak8">
          <button className="mantine-Text-root p-3 leading-6 bg-[#DC372F] font-bold  text-[#fff] mantine-ssm15l">
            LATEST NEWS
          </button>
          <div className="flex flex-1 overflow-hidden marquee css-1nkfwl">
            {Array.from({ length: 3 }, () => (
              <ul
                key={Math.random()}
                className="flex gap-6 mr-6 h-[3.5rem] leading-6 pt-3"
              >
                <li className="whitespace-nowrap text-[#030000]">
                  <span className="text-[#DC372F] text-[1.14rem] whitespace-nowrap font-bold">
                    ADMINISTRATION:
                  </span>{" "}
                  The future belongs to those who make their own rules and
                  refuse to confine themselves. That's why at AFEX we do not ask
                  "why" but rather "why not". Through our ATS program, we aspire
                  to build an ecosystem of tech stars with the skills and
                  mindset needed to thrive now and in the future
                </li>
                <li className="whitespace-nowrap text-[#030000]">
                  <span className="text-[#DC372F] text-[1.14rem] whitespace-nowrap font-bold">
                    EVENTS:
                  </span>{" "}
                  Press Release: AFEX Code Cash Crop 3.0 Creates Solutions to
                  Boost Agriculture, Finance, and Technology Sectors{" "}
                </li>
                <li className="whitespace-nowrap text-[#030000]">
                  <span className="text-[#DC372F] text-[1.14rem] whitespace-nowrap font-bold">
                    ADMINISTRATION:
                  </span>{" "}
                  AFEX Celebrates World Food Day with the Launch of 100,000MT/
                  year Grain Quality Enhancement Center
                </li>
                <li className="whitespace-nowrap text-[#030000]">
                  <span className="text-[#DC372F] text-[1.14rem] whitespace-nowrap font-bold">
                    FINANCE:
                  </span>{" "}
                  AFEX Advocates for Financing of Agri-SMEs at AGRF 2022 Summit{" "}
                </li>
                <li className="whitespace-nowrap text-[#030000] ">
                  <span className="text-[#DC372F] text-[1.14rem] whitespace-nowrap font-bold">
                    AGRICULTURE:
                  </span>{" "}
                  Press Release: AFEX Commodity Exchanges can help Food Systems
                  in Africa
                </li>
              </ul>
            ))}
          </div>
        </div>
    );
}