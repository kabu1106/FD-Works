import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWhereUniqueInputSchema } from './TeamWhereUniqueInputSchema';
import { TeamUpdateWithoutDepartmentsInputSchema } from './TeamUpdateWithoutDepartmentsInputSchema';
import { TeamUncheckedUpdateWithoutDepartmentsInputSchema } from './TeamUncheckedUpdateWithoutDepartmentsInputSchema';
import { TeamCreateWithoutDepartmentsInputSchema } from './TeamCreateWithoutDepartmentsInputSchema';
import { TeamUncheckedCreateWithoutDepartmentsInputSchema } from './TeamUncheckedCreateWithoutDepartmentsInputSchema';

export const TeamUpsertWithWhereUniqueWithoutDepartmentsInputSchema: z.ZodType<Prisma.TeamUpsertWithWhereUniqueWithoutDepartmentsInput> = z.strictObject({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TeamUpdateWithoutDepartmentsInputSchema), z.lazy(() => TeamUncheckedUpdateWithoutDepartmentsInputSchema) ]),
  create: z.union([ z.lazy(() => TeamCreateWithoutDepartmentsInputSchema), z.lazy(() => TeamUncheckedCreateWithoutDepartmentsInputSchema) ]),
});

export default TeamUpsertWithWhereUniqueWithoutDepartmentsInputSchema;
