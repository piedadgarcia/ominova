import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Info from '../components/info/Info';
import Micomponente from '../components/micomponente/Micomponente';
import Mi2componente from '../components/portada/Portada';
import Mi3Componente from '../components/mi3componente/Mi3Componente';
import Mi4Componente from '../components/mi4Componente/Mi4Componente';
import Mi5Componente from '../components/mi5Componente/Mi5Componente';
import Mi6Componente from '../components/mi6Componente/Mi6Componente';
import Mi7Componente from '../components/mi7Componente/Mi7Componente';
import Mi8Componente from '../components/mi8Componente/Mi8Componente';
import Principal from '../components/main/Principal';
import NavMenu from '../components/navmenu/NavMenu';
import MiImagServicios from '../components/miimagservicios/MiImagServicios';
import Servicios from '../components/servicios/Servicios';
import Contacto from '../components/contacto/Contacto';
import Branding from '../components/branding/Branding';
import Agencia from '../components/agencia/Agencia';
import CasosExito from '../components/casosExito/CasosExito';
import ServicioWeb from '../components/servicioWeb/ServicioWeb';
import Consultoria from '../components/consultoria/Consultoria';
import Portada from '../components/portada/Portada';

function AppRoutes() {
    return (
        <>
            <NavMenu />
            <Routes>
                <Route path="*" element={<Principal />} />
                <Route path="/info" element={<Info />} />
                <Route path="/casos-exito" element={<CasosExito />} />
                <Route path="/agencia" element={<Agencia />} />
                <Route path="/micomponente" element={<Micomponente />} />
                <Route path="/portada" element={<Portada />} />
                <Route path="/navmenu" element={<NavMenu />} />
                <Route path="/miimagservicios" element={<MiImagServicios />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/branding" element={<Branding />} />
                <Route path="/servicioWeb" element={<ServicioWeb />} /> 
                <Route path="/consultoria" element={<Consultoria />} />
                <Route path="/mi3Componente" element={<Mi3Componente />} />
                <Route path="/mi4Componente" element={<Mi4Componente />} />
                <Route path="/mi5Componente" element={<Mi5Componente />} />
                <Route path="/mi6Componente" element={<Mi6Componente />} />
                <Route path="/mi7Componente" element={<Mi7Componente />} />
                <Route path="/mi8Componente" element={<Mi8Componente />} />
                <Route path="/navmenu" element={<NavMenu />} />
                <Route path="/ominova" element={<Portada />} />
            </Routes>
        </>
    );
}

export default AppRoutes;