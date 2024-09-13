import { RestaurantService } from './restaurant.service';
import { Restaurant } from 'src/tables/Restaurant';
import { CreateRestaurantDto } from './dto/restaurantInputDto';
export declare class RestaurantResolver {
    private restaurantService;
    constructor(restaurantService: RestaurantService);
    restaurants(): Promise<Restaurant[]>;
    createRestaurant(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant>;
    deleteRestaurant(id: string): Promise<Restaurant>;
}
