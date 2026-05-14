
interface ICardCapitalProps {
    borderAccount?: string;

    value?: string;
    date?: Date;
    payment?: string;
    account?: string;
    month?: string;
}
export const CardCapital = ({borderAccount, payment="não informado", account="não informado", month="não informado", value="R$00,00", date}: ICardCapitalProps) => {


    return (
        <>
            <div className=" mb-20 mt-5">
                <div className="min-w-25 w-auto absolute text-md font-bold p-2 pl-5 border-[var(--color-black-20)]  left-3 [text-shadow:6px_6px_6px_rgba(0,0,0,0.5)] bg-[var(--color-success-420)]  rounded-2xl rounded-tl-none font-bold  ">
                    <p className="border-l-3 pl-3">
                        {month}
                    </p>
                </div>
            </div>

        <div className=" relative w-[355px] h-[180px] [text-shadow:5px_5px_6px_rgba(0,0,0,0.5)]">

            <div className=" w-[355px] h-[180px] mt-[15px] bg-[var(--color-gray-180)] border-3 border-[var(--color-success-420)] rounded-xl">
                <div className= {`absolute min-w-20 w-auto h-auto mt-2 right-5 pl-3 pr-1  border-[var(--color-black-1)] rounded-2xl rounded-tl-none font-bold text-[13px] mt-1 border-3`}>
                        SALÁRIO
                </div>
            <p className="font-bold text-[16px] mt-2 mb-3 pl-[12px]  pb-[3px]  ">DATA:</p>

                    <div className= {`absolute w-21 left-20 top-[7px] pl-1 pr-1  rounded-2xl font-bold text-[17px]  mt-1`}>
                        {date}
                    </div>

                <p className="font-bold text-[16px] mt-1 pl-[12px] mb-3 pb-[3px] ">VALOR:</p>

                <div className= {`absolute min-w-25 w-auto h-8 mt-2 left-20 pl-2 top-[38px]  border-[var(--color-success-420)] rounded-2xl rounded-tl-none font-bold text-[17px] mt-1 border-3`}>
                        {value}
                </div>     
                
                <p className="font-bold text-[16px] mt-1 pl-[12px] mb-3 pb-[3px]">CONTA REFERENTE:</p>
                
                <div className= {`absolute min-w-30 w-auto left-42 bottom-[70px] border-3 ${borderAccount} pl-2 pr-1 rounded-2xl  rounded-tl-none  font-bold text-[16px] -mb-2`}>
                        {account} 
                </div> 

                <p className="font-bold text-[16px] mt-1 pl-[12px] pb-[3px]">FORMA DE PAGAMENTO:</p>
                
                <div className= {`absolute min-w-30 w-auto left-53 bottom-[25px] pl-2 pr-1 rounded-2xl font-bold text-[16px] border-[var(--color-black-1)]  rounded-tl-none font-bold  mt-1 border-3`}>
                        {payment}
                </div> 

        </div>
        </div>
        </>
        
    )
}