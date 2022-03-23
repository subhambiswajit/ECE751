export interface bookings
{   
    id?: number;
    tpk_booking_user: 
    {
        tpk_firebaseid: string;
    },
    tpk_parkingspace: 
    {
        id?: number,
        tpk_parking_features: 
        {
            id?: number;
            tpk_has_car_charging: true; 
            tpk_has_car_wash: false;
            tpk_has_indoor_parking: false;
        },
        tpk_ps_location: 
        {
            id?: number;
            type: string; 
            geometry:
            {
                type: string;
                coordinates: number;
            },
            properties: 
            {
                address: string;
                city: string;
                country: string;
                area_code: string;
            }
        },
        tpk_user: string;
        tpk_parkingspace_images: [],
        tpk_rating: string;
        tpk_description: string;
        tpk_access_information: string;
        tpk_price_per_hour: number;
        tpk_parking_area: number;
        tpk_has_features: boolean;
        tpk_vehicle_capacity: number;
        tpk_created_on: Date;
        tpk_last_booked: Date;
        tpk_is_booked: boolean;
    },
    tpk_book_start_datetime: Date;
    tpk_book_end_datetime: Date;
    tpk_book_cancelled: boolean;
}