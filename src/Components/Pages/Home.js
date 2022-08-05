import styles from './Home.module.css'; 
import savings from '../../img/savings.svg';
import LinkButton from '../Layout/LinkButton';

function Home() {
    return(
        <div className={styles.home_container}>
            <h1>Bem-Vindo ao <span>Costs!</span></h1>
            <p>comece a gerenciar seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar Projeto" />
            <img src={savings} alt="Costs"/>
        </div>
        )
}

export default Home;