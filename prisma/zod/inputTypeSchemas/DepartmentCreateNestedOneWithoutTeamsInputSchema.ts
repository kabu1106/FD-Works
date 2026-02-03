import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DepartmentCreateWithoutTeamsInputSchema } from './DepartmentCreateWithoutTeamsInputSchema';
import { DepartmentUncheckedCreateWithoutTeamsInputSchema } from './DepartmentUncheckedCreateWithoutTeamsInputSchema';
import { DepartmentCreateOrConnectWithoutTeamsInputSchema } from './DepartmentCreateOrConnectWithoutTeamsInputSchema';
import { DepartmentWhereUniqueInputSchema } from './DepartmentWhereUniqueInputSchema';

export const DepartmentCreateNestedOneWithoutTeamsInputSchema: z.ZodType<Prisma.DepartmentCreateNestedOneWithoutTeamsInput> = z.strictObject({
  create: z.union([ z.lazy(() => DepartmentCreateWithoutTeamsInputSchema), z.lazy(() => DepartmentUncheckedCreateWithoutTeamsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DepartmentCreateOrConnectWithoutTeamsInputSchema).optional(),
  connect: z.lazy(() => DepartmentWhereUniqueInputSchema).optional(),
});

export default DepartmentCreateNestedOneWithoutTeamsInputSchema;
