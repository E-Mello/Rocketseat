import {useState, useEffect} from 'react';
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

//https://api.github.com/users/E-Mello

// const repository = {
//     name: 'unform',
//     description: 'Forms in React',
//     link: "https://github.com/unform/unform"
// }

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);   
    
    

    useEffect(() => {
        fetch('https://api.github.com/users/E-Mello/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);
    // se o array (segundo argumento) for vazio, a função
    // vai executar apenas uma vez
    // Nunca passa sem o segundo parametro, pois ele entra em um
    // loop 

    return (
        <section className="repository-list">
        <h1>Lista de repositorios</h1>

        <ul>
            {repositories.map(repository => {
                return <RepositoryItem key={repository.name} repository={repository}/>
                //Sempre que utilizar o .map no react, precisa colocar uma 'key'
            })}
        </ul>
     </section>
    );
}