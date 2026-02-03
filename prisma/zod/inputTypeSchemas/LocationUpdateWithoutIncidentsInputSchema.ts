import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LocationTypeSchema } from './LocationTypeSchema';
import { EnumLocationTypeFieldUpdateOperationsInputSchema } from './EnumLocationTypeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { NullableDecimalFieldUpdateOperationsInputSchema } from './NullableDecimalFieldUpdateOperationsInputSchema';
import { LocationUpdateOneWithoutChildrenNestedInputSchema } from './LocationUpdateOneWithoutChildrenNestedInputSchema';
import { LocationUpdateManyWithoutParentNestedInputSchema } from './LocationUpdateManyWithoutParentNestedInputSchema';

export const LocationUpdateWithoutIncidentsInputSchema: z.ZodType<Prisma.LocationUpdateWithoutIncidentsInput> = z.strictObject({
  type: z.union([ z.lazy(() => LocationTypeSchema), z.lazy(() => EnumLocationTypeFieldUpdateOperationsInputSchema) ]).optional(),
  code: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  latitude: z.union([ z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => NullableDecimalFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  longitude: z.union([ z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => NullableDecimalFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  parent: z.lazy(() => LocationUpdateOneWithoutChildrenNestedInputSchema).optional(),
  children: z.lazy(() => LocationUpdateManyWithoutParentNestedInputSchema).optional(),
});

export default LocationUpdateWithoutIncidentsInputSchema;
