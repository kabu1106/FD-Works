import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const TeamCountOutputTypeSelectSchema: z.ZodType<Prisma.TeamCountOutputTypeSelect> = z.object({
  staffs: z.boolean().optional(),
  teamWorkDay: z.boolean().optional(),
  duties: z.boolean().optional(),
}).strict();

export default TeamCountOutputTypeSelectSchema;
