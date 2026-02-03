import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCategoryWhereInputSchema } from './IncidentCategoryWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { IncidentTypeListRelationFilterSchema } from './IncidentTypeListRelationFilterSchema';
import { IncidentListRelationFilterSchema } from './IncidentListRelationFilterSchema';

export const IncidentCategoryWhereUniqueInputSchema: z.ZodType<Prisma.IncidentCategoryWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    code: z.string(),
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    code: z.string(),
  }),
])
.and(z.strictObject({
  id: z.number().int().optional(),
  code: z.string().optional(),
  AND: z.union([ z.lazy(() => IncidentCategoryWhereInputSchema), z.lazy(() => IncidentCategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => IncidentCategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IncidentCategoryWhereInputSchema), z.lazy(() => IncidentCategoryWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  color: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  sortOrder: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  types: z.lazy(() => IncidentTypeListRelationFilterSchema).optional(),
  Incident: z.lazy(() => IncidentListRelationFilterSchema).optional(),
}));

export default IncidentCategoryWhereUniqueInputSchema;
