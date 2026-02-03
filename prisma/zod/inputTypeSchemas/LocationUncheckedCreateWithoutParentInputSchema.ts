import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LocationTypeSchema } from './LocationTypeSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { LocationUncheckedCreateNestedManyWithoutParentInputSchema } from './LocationUncheckedCreateNestedManyWithoutParentInputSchema';
import { IncidentUncheckedCreateNestedManyWithoutLocationInputSchema } from './IncidentUncheckedCreateNestedManyWithoutLocationInputSchema';

export const LocationUncheckedCreateWithoutParentInputSchema: z.ZodType<Prisma.LocationUncheckedCreateWithoutParentInput> = z.strictObject({
  id: z.number().int().optional(),
  type: z.lazy(() => LocationTypeSchema),
  code: z.string().optional().nullable(),
  name: z.string(),
  latitude: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional().nullable(),
  longitude: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional().nullable(),
  children: z.lazy(() => LocationUncheckedCreateNestedManyWithoutParentInputSchema).optional(),
  incidents: z.lazy(() => IncidentUncheckedCreateNestedManyWithoutLocationInputSchema).optional(),
});

export default LocationUncheckedCreateWithoutParentInputSchema;
