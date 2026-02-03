import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LocationParentIdNameCompoundUniqueInputSchema: z.ZodType<Prisma.LocationParentIdNameCompoundUniqueInput> = z.strictObject({
  parentId: z.number(),
  name: z.string(),
});

export default LocationParentIdNameCompoundUniqueInputSchema;
