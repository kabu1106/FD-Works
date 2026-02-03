import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyCreateWithoutIncidentsInputSchema } from './DutyCreateWithoutIncidentsInputSchema';
import { DutyUncheckedCreateWithoutIncidentsInputSchema } from './DutyUncheckedCreateWithoutIncidentsInputSchema';
import { DutyCreateOrConnectWithoutIncidentsInputSchema } from './DutyCreateOrConnectWithoutIncidentsInputSchema';
import { DutyWhereUniqueInputSchema } from './DutyWhereUniqueInputSchema';

export const DutyCreateNestedOneWithoutIncidentsInputSchema: z.ZodType<Prisma.DutyCreateNestedOneWithoutIncidentsInput> = z.strictObject({
  create: z.union([ z.lazy(() => DutyCreateWithoutIncidentsInputSchema), z.lazy(() => DutyUncheckedCreateWithoutIncidentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DutyCreateOrConnectWithoutIncidentsInputSchema).optional(),
  connect: z.lazy(() => DutyWhereUniqueInputSchema).optional(),
});

export default DutyCreateNestedOneWithoutIncidentsInputSchema;
