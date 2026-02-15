import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyUpdateWithoutDutyDayTypesInputSchema } from './DutyUpdateWithoutDutyDayTypesInputSchema';
import { DutyUncheckedUpdateWithoutDutyDayTypesInputSchema } from './DutyUncheckedUpdateWithoutDutyDayTypesInputSchema';
import { DutyCreateWithoutDutyDayTypesInputSchema } from './DutyCreateWithoutDutyDayTypesInputSchema';
import { DutyUncheckedCreateWithoutDutyDayTypesInputSchema } from './DutyUncheckedCreateWithoutDutyDayTypesInputSchema';
import { DutyWhereInputSchema } from './DutyWhereInputSchema';

export const DutyUpsertWithoutDutyDayTypesInputSchema: z.ZodType<Prisma.DutyUpsertWithoutDutyDayTypesInput> = z.strictObject({
  update: z.union([ z.lazy(() => DutyUpdateWithoutDutyDayTypesInputSchema), z.lazy(() => DutyUncheckedUpdateWithoutDutyDayTypesInputSchema) ]),
  create: z.union([ z.lazy(() => DutyCreateWithoutDutyDayTypesInputSchema), z.lazy(() => DutyUncheckedCreateWithoutDutyDayTypesInputSchema) ]),
  where: z.lazy(() => DutyWhereInputSchema).optional(),
});

export default DutyUpsertWithoutDutyDayTypesInputSchema;
