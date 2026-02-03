import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyCreateWithoutOvertimeSummaryInputSchema } from './DutyCreateWithoutOvertimeSummaryInputSchema';
import { DutyUncheckedCreateWithoutOvertimeSummaryInputSchema } from './DutyUncheckedCreateWithoutOvertimeSummaryInputSchema';
import { DutyCreateOrConnectWithoutOvertimeSummaryInputSchema } from './DutyCreateOrConnectWithoutOvertimeSummaryInputSchema';
import { DutyUpsertWithoutOvertimeSummaryInputSchema } from './DutyUpsertWithoutOvertimeSummaryInputSchema';
import { DutyWhereUniqueInputSchema } from './DutyWhereUniqueInputSchema';
import { DutyUpdateToOneWithWhereWithoutOvertimeSummaryInputSchema } from './DutyUpdateToOneWithWhereWithoutOvertimeSummaryInputSchema';
import { DutyUpdateWithoutOvertimeSummaryInputSchema } from './DutyUpdateWithoutOvertimeSummaryInputSchema';
import { DutyUncheckedUpdateWithoutOvertimeSummaryInputSchema } from './DutyUncheckedUpdateWithoutOvertimeSummaryInputSchema';

export const DutyUpdateOneRequiredWithoutOvertimeSummaryNestedInputSchema: z.ZodType<Prisma.DutyUpdateOneRequiredWithoutOvertimeSummaryNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => DutyCreateWithoutOvertimeSummaryInputSchema), z.lazy(() => DutyUncheckedCreateWithoutOvertimeSummaryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DutyCreateOrConnectWithoutOvertimeSummaryInputSchema).optional(),
  upsert: z.lazy(() => DutyUpsertWithoutOvertimeSummaryInputSchema).optional(),
  connect: z.lazy(() => DutyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DutyUpdateToOneWithWhereWithoutOvertimeSummaryInputSchema), z.lazy(() => DutyUpdateWithoutOvertimeSummaryInputSchema), z.lazy(() => DutyUncheckedUpdateWithoutOvertimeSummaryInputSchema) ]).optional(),
});

export default DutyUpdateOneRequiredWithoutOvertimeSummaryNestedInputSchema;
