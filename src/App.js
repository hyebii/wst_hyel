import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./components/section/Main";

//비동기: 작업이 순차적으로 일어나지 않음
const Home = lazy(() => import('./pages/Home'));
const Today = lazy(() => import('./pages/Today'));
const Developer = lazy(() => import('./pages/Developer'));
const Webd = lazy(() => import('./pages/Webd'));
const Channel = lazy(() => import('./pages/Channel'));
const Video = lazy(() => import('./pages/Video'));
const Search = lazy(() => import('./pages/Search'));
const Not = lazy(() => import('./pages/Not'));

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<Main />}> {/* 로딩중에 main만 로딩되도록 */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/today" element={<Today />} />
                    <Route path='/developer' element={<Developer />} />
                    <Route path='/webd' element={<Webd />} />
                    <Route path='/Channel' element={<Channel />} />
                    <Route path='/Video' element={<Video />} />
                    <Route path='/Search' element={<Search />} />
                    <Route path='*' element={<Not />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default App;
