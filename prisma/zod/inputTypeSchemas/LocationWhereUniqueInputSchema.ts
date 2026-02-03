import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LocationParentIdNameCompoundUniqueInputSchema } from './LocationParentIdNameCompoundUniqueInputSchema';
import { LocationWhereInputSchema } from './LocationWhereInputSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { EnumLocationTypeFilterSchema } from './EnumLocationTypeFilterSchema';
import { LocationTypeSchema } from './LocationTypeSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DecimalNullableFilterSchema } from './DecimalNullableFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { LocationNullableRelationFilterSchema } from './LocationNullableRelationFilterSchema';
import { LocationListRelationFilterSchema } from './LocationListRelationFilterSchema';
import { IncidentListRelationFilterSchema } from './IncidentListRelationFilterSchema';

export const LocationWhereUniqueInputSchema: z.ZodType<Prisma.LocationWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    parentId_name: z.lazy(() => LocationParentIdNameCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    parentId_name: z.lazy(() => LocationParentIdNameCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.number().int().optional(),
  parentId_name: z.lazy(() => LocationParentIdNameCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => LocationWhereInputSchema), z.lazy(() => LocationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LocationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LocationWhereInputSchema), z.lazy(() => LocationWhereInputSchema).array() ]).optional(),
  parentId: z.union([ z.lazy(() => IntNullableFilterSchema), z.number().int() ]).optional().nullable(),
  type: z.union([ z.lazy(() => EnumLocationTypeFilterSchema), z.lazy(() => LocationTypeSchema) ]).optional(),
  code: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  latitude: z.union([ z.lazy(() => DecimalNullableFilterSchema), z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional().nullable(),
  longitude: z.union([ z.lazy(() => DecimalNullableFilterSchema), z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional().nullable(),
  parent: z.union([ z.lazy(() => LocationNullableRelationFilterSchema), z.lazy(() => LocationWhereInputSchema) ]).optional().nullable(),
  children: z.lazy(() => LocationListRelationFilterSchema).optional(),
  incidents: z.lazy(() => IncidentListRelationFilterSchema).optional(),
}));

export default LocationWhereUniqueInputSchema;
