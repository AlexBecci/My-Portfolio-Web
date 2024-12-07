
//funcion que me devuelve el string para cada sede en el button de alreadyPlayed
export function getTextByLink(domain: string) {
    const text: string = domain === 'PILAR' ? 'Entrar a bingo pilar' : domain === 'ZARATE' ? 'ENTRAR a oasis zarate' : domain === 'SALTA' ? 'entrar a casino alberdi' : 'error'
    return text
}