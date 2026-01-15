export const Group4Subsection = (): JSX.Element => {
  const paymentAmounts = [
    { value: "1,500.00", topClass: "top-[70px]" },
    { value: "500.00", topClass: "top-[123px]" },
    { value: "0.00", topClass: "top-[179px]" },
    { value: "2,000.00", topClass: "top-[231px]" },
    { value: "3,000.00", topClass: "top-[286px]" },
    { value: "0.00", topClass: "top-[338px]" },
    { value: "250.00", topClass: "top-[392px]" },
    { value: "1,200.00", topClass: "top-[445px]" },
  ];

  return (
    <section className="relative w-[169px] h-[486px] opacity-0 animate-fade-in">
      <header className="absolute top-[15px] left-[75px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base tracking-[0] leading-[normal] [direction:rtl]">
        المبلغ الدفوع
      </header>

      {paymentAmounts.map((amount, index) => (
        <div
          key={index}
          className={`absolute ${amount.topClass} left-[84px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#0e0d24] text-base text-right tracking-[0] leading-[normal]`}
          style={
            amount.topClass === "top-[179px]" ||
            amount.topClass === "top-[338px]"
              ? { left: "117px" }
              : amount.topClass === "top-[123px]" ||
                  amount.topClass === "top-[392px]"
                ? { left: "98px" }
                : undefined
          }
        >
          {amount.value}
        </div>
      ))}

      <img
        className="absolute top-0 left-0 w-px h-[486px] object-cover"
        alt="Line"
        src="https://c.animaapp.com/mkd2vucjeF4nNd/img/line-13.svg"
      />
    </section>
  );
};
