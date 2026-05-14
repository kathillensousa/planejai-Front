import { ButtonMes } from "../../components/Buttons/ButtonMes"
import { CardGastos } from "../../components/Cards/CardsGastos/CardGastos"

export const GastosLayout = () => {
    const accountsColors: Record<string, string> = {
        "Nubank": "border-purple-500",
        "Banco do Brasil": "border-yellow-400",
        "Caixa Tem": "border-blue-500",
    };

    const accounts = [
        "Nubank",
        "Banco do Brasil",
        "Caixa Tem",
    ] 
        
    
    return (
        <div className="min-h-screen overflow-visible">
            {/* trocar pelo button ano*/ }
            <ButtonMes />

            <CardGastos
            borderAccount={accountsColors["Banco do Brasil"]}
            month="ABRIL"
            date="30/04/2026"
            value="R$ 565,89"
            account={accounts[1]}
            payment="Transf. bancária"
            />
        </div>
    )
}