import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamWorkOverrideWhereInputSchema } from '../inputTypeSchemas/TeamWorkOverrideWhereInputSchema'

export const TeamWorkOverrideDeleteManyArgsSchema: z.ZodType<Prisma.TeamWorkOverrideDeleteManyArgs> = z.object({
  where: TeamWorkOverrideWhereInputSchema.optional(), 
}).strict();

export default TeamWorkOverrideDeleteManyArgsSchema;
