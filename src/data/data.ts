export interface dto_prizes_get {
    id_premio: number;
    descripcion_premio: string
    estado: boolean
    index_id: number
}

export const prizesHard: dto_prizes_get[] = [
    {
        "id_premio": 222,
        "descripcion_premio": "premio diamante verde",//diamante verde
        "estado": false,
        "index_id": 1
    },
    {
        "id_premio": 223,
        "descripcion_premio": "premio corona",//icono de corona
        "estado": false,
        "index_id": 2
    },
    {
        "id_premio": 224,
        "descripcion_premio": "ticket de $30.000",//icono de 30 mil
        "estado": false,
        "index_id": 3
    },
    {
        "id_premio": 225,
        "descripcion_premio": "premio campana",//icono de campana
        "estado": false,
        "index_id": 4
    },
    {
        "id_premio": 226,
        "descripcion_premio": "ticket de $20.000",//icono de 20mil
        "estado": false,
        "index_id": 5
    },
    {
        "id_premio": 227,
        "descripcion_premio": "premio cereza",//icono de cereza
        "estado": false,
        "index_id": 6
    },
    {
        "id_premio": 228,
        "descripcion_premio": "ticket de $15.000",//icono de 15 mil
        "estado": false,
        "index_id": 7
    },
    {
        "id_premio": 229,
        "descripcion_premio": "premio estrella",//icono de estrella
        "estado": false,
        "index_id": 8
    },
    {
        "id_premio": 230,
        "descripcion_premio": "ticket de $10.000",//icono de 10mil
        "estado": true,
        "index_id": 0
    }
];

export type prizes_DTO = {
    descripcion_premio: string;
    estado: boolean;
    id_premio: number;
    index_id: number
};

/* export const prizes: prizes_DTO[] = [
    { descripcion_premio: "eee", estado: false, id_premio: 221, index_id: 1 },
    { descripcion_premio: "premio 2", estado: false, id_premio: 222, index_id: 2 },
    { descripcion_premio: "premio 3", estado: false, id_premio: 223, index_id: 3 },
    { descripcion_premio: "premio 4", estado: false, id_premio: 224, index_id: 4 },
    { descripcion_premio: "premio 5", estado: true, id_premio: 225, index_id: 5},
    { descripcion_premio: "premio 6", estado: false, id_premio: 226, index_id: 6 },
    { descripcion_premio: "nosale", estado: false, id_premio: 221, index_id: 7 },
    { descripcion_premio: "nosale 2", estado: false, id_premio: 0, index_id: 8 },
]; */
