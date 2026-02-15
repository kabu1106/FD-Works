import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubstituteHolidaySelectSchema } from '../inputTypeSchemas/SubstituteHolidaySelectSchema';
import { SubstituteHolidayIncludeSchema } from '../inputTypeSchemas/SubstituteHolidayIncludeSchema';

export const SubstituteHolidayArgsSchema: z.ZodType<Prisma.SubstituteHolidayDefaultArgs> = z.object({
  select: z.lazy(() => SubstituteHolidaySelectSchema).optional(),
  include: z.lazy(() => SubstituteHolidayIncludeSchema).optional(),
}).strict();

export default SubstituteHolidayArgsSchema;
