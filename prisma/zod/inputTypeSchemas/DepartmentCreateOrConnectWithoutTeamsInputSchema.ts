import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DepartmentWhereUniqueInputSchema } from './DepartmentWhereUniqueInputSchema';
import { DepartmentCreateWithoutTeamsInputSchema } from './DepartmentCreateWithoutTeamsInputSchema';
import { DepartmentUncheckedCreateWithoutTeamsInputSchema } from './DepartmentUncheckedCreateWithoutTeamsInputSchema';

export const DepartmentCreateOrConnectWithoutTeamsInputSchema: z.ZodType<Prisma.DepartmentCreateOrConnectWithoutTeamsInput> = z.strictObject({
  where: z.lazy(() => DepartmentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DepartmentCreateWithoutTeamsInputSchema), z.lazy(() => DepartmentUncheckedCreateWithoutTeamsInputSchema) ]),
});

export default DepartmentCreateOrConnectWithoutTeamsInputSchema;
