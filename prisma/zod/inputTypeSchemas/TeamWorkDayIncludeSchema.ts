import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamArgsSchema } from "../outputTypeSchemas/TeamArgsSchema"
import { TeamWorkOverrideFindManyArgsSchema } from "../outputTypeSchemas/TeamWorkOverrideFindManyArgsSchema"
import { TeamWorkDayCountOutputTypeArgsSchema } from "../outputTypeSchemas/TeamWorkDayCountOutputTypeArgsSchema"

export const TeamWorkDayIncludeSchema: z.ZodType<Prisma.TeamWorkDayInclude> = z.object({
  team: z.union([z.boolean(),z.lazy(() => TeamArgsSchema)]).optional(),
  overrides: z.union([z.boolean(),z.lazy(() => TeamWorkOverrideFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TeamWorkDayCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default TeamWorkDayIncludeSchema;
