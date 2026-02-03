import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { TeamCreateNestedManyWithoutDepartmentsInputSchema } from './TeamCreateNestedManyWithoutDepartmentsInputSchema';
import { VehicleCreateNestedManyWithoutDepartmentInputSchema } from './VehicleCreateNestedManyWithoutDepartmentInputSchema';

export const DepartmentCreateWithoutAttendanceInputSchema: z.ZodType<Prisma.DepartmentCreateWithoutAttendanceInput> = z.strictObject({
  code: z.string(),
  name: z.string(),
  latitude: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional().nullable(),
  longitude: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional().nullable(),
  isActive: z.boolean().optional(),
  teams: z.lazy(() => TeamCreateNestedManyWithoutDepartmentsInputSchema).optional(),
  vehicle: z.lazy(() => VehicleCreateNestedManyWithoutDepartmentInputSchema).optional(),
});

export default DepartmentCreateWithoutAttendanceInputSchema;
