import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamWorkOverrideSelectSchema } from '../inputTypeSchemas/TeamWorkOverrideSelectSchema';
import { TeamWorkOverrideIncludeSchema } from '../inputTypeSchemas/TeamWorkOverrideIncludeSchema';

export const TeamWorkOverrideArgsSchema: z.ZodType<Prisma.TeamWorkOverrideDefaultArgs> = z.object({
  select: z.lazy(() => TeamWorkOverrideSelectSchema).optional(),
  include: z.lazy(() => TeamWorkOverrideIncludeSchema).optional(),
}).strict();

export default TeamWorkOverrideArgsSchema;
