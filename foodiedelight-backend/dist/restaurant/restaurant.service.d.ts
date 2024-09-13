import { Restaurant } from 'src/tables/Restaurant';
import { Repository } from 'typeorm';
import { CreateRestaurantDto } from './dto/restaurantInputDto';
export declare class RestaurantService {
    private restaurantRepository;
    constructor(restaurantRepository: Repository<Restaurant>);
    create(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant>;
    findAll(): Promise<Restaurant[]>;
    deleteRestaurant(id: string): Promise<Restaurant>;
}
