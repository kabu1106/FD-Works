import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { TeamUncheckedCreateNestedManyWithoutDepartmentsInputSchema } from './TeamUncheckedCreateNestedManyWithoutDepartmentsInputSchema';
import { VehicleUncheckedCreateNestedManyWithoutDepartmentInputSchema } from './VehicleUncheckedCreateNestedManyWithoutDepartmentInputSchema';

export const DepartmentUncheckedCreateWithoutAttendanceInputSchema: z.ZodType<Prisma.DepartmentUncheckedCreateWithoutAttendanceInput> = z.strictObject({
  id: z.number().int().optional(),
  code: z.string(),
  name: z.string(),
  latitude: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional().nullable(),
  longitude: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional().nullable(),
  isActive: z.boolean().optional(),
  teams: z.lazy(() => TeamUncheckedCreateNestedManyWithoutDepartmentsInputSchema).optional(),
  vehicle: z.lazy(() => VehicleUncheckedCreateNestedManyWithoutDepartmentInputSchema).optional(),
});

export default DepartmentUncheckedCreateWithoutAttendanceInputSchema;
