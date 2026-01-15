export const Group11Subsection = (): JSX.Element => {
  const employees = [
    { name: "ليلى خالد" },
    { name: "عمر عبد الكافي" },
    { name: "نور الهدى" },
    { name: "محمود درويش" },
    { name: "فاطمة ناصر" },
    { name: "أحمد شوقي" },
    { name: "سلمى رشيد" },
    { name: "يوسف شاهين" },
  ];

  return (
    <div className="relative w-full h-full flex flex-col">
      <div className="flex justify-end px-4 py-4">
        <div className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#0e0d24] text-base tracking-[0] leading-normal [direction:rtl]">
          اسم الموظف
        </div>
      </div>

      <div className="flex flex-col gap-[9px]">
        {employees.map((employee, index) => (
          <div
            key={index}
            className="flex justify-end px-4 py-[9px] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-normal text-[#0e0d24] text-base tracking-[0] leading-normal [direction:rtl]"
          >
            {employee.name}
          </div>
        ))}
      </div>

      <div className="absolute top-0 left-0 w-px h-full bg-border">
        <img
          className="w-full h-full object-cover"
          alt="Line"
          src="https://c.animaapp.com/mkd2vucjeF4nNd/img/line-13.svg"
        />
      </div>
    </div>
  );
};
