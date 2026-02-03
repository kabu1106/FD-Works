import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamScalarWhereInputSchema } from './TeamScalarWhereInputSchema';
import { TeamUpdateManyMutationInputSchema } from './TeamUpdateManyMutationInputSchema';
import { TeamUncheckedUpdateManyWithoutDepartmentsInputSchema } from './TeamUncheckedUpdateManyWithoutDepartmentsInputSchema';

export const TeamUpdateManyWithWhereWithoutDepartmentsInputSchema: z.ZodType<Prisma.TeamUpdateManyWithWhereWithoutDepartmentsInput> = z.strictObject({
  where: z.lazy(() => TeamScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TeamUpdateManyMutationInputSchema), z.lazy(() => TeamUncheckedUpdateManyWithoutDepartmentsInputSchema) ]),
});

export default TeamUpdateManyWithWhereWithoutDepartmentsInputSchema;
