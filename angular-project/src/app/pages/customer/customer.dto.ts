export class CustomerDto {
    codigo?: string;
    nome?: string;
    ni?: string;
    sortDirection?: string;
    pageIndex?: number;
    pageSize?: number;

    constructor(codigo?: string, nome?: string, ni?: string, sortDirection?: string, pageIndex?: number, pageSize?: number) {
        this.codigo = codigo;
        this.nome = nome;
        this.ni = ni;
        this.sortDirection = sortDirection;
        this.pageIndex = pageIndex;
        this.pageSize = pageSize;
    }
}