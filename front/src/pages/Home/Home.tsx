import { NavLink} from 'react-router-dom';
import { HeaderLayout } from '../../Layout/LayoutDefault/Header';


interface IHomePageProps {
    children?: React.ReactNode;
}
export const HomePage = ({children}: IHomePageProps) => {
    
    
    return (
    <>
    <div> 
                    <h1>Conteúdo geral</h1>
                </div>
                {children}
    </>
                
    )
}