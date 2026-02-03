import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SpecialLeaveGroupCountOutputTypeSelectSchema } from './SpecialLeaveGroupCountOutputTypeSelectSchema';

export const SpecialLeaveGroupCountOutputTypeArgsSchema: z.ZodType<Prisma.SpecialLeaveGroupCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => SpecialLeaveGroupCountOutputTypeSelectSchema).nullish(),
}).strict();

export default SpecialLeaveGroupCountOutputTypeSelectSchema;
