import Routes from './pages/Routes';
import './App.css';
import ReduxStoreProvider from 'redux/provider';

function App() {
  return (
    <ReduxStoreProvider>
         <Routes/>
    </ReduxStoreProvider>
  );
}

export default App;
