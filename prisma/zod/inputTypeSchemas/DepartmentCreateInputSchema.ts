import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { TeamCreateNestedManyWithoutDepartmentsInputSchema } from './TeamCreateNestedManyWithoutDepartmentsInputSchema';
import { VehicleCreateNestedManyWithoutDepartmentInputSchema } from './VehicleCreateNestedManyWithoutDepartmentInputSchema';
import { AttendanceCreateNestedManyWithoutDepartmentInputSchema } from './AttendanceCreateNestedManyWithoutDepartmentInputSchema';

export const DepartmentCreateInputSchema: z.ZodType<Prisma.DepartmentCreateInput> = z.strictObject({
  code: z.string(),
  name: z.string(),
  latitude: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional().nullable(),
  longitude: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional().nullable(),
  isActive: z.boolean().optional(),
  teams: z.lazy(() => TeamCreateNestedManyWithoutDepartmentsInputSchema).optional(),
  vehicle: z.lazy(() => VehicleCreateNestedManyWithoutDepartmentInputSchema).optional(),
  attendance: z.lazy(() => AttendanceCreateNestedManyWithoutDepartmentInputSchema).optional(),
});

export default DepartmentCreateInputSchema;
