export interface FlightFilters {
    cityFrom: string,
    cityTo: string,
    departureDate: string,
    returnDepartureDate?: string
}

export interface Flight extends FlightFilters {
    id: number;
}

export interface FlightReservation extends FlightFilters {
    id: number;
    firstName: string;
    lastName: string,
    numberOfPeople: number;
    class: string;
}