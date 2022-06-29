// JSX = JavaScript + XML
import {Post} from './Post';
import { Header} from './components/Header';
import './global.css'



export function App() {
    return (
      <div>
        <Header />

        <Post  
          author="Edio Mello"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing el"
        />
        <Post
          author="Mello"
          content="Eu Sou divertido"
        />
    </div>
  )
}
