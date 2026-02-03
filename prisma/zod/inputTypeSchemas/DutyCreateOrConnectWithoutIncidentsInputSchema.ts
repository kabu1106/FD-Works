import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyWhereUniqueInputSchema } from './DutyWhereUniqueInputSchema';
import { DutyCreateWithoutIncidentsInputSchema } from './DutyCreateWithoutIncidentsInputSchema';
import { DutyUncheckedCreateWithoutIncidentsInputSchema } from './DutyUncheckedCreateWithoutIncidentsInputSchema';

export const DutyCreateOrConnectWithoutIncidentsInputSchema: z.ZodType<Prisma.DutyCreateOrConnectWithoutIncidentsInput> = z.strictObject({
  where: z.lazy(() => DutyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DutyCreateWithoutIncidentsInputSchema), z.lazy(() => DutyUncheckedCreateWithoutIncidentsInputSchema) ]),
});

export default DutyCreateOrConnectWithoutIncidentsInputSchema;
