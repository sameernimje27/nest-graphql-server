import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class PaginationArgs {
  @Field(() => Int)
  offset = 0;

  @Field(() => Int)
  limit = 10;
}
