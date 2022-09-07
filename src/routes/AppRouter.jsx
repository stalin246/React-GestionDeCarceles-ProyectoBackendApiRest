import React from 'react'
import { Routes, Route } from 'react-router-dom';


import { AuthTemplate } from '../components';

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { AuthProvider } from '../components/contexts';
import { Login } from '../pages/auth/Login';
import { App } from '../pages/app/App';
export const AppRouter = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path='login/*' element={
                    <PublicRoute>
                        <Routes>
                            <Route element={<AuthTemplate />}>
                                <Route path='/*' element={<Login />} />
                            </Route>
                        </Routes>
                    </PublicRoute>
                } />

                

                <Route path='/*' element={
                    <PrivateRoute>
                        <Routes>
                            <Route index path='/' element={<App />} />
                        </Routes>
                    </PrivateRoute>
                } />
            </Routes>
        </AuthProvider >
    )
}