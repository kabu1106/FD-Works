import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const EventStoreAggregateIdAggregateVersionCompoundUniqueInputSchema: z.ZodType<Prisma.EventStoreAggregateIdAggregateVersionCompoundUniqueInput> = z.strictObject({
  aggregateId: z.string(),
  aggregateVersion: z.number(),
});

export default EventStoreAggregateIdAggregateVersionCompoundUniqueInputSchema;
