import { useEffect, useState } from "react";
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";

export function Footer() {
    const [iconSize, setIconSize] = useState<number>(24);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640 && window.innerWidth < 1023) {
                setIconSize(32); // Tamaño para tabletas
            } else if (window.innerWidth >= 1023) {
                setIconSize(24); // Tamaño para pantallas más grandes
            } else {
                setIconSize(24); // Tamaño para móviles
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // Set initial icon size
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function openIcon() {
        window.open('', '_blank')
    }
    return (
        <div className="w-full textGothamBook tracking-wide">
            <div className="flex flex-col lg:flex lg:flex-row  w-full pr-[1rem] justify-center items-center py-2">
                {/*  <img src={logoLoteria} className="w-[10rem] sm:w-[12rem] lg:w-[12rem] p-2 " alt="Logo Loteria" /> */}
                <h1 className=" text-sm sm:text-lg lg:text-sm xl:text-base  text-gray-300 mx-8 lg:mx-auto text-center">
                    El juego compulsivo es perjudicial para la salud.<br /> solo para mayores de 18 años
                </h1>
                <div className="flex justify-center gap-4 py-4 items-center text-gray-300">
                    <BsWhatsapp className="cursor-pointer hover:text-greenMain duration-300" onClick={() => openIcon()} size={iconSize} />
                    <BsInstagram className="cursor-pointer hover:text-yellowMain duration-300" onClick={() => openIcon()} size={iconSize} />
                    <BsFacebook className="cursor-pointer hover:text-blue-500 duration-300" onClick={() => openIcon()} size={iconSize} />
                </div>
            </div>
        </div>
    );
}