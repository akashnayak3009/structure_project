import './App.css';
import File from './projects/FileExplorer/File';
import Verify from './projects/VerifyOtp/VerifyOtp';
// import Pagination from './projects/Pagination/Pagination';
// import ProgressBar from './projects/ProgreesBar/ProgressBar';
// import Timer from './projects/Timer/Timer';
// import Weather from './projects/Weather_App/Weather';
// import { WeatherProvider } from './projects/Weather_App/context/WeatherContext';
// import TicToe from './projects/TicTacToe/TicToe';
// import Bmi from './projects/Bmi/Bmi.jsx'
// import Translate from './projects/Translate_app/Translate';

function App() {
  return (
    <div className="App">
      {/* <TicToe /> */}
      {/* <WeatherProvider>
        <Weather />
      </WeatherProvider> */}
      {/* <Timer/> */}
      {/* <Pagination/> */}
      {/* <ProgressBar/> */}
      {/* <Bmi/> */}
      {/* <Translate/> */}
      <Verify/>
    </div>
  );
}

export default App;
