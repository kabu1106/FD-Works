import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffCreateWithoutOvertimeSummaryInputSchema } from './StaffCreateWithoutOvertimeSummaryInputSchema';
import { StaffUncheckedCreateWithoutOvertimeSummaryInputSchema } from './StaffUncheckedCreateWithoutOvertimeSummaryInputSchema';
import { StaffCreateOrConnectWithoutOvertimeSummaryInputSchema } from './StaffCreateOrConnectWithoutOvertimeSummaryInputSchema';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';

export const StaffCreateNestedOneWithoutOvertimeSummaryInputSchema: z.ZodType<Prisma.StaffCreateNestedOneWithoutOvertimeSummaryInput> = z.strictObject({
  create: z.union([ z.lazy(() => StaffCreateWithoutOvertimeSummaryInputSchema), z.lazy(() => StaffUncheckedCreateWithoutOvertimeSummaryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StaffCreateOrConnectWithoutOvertimeSummaryInputSchema).optional(),
  connect: z.lazy(() => StaffWhereUniqueInputSchema).optional(),
});

export default StaffCreateNestedOneWithoutOvertimeSummaryInputSchema;
