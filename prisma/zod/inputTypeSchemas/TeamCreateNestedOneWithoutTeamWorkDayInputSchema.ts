import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamCreateWithoutTeamWorkDayInputSchema } from './TeamCreateWithoutTeamWorkDayInputSchema';
import { TeamUncheckedCreateWithoutTeamWorkDayInputSchema } from './TeamUncheckedCreateWithoutTeamWorkDayInputSchema';
import { TeamCreateOrConnectWithoutTeamWorkDayInputSchema } from './TeamCreateOrConnectWithoutTeamWorkDayInputSchema';
import { TeamWhereUniqueInputSchema } from './TeamWhereUniqueInputSchema';

export const TeamCreateNestedOneWithoutTeamWorkDayInputSchema: z.ZodType<Prisma.TeamCreateNestedOneWithoutTeamWorkDayInput> = z.strictObject({
  create: z.union([ z.lazy(() => TeamCreateWithoutTeamWorkDayInputSchema), z.lazy(() => TeamUncheckedCreateWithoutTeamWorkDayInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutTeamWorkDayInputSchema).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputSchema).optional(),
});

export default TeamCreateNestedOneWithoutTeamWorkDayInputSchema;
