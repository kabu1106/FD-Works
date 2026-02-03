import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryCreateWithoutDetailsInputSchema } from './OvertimeSummaryCreateWithoutDetailsInputSchema';
import { OvertimeSummaryUncheckedCreateWithoutDetailsInputSchema } from './OvertimeSummaryUncheckedCreateWithoutDetailsInputSchema';
import { OvertimeSummaryCreateOrConnectWithoutDetailsInputSchema } from './OvertimeSummaryCreateOrConnectWithoutDetailsInputSchema';
import { OvertimeSummaryWhereUniqueInputSchema } from './OvertimeSummaryWhereUniqueInputSchema';

export const OvertimeSummaryCreateNestedOneWithoutDetailsInputSchema: z.ZodType<Prisma.OvertimeSummaryCreateNestedOneWithoutDetailsInput> = z.strictObject({
  create: z.union([ z.lazy(() => OvertimeSummaryCreateWithoutDetailsInputSchema), z.lazy(() => OvertimeSummaryUncheckedCreateWithoutDetailsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OvertimeSummaryCreateOrConnectWithoutDetailsInputSchema).optional(),
  connect: z.lazy(() => OvertimeSummaryWhereUniqueInputSchema).optional(),
});

export default OvertimeSummaryCreateNestedOneWithoutDetailsInputSchema;
