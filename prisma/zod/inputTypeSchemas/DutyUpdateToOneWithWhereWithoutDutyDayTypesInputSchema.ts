import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyWhereInputSchema } from './DutyWhereInputSchema';
import { DutyUpdateWithoutDutyDayTypesInputSchema } from './DutyUpdateWithoutDutyDayTypesInputSchema';
import { DutyUncheckedUpdateWithoutDutyDayTypesInputSchema } from './DutyUncheckedUpdateWithoutDutyDayTypesInputSchema';

export const DutyUpdateToOneWithWhereWithoutDutyDayTypesInputSchema: z.ZodType<Prisma.DutyUpdateToOneWithWhereWithoutDutyDayTypesInput> = z.strictObject({
  where: z.lazy(() => DutyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DutyUpdateWithoutDutyDayTypesInputSchema), z.lazy(() => DutyUncheckedUpdateWithoutDutyDayTypesInputSchema) ]),
});

export default DutyUpdateToOneWithWhereWithoutDutyDayTypesInputSchema;
