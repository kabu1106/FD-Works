import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';

export const IncidentTypeScalarWhereInputSchema: z.ZodType<Prisma.IncidentTypeScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => IncidentTypeScalarWhereInputSchema), z.lazy(() => IncidentTypeScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => IncidentTypeScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IncidentTypeScalarWhereInputSchema), z.lazy(() => IncidentTypeScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  categoryId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  code: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  sortOrder: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
});

export default IncidentTypeScalarWhereInputSchema;
