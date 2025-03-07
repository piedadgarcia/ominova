import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Info from '../components/info/Info';
import Micomponente from '../components/micomponente/Micomponente';
import Mi2componente from '../components/mi2componente/Mi2componente';
import Mi3Componente from '../components/mi3componente/Mi3componente';
import Mi4Componente from '../components/mi4componente/Mi4componente';
import Mi5Componente from '../components/mi5componente/Mi5componente';
import Mi6Componente from '../components/mi6componente/Mi6componente';
import Mi7Componente from '../components/mi7componente/Mi7componente';
import Mi8Componente from '../components/mi8componente/Mi8componente';
import Principal from '../components/main/Principal';
import NavMenu from '../components/navmenu/NavMenu';
import MiComServicios from '../components/micomservicios/MiComServicios';
import MiServicios from '../components/miservicios/MiServicios';
import Contacto from '../components/contacto/Contacto';
import Branding from '../components/branding/Branding';

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
                <Route path="/mi3Componente" element={<Mi3Componente />} />
                <Route path="/mi4Componente" element={<Mi4Componente />} />
                <Route path="/mi5Componente" element={<Mi5Componente />} />
                <Route path="/mi6Componente" element={<Mi6Componente />} />
                <Route path="/mi7Componente" element={<Mi7Componente />} />
                <Route path="/mi8Componente" element={<Mi8Componente />} />
                <Route path="/navmenu" element={<NavMenu />} />
                <Route path="/miComServi" element={<MiComServi />} />
                <Route path="/miServi" element={<MiServi />} />
            </Routes>
        </>
    );
}

export default AppRoutes;