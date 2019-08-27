enum Categoria {
    Esportes = 0,
    Eletronicos = 1,
    Roupas = 2,
    Moveis = 3,
    Games = 5
}

export class Product {
    id: string;
    codigo: string;
    nome: string;
    categoria: Categoria;
    precocompra: number;
    precovenda: number;
}