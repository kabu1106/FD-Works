import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyCreateWithoutOvertimeSummaryInputSchema } from './DutyCreateWithoutOvertimeSummaryInputSchema';
import { DutyUncheckedCreateWithoutOvertimeSummaryInputSchema } from './DutyUncheckedCreateWithoutOvertimeSummaryInputSchema';
import { DutyCreateOrConnectWithoutOvertimeSummaryInputSchema } from './DutyCreateOrConnectWithoutOvertimeSummaryInputSchema';
import { DutyWhereUniqueInputSchema } from './DutyWhereUniqueInputSchema';

export const DutyCreateNestedOneWithoutOvertimeSummaryInputSchema: z.ZodType<Prisma.DutyCreateNestedOneWithoutOvertimeSummaryInput> = z.strictObject({
  create: z.union([ z.lazy(() => DutyCreateWithoutOvertimeSummaryInputSchema), z.lazy(() => DutyUncheckedCreateWithoutOvertimeSummaryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DutyCreateOrConnectWithoutOvertimeSummaryInputSchema).optional(),
  connect: z.lazy(() => DutyWhereUniqueInputSchema).optional(),
});

export default DutyCreateNestedOneWithoutOvertimeSummaryInputSchema;
