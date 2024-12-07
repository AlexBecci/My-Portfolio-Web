import { googleMapsPilar, googleMapsSalta, googleMapsZarate } from "../content/content";

//funcion que hace la logica del open para cada sede segun el dominio
export function openLink(domain: string) {
    const url = domain === 'PILAR'
        ? googleMapsPilar
        : domain === 'ZARATE'
            ? googleMapsZarate
            : domain === 'SALTA'
                ? googleMapsSalta
                : '#'; // Puedes definir un valor por defecto o un manejo de error aquí
    window.open(url, '_blank'); // Abrir en una nueva pestaña
    return
}

//funcion que me devuelve el string para cada sede en el button de alreadyPlayed
export function getTextByLink(domain: string) {
    const text: string = domain === 'PILAR' ? 'Entrar a bingo pilar' : domain === 'ZARATE' ? 'ENTRAR a oasis zarate' : domain === 'SALTA' ? 'entrar a casino alberdi' : 'error'
    return text
}