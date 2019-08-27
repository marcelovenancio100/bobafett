import { MenuItem } from 'vertical-menu';

export const MENU_ITEMS: MenuItem[] = [
    {
        name: 'Home',
        icon: 'location_city',
        route: 'home'
    },
    {
        name: 'Dashboard',
        icon: 'trending_up',
        route: 'dashboard'
    },
    {
        name: 'Cadastros',
        icon: 'dashboard',
        children: [
            {
                name: 'Clientes',
                icon: '',
                route: 'pages/customer'
            },
            {
                name: 'Produtos',
                icon: '',
                route: 'pages/product'
            }
        ]
    },
    {
        name: 'Processos',
        icon: 'build',
        children: [
            {
                name: 'Pedido',
                icon: '',
                route: 'pages/order'
            }
        ]
    },
    {
        name: 'Relatórios',
        icon: 'add_to_home_screen',
        children: [
            
        ]
    },
    {
        name: 'Menu Desabilitado',
        disabled: true,
        icon: 'close',
        children: [
            {
                name: 'xpto',
                icon: 'group'
            }
        ]
    },
    {
        name: 'Menu Desabilitado',
        disabled: true,
        icon: 'close',
        children: [
            {
                name: 'xpto',
                icon: 'group'
            }
        ]
    }
];