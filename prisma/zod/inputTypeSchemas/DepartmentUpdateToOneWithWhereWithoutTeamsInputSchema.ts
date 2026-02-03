import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DepartmentWhereInputSchema } from './DepartmentWhereInputSchema';
import { DepartmentUpdateWithoutTeamsInputSchema } from './DepartmentUpdateWithoutTeamsInputSchema';
import { DepartmentUncheckedUpdateWithoutTeamsInputSchema } from './DepartmentUncheckedUpdateWithoutTeamsInputSchema';

export const DepartmentUpdateToOneWithWhereWithoutTeamsInputSchema: z.ZodType<Prisma.DepartmentUpdateToOneWithWhereWithoutTeamsInput> = z.strictObject({
  where: z.lazy(() => DepartmentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DepartmentUpdateWithoutTeamsInputSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutTeamsInputSchema) ]),
});

export default DepartmentUpdateToOneWithWhereWithoutTeamsInputSchema;
