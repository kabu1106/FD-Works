import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamWorkOverrideUpdateManyMutationInputSchema } from '../inputTypeSchemas/TeamWorkOverrideUpdateManyMutationInputSchema'
import { TeamWorkOverrideUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TeamWorkOverrideUncheckedUpdateManyInputSchema'
import { TeamWorkOverrideWhereInputSchema } from '../inputTypeSchemas/TeamWorkOverrideWhereInputSchema'

export const TeamWorkOverrideUpdateManyArgsSchema: z.ZodType<Prisma.TeamWorkOverrideUpdateManyArgs> = z.object({
  data: z.union([ TeamWorkOverrideUpdateManyMutationInputSchema, TeamWorkOverrideUncheckedUpdateManyInputSchema ]),
  where: TeamWorkOverrideWhereInputSchema.optional(), 
}).strict();

export default TeamWorkOverrideUpdateManyArgsSchema;
