import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ItemsService } from './items.service';
import { ItemType } from './dto/create-item.dto';
import { ItemInput } from './input-items.input';
import { PaginationArgs } from 'src/pagination/pagination';

@Resolver()
export class ItemsResolver {
  constructor(private readonly itemsService: ItemsService) {}

  @Query(() => [ItemType])
  async items(@Args('pageInfo') pageInfo: PaginationArgs): Promise<ItemType[]> {
    return this.itemsService.findAll(pageInfo);
  }

  @Query(() => ItemType)
  async getOneItem(@Args('id') id: string): Promise<ItemType> {
    return this.itemsService.findOne(id);
  }

  @Mutation(() => ItemType)
  async createItem(@Args('input') input: ItemInput): Promise<ItemInput> {
    return this.itemsService.create(input);
  }

  @Mutation(() => ItemType)
  async updateItem(
    @Args('id') id: string,
    @Args('input') input: ItemInput,
  ): Promise<ItemInput> {
    return this.itemsService.update(id, input);
  }

  @Mutation(() => ItemType)
  async deleteItem(@Args('id') id: string): Promise<ItemInput> {
    return this.itemsService.delete(id);
  }

  @Query(() => String)
  async hello() {
    return 'Hello it is working';
  }
}
