// JSX = JavaScript + XML
import {Post} from './Post';
import { Header} from './components/Header';

import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar';


export function App() {
    return (
      <div>
        <Header />

        <div className={styles.wrapper}>
          <Sidebar />
            <main>
              <Post  
                  author="Edio Mello"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing el"
                />
              <Post
                  author="Mello"
                  content="Eu Sou divertido"
              />
            </main>
        </div>
    </div>
  )
}
