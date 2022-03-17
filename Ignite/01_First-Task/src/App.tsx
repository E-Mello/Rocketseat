import { TaskList } from './components/TaskList'
import { Header } from "./components/Header";
import './styles/global.scss'
import { Task } from './components/Interface';


export function App() {
  return (
    <>
      <Header />
      <TaskList />
    </>
  )
}