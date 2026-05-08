import selected from "../../assets/icons/selected.png"

interface IInputSchoolYear {
    selectedSchool: string;
    setSelectedSchool:  React.Dispatch<React.SetStateAction<string>>
}


export const InputSchoolYear = ({selectedSchool,setSelectedSchool}:IInputSchoolYear) => {
    const years = ["1° Ensino médio", "2° Ensino médio", "3° Ensino médio","Ainda não estou no ensino médio", "Não estou estudando", "Já me formei"]
    
    const yearsSchool = years
    
    return (
        <div className="w-[350px] h-[260px] flex justify-center p-4 rounded-2xl bg-[var(--color-gray-200)] shadow-2xl border border-2 ">
        
            <h2 className="font-bold text-md text-center ">Selecione o ano escolar referente</h2>

            <div className="flex flex-col gap-2 w-full ">

                {years.map((year, index) => (

                    <button
                        key={index}
                        onClick={() => setSelectedSchool(year)}
                        className="
                            border
                            rounded-md
                            text-md
                            text-center
                            font-semibold
                            shadow-2xl
                            transition-all
                        "
                        style={
                            selectedSchool === year
                                ? {
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    color: "white"
                                }
                                : {}
                        }
                    >
                        {year}
                    </button>

                ))}

            </div>



            </div>
    )
}
