import { MenuItem } from "primeng/api";

export const menu: Array<MenuItem> = [
    {
        label: 'Options',
        items: [
            {
                label: 'Basket',
                icon: 'pi pi-shopping-cart'
            },
            {
                label: 'Jan Kowalski',
                icon: 'pi pi-user',
            }
        ]
    },
    {
        label: 'Navigate',
        items: [
            {
                label: 'Flights',
                icon: 'pi pi-send',
                routerLink: ['/flights']
            },
            {
                label: 'Reservations',
                icon: 'pi pi-book',
                routerLink: ['/reservation/1']
            }
        ]
    }
];
