import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWorkDayCreateWithoutTeamInputSchema } from './TeamWorkDayCreateWithoutTeamInputSchema';
import { TeamWorkDayUncheckedCreateWithoutTeamInputSchema } from './TeamWorkDayUncheckedCreateWithoutTeamInputSchema';
import { TeamWorkDayCreateOrConnectWithoutTeamInputSchema } from './TeamWorkDayCreateOrConnectWithoutTeamInputSchema';
import { TeamWorkDayCreateManyTeamInputEnvelopeSchema } from './TeamWorkDayCreateManyTeamInputEnvelopeSchema';
import { TeamWorkDayWhereUniqueInputSchema } from './TeamWorkDayWhereUniqueInputSchema';

export const TeamWorkDayCreateNestedManyWithoutTeamInputSchema: z.ZodType<Prisma.TeamWorkDayCreateNestedManyWithoutTeamInput> = z.strictObject({
  create: z.union([ z.lazy(() => TeamWorkDayCreateWithoutTeamInputSchema), z.lazy(() => TeamWorkDayCreateWithoutTeamInputSchema).array(), z.lazy(() => TeamWorkDayUncheckedCreateWithoutTeamInputSchema), z.lazy(() => TeamWorkDayUncheckedCreateWithoutTeamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamWorkDayCreateOrConnectWithoutTeamInputSchema), z.lazy(() => TeamWorkDayCreateOrConnectWithoutTeamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamWorkDayCreateManyTeamInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TeamWorkDayWhereUniqueInputSchema), z.lazy(() => TeamWorkDayWhereUniqueInputSchema).array() ]).optional(),
});

export default TeamWorkDayCreateNestedManyWithoutTeamInputSchema;
