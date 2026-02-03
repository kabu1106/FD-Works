import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { NullableDecimalFieldUpdateOperationsInputSchema } from './NullableDecimalFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { VehicleUncheckedUpdateManyWithoutDepartmentNestedInputSchema } from './VehicleUncheckedUpdateManyWithoutDepartmentNestedInputSchema';
import { AttendanceUncheckedUpdateManyWithoutDepartmentNestedInputSchema } from './AttendanceUncheckedUpdateManyWithoutDepartmentNestedInputSchema';

export const DepartmentUncheckedUpdateWithoutTeamsInputSchema: z.ZodType<Prisma.DepartmentUncheckedUpdateWithoutTeamsInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  latitude: z.union([ z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => NullableDecimalFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  longitude: z.union([ z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => NullableDecimalFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  vehicle: z.lazy(() => VehicleUncheckedUpdateManyWithoutDepartmentNestedInputSchema).optional(),
  attendance: z.lazy(() => AttendanceUncheckedUpdateManyWithoutDepartmentNestedInputSchema).optional(),
});

export default DepartmentUncheckedUpdateWithoutTeamsInputSchema;
