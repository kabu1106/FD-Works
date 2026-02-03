import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { TeamUncheckedCreateNestedManyWithoutDepartmentsInputSchema } from './TeamUncheckedCreateNestedManyWithoutDepartmentsInputSchema';
import { AttendanceUncheckedCreateNestedManyWithoutDepartmentInputSchema } from './AttendanceUncheckedCreateNestedManyWithoutDepartmentInputSchema';

export const DepartmentUncheckedCreateWithoutVehicleInputSchema: z.ZodType<Prisma.DepartmentUncheckedCreateWithoutVehicleInput> = z.strictObject({
  id: z.number().int().optional(),
  code: z.string(),
  name: z.string(),
  latitude: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional().nullable(),
  longitude: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional().nullable(),
  isActive: z.boolean().optional(),
  teams: z.lazy(() => TeamUncheckedCreateNestedManyWithoutDepartmentsInputSchema).optional(),
  attendance: z.lazy(() => AttendanceUncheckedCreateNestedManyWithoutDepartmentInputSchema).optional(),
});

export default DepartmentUncheckedCreateWithoutVehicleInputSchema;
