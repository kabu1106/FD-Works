import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LocationTypeSchema } from './LocationTypeSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { LocationCreateNestedOneWithoutChildrenInputSchema } from './LocationCreateNestedOneWithoutChildrenInputSchema';
import { IncidentCreateNestedManyWithoutLocationInputSchema } from './IncidentCreateNestedManyWithoutLocationInputSchema';

export const LocationCreateWithoutChildrenInputSchema: z.ZodType<Prisma.LocationCreateWithoutChildrenInput> = z.strictObject({
  type: z.lazy(() => LocationTypeSchema),
  code: z.string().optional().nullable(),
  name: z.string(),
  latitude: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional().nullable(),
  longitude: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional().nullable(),
  parent: z.lazy(() => LocationCreateNestedOneWithoutChildrenInputSchema).optional(),
  incidents: z.lazy(() => IncidentCreateNestedManyWithoutLocationInputSchema).optional(),
});

export default LocationCreateWithoutChildrenInputSchema;
