import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HospitalUpdateWithoutDestinationInputSchema } from './HospitalUpdateWithoutDestinationInputSchema';
import { HospitalUncheckedUpdateWithoutDestinationInputSchema } from './HospitalUncheckedUpdateWithoutDestinationInputSchema';
import { HospitalCreateWithoutDestinationInputSchema } from './HospitalCreateWithoutDestinationInputSchema';
import { HospitalUncheckedCreateWithoutDestinationInputSchema } from './HospitalUncheckedCreateWithoutDestinationInputSchema';
import { HospitalWhereInputSchema } from './HospitalWhereInputSchema';

export const HospitalUpsertWithoutDestinationInputSchema: z.ZodType<Prisma.HospitalUpsertWithoutDestinationInput> = z.strictObject({
  update: z.union([ z.lazy(() => HospitalUpdateWithoutDestinationInputSchema), z.lazy(() => HospitalUncheckedUpdateWithoutDestinationInputSchema) ]),
  create: z.union([ z.lazy(() => HospitalCreateWithoutDestinationInputSchema), z.lazy(() => HospitalUncheckedCreateWithoutDestinationInputSchema) ]),
  where: z.lazy(() => HospitalWhereInputSchema).optional(),
});

export default HospitalUpsertWithoutDestinationInputSchema;
