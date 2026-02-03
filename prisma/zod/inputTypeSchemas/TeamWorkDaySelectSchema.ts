import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamArgsSchema } from "../outputTypeSchemas/TeamArgsSchema"
import { TeamWorkOverrideFindManyArgsSchema } from "../outputTypeSchemas/TeamWorkOverrideFindManyArgsSchema"
import { TeamWorkDayCountOutputTypeArgsSchema } from "../outputTypeSchemas/TeamWorkDayCountOutputTypeArgsSchema"

export const TeamWorkDaySelectSchema: z.ZodType<Prisma.TeamWorkDaySelect> = z.object({
  id: z.boolean().optional(),
  date: z.boolean().optional(),
  type: z.boolean().optional(),
  teamId: z.boolean().optional(),
  team: z.union([z.boolean(),z.lazy(() => TeamArgsSchema)]).optional(),
  overrides: z.union([z.boolean(),z.lazy(() => TeamWorkOverrideFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TeamWorkDayCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default TeamWorkDaySelectSchema;
