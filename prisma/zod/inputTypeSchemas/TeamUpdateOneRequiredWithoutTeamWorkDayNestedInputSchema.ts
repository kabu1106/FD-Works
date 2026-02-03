import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamCreateWithoutTeamWorkDayInputSchema } from './TeamCreateWithoutTeamWorkDayInputSchema';
import { TeamUncheckedCreateWithoutTeamWorkDayInputSchema } from './TeamUncheckedCreateWithoutTeamWorkDayInputSchema';
import { TeamCreateOrConnectWithoutTeamWorkDayInputSchema } from './TeamCreateOrConnectWithoutTeamWorkDayInputSchema';
import { TeamUpsertWithoutTeamWorkDayInputSchema } from './TeamUpsertWithoutTeamWorkDayInputSchema';
import { TeamWhereUniqueInputSchema } from './TeamWhereUniqueInputSchema';
import { TeamUpdateToOneWithWhereWithoutTeamWorkDayInputSchema } from './TeamUpdateToOneWithWhereWithoutTeamWorkDayInputSchema';
import { TeamUpdateWithoutTeamWorkDayInputSchema } from './TeamUpdateWithoutTeamWorkDayInputSchema';
import { TeamUncheckedUpdateWithoutTeamWorkDayInputSchema } from './TeamUncheckedUpdateWithoutTeamWorkDayInputSchema';

export const TeamUpdateOneRequiredWithoutTeamWorkDayNestedInputSchema: z.ZodType<Prisma.TeamUpdateOneRequiredWithoutTeamWorkDayNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TeamCreateWithoutTeamWorkDayInputSchema), z.lazy(() => TeamUncheckedCreateWithoutTeamWorkDayInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutTeamWorkDayInputSchema).optional(),
  upsert: z.lazy(() => TeamUpsertWithoutTeamWorkDayInputSchema).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TeamUpdateToOneWithWhereWithoutTeamWorkDayInputSchema), z.lazy(() => TeamUpdateWithoutTeamWorkDayInputSchema), z.lazy(() => TeamUncheckedUpdateWithoutTeamWorkDayInputSchema) ]).optional(),
});

export default TeamUpdateOneRequiredWithoutTeamWorkDayNestedInputSchema;
