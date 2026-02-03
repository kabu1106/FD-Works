import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { IncidentCategoryRelationFilterSchema } from './IncidentCategoryRelationFilterSchema';
import { IncidentCategoryWhereInputSchema } from './IncidentCategoryWhereInputSchema';
import { IncidentListRelationFilterSchema } from './IncidentListRelationFilterSchema';

export const IncidentTypeWhereInputSchema: z.ZodType<Prisma.IncidentTypeWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => IncidentTypeWhereInputSchema), z.lazy(() => IncidentTypeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => IncidentTypeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IncidentTypeWhereInputSchema), z.lazy(() => IncidentTypeWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  categoryId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  code: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  sortOrder: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  category: z.union([ z.lazy(() => IncidentCategoryRelationFilterSchema), z.lazy(() => IncidentCategoryWhereInputSchema) ]).optional(),
  Incident: z.lazy(() => IncidentListRelationFilterSchema).optional(),
});

export default IncidentTypeWhereInputSchema;
