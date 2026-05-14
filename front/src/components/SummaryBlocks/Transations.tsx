
interface ITransationsBlockProps {
    title?: string;
    bgColor?: string;
    borderColor?: string;
    dateLabel?: string;
    bgDate?: string;
    bgConta?: string
}

export const TansitionsBlock = ({title,
    bgColor,
    borderColor,
    bgDate,
    dateLabel = "Data:",
    bgConta

}: ITransationsBlockProps) => {

    return (
        <div className="relative">
                <p className={`font-bold text-[14px] [text-shadow:2px_2px_6px_rgba(0,0,0,0.2)] mt-8 mb-5 p-[10px] w-15 h-8 ${bgColor} rounded-md flex items-center justify-center`}>{title}</p>

            <div className={`w-45 h-25 mt-[10px] bg-[var(--color-white-500)] rounded-md border-3 ${borderColor}`}>

                <p className="font-bold text-[14px] [text-shadow:2px_2px_6px_rgba(0,0,0,0.2)] mt-2 pl-[5px] pb-[3px] ">{dateLabel}</p>

                    <div className= {`absolute w-21 left-15 top-15 pl-1 ${bgDate} rounded-2xl font-bold text-[14px] [text-shadow:2px_2px_6px_rgba(0,0,0,0.2)] mt-1`}>
                        00/00/0000
                    </div>

                <p className="font-bold text-[14px] [text-shadow:2px_2px_6px_rgba(0,0,0,0.2)] mt-1 pl-[5px]  pb-[3px] ">Valor:</p>

                <div className= {`absolute w-20 left-15 top-22 pl-3  rounded-2xl font-bold text-[14px] [text-shadow:2px_2px_6px_rgba(0,0,0,0.2)] mt-1`}>
                        R$00,00
                </div>     
                
                <p className="font-bold text-[14px] [text-shadow:2px_2px_6px_rgba(0,0,0,0.2)] mt-1 pl-[5px]  pb-[3px]">Conta:</p>
                
                <div className= {`absolute w-20 left-15 top-29 pl-3 ${bgConta} rounded-2xl font-bold text-[14px] [text-shadow:2px_2px_6px_rgba(0,0,0,0.2)] mt-1`}>
                        conta
                </div>  

            </div>
        </div>
    )
}  