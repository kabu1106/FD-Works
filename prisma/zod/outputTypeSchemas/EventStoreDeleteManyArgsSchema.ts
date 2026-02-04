import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EventStoreWhereInputSchema } from '../inputTypeSchemas/EventStoreWhereInputSchema'

export const EventStoreDeleteManyArgsSchema: z.ZodType<Prisma.EventStoreDeleteManyArgs> = z.object({
  where: EventStoreWhereInputSchema.optional(), 
}).strict();

export default EventStoreDeleteManyArgsSchema;
