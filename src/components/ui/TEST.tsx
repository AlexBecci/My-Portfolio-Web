export default function Test() {
    return (
        <div className="relative w-full max-w-6xl mx-auto p-8">
            {/* Central Node */}
            <div className="flex justify-center mb-16">
                <div className="bg-rose-500 text-white p-4 rounded-lg text-center w-40 z-10">
                    <div className="text-sm font-bold">ID</div>
                    <div className="text-sm font-bold">CENTRICITY</div>
                </div>
            </div>

            {/* Connecting Lines */}
            <div className="absolute top-[88px] left-1/2 w-[2px] h-8 bg-gray-300 -translate-x-1/2" />
            <div className="absolute top-[120px] left-1/2 w-[90%] h-[2px] bg-gray-300 -translate-x-1/2" />

            {/* Vertical connecting lines */}
            {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
                <div
                    key={index}
                    className="absolute top-[15dvh] w-[2px] h-[5dvh] bg-gray-300"
                    style={{ left: `calc(${12.5 * (index + 0.5)}% - 1px)` }}
                />
            ))}

            {/* Modules Container */}
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4 ">
                {modules.map((module, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="bg-rose-500 text-white p-2 rounded-lg text-center w-32 mb-4">
                            <div className="text-xs">{module.title}</div>
                        </div>
                        <div className="space-y-1">
                            {[1, 2, 3].map((version) => (
                                <div key={version} className="flex items-center gap-2">
                                    <div className="text-xs font-medium">V{version}</div>
                                    <div className={`h-1 w-12 rounded ${version === 1 ? 'bg-green-400' : version === 2 ? 'bg-green-500' : 'bg-green-600'}`} />
                                </div>
                            ))}
                        </div>
                        <div className="text-xs text-center mt-2 text-gray-600">
                            {module.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const modules = [
    {
        title: "Pagos Mayores",
        description: "Digitalizar y agilizar el proceso de carga de formulario UIF. Registrar datos de los clientes."
    },
    {
        title: "Guardarropas",
        description: "Registrar datos de los clientes que guarden sus pertenencias. Registrar el tiempo de permanencia en sala."
    },
    {
        title: "Ing. y egr. a Luxor",
        description: "Registrar información de clientes que ingresen y egresen de sala Luxor."
    },
    {
        title: "Cortesias Luxor",
        description: "Registrar información de clientes que reciban cortesías, sean clientes vip o invitados."
    },
    {
        title: "Parking",
        description: "Registrar información de clientes y de sus autos que utilicen el parking."
    },
    {
        title: "Club y cupones",
        description: "Registrar toda acción de clientes por afuera de recinto."
    },
    {
        title: "Aforo",
        description: "Obtener datos de los clientes."
    },
    {
        title: "Blacklist",
        description: "Registrar clientes que no pueden ingresar a sala."
    }
]