import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DutyCountOutputTypeSelectSchema } from './DutyCountOutputTypeSelectSchema';

export const DutyCountOutputTypeArgsSchema: z.ZodType<Prisma.DutyCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => DutyCountOutputTypeSelectSchema).nullish(),
}).strict();

export default DutyCountOutputTypeSelectSchema;
