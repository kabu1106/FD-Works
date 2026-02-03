import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryCreateWithoutDetailsInputSchema } from './OvertimeSummaryCreateWithoutDetailsInputSchema';
import { OvertimeSummaryUncheckedCreateWithoutDetailsInputSchema } from './OvertimeSummaryUncheckedCreateWithoutDetailsInputSchema';
import { OvertimeSummaryCreateOrConnectWithoutDetailsInputSchema } from './OvertimeSummaryCreateOrConnectWithoutDetailsInputSchema';
import { OvertimeSummaryUpsertWithoutDetailsInputSchema } from './OvertimeSummaryUpsertWithoutDetailsInputSchema';
import { OvertimeSummaryWhereUniqueInputSchema } from './OvertimeSummaryWhereUniqueInputSchema';
import { OvertimeSummaryUpdateToOneWithWhereWithoutDetailsInputSchema } from './OvertimeSummaryUpdateToOneWithWhereWithoutDetailsInputSchema';
import { OvertimeSummaryUpdateWithoutDetailsInputSchema } from './OvertimeSummaryUpdateWithoutDetailsInputSchema';
import { OvertimeSummaryUncheckedUpdateWithoutDetailsInputSchema } from './OvertimeSummaryUncheckedUpdateWithoutDetailsInputSchema';

export const OvertimeSummaryUpdateOneRequiredWithoutDetailsNestedInputSchema: z.ZodType<Prisma.OvertimeSummaryUpdateOneRequiredWithoutDetailsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => OvertimeSummaryCreateWithoutDetailsInputSchema), z.lazy(() => OvertimeSummaryUncheckedCreateWithoutDetailsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OvertimeSummaryCreateOrConnectWithoutDetailsInputSchema).optional(),
  upsert: z.lazy(() => OvertimeSummaryUpsertWithoutDetailsInputSchema).optional(),
  connect: z.lazy(() => OvertimeSummaryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OvertimeSummaryUpdateToOneWithWhereWithoutDetailsInputSchema), z.lazy(() => OvertimeSummaryUpdateWithoutDetailsInputSchema), z.lazy(() => OvertimeSummaryUncheckedUpdateWithoutDetailsInputSchema) ]).optional(),
});

export default OvertimeSummaryUpdateOneRequiredWithoutDetailsNestedInputSchema;
