import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Info from '../components/info/Info';
import Micomponente from '../components/micomponente/Micomponente';
import Mi2componente from '../components/mi2componente/Mi2componente';
import Principal from '../components/main/Principal';
import NavMenu from '../components/navmenu/NavMenu';
import MiComServicios from '../components/micomservicios/MiComServicios';
import MiServicios from '../components/miservicios/MiServicios';
import Contacto from '../components/contacto/Contacto';
import Branding from '../components/branding/Branding';;

function AppRoutes() {
    return (
        <>
            <NavMenu />
            <Routes>
                <Route path="*" element={<Principal />} />
                <Route path="/info" element={<Info />} />
                <Route path="/micomponente" element={<Micomponente />} />
                <Route path="/mi2componente" element={<Mi2componente />} />
                <Route path="/navmenu" element={<NavMenu />} />
                <Route path="/micomservicios" element={<MiComServicios />} />
                <Route path="/miservicios" element={<MiServicios />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/branding" element={<Branding />} />
            </Routes>
        </>
    );
}

export default AppRoutes;