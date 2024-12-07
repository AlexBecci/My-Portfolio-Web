import { useEffect, useState } from 'react'
import img from '/images/logo18.png'

interface Props {
    onClose: () => void
    title: string | undefined
    onCloseOk: () => void
}
export interface dtoModal {
    title: string
    subTitle: string
}

export function ModalAge({ onClose, title, onCloseOk }: Props) {
    /* const [loading, setLoading] = useState<boolean>(false); */
    const [showModal, setShowModal] = useState<boolean>(false);

    useEffect(() => {
        const timeout = setTimeout(() => setShowModal(true), 10);
        // Agregar clase para desactivar el desplazamiento
        document.body.style.overflow = 'hidden';
        return () => {
            clearTimeout(timeout);
            // Quitar clase para activar el desplazamiento
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="p-4 flex items-center justify-center h-screen text-white textGothamMedium ">
            <div>
                <div x-show="showModal" className={`fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50 transition-opacity duration-300 ${showModal ? 'opacity-100' : 'opacity-0'}`}>

                    <div className="bg-white rounded-2xl p-8 w-[20rem] sm:w-[24rem] py-8 shadow-2xl transform transition-all duration-300">
                        <div className='flex justify-center items-center'>
                            <img src={img} className='w-[4rem] sm:w-[6rem]' alt="" />
                        </div>
                        <div className="flex justify-between tracking-wide items-center my-8">
                            <h2 className="text-lg text-center text-backgroundCyanDark text-gray-700 ml-auto mr-auto uppercase sm:text-xl textGothamMedium font-semibold">{title}</h2>
                        </div>
                        <div className='grid grid-cols-2 tracking-wide gap-4 items-center'>
                            <button onClick={onClose} className='px-[2.5rem] sm:px-[4rem] mx-auto py-1 rounded-full min-w-[6rem] bg-gradient-to-r from-zinc-200 to-black duration-300 sm:text-xl'>No!</button>
                            <button onClick={onCloseOk} className='px-[2.5rem] sm:px-[4rem]  mx-auto py-1 rounded-full bg-gradient-to-r from-redMain to-black duration-300 sm:text-xl'>Si!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}