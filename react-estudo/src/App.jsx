
// import  TutorialRapido   from './estudo/TutorialPadifo'
import FilterableProdutTable from './estudo/FilterableProductTable';
import './assets/css/Style.css';
import  Card, { MyButton} from './estudo/desenolver_ui.jsx'
import TodoApp from "./estudo/todo/TodoApp.jsx";

function App() {

  return (
    <div className='with-400'>
        {/* <FilterableProdutTable />*/}

        {/*<Card/>
            <Card/>
            <MyButton option={{disabled:'Ola', des:'teste'}}> clicque </MyButton>
*/}

        <TodoApp />
    </div>
  )
}

export default App;

