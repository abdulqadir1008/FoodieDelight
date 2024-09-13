import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurant } from 'src/tables/Restaurant';
import { Repository } from 'typeorm';
import { CreateRestaurantDto } from './dto/restaurantInputDto';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private restaurantRepository: Repository<Restaurant>,
  ) {}

  create(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
    const restaurant = this.restaurantRepository.create(createRestaurantDto);
    return this.restaurantRepository.save(restaurant);
  }

  findAll(): Promise<Restaurant[]> {
    return this.restaurantRepository.find();
  }

  async deleteRestaurant(id: string): Promise<Restaurant> {
    const restaurant = await this.restaurantRepository.findOneBy({ id });
    if (!restaurant) {
      throw new Error('Restaurant not found');
    }
    await this.restaurantRepository.remove(restaurant);
    return restaurant;
  }
}
