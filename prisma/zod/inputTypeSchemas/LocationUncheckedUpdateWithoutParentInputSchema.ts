import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { LocationTypeSchema } from './LocationTypeSchema';
import { EnumLocationTypeFieldUpdateOperationsInputSchema } from './EnumLocationTypeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { NullableDecimalFieldUpdateOperationsInputSchema } from './NullableDecimalFieldUpdateOperationsInputSchema';
import { LocationUncheckedUpdateManyWithoutParentNestedInputSchema } from './LocationUncheckedUpdateManyWithoutParentNestedInputSchema';
import { IncidentUncheckedUpdateManyWithoutLocationNestedInputSchema } from './IncidentUncheckedUpdateManyWithoutLocationNestedInputSchema';

export const LocationUncheckedUpdateWithoutParentInputSchema: z.ZodType<Prisma.LocationUncheckedUpdateWithoutParentInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => LocationTypeSchema), z.lazy(() => EnumLocationTypeFieldUpdateOperationsInputSchema) ]).optional(),
  code: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  latitude: z.union([ z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => NullableDecimalFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  longitude: z.union([ z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => NullableDecimalFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  children: z.lazy(() => LocationUncheckedUpdateManyWithoutParentNestedInputSchema).optional(),
  incidents: z.lazy(() => IncidentUncheckedUpdateManyWithoutLocationNestedInputSchema).optional(),
});

export default LocationUncheckedUpdateWithoutParentInputSchema;
