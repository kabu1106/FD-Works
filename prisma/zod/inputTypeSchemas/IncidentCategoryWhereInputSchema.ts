import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { IncidentTypeListRelationFilterSchema } from './IncidentTypeListRelationFilterSchema';
import { IncidentListRelationFilterSchema } from './IncidentListRelationFilterSchema';

export const IncidentCategoryWhereInputSchema: z.ZodType<Prisma.IncidentCategoryWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => IncidentCategoryWhereInputSchema), z.lazy(() => IncidentCategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => IncidentCategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IncidentCategoryWhereInputSchema), z.lazy(() => IncidentCategoryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  code: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  color: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  sortOrder: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  types: z.lazy(() => IncidentTypeListRelationFilterSchema).optional(),
  Incident: z.lazy(() => IncidentListRelationFilterSchema).optional(),
});

export default IncidentCategoryWhereInputSchema;
