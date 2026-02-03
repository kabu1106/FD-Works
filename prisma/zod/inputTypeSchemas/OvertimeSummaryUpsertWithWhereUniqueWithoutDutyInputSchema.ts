import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryWhereUniqueInputSchema } from './OvertimeSummaryWhereUniqueInputSchema';
import { OvertimeSummaryUpdateWithoutDutyInputSchema } from './OvertimeSummaryUpdateWithoutDutyInputSchema';
import { OvertimeSummaryUncheckedUpdateWithoutDutyInputSchema } from './OvertimeSummaryUncheckedUpdateWithoutDutyInputSchema';
import { OvertimeSummaryCreateWithoutDutyInputSchema } from './OvertimeSummaryCreateWithoutDutyInputSchema';
import { OvertimeSummaryUncheckedCreateWithoutDutyInputSchema } from './OvertimeSummaryUncheckedCreateWithoutDutyInputSchema';

export const OvertimeSummaryUpsertWithWhereUniqueWithoutDutyInputSchema: z.ZodType<Prisma.OvertimeSummaryUpsertWithWhereUniqueWithoutDutyInput> = z.strictObject({
  where: z.lazy(() => OvertimeSummaryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OvertimeSummaryUpdateWithoutDutyInputSchema), z.lazy(() => OvertimeSummaryUncheckedUpdateWithoutDutyInputSchema) ]),
  create: z.union([ z.lazy(() => OvertimeSummaryCreateWithoutDutyInputSchema), z.lazy(() => OvertimeSummaryUncheckedCreateWithoutDutyInputSchema) ]),
});

export default OvertimeSummaryUpsertWithWhereUniqueWithoutDutyInputSchema;
