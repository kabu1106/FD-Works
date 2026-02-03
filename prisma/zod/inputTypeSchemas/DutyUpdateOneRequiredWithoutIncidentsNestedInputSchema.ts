import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyCreateWithoutIncidentsInputSchema } from './DutyCreateWithoutIncidentsInputSchema';
import { DutyUncheckedCreateWithoutIncidentsInputSchema } from './DutyUncheckedCreateWithoutIncidentsInputSchema';
import { DutyCreateOrConnectWithoutIncidentsInputSchema } from './DutyCreateOrConnectWithoutIncidentsInputSchema';
import { DutyUpsertWithoutIncidentsInputSchema } from './DutyUpsertWithoutIncidentsInputSchema';
import { DutyWhereUniqueInputSchema } from './DutyWhereUniqueInputSchema';
import { DutyUpdateToOneWithWhereWithoutIncidentsInputSchema } from './DutyUpdateToOneWithWhereWithoutIncidentsInputSchema';
import { DutyUpdateWithoutIncidentsInputSchema } from './DutyUpdateWithoutIncidentsInputSchema';
import { DutyUncheckedUpdateWithoutIncidentsInputSchema } from './DutyUncheckedUpdateWithoutIncidentsInputSchema';

export const DutyUpdateOneRequiredWithoutIncidentsNestedInputSchema: z.ZodType<Prisma.DutyUpdateOneRequiredWithoutIncidentsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => DutyCreateWithoutIncidentsInputSchema), z.lazy(() => DutyUncheckedCreateWithoutIncidentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DutyCreateOrConnectWithoutIncidentsInputSchema).optional(),
  upsert: z.lazy(() => DutyUpsertWithoutIncidentsInputSchema).optional(),
  connect: z.lazy(() => DutyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DutyUpdateToOneWithWhereWithoutIncidentsInputSchema), z.lazy(() => DutyUpdateWithoutIncidentsInputSchema), z.lazy(() => DutyUncheckedUpdateWithoutIncidentsInputSchema) ]).optional(),
});

export default DutyUpdateOneRequiredWithoutIncidentsNestedInputSchema;
