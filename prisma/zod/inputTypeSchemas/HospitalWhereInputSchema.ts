import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DecimalNullableFilterSchema } from './DecimalNullableFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { IncidentListRelationFilterSchema } from './IncidentListRelationFilterSchema';

export const HospitalWhereInputSchema: z.ZodType<Prisma.HospitalWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => HospitalWhereInputSchema), z.lazy(() => HospitalWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => HospitalWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HospitalWhereInputSchema), z.lazy(() => HospitalWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  code: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  latitude: z.union([ z.lazy(() => DecimalNullableFilterSchema), z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional().nullable(),
  longitude: z.union([ z.lazy(() => DecimalNullableFilterSchema), z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional().nullable(),
  destination: z.lazy(() => IncidentListRelationFilterSchema).optional(),
});

export default HospitalWhereInputSchema;
