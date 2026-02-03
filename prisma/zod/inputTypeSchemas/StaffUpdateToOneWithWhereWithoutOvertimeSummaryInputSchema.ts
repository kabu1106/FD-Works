import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';
import { StaffUpdateWithoutOvertimeSummaryInputSchema } from './StaffUpdateWithoutOvertimeSummaryInputSchema';
import { StaffUncheckedUpdateWithoutOvertimeSummaryInputSchema } from './StaffUncheckedUpdateWithoutOvertimeSummaryInputSchema';

export const StaffUpdateToOneWithWhereWithoutOvertimeSummaryInputSchema: z.ZodType<Prisma.StaffUpdateToOneWithWhereWithoutOvertimeSummaryInput> = z.strictObject({
  where: z.lazy(() => StaffWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => StaffUpdateWithoutOvertimeSummaryInputSchema), z.lazy(() => StaffUncheckedUpdateWithoutOvertimeSummaryInputSchema) ]),
});

export default StaffUpdateToOneWithWhereWithoutOvertimeSummaryInputSchema;
