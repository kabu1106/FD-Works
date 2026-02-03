import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IncidentTypeCategoryIdCodeCompoundUniqueInputSchema: z.ZodType<Prisma.IncidentTypeCategoryIdCodeCompoundUniqueInput> = z.strictObject({
  categoryId: z.number(),
  code: z.string(),
});

export default IncidentTypeCategoryIdCodeCompoundUniqueInputSchema;
