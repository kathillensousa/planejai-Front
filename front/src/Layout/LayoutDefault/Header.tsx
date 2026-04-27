
interface IHeaderLayoutProps {
    title?: string;
    children?: React.ReactNode;
}

export const HeaderLayout = ({children, title}: IHeaderLayoutProps) => {

    return (
        <header className="h-16 border-b flex items-center px-4 gap-5 bg-[var(--color-black-110)]">
                <h1 className="text-lg font-bold p-2 border-l border-[var(--color-black-500)]  ">{title}</h1>
            {children}
            

        </header>
    )
}