import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { IncidentUncheckedCreateNestedManyWithoutDestinationInputSchema } from './IncidentUncheckedCreateNestedManyWithoutDestinationInputSchema';

export const HospitalUncheckedCreateInputSchema: z.ZodType<Prisma.HospitalUncheckedCreateInput> = z.strictObject({
  id: z.number().int().optional(),
  code: z.string(),
  name: z.string(),
  latitude: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional().nullable(),
  longitude: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional().nullable(),
  destination: z.lazy(() => IncidentUncheckedCreateNestedManyWithoutDestinationInputSchema).optional(),
});

export default HospitalUncheckedCreateInputSchema;
