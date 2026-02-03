import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentAllowanceSummaryWhereUniqueInputSchema } from './IncidentAllowanceSummaryWhereUniqueInputSchema';
import { IncidentAllowanceSummaryUpdateWithoutAllowanceTypeInputSchema } from './IncidentAllowanceSummaryUpdateWithoutAllowanceTypeInputSchema';
import { IncidentAllowanceSummaryUncheckedUpdateWithoutAllowanceTypeInputSchema } from './IncidentAllowanceSummaryUncheckedUpdateWithoutAllowanceTypeInputSchema';
import { IncidentAllowanceSummaryCreateWithoutAllowanceTypeInputSchema } from './IncidentAllowanceSummaryCreateWithoutAllowanceTypeInputSchema';
import { IncidentAllowanceSummaryUncheckedCreateWithoutAllowanceTypeInputSchema } from './IncidentAllowanceSummaryUncheckedCreateWithoutAllowanceTypeInputSchema';

export const IncidentAllowanceSummaryUpsertWithWhereUniqueWithoutAllowanceTypeInputSchema: z.ZodType<Prisma.IncidentAllowanceSummaryUpsertWithWhereUniqueWithoutAllowanceTypeInput> = z.strictObject({
  where: z.lazy(() => IncidentAllowanceSummaryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => IncidentAllowanceSummaryUpdateWithoutAllowanceTypeInputSchema), z.lazy(() => IncidentAllowanceSummaryUncheckedUpdateWithoutAllowanceTypeInputSchema) ]),
  create: z.union([ z.lazy(() => IncidentAllowanceSummaryCreateWithoutAllowanceTypeInputSchema), z.lazy(() => IncidentAllowanceSummaryUncheckedCreateWithoutAllowanceTypeInputSchema) ]),
});

export default IncidentAllowanceSummaryUpsertWithWhereUniqueWithoutAllowanceTypeInputSchema;
