import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HospitalWhereInputSchema } from './HospitalWhereInputSchema';
import { DecimalNullableFilterSchema } from './DecimalNullableFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { IncidentListRelationFilterSchema } from './IncidentListRelationFilterSchema';

export const HospitalWhereUniqueInputSchema: z.ZodType<Prisma.HospitalWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    code: z.string(),
    name: z.string(),
  }),
  z.object({
    id: z.number().int(),
    code: z.string(),
  }),
  z.object({
    id: z.number().int(),
    name: z.string(),
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    code: z.string(),
    name: z.string(),
  }),
  z.object({
    code: z.string(),
  }),
  z.object({
    name: z.string(),
  }),
])
.and(z.strictObject({
  id: z.number().int().optional(),
  code: z.string().optional(),
  name: z.string().optional(),
  AND: z.union([ z.lazy(() => HospitalWhereInputSchema), z.lazy(() => HospitalWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => HospitalWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HospitalWhereInputSchema), z.lazy(() => HospitalWhereInputSchema).array() ]).optional(),
  latitude: z.union([ z.lazy(() => DecimalNullableFilterSchema), z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional().nullable(),
  longitude: z.union([ z.lazy(() => DecimalNullableFilterSchema), z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional().nullable(),
  destination: z.lazy(() => IncidentListRelationFilterSchema).optional(),
}));

export default HospitalWhereUniqueInputSchema;
