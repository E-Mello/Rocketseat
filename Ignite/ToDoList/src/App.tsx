import './styles/global.scss'
import TodoList from './components/TodoList.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';



export function App(){
    return (
        <div className="App">
            <TodoList />
        </div>
    );
}

export default App;