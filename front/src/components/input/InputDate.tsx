import { useState } from "react";

import selected from "../../assets/icons/selected.png"
import seta from "../../assets/icons/seta.png"
import setaBack from "../../assets/icons/setaBack.png"


interface IInputDateProps {
    selectedDate: Date | null;
    setSelectedDate: React.Dispatch<React.SetStateAction<Date | null>>;
};

export const InputDate = ({
    selectedDate,
    setSelectedDate
}: IInputDateProps) => {

    const [currentDate, setCurrentDate] = useState(new Date());

    const currentYear = new Date().getFullYear();

    const years = []

    for (let year = currentYear; year >= 1950; year--) {
    years.push(year);
}

    function getDaysInMonth(date: Date) {

    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    const daysArray: (Date | null)[] = [];

    // espaços vazios antes do primeiro dia
    for (let i = 0; i < firstDayOfMonth; i++) {
        daysArray.push(null);
    }

    // dias do mês
    for (let i = 1; i <= totalDays; i++) {
        daysArray.push(new Date(year, month, i));
    }

    return daysArray;
}

    const days = getDaysInMonth(currentDate);

    const monthLabel = currentDate.toLocaleDateString("pt-BR", {
        month: "long",
    });

    function handleYearChange(year: string) {

    const newDate = new Date(
        Number(year),
        currentDate.getMonth(),
        1
    );

    setCurrentDate(newDate);
}

    function handlePrevMonth(){
        const newDate = new Date (
            currentDate.getFullYear(),
            currentDate.getMonth() -1,
            1
        );

        setCurrentDate(newDate);

    };

    function handleNextMonth() {
        const newDate = new Date (
            currentDate.getFullYear(),
            currentDate.getMonth() +1,
            1
        );

        setCurrentDate(newDate);

    };

    return (
    <div className="w-[300px] h-[350px] p-4 rounded-2xl bg-[var(--color-gray-200)] shadow-xl">
    
      {/* HEADER */}
        <div className="flex justify-between items-center mb-2">
            
            <button onClick={handleNextMonth}>
            
            <img src={seta} className="absolute z-20 right-5 top-0 pt-1" />

            </button>
                <h2 className="font-bold absolute z-20 left-23 top-0 pt-4 ">{monthLabel}</h2>
            
            <select
                value={currentDate.getFullYear()}
                onChange={(e) => handleYearChange(e.target.value)}
                className="
                    z-20 left-30  ml-15 pl-10
                    font-bold
                "
            >
                
            {years.map((year) => (
                <option key={year} value={year}>
                    {year}
                </option>
            ))}
            </select>
            
            <button onClick={handlePrevMonth}>

            <img src={setaBack} className="absolute z-20 left-5 top-0 pt-1"  />

            </button>
        </div>

        {/* DIAS DA SEMANA */}
        <div className="grid grid-cols-7 text-center font-bold text-sm mb-2 pt-2">
            {["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"].map((d) => (
            <span key={d}>{d}</span>
            ))}
        </div>

        {/* DIAS */}
        <div className="grid grid-cols-7 gap-2 text-center">
            {days.map((day:any, index:any) => (
                <button
                    key={index}
                    onClick={() => day && setSelectedDate(day)}
                    style={
                        selectedDate &&
                        day &&
                        selectedDate.toDateString() === day.toDateString()
                        ? {
                            backgroundImage: `url(${selected})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            }
                        : {}
                    }
                    className={`
                        h-8 w-8 rounded-md
                        ${!day ? "text-gray-400" : "hover:bg-gray-300"}
                        ${
                            selectedDate &&
                            day &&
                            selectedDate.toDateString() === day.toDateString()
                            ? "text-black front-bold"
                            : ""
                        }
                    `}
                >
                    {day ? day.getDate() : ""}
                </button>
            ))}
        </div>
    </div>
    )
}