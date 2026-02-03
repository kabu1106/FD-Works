import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryDetailCreateWithoutOvertimeSummaryInputSchema } from './OvertimeSummaryDetailCreateWithoutOvertimeSummaryInputSchema';
import { OvertimeSummaryDetailUncheckedCreateWithoutOvertimeSummaryInputSchema } from './OvertimeSummaryDetailUncheckedCreateWithoutOvertimeSummaryInputSchema';
import { OvertimeSummaryDetailCreateOrConnectWithoutOvertimeSummaryInputSchema } from './OvertimeSummaryDetailCreateOrConnectWithoutOvertimeSummaryInputSchema';
import { OvertimeSummaryDetailCreateManyOvertimeSummaryInputEnvelopeSchema } from './OvertimeSummaryDetailCreateManyOvertimeSummaryInputEnvelopeSchema';
import { OvertimeSummaryDetailWhereUniqueInputSchema } from './OvertimeSummaryDetailWhereUniqueInputSchema';

export const OvertimeSummaryDetailCreateNestedManyWithoutOvertimeSummaryInputSchema: z.ZodType<Prisma.OvertimeSummaryDetailCreateNestedManyWithoutOvertimeSummaryInput> = z.strictObject({
  create: z.union([ z.lazy(() => OvertimeSummaryDetailCreateWithoutOvertimeSummaryInputSchema), z.lazy(() => OvertimeSummaryDetailCreateWithoutOvertimeSummaryInputSchema).array(), z.lazy(() => OvertimeSummaryDetailUncheckedCreateWithoutOvertimeSummaryInputSchema), z.lazy(() => OvertimeSummaryDetailUncheckedCreateWithoutOvertimeSummaryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OvertimeSummaryDetailCreateOrConnectWithoutOvertimeSummaryInputSchema), z.lazy(() => OvertimeSummaryDetailCreateOrConnectWithoutOvertimeSummaryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OvertimeSummaryDetailCreateManyOvertimeSummaryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OvertimeSummaryDetailWhereUniqueInputSchema), z.lazy(() => OvertimeSummaryDetailWhereUniqueInputSchema).array() ]).optional(),
});

export default OvertimeSummaryDetailCreateNestedManyWithoutOvertimeSummaryInputSchema;
