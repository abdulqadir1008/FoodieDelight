"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const restaurant_service_1 = require("./restaurant.service");
const Restaurant_1 = require("../tables/Restaurant");
const restaurantInputDto_1 = require("./dto/restaurantInputDto");
let RestaurantResolver = class RestaurantResolver {
    constructor(restaurantService) {
        this.restaurantService = restaurantService;
    }
    async restaurants() {
        return this.restaurantService.findAll();
    }
    async createRestaurant(createRestaurantDto) {
        return this.restaurantService.create(createRestaurantDto);
    }
    async deleteRestaurant(id) {
        return this.restaurantService.deleteRestaurant(id);
    }
};
exports.RestaurantResolver = RestaurantResolver;
__decorate([
    (0, graphql_1.Query)((returns) => [Restaurant_1.Restaurant]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RestaurantResolver.prototype, "restaurants", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => Restaurant_1.Restaurant),
    __param(0, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [restaurantInputDto_1.CreateRestaurantDto]),
    __metadata("design:returntype", Promise)
], RestaurantResolver.prototype, "createRestaurant", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => Restaurant_1.Restaurant),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RestaurantResolver.prototype, "deleteRestaurant", null);
exports.RestaurantResolver = RestaurantResolver = __decorate([
    (0, graphql_1.Resolver)((of) => Restaurant_1.Restaurant),
    __metadata("design:paramtypes", [restaurant_service_1.RestaurantService])
], RestaurantResolver);
//# sourceMappingURL=restaurant.resolver.js.map