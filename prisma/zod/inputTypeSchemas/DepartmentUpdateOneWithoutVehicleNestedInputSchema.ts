import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DepartmentCreateWithoutVehicleInputSchema } from './DepartmentCreateWithoutVehicleInputSchema';
import { DepartmentUncheckedCreateWithoutVehicleInputSchema } from './DepartmentUncheckedCreateWithoutVehicleInputSchema';
import { DepartmentCreateOrConnectWithoutVehicleInputSchema } from './DepartmentCreateOrConnectWithoutVehicleInputSchema';
import { DepartmentUpsertWithoutVehicleInputSchema } from './DepartmentUpsertWithoutVehicleInputSchema';
import { DepartmentWhereInputSchema } from './DepartmentWhereInputSchema';
import { DepartmentWhereUniqueInputSchema } from './DepartmentWhereUniqueInputSchema';
import { DepartmentUpdateToOneWithWhereWithoutVehicleInputSchema } from './DepartmentUpdateToOneWithWhereWithoutVehicleInputSchema';
import { DepartmentUpdateWithoutVehicleInputSchema } from './DepartmentUpdateWithoutVehicleInputSchema';
import { DepartmentUncheckedUpdateWithoutVehicleInputSchema } from './DepartmentUncheckedUpdateWithoutVehicleInputSchema';

export const DepartmentUpdateOneWithoutVehicleNestedInputSchema: z.ZodType<Prisma.DepartmentUpdateOneWithoutVehicleNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => DepartmentCreateWithoutVehicleInputSchema), z.lazy(() => DepartmentUncheckedCreateWithoutVehicleInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DepartmentCreateOrConnectWithoutVehicleInputSchema).optional(),
  upsert: z.lazy(() => DepartmentUpsertWithoutVehicleInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => DepartmentWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => DepartmentWhereInputSchema) ]).optional(),
  connect: z.lazy(() => DepartmentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DepartmentUpdateToOneWithWhereWithoutVehicleInputSchema), z.lazy(() => DepartmentUpdateWithoutVehicleInputSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutVehicleInputSchema) ]).optional(),
});

export default DepartmentUpdateOneWithoutVehicleNestedInputSchema;
