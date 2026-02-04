import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EventStoreCreateManyInputSchema } from '../inputTypeSchemas/EventStoreCreateManyInputSchema'

export const EventStoreCreateManyAndReturnArgsSchema: z.ZodType<Prisma.EventStoreCreateManyAndReturnArgs> = z.object({
  data: z.union([ EventStoreCreateManyInputSchema, EventStoreCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default EventStoreCreateManyAndReturnArgsSchema;
