import { useEffect, useState } from "react";
/* import { AiOutlineCloseCircle } from "react-icons/ai"; */

interface dto_modal {
    onClose: () => void
    onCloseOk: () => void
    prize: string
}
export function ModalGetPrize({ /* onClose, */ onCloseOk, prize }: dto_modal) {
    const [showModal, setShowModal] = useState<boolean>(false)

    useEffect(() => {
        const timeout = setTimeout(() => setShowModal(true), 10);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black text-black bg-opacity-50 transition-opacity duration-300 ${showModal ? 'opacity-100' : 'opacity-0'}`}>
            {/* <ToastContainer autoClose={2000} /> */}
            {/*  {loading && (
            <LoadingAllScreen />
        )} */}
            <div>
                <div className="fixed inset-0 flex items-center justify-center  z-50">
                    <form /* onSubmit={handleSubmit(sendData)} */ className="bg-white py-[3rem] text-black rounded-2xl sm:py-[4rem] lg:py-[2rem]   p-4 xl:p-[2rem] w-[40vh] 2xl:py-[4rem]   shadow-2xl transform transition-all duration-300">
                        <div className="flex justify-end items-center">
                            {/* <AiOutlineCloseCircle className="text-bageDark  rounded-full m-2" size={32} onClick={onClose} /> */}
                        </div>
                        <div className="flex flex-col text-lg text-stone-700 justify-center items-center text-center">
                            <h1 className="text-3xl textGothamBlack text-purpleMain xl:text-4xl">¡GANASTE!</h1>
                            <p className="my-[1rem] textGothamBlack  text-stone-700 sm:text-2xl lg:text-xl">{prize}</p>
                            <button className="uppercase  sm:my-[1rem] lg:my-[1rem] text-base xl:text-lg text-white bg-gradient-to-r from-redMain to-black rounded-3xl py-2 px-4" onClick={onCloseOk} >QUIERO MI PREMIO</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}