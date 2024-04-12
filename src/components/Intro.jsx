import React from "react";
import "../styles/tailwind.css";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
        <h1 className="text-4xl md:text-6xl mb-1 md:mb-3 font-bold float-in-space" style={{ fontFamily: 'DM Sans, sans-serif' }}>Joaquín Lucas Nieto</h1>
            <p className="text-base md:text-xl mb-3 font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>Desarrollador Full Stack Junior</p>
            <p className="text-sm max-w-xl mb-6 font-bold" style={{ fontFamily: 'DM Sans, sans-serif' }}>Soy un desarrollador full-stack de 19 años, residente en Buenos Aires, Argentina. Actualmente, soy estudiante de Ingeniería en Sistemas y poseo habilidades en Java, JavaScript, HTML, CSS, C++, React y SQL. 
            Apasionado por el desarrollo de soluciones tecnológicas eficientes, busco oportunidades para contribuir y crecer profesionalmente en un entorno innovador.</p>
            <div className="flex justify-center gap-4">
                <a href="tel:+541141642145" className="bg-gray-300 p-2 rounded-md shadow-md">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                </a>
                <a href="https://www.linkedin.com/in/tuperfil" className="bg-gray-300 p-2 rounded-md shadow-md">
                    <i className="fab fa-linkedin fa-lg" aria-hidden="true"></i>
                </a>
                <a href="https://github.com/njoaco" className="bg-gray-300 p-2 rounded-md shadow-md">
                    <i className="fab fa-github fa-lg" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    );
}

export default Intro;
