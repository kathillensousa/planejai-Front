
interface IInputDefaultProps {
    titleInput: string;
    value: any;
}
export const InputDefault = ({titleInput, value}: IInputDefaultProps) => {
    return (
        <div>
            <h1 className="font-bold text-[14px] flex ml-5 mt-10 [text-shadow:3px_3px_6px_rgba(0,0,0,0.3)]">
                {titleInput}
            </h1>
            <input 
            className="w-50 h-10 bg-[var(--color-gray-200)] ml-5 border rounded-r-2xl rounded-b-2xl shadow-2xl pl-3 "
            placeholder="Digite aqui..."
            value={value}
            />
        </div>
    )
}