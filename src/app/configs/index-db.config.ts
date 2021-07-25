import { DBConfig } from "ngx-indexed-db";

export const dbConfig: DBConfig = {
    name: 'database',
    version: 1,
    objectStoresMeta: [{
        store: 'basketList',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
            { name: 'firstName', keypath: 'firstName', options: { unique: false } },
            { name: 'lastName', keypath: 'lastName', options: { unique: false } },
            { name: 'flightClass', keypath: 'flightClass', options: { unique: false } },
            { name: 'numberOfPeople', keypath: 'numberOfPeople', options: { unique: false } },
            { name: 'departureDate', keypath: 'departureDate', options: { unique: false } },
            { name: 'returnDepartureDate', keypath: 'returnDepartureDate', options: { unique: false } },
        ]
    }]
};