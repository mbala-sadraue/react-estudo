
// import  TutorialRapido   from './estudo/TutorialPadifo'
// import FilterableProdutTable from './estudo/FilterableProductTable';
import './assets/css/Style.css';
// import  Card, { MyButton} from './estudo/desenolver_ui.jsx'
// import TodoApp from "./estudo/todo/TodoApp.jsx";
// import AddInteractivity from "./estudo/adicionar_interatividade.jsx";
// import FeedApp from "./estudo/hooks/UseEffect.jsx";
// import UseRefApp from "./estudo/hooks/UseRef.jsx";
import UseReducerApp from "./estudo/hooks/UseReducer.jsx";

function App() {

  return (
    <div className='with-400'>
        {/* <FilterableProdutTable />*/}

        {/*<Card/>
            <Card/>
            <MyButton option={{disabled:'Ola', des:'teste'}}> clicque </MyButton>
*/}

        {/*<TodoApp />*/}
        {/*<AddInteractivity/>*/}

        {/*<FeedApp />*/}
        {/*<UseRefApp></UseRefApp>*/}
        <UseReducerApp/>
    </div>
  )
}

export default App;

