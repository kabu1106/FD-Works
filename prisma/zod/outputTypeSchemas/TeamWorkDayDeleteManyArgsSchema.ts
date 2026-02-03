import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamWorkDayWhereInputSchema } from '../inputTypeSchemas/TeamWorkDayWhereInputSchema'

export const TeamWorkDayDeleteManyArgsSchema: z.ZodType<Prisma.TeamWorkDayDeleteManyArgs> = z.object({
  where: TeamWorkDayWhereInputSchema.optional(), 
}).strict();

export default TeamWorkDayDeleteManyArgsSchema;
