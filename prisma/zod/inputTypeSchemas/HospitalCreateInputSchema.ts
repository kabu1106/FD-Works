import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { IncidentCreateNestedManyWithoutDestinationInputSchema } from './IncidentCreateNestedManyWithoutDestinationInputSchema';

export const HospitalCreateInputSchema: z.ZodType<Prisma.HospitalCreateInput> = z.strictObject({
  code: z.string(),
  name: z.string(),
  latitude: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional().nullable(),
  longitude: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional().nullable(),
  destination: z.lazy(() => IncidentCreateNestedManyWithoutDestinationInputSchema).optional(),
});

export default HospitalCreateInputSchema;
