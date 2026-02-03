import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamWorkDayUpdateManyMutationInputSchema } from '../inputTypeSchemas/TeamWorkDayUpdateManyMutationInputSchema'
import { TeamWorkDayUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TeamWorkDayUncheckedUpdateManyInputSchema'
import { TeamWorkDayWhereInputSchema } from '../inputTypeSchemas/TeamWorkDayWhereInputSchema'

export const TeamWorkDayUpdateManyArgsSchema: z.ZodType<Prisma.TeamWorkDayUpdateManyArgs> = z.object({
  data: z.union([ TeamWorkDayUpdateManyMutationInputSchema, TeamWorkDayUncheckedUpdateManyInputSchema ]),
  where: TeamWorkDayWhereInputSchema.optional(), 
}).strict();

export default TeamWorkDayUpdateManyArgsSchema;
