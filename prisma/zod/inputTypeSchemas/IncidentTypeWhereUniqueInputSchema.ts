import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentTypeCategoryIdCodeCompoundUniqueInputSchema } from './IncidentTypeCategoryIdCodeCompoundUniqueInputSchema';
import { IncidentTypeWhereInputSchema } from './IncidentTypeWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { IncidentCategoryRelationFilterSchema } from './IncidentCategoryRelationFilterSchema';
import { IncidentCategoryWhereInputSchema } from './IncidentCategoryWhereInputSchema';
import { IncidentListRelationFilterSchema } from './IncidentListRelationFilterSchema';

export const IncidentTypeWhereUniqueInputSchema: z.ZodType<Prisma.IncidentTypeWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    categoryId_code: z.lazy(() => IncidentTypeCategoryIdCodeCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    categoryId_code: z.lazy(() => IncidentTypeCategoryIdCodeCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.number().int().optional(),
  categoryId_code: z.lazy(() => IncidentTypeCategoryIdCodeCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => IncidentTypeWhereInputSchema), z.lazy(() => IncidentTypeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => IncidentTypeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IncidentTypeWhereInputSchema), z.lazy(() => IncidentTypeWhereInputSchema).array() ]).optional(),
  categoryId: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  code: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  sortOrder: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  category: z.union([ z.lazy(() => IncidentCategoryRelationFilterSchema), z.lazy(() => IncidentCategoryWhereInputSchema) ]).optional(),
  Incident: z.lazy(() => IncidentListRelationFilterSchema).optional(),
}));

export default IncidentTypeWhereUniqueInputSchema;
