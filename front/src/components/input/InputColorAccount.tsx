import selected from "../../assets/icons/selected.png"

interface IInputColor {
    selectedColor: string;
    setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
}

export const InputColor = ({
    selectedColor,
    setSelectedColor,
}: IInputColor) => {

    const colorsAccount = [ 
        {
            name: "Roxo",
            color: "#8A05BE"
        },
        {
            name: "Laranja",
            color: "#FF7A00"
        },
        {
            name: "Azul",
            color: "#009EE3"
        },
        {
            name: "Verde",
            color: "#21C25E"
        },
        {
            name: "Vermelho",
            color: "#E30613"
        },
        {
            name: "Grafite",
            color: "#2B2B2B"
        },
        {
            name: "Amarelo",
            color: "#FFD600"
        },
    ];


    return (
        <div className="w-[350px] h-auto flex flex-col items-center p-4 rounded-2xl bg-[var(--color-white-250)] shadow-2xl border-3 border-[var(--color-success-420)]">

            <h2 className="font-bold text-md text-center mb-4">
                Selecione a cor referente
            </h2>

            <div className="flex flex-wrap justify-center gap-4 w-full">

                {colorsAccount.map((item, index) => (

                    <div
                        key={index}
                        onClick={() => setSelectedColor(item.color)}
                        className={`
                            cursor-pointer
                            w-12
                            h-12
                            rounded-md
                            border-4
                            transition-all
                            duration-200
                            flex items-center justify-center
                            ${selectedColor === item.color
                                ? "border-white scale-110"
                                : "border-transparent"
                            }
                        `}
                        style={{
                            backgroundColor: item.color
                        }}
                    >
                        {selectedColor === item.color && (
                            <img
                                src={selected}
                                alt="selected"
                                className="w-5 h-5"
                            />
                        )}
                    </div>

                    ))}

            </div>

        </div>
    );
};