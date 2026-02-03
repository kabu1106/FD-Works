import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffUpdateWithoutOvertimeSummaryInputSchema } from './StaffUpdateWithoutOvertimeSummaryInputSchema';
import { StaffUncheckedUpdateWithoutOvertimeSummaryInputSchema } from './StaffUncheckedUpdateWithoutOvertimeSummaryInputSchema';
import { StaffCreateWithoutOvertimeSummaryInputSchema } from './StaffCreateWithoutOvertimeSummaryInputSchema';
import { StaffUncheckedCreateWithoutOvertimeSummaryInputSchema } from './StaffUncheckedCreateWithoutOvertimeSummaryInputSchema';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';

export const StaffUpsertWithoutOvertimeSummaryInputSchema: z.ZodType<Prisma.StaffUpsertWithoutOvertimeSummaryInput> = z.strictObject({
  update: z.union([ z.lazy(() => StaffUpdateWithoutOvertimeSummaryInputSchema), z.lazy(() => StaffUncheckedUpdateWithoutOvertimeSummaryInputSchema) ]),
  create: z.union([ z.lazy(() => StaffCreateWithoutOvertimeSummaryInputSchema), z.lazy(() => StaffUncheckedCreateWithoutOvertimeSummaryInputSchema) ]),
  where: z.lazy(() => StaffWhereInputSchema).optional(),
});

export default StaffUpsertWithoutOvertimeSummaryInputSchema;
