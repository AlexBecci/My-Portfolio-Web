import { dto_prizes_get/* , prizes_DTO  */} from "../data/data";


// Función que convierte la data que me llega para que la reciba los demás componentes de la manera que esperan
export function separatePrize(prizes: dto_prizes_get[]) {
    // Filtrar los premios en dos grupos: aquellos con estado true y aquellos con estado false
    const truePrizes = prizes.filter(prize => prize.estado === true);
    const falsePrizes = prizes.filter(prize => prize.estado === false);

    // Concatenar los premios con estado false primero y luego los premios con estado true
    return [...falsePrizes.map(prize => prize.descripcion_premio), ...truePrizes.map(prize => prize.descripcion_premio)];
}

// Función que devuelve solo los nombres de los premios
export function getPrizeDescriptions(prizes: dto_prizes_get[]) {
    // Mapear los premios para obtener solo la descripción
    return prizes.map(prize => prize.descripcion_premio);
}



// Función que convierte la data que me llega para que la reciba los demás componentes de la manera que esperan
export function getIdPrize(prizes: dto_prizes_get[]) {
    // Filtrar los premios con estado true
    const truePrizes = prizes.filter(prize => prize.estado === true);

    // Retornar solo los IDs de los premios con estado true
    return truePrizes.map(prize => prize.id_premio); // Asegúrate de que 'id' es la propiedad correcta
}


// Función que convierte la data que me llega para que la reciba los demás componentes de la manera que esperan
export function getIndexPrize(prizes: dto_prizes_get[]) {
    // Filtrar los premios con estado true
    const truePrizes = prizes.filter(prize => prize.estado === true);

    // Retornar solo los index_id de los premios con estado true
    return truePrizes.map(prize => prize.index_id);
}
