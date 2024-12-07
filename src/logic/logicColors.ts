export function getGradientByDomain(domain: string) {
    switch (domain) {
        case 'PILAR':
            return 'bg-gradient-to-tr from-black to-slate-600'; // Gradiente rojo
        case 'ZARATE':
            return 'bg-gradient-to-tr from-orange-600 to-orange-300'; // Gradiente naranja
        case 'SALTA':
            return 'bg-gradient-to-tr from-purple-600 to-purple-300'; // Gradiente violeta
        default:
            return 'bg-gradient-to-tr from-black to-zinc-100'; // Gradiente por defecto
    }
}

export function getGradientButton(domain: string) {
    switch (domain) {
        case 'PILAR':
            return 'bg-gradient-to-r from-redMain to-black';
        case 'ZARATE':
            return 'bg-gradient-to-r from-greenDark to-greenMain';
        case 'SALTA':
            return 'bg-gradient-to-r from-redMain to-black';
        default:
            return 'bg-gradient-to-r from-black to-zinc-100'; // Gradiente por defecto
    }

}


export function colorSpinLoader(domain: string) {
    switch (domain) {
        case 'PILAR':
            return 'text-redMain';
        case 'ZARATE':
            return 'text-greenMain';
        case 'SALTA':
            return 'text-redMain';
        default:
            return 'text-yellow-500'; // color por defecto
    }
}
