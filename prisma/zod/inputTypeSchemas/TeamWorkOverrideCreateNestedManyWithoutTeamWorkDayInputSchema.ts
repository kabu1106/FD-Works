import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWorkOverrideCreateWithoutTeamWorkDayInputSchema } from './TeamWorkOverrideCreateWithoutTeamWorkDayInputSchema';
import { TeamWorkOverrideUncheckedCreateWithoutTeamWorkDayInputSchema } from './TeamWorkOverrideUncheckedCreateWithoutTeamWorkDayInputSchema';
import { TeamWorkOverrideCreateOrConnectWithoutTeamWorkDayInputSchema } from './TeamWorkOverrideCreateOrConnectWithoutTeamWorkDayInputSchema';
import { TeamWorkOverrideCreateManyTeamWorkDayInputEnvelopeSchema } from './TeamWorkOverrideCreateManyTeamWorkDayInputEnvelopeSchema';
import { TeamWorkOverrideWhereUniqueInputSchema } from './TeamWorkOverrideWhereUniqueInputSchema';

export const TeamWorkOverrideCreateNestedManyWithoutTeamWorkDayInputSchema: z.ZodType<Prisma.TeamWorkOverrideCreateNestedManyWithoutTeamWorkDayInput> = z.strictObject({
  create: z.union([ z.lazy(() => TeamWorkOverrideCreateWithoutTeamWorkDayInputSchema), z.lazy(() => TeamWorkOverrideCreateWithoutTeamWorkDayInputSchema).array(), z.lazy(() => TeamWorkOverrideUncheckedCreateWithoutTeamWorkDayInputSchema), z.lazy(() => TeamWorkOverrideUncheckedCreateWithoutTeamWorkDayInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamWorkOverrideCreateOrConnectWithoutTeamWorkDayInputSchema), z.lazy(() => TeamWorkOverrideCreateOrConnectWithoutTeamWorkDayInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamWorkOverrideCreateManyTeamWorkDayInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TeamWorkOverrideWhereUniqueInputSchema), z.lazy(() => TeamWorkOverrideWhereUniqueInputSchema).array() ]).optional(),
});

export default TeamWorkOverrideCreateNestedManyWithoutTeamWorkDayInputSchema;
