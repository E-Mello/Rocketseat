// JSX = JavaScript + XML
import {Post} from './Post';
export function App() {
    return (
      <div>
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
