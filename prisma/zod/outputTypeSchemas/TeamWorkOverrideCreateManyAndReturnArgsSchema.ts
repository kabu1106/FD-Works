import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamWorkOverrideCreateManyInputSchema } from '../inputTypeSchemas/TeamWorkOverrideCreateManyInputSchema'

export const TeamWorkOverrideCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TeamWorkOverrideCreateManyAndReturnArgs> = z.object({
  data: z.union([ TeamWorkOverrideCreateManyInputSchema, TeamWorkOverrideCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default TeamWorkOverrideCreateManyAndReturnArgsSchema;
