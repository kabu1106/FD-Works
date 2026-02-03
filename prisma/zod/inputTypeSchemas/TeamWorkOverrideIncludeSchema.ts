import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamWorkDayArgsSchema } from "../outputTypeSchemas/TeamWorkDayArgsSchema"

export const TeamWorkOverrideIncludeSchema: z.ZodType<Prisma.TeamWorkOverrideInclude> = z.object({
  teamWorkDay: z.union([z.boolean(),z.lazy(() => TeamWorkDayArgsSchema)]).optional(),
}).strict();

export default TeamWorkOverrideIncludeSchema;
