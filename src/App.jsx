import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from "react";
import  {Layout}  from "./components/layout/Layout";
import {Loader }from "./components/Loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const CamperPage = lazy(()=> import("./pages/CamperPage/CamperPage"))
const NotFoundPage = lazy(() => import("./pages/notFoundPage/NotFoundPage"));
const CamperFeatures = lazy(() => import("./components/CamperFeatures/CamperFeatures"));
const CamperReviews = lazy(() => import("./components/CamperReviews/CamperReviews"));


 function App() {
    return (<> 
        <Layout>
          <Suspense fallback={<Loader />}>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/catalog' element={<CatalogPage/>}/>
                <Route path='/catalog/:id' element={<CamperPage />} >
                    <Route path='features' element={<CamperFeatures/>} />
                    <Route path='reviews' element={<CamperReviews />} />
                </Route>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
          </Suspense>
        </Layout>
    </>)
  }

export default  App
