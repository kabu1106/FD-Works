import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DepartmentUpdateWithoutTeamsInputSchema } from './DepartmentUpdateWithoutTeamsInputSchema';
import { DepartmentUncheckedUpdateWithoutTeamsInputSchema } from './DepartmentUncheckedUpdateWithoutTeamsInputSchema';
import { DepartmentCreateWithoutTeamsInputSchema } from './DepartmentCreateWithoutTeamsInputSchema';
import { DepartmentUncheckedCreateWithoutTeamsInputSchema } from './DepartmentUncheckedCreateWithoutTeamsInputSchema';
import { DepartmentWhereInputSchema } from './DepartmentWhereInputSchema';

export const DepartmentUpsertWithoutTeamsInputSchema: z.ZodType<Prisma.DepartmentUpsertWithoutTeamsInput> = z.strictObject({
  update: z.union([ z.lazy(() => DepartmentUpdateWithoutTeamsInputSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutTeamsInputSchema) ]),
  create: z.union([ z.lazy(() => DepartmentCreateWithoutTeamsInputSchema), z.lazy(() => DepartmentUncheckedCreateWithoutTeamsInputSchema) ]),
  where: z.lazy(() => DepartmentWhereInputSchema).optional(),
});

export default DepartmentUpsertWithoutTeamsInputSchema;
