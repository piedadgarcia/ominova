import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Info from '../components/info/Info';
import Micomponente from '../components/micomponente/Micomponente';
import Mi3Componente from '../components/mi3componente/Mi3Componente';
import Mi4Componente from '../components/mi4Componente/Mi4Componente';
import Mi5Componente from '../components/mi5Componente/Mi5Componente';
import Mi6Componente from '../components/mi6Componente/Mi6Componente';
import Mi7Componente from '../components/mi7Componente/Mi7Componente';
import Mi8Componente from '../components/mi8Componente/Mi8Componente';
import Principal from '../components/main/Principal';
import NavMenu from '../components/navmenu/NavMenu';


import IconitosClasicos from '../components/iconitosClasicos/IconitosClasicos';

import AvisoLegal from '../components/avisoLegal/AvisoLegal';
import PoliticaDeCookies from '../components/politicaDeCookies/PoliticaDeCookies';
import PoliticaDePrivacidad from '../components/politicaDePrivacidad/PoliticaDePrivacidad';

import Servicios from '../components/servicios/Servicios';
import ServicioWeb from '../components/servicioWeb/ServicioWeb';
import TomaDeContacto from '../components/tomaDeContacto/TomaDeContacto';
import Briefing from '../components/briefing/Briefing';
import Estrategia from '../components/estrategia/Estrategia';
import Contenidos from '../components/contenidos/Contenidos';
import DiseñoFase1 from '../components/diseñoFase1/DiseñoFase1';
import DiseñoFase2 from '../components/diseñoFase2/DiseñoFase2';  
import Lanzamiento from '../components/lanzamiento/Lanzamiento'; 
import Branding from '../components/branding/Branding';
import Contacto from '../components/contacto/Contacto';

import Agencia from '../components/agencia/Agencia';
import CasosExito from '../components/casosExito/CasosExito.js';

import Consultoria from '../components/consultoria/Consultoria';
import Usabilidad from '../components/usabilidad/Usabilidad';
import AuditoriaWeb from '../components/auditoriaWeb/AuditoriaWeb';
import OptimizacionSeo from '../components/optimizacionSeo/OptimizacionSeo';
import Inicio from '../components/inicio/Inicio';


import CasosDeExito1 from '../components/casosDeExito1/CasosDeExito1';
import CasosDeExito1Titulo from '../components/casosDeExito1Titulo/CasosDeExito1Titulo.js'
import CasosDeExito1Retos from '../components/casosDeExito1Retos/CasosDeExito1Retos';
import CasosDeExito1Resultados from '../components/casosDeExito1Resultados/CasosDeExito1Resultados';
import CasosDeExito1BrandIdentity from '../components/casosDeExito1BrandIdent/CasosDeExito1BrandIdent';
import CasosDeExito1DYDesaWeb from '../components/casosDeExito1DYDesaWeb/CasosDeExito1DYDesaWeb';

import InicioPortada from '../components/inicioPortada/InicioPortada';
import InicioAgencia from '../components/inicioAgencia/InicioAgencia';
import InicioCasosDeExito from '../components/inicioCasosDeExito/InicioCasosDeExito';

function AppRoutes() {
    return (
        <>
            <NavMenu />
            <Routes>
                <Route path="*" element={<Principal />} />
                <Route path="/info" element={<Info />} />
                <Route path="/casosExito" element={<CasosExito />} />
                <Route path="/agencia" element={<Agencia />} />
                <Route path="/micomponente" element={<Micomponente />} />
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/navmenu" element={<NavMenu />} />
               
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/servicios" element={<Servicios />} />   
                <Route path="/servicioWeb" element={<ServicioWeb />} /> 
                <Route path="/branding" element={<Branding />} />
                <Route path="/tomaDeContactio" element={<TomaDeContacto />} />
                <Route path="/briefing" element={<Briefing />} />
                <Route path="/estrategia" element={<Estrategia />} />
                <Route path="/contenidos" element={<Contenidos />} />
                <Route path="/diseñoFase1" element={<DiseñoFase1 />} />
                <Route path="/diseñoFase2" element={<DiseñoFase2 />} />
                <Route path="/lanzamiento" element={<Lanzamiento />} />
                 <Route path="/consultoria" element={<Consultoria />} />
                 <Route path="/usabilidad" element={<Usabilidad />} />
                 <Route path="/auditoriaweb" element={<AuditoriaWeb />} />
                 <Route path="/optimizacionSeo" element={<OptimizacionSeo />} />
                 <Route path="/iconitosclasicos" element={<IconitosClasicos />} />
                 <Route path="/avisoLegal" element={<AvisoLegal/>} />
                 <Route path="/politicaDeCookies" element={<PoliticaDeCookies />} />
                 <Route path="/politicaDePrivacidad" element={<PoliticaDePrivacidad />} />

                 
                  
                    <Route path="/casosDeExito1" element={<CasosDeExito1 />} />
                    <Route path="/casosDeExito1Titulo" element={<CasosDeExito1Titulo />} />
                    <Route path="/casosDeExito1Resultados" element={<CasosDeExito1Resultados />} />
                    <Route path="/casosDeExito1BrandIdentity" element={<CasosDeExito1BrandIdentity />} />
                    <Route path="/casosDeExito1DYDesaWeb" element={<CasosDeExito1DYDesaWeb />} />
                    <Route path="/casosDeExito1Retos" element={<CasosDeExito1Retos />} />

                    <Route path="/inicioPortada" element={<InicioPortada />} />
                    <Route path="/inicioAgencia" element={<InicioAgencia />} />
                    <Route path="/inicioCasosDeExito" element={<InicioCasosDeExito />} />







                <Route path="/mi3Componente" element={<Mi3Componente />} />
                <Route path="/mi4Componente" element={<Mi4Componente />} />
                <Route path="/mi5Componente" element={<Mi5Componente />} />
                <Route path="/mi6Componente" element={<Mi6Componente />} />
                <Route path="/mi7Componente" element={<Mi7Componente />} />
                <Route path="/mi8Componente" element={<Mi8Componente />} />
                <Route path="/navmenu" element={<NavMenu />} />
                <Route path="/ominova" element={<Inicio />} />
              
            </Routes>
        </>
    );
}

export default AppRoutes;