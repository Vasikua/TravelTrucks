import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import  {Layout}  from "./components/Layout/Layout";
import {Loader }from "./components/Loader/Loader";


const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

export default function App() {
  const dispatch = useDispatch();
  

    return (<> 
        <Layout>
          <Suspense fallback={<Loader />}>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/campers' element={<CatalogPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
          </Suspense>
        </Layout>
      
  </>)
};