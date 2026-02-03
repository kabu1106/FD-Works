import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamCreateWithoutDepartmentsInputSchema } from './TeamCreateWithoutDepartmentsInputSchema';
import { TeamUncheckedCreateWithoutDepartmentsInputSchema } from './TeamUncheckedCreateWithoutDepartmentsInputSchema';
import { TeamCreateOrConnectWithoutDepartmentsInputSchema } from './TeamCreateOrConnectWithoutDepartmentsInputSchema';
import { TeamCreateManyDepartmentsInputEnvelopeSchema } from './TeamCreateManyDepartmentsInputEnvelopeSchema';
import { TeamWhereUniqueInputSchema } from './TeamWhereUniqueInputSchema';

export const TeamCreateNestedManyWithoutDepartmentsInputSchema: z.ZodType<Prisma.TeamCreateNestedManyWithoutDepartmentsInput> = z.strictObject({
  create: z.union([ z.lazy(() => TeamCreateWithoutDepartmentsInputSchema), z.lazy(() => TeamCreateWithoutDepartmentsInputSchema).array(), z.lazy(() => TeamUncheckedCreateWithoutDepartmentsInputSchema), z.lazy(() => TeamUncheckedCreateWithoutDepartmentsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamCreateOrConnectWithoutDepartmentsInputSchema), z.lazy(() => TeamCreateOrConnectWithoutDepartmentsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamCreateManyDepartmentsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TeamWhereUniqueInputSchema), z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
});

export default TeamCreateNestedManyWithoutDepartmentsInputSchema;
