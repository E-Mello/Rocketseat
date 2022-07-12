import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Task } from './components/Task';

import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />
      
      <Sidebar />
      <main>
        <Task />
      </main>
    </div>
  )
}

