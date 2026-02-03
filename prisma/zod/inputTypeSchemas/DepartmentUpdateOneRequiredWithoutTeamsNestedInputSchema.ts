import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DepartmentCreateWithoutTeamsInputSchema } from './DepartmentCreateWithoutTeamsInputSchema';
import { DepartmentUncheckedCreateWithoutTeamsInputSchema } from './DepartmentUncheckedCreateWithoutTeamsInputSchema';
import { DepartmentCreateOrConnectWithoutTeamsInputSchema } from './DepartmentCreateOrConnectWithoutTeamsInputSchema';
import { DepartmentUpsertWithoutTeamsInputSchema } from './DepartmentUpsertWithoutTeamsInputSchema';
import { DepartmentWhereUniqueInputSchema } from './DepartmentWhereUniqueInputSchema';
import { DepartmentUpdateToOneWithWhereWithoutTeamsInputSchema } from './DepartmentUpdateToOneWithWhereWithoutTeamsInputSchema';
import { DepartmentUpdateWithoutTeamsInputSchema } from './DepartmentUpdateWithoutTeamsInputSchema';
import { DepartmentUncheckedUpdateWithoutTeamsInputSchema } from './DepartmentUncheckedUpdateWithoutTeamsInputSchema';

export const DepartmentUpdateOneRequiredWithoutTeamsNestedInputSchema: z.ZodType<Prisma.DepartmentUpdateOneRequiredWithoutTeamsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => DepartmentCreateWithoutTeamsInputSchema), z.lazy(() => DepartmentUncheckedCreateWithoutTeamsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DepartmentCreateOrConnectWithoutTeamsInputSchema).optional(),
  upsert: z.lazy(() => DepartmentUpsertWithoutTeamsInputSchema).optional(),
  connect: z.lazy(() => DepartmentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DepartmentUpdateToOneWithWhereWithoutTeamsInputSchema), z.lazy(() => DepartmentUpdateWithoutTeamsInputSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutTeamsInputSchema) ]).optional(),
});

export default DepartmentUpdateOneRequiredWithoutTeamsNestedInputSchema;
