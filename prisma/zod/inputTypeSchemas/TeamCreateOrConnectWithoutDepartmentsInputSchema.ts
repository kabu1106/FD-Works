import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWhereUniqueInputSchema } from './TeamWhereUniqueInputSchema';
import { TeamCreateWithoutDepartmentsInputSchema } from './TeamCreateWithoutDepartmentsInputSchema';
import { TeamUncheckedCreateWithoutDepartmentsInputSchema } from './TeamUncheckedCreateWithoutDepartmentsInputSchema';

export const TeamCreateOrConnectWithoutDepartmentsInputSchema: z.ZodType<Prisma.TeamCreateOrConnectWithoutDepartmentsInput> = z.strictObject({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamCreateWithoutDepartmentsInputSchema), z.lazy(() => TeamUncheckedCreateWithoutDepartmentsInputSchema) ]),
});

export default TeamCreateOrConnectWithoutDepartmentsInputSchema;
