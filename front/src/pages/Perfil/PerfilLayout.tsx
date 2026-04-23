import PerfilLayoutStyles from './PerfilLayout.module.css'

export const PerfilUser = () => {
    return (
        <div>
            <img src='/background-icons/azul-verde.png' className={PerfilLayoutStyles.azulVerde}/>
                <img src='/background-icons/azul-verdeBaixo.png' className={PerfilLayoutStyles.azulVerdeBaixo}/>
        
            <div className={PerfilLayoutStyles.container}>

                    <div className={PerfilLayoutStyles.header}>

                        <div className={PerfilLayoutStyles.headerContent}>
                            <h1 className={PerfilLayoutStyles.title}> Perfil de usuário</h1>

                            </div>
                        </div>

            </div>
        </div>
    )
}