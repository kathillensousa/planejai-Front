import { useState } from "react";

import selected from "../../assets/icons/selected.png"

export const InputDate = () => {

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [currentDate, setCurrentDate] = useState(new Date());

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
        year:"numeric"
    });

    function handlePrevMonth(){
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() -1, 1)
        );
    };

    function handleNextMonth() {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
        );
    }

    return (
    <div className="w-[300px] p-4 rounded-2xl bg-gray-200 shadow-xl">
    
      {/* HEADER */}
        <div className="flex justify-between items-center mb-2">
            
            <button onClick={handlePrevMonth}>
                
            <img />

            </button>

            <h2 className="font-bold capitalize">{monthLabel}</h2>

            <button onClick={handleNextMonth}>

            <img />
            </button>
        </div>

        {/* DIAS DA SEMANA */}
        <div className="grid grid-cols-7 text-center font-bold text-sm mb-2">
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