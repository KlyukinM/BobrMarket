import { Route, Routes, Navigate } from 'react-router-dom';
import { routes } from '../router/routes';

export default function AppRouter () {    
        
    return (
        <Routes>               
                {routes.map((route, index) => 
                    <Route key={index + 1} path={route.path} element={<route.element/>} />
                )}
                <Route path="*" element={<Navigate to="/" replace />} />
                <Route path="/All%20categories" element={<Navigate to="/" replace />} />
            </Routes>            
    )
}