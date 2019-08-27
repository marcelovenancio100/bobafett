import { Customer } from '../customer/customer';
import { Product } from '../product/product';

enum Status {
    Aguardando_Pagamento = 0,
    Aguardando_Aprovacao = 1,
    Em_Separacao = 2,
    Enviado = 3,
    Entregue = 4,
    Cancelado = 5
}

export class Order {
    id: string;
    codigo: string;
    status: Status;
    customer: Customer;
    products: Product[];
}