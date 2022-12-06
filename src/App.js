import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './Layout/DefaultLayout';
import Home from './pages/Home';
import ZingChart from './pages/ZingChart/ZingChart';
import ChartsWeekDetail from './pages/ZingChart/ChartWeek/ChartsWeekDetail/ChartsWeekDetail';
import NewSongFull from './pages/Home/NewSong/NewSongsFull/NewSongsFull';

function App() {
    return (
        <div className="App">
            <Router basename="/">
                <DefaultLayout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/zingmp3" element={<Home />} />
                        <Route path="/Chart" element={<ZingChart />} />
                        <Route path="/Chart/chart-week" element={<ChartsWeekDetail />} />
                        <Route path="/newmusic" element={<NewSongFull />} />
                    </Routes>
                </DefaultLayout>
            </Router>
        </div>
    );
}

export default App;
