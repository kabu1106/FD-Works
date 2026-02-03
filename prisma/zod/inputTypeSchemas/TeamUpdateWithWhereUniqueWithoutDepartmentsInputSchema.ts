import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWhereUniqueInputSchema } from './TeamWhereUniqueInputSchema';
import { TeamUpdateWithoutDepartmentsInputSchema } from './TeamUpdateWithoutDepartmentsInputSchema';
import { TeamUncheckedUpdateWithoutDepartmentsInputSchema } from './TeamUncheckedUpdateWithoutDepartmentsInputSchema';

export const TeamUpdateWithWhereUniqueWithoutDepartmentsInputSchema: z.ZodType<Prisma.TeamUpdateWithWhereUniqueWithoutDepartmentsInput> = z.strictObject({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TeamUpdateWithoutDepartmentsInputSchema), z.lazy(() => TeamUncheckedUpdateWithoutDepartmentsInputSchema) ]),
});

export default TeamUpdateWithWhereUniqueWithoutDepartmentsInputSchema;
