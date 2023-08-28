import './App.css';
import ListOfImages from './components/ListOfImages';
import useFetchData from '../src/hooks/useFetchData';

function App() {
    const imgSrc = useFetchData();

    return (
        <div className="App">
            <ListOfImages imgSrc={imgSrc} />
        </div>
    );
}

export default App;
