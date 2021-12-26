import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// router
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { createBrowserHistory } from 'history';
import Welcome from './components/Welcome/welcome';
import Home from './components/Home/index';
import Test from './components/Test/index';

const history = createBrowserHistory({
    basename: '',             //基链接
    forceRefresh: true        //是否强制刷新
});


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route exact path="/" element={<Welcome history={history}/>} />
                <Route exact path="/home" element={<Home history={history}/>} />
                <Route exact path="/test" element={<Test history={history}/>} />
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default history