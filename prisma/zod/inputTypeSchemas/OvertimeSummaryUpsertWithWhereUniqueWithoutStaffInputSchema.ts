import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryWhereUniqueInputSchema } from './OvertimeSummaryWhereUniqueInputSchema';
import { OvertimeSummaryUpdateWithoutStaffInputSchema } from './OvertimeSummaryUpdateWithoutStaffInputSchema';
import { OvertimeSummaryUncheckedUpdateWithoutStaffInputSchema } from './OvertimeSummaryUncheckedUpdateWithoutStaffInputSchema';
import { OvertimeSummaryCreateWithoutStaffInputSchema } from './OvertimeSummaryCreateWithoutStaffInputSchema';
import { OvertimeSummaryUncheckedCreateWithoutStaffInputSchema } from './OvertimeSummaryUncheckedCreateWithoutStaffInputSchema';

export const OvertimeSummaryUpsertWithWhereUniqueWithoutStaffInputSchema: z.ZodType<Prisma.OvertimeSummaryUpsertWithWhereUniqueWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => OvertimeSummaryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OvertimeSummaryUpdateWithoutStaffInputSchema), z.lazy(() => OvertimeSummaryUncheckedUpdateWithoutStaffInputSchema) ]),
  create: z.union([ z.lazy(() => OvertimeSummaryCreateWithoutStaffInputSchema), z.lazy(() => OvertimeSummaryUncheckedCreateWithoutStaffInputSchema) ]),
});

export default OvertimeSummaryUpsertWithWhereUniqueWithoutStaffInputSchema;
