export const Group12Subsection = (): JSX.Element => {
  const paymentAmounts = [
    { amount: "1,500.00", topClass: "top-[70px]" },
    { amount: "500.00", topClass: "top-[123px]" },
    { amount: "0.00", topClass: "top-[179px]" },
    { amount: "2,000.00", topClass: "top-[231px]" },
    { amount: "3,000.00", topClass: "top-[286px]" },
    { amount: "0.00", topClass: "top-[338px]" },
    { amount: "250.00", topClass: "top-[392px]" },
    { amount: "1,200.00", topClass: "top-[445px]" },
  ];

  return (
    <div className="relative w-[169px] h-[486px]">
      <div className="absolute top-[15px] left-[75px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base tracking-[0] leading-[normal] [direction:rtl]">
        المبلغ الدفوع
      </div>

      {paymentAmounts.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.topClass} ${
            item.amount === "0.00"
              ? "left-[117px]"
              : item.amount === "500.00" || item.amount === "250.00"
                ? "left-[98px]"
                : "left-[84px]"
          } [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#0e0d24] text-base text-right tracking-[0] leading-[normal]`}
        >
          {item.amount}
        </div>
      ))}

      <img
        className="absolute top-0 left-0 w-px h-[486px] object-cover"
        alt="Line"
        src="https://c.animaapp.com/mkd2vucjeF4nNd/img/line-13.svg"
      />
    </div>
  );
};
