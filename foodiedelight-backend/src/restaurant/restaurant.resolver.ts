import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from 'src/tables/Restaurant';
import { CreateRestaurantDto } from './dto/restaurantInputDto';

@Resolver((of) => Restaurant)
export class RestaurantResolver {
  constructor(private restaurantService: RestaurantService) {}

  @Query((returns) => [Restaurant])
  async restaurants(): Promise<Restaurant[]> {
    return this.restaurantService.findAll();
  }

  @Mutation((returns) => Restaurant)
  async createRestaurant(
    @Args('data') createRestaurantDto: CreateRestaurantDto,
  ): Promise<Restaurant> {
    return this.restaurantService.create(createRestaurantDto);
  }
  @Mutation((returns) => Restaurant)
  async deleteRestaurant(@Args('id') id: string): Promise<Restaurant> {
    return this.restaurantService.deleteRestaurant(id);
  }
}
