import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EventStoreUpdateManyMutationInputSchema } from '../inputTypeSchemas/EventStoreUpdateManyMutationInputSchema'
import { EventStoreUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/EventStoreUncheckedUpdateManyInputSchema'
import { EventStoreWhereInputSchema } from '../inputTypeSchemas/EventStoreWhereInputSchema'

export const EventStoreUpdateManyArgsSchema: z.ZodType<Prisma.EventStoreUpdateManyArgs> = z.object({
  data: z.union([ EventStoreUpdateManyMutationInputSchema, EventStoreUncheckedUpdateManyInputSchema ]),
  where: EventStoreWhereInputSchema.optional(), 
}).strict();

export default EventStoreUpdateManyArgsSchema;
