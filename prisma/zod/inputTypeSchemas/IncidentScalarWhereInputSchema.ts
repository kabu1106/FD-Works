import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { EnumIncidentStatusFilterSchema } from './EnumIncidentStatusFilterSchema';
import { IncidentStatusSchema } from './IncidentStatusSchema';
import { BoolFilterSchema } from './BoolFilterSchema';

export const IncidentScalarWhereInputSchema: z.ZodType<Prisma.IncidentScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => IncidentScalarWhereInputSchema), z.lazy(() => IncidentScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => IncidentScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IncidentScalarWhereInputSchema), z.lazy(() => IncidentScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  dutyId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  categoryId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  typeId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  locationId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  destinationId: z.union([ z.lazy(() => IntNullableFilterSchema), z.number() ]).optional().nullable(),
  destinationName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  occurredAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  status: z.union([ z.lazy(() => EnumIncidentStatusFilterSchema), z.lazy(() => IncidentStatusSchema) ]).optional(),
  isDeleted: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export default IncidentScalarWhereInputSchema;
