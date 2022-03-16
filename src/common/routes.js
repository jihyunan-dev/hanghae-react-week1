import { Routes, Route, BrowserRouter } from 'react-router-dom';
import DetailPage from '../pages/Detail';
import MainPage from '../pages/Main';

const CustomRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/detail/:day' element={<DetailPage />} />
        </Routes>
    </BrowserRouter>
);

export default CustomRoutes;
