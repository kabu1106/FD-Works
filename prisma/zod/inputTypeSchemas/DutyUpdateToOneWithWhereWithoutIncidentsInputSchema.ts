import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyWhereInputSchema } from './DutyWhereInputSchema';
import { DutyUpdateWithoutIncidentsInputSchema } from './DutyUpdateWithoutIncidentsInputSchema';
import { DutyUncheckedUpdateWithoutIncidentsInputSchema } from './DutyUncheckedUpdateWithoutIncidentsInputSchema';

export const DutyUpdateToOneWithWhereWithoutIncidentsInputSchema: z.ZodType<Prisma.DutyUpdateToOneWithWhereWithoutIncidentsInput> = z.strictObject({
  where: z.lazy(() => DutyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DutyUpdateWithoutIncidentsInputSchema), z.lazy(() => DutyUncheckedUpdateWithoutIncidentsInputSchema) ]),
});

export default DutyUpdateToOneWithWhereWithoutIncidentsInputSchema;
