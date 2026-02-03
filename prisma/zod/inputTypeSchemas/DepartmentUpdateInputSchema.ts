import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { NullableDecimalFieldUpdateOperationsInputSchema } from './NullableDecimalFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { TeamUpdateManyWithoutDepartmentsNestedInputSchema } from './TeamUpdateManyWithoutDepartmentsNestedInputSchema';
import { VehicleUpdateManyWithoutDepartmentNestedInputSchema } from './VehicleUpdateManyWithoutDepartmentNestedInputSchema';
import { AttendanceUpdateManyWithoutDepartmentNestedInputSchema } from './AttendanceUpdateManyWithoutDepartmentNestedInputSchema';

export const DepartmentUpdateInputSchema: z.ZodType<Prisma.DepartmentUpdateInput> = z.strictObject({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  latitude: z.union([ z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => NullableDecimalFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  longitude: z.union([ z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => NullableDecimalFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  teams: z.lazy(() => TeamUpdateManyWithoutDepartmentsNestedInputSchema).optional(),
  vehicle: z.lazy(() => VehicleUpdateManyWithoutDepartmentNestedInputSchema).optional(),
  attendance: z.lazy(() => AttendanceUpdateManyWithoutDepartmentNestedInputSchema).optional(),
});

export default DepartmentUpdateInputSchema;
