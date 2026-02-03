import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HospitalWhereInputSchema } from './HospitalWhereInputSchema';
import { HospitalUpdateWithoutDestinationInputSchema } from './HospitalUpdateWithoutDestinationInputSchema';
import { HospitalUncheckedUpdateWithoutDestinationInputSchema } from './HospitalUncheckedUpdateWithoutDestinationInputSchema';

export const HospitalUpdateToOneWithWhereWithoutDestinationInputSchema: z.ZodType<Prisma.HospitalUpdateToOneWithWhereWithoutDestinationInput> = z.strictObject({
  where: z.lazy(() => HospitalWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => HospitalUpdateWithoutDestinationInputSchema), z.lazy(() => HospitalUncheckedUpdateWithoutDestinationInputSchema) ]),
});

export default HospitalUpdateToOneWithWhereWithoutDestinationInputSchema;
