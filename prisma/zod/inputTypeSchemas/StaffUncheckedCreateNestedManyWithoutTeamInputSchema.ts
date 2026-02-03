import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffCreateWithoutTeamInputSchema } from './StaffCreateWithoutTeamInputSchema';
import { StaffUncheckedCreateWithoutTeamInputSchema } from './StaffUncheckedCreateWithoutTeamInputSchema';
import { StaffCreateOrConnectWithoutTeamInputSchema } from './StaffCreateOrConnectWithoutTeamInputSchema';
import { StaffCreateManyTeamInputEnvelopeSchema } from './StaffCreateManyTeamInputEnvelopeSchema';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';

export const StaffUncheckedCreateNestedManyWithoutTeamInputSchema: z.ZodType<Prisma.StaffUncheckedCreateNestedManyWithoutTeamInput> = z.strictObject({
  create: z.union([ z.lazy(() => StaffCreateWithoutTeamInputSchema), z.lazy(() => StaffCreateWithoutTeamInputSchema).array(), z.lazy(() => StaffUncheckedCreateWithoutTeamInputSchema), z.lazy(() => StaffUncheckedCreateWithoutTeamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StaffCreateOrConnectWithoutTeamInputSchema), z.lazy(() => StaffCreateOrConnectWithoutTeamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StaffCreateManyTeamInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => StaffWhereUniqueInputSchema), z.lazy(() => StaffWhereUniqueInputSchema).array() ]).optional(),
});

export default StaffUncheckedCreateNestedManyWithoutTeamInputSchema;
