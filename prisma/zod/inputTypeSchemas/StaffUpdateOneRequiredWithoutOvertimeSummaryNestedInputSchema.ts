import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffCreateWithoutOvertimeSummaryInputSchema } from './StaffCreateWithoutOvertimeSummaryInputSchema';
import { StaffUncheckedCreateWithoutOvertimeSummaryInputSchema } from './StaffUncheckedCreateWithoutOvertimeSummaryInputSchema';
import { StaffCreateOrConnectWithoutOvertimeSummaryInputSchema } from './StaffCreateOrConnectWithoutOvertimeSummaryInputSchema';
import { StaffUpsertWithoutOvertimeSummaryInputSchema } from './StaffUpsertWithoutOvertimeSummaryInputSchema';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';
import { StaffUpdateToOneWithWhereWithoutOvertimeSummaryInputSchema } from './StaffUpdateToOneWithWhereWithoutOvertimeSummaryInputSchema';
import { StaffUpdateWithoutOvertimeSummaryInputSchema } from './StaffUpdateWithoutOvertimeSummaryInputSchema';
import { StaffUncheckedUpdateWithoutOvertimeSummaryInputSchema } from './StaffUncheckedUpdateWithoutOvertimeSummaryInputSchema';

export const StaffUpdateOneRequiredWithoutOvertimeSummaryNestedInputSchema: z.ZodType<Prisma.StaffUpdateOneRequiredWithoutOvertimeSummaryNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => StaffCreateWithoutOvertimeSummaryInputSchema), z.lazy(() => StaffUncheckedCreateWithoutOvertimeSummaryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StaffCreateOrConnectWithoutOvertimeSummaryInputSchema).optional(),
  upsert: z.lazy(() => StaffUpsertWithoutOvertimeSummaryInputSchema).optional(),
  connect: z.lazy(() => StaffWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => StaffUpdateToOneWithWhereWithoutOvertimeSummaryInputSchema), z.lazy(() => StaffUpdateWithoutOvertimeSummaryInputSchema), z.lazy(() => StaffUncheckedUpdateWithoutOvertimeSummaryInputSchema) ]).optional(),
});

export default StaffUpdateOneRequiredWithoutOvertimeSummaryNestedInputSchema;
