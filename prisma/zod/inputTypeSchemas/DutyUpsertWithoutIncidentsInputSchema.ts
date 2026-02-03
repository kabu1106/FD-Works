import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyUpdateWithoutIncidentsInputSchema } from './DutyUpdateWithoutIncidentsInputSchema';
import { DutyUncheckedUpdateWithoutIncidentsInputSchema } from './DutyUncheckedUpdateWithoutIncidentsInputSchema';
import { DutyCreateWithoutIncidentsInputSchema } from './DutyCreateWithoutIncidentsInputSchema';
import { DutyUncheckedCreateWithoutIncidentsInputSchema } from './DutyUncheckedCreateWithoutIncidentsInputSchema';
import { DutyWhereInputSchema } from './DutyWhereInputSchema';

export const DutyUpsertWithoutIncidentsInputSchema: z.ZodType<Prisma.DutyUpsertWithoutIncidentsInput> = z.strictObject({
  update: z.union([ z.lazy(() => DutyUpdateWithoutIncidentsInputSchema), z.lazy(() => DutyUncheckedUpdateWithoutIncidentsInputSchema) ]),
  create: z.union([ z.lazy(() => DutyCreateWithoutIncidentsInputSchema), z.lazy(() => DutyUncheckedCreateWithoutIncidentsInputSchema) ]),
  where: z.lazy(() => DutyWhereInputSchema).optional(),
});

export default DutyUpsertWithoutIncidentsInputSchema;
