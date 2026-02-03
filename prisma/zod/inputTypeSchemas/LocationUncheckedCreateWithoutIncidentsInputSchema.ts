import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LocationTypeSchema } from './LocationTypeSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { LocationUncheckedCreateNestedManyWithoutParentInputSchema } from './LocationUncheckedCreateNestedManyWithoutParentInputSchema';

export const LocationUncheckedCreateWithoutIncidentsInputSchema: z.ZodType<Prisma.LocationUncheckedCreateWithoutIncidentsInput> = z.strictObject({
  id: z.number().int().optional(),
  parentId: z.number().int().optional().nullable(),
  type: z.lazy(() => LocationTypeSchema),
  code: z.string().optional().nullable(),
  name: z.string(),
  latitude: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional().nullable(),
  longitude: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional().nullable(),
  children: z.lazy(() => LocationUncheckedCreateNestedManyWithoutParentInputSchema).optional(),
});

export default LocationUncheckedCreateWithoutIncidentsInputSchema;
