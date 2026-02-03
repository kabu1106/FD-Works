import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamWorkDayArgsSchema } from "../outputTypeSchemas/TeamWorkDayArgsSchema"

export const TeamWorkOverrideSelectSchema: z.ZodType<Prisma.TeamWorkOverrideSelect> = z.object({
  id: z.boolean().optional(),
  teamWorkDayId: z.boolean().optional(),
  overriddenType: z.boolean().optional(),
  reason: z.boolean().optional(),
  memo: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  teamWorkDay: z.union([z.boolean(),z.lazy(() => TeamWorkDayArgsSchema)]).optional(),
}).strict()

export default TeamWorkOverrideSelectSchema;
