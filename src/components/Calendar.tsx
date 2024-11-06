import classNames from "classnames";
import { useEffect, useState } from "react";

export const Calendar = () => {
  const [shortDayNames, setShortDayNames] = useState<string[]>([]);
  const [daysArray, setDaysArray] = useState<number[]>([]);

  const tarih = new Date();
  const ay = tarih.getMonth();
  const yil = tarih.getFullYear();
  const gün = tarih.getUTCDate();

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thuesday",
    "Friday",
    "Saturday",
  ];
  const shortDays = dayNames.map((day) => day.substring(0, 3));
  const daysInCurrentMonth = new Date(yil, ay + 1, 0).getDate();
  const days = Array.from({ length: daysInCurrentMonth }, (_, i) => i + 1);

  useEffect(() => {
    setShortDayNames(shortDays);
    setDaysArray(days);
  }, []);
  return (
    <>
      <div className="flex flex-col p-4">
        <div className="flex flex-row">
          {shortDayNames.map((day, index) => (
            <span
              key={index}
              className="text-white/60 w-52 text-center text-sm uppercase rounded-2xl py-1"
            >
              {day}
            </span>
          ))}
        </div>
        <div className="flex flex-row gap-2">
          <div className="grid grid-cols-5 gap-2">
            {Array.from({ length: 35 }).map((_, index) => {
              if (index < daysArray.length) {
                return (
                  <>
                    <div
                      key={index}
                      className={classNames(
                        `rounded-xl flex-col justify-end text-white/70 w-[2.5rem] h-[2.5rem] flex bg-zinc-900 group`,
                        {
                          "opacity-80 hover:opacity-100":
                            gün == daysArray[index],
                          "opacity-60 hover:opacity-100":
                            gün != daysArray[index],
                        }
                      )}
                      id={index.toString()}
                    >
                      <span
                        className={classNames("mx-auto relative", {
                          "text-white font-medium top-2":
                            gün == daysArray[index],
                          "text-white/70": gün != daysArray[index],
                        })}
                      >
                        {gün == daysArray[index] && "*"}
                      </span>
                      <span className="mx-auto">{daysArray[index]}</span>
                    </div>
                  </>
                );
              } else {
                return (
                  <div
                    key={index}
                    className="rounded-xl text-white/70 w-[2.5rem] bg-zinc-900/60 h-[2.5rem] flex opacity-40 hover:opacity-100"
                    id={index.toString()}
                  >
                    <span className="mx-auto my-3">{index - 30}</span>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};
