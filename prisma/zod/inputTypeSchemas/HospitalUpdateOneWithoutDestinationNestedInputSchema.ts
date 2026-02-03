import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HospitalCreateWithoutDestinationInputSchema } from './HospitalCreateWithoutDestinationInputSchema';
import { HospitalUncheckedCreateWithoutDestinationInputSchema } from './HospitalUncheckedCreateWithoutDestinationInputSchema';
import { HospitalCreateOrConnectWithoutDestinationInputSchema } from './HospitalCreateOrConnectWithoutDestinationInputSchema';
import { HospitalUpsertWithoutDestinationInputSchema } from './HospitalUpsertWithoutDestinationInputSchema';
import { HospitalWhereInputSchema } from './HospitalWhereInputSchema';
import { HospitalWhereUniqueInputSchema } from './HospitalWhereUniqueInputSchema';
import { HospitalUpdateToOneWithWhereWithoutDestinationInputSchema } from './HospitalUpdateToOneWithWhereWithoutDestinationInputSchema';
import { HospitalUpdateWithoutDestinationInputSchema } from './HospitalUpdateWithoutDestinationInputSchema';
import { HospitalUncheckedUpdateWithoutDestinationInputSchema } from './HospitalUncheckedUpdateWithoutDestinationInputSchema';

export const HospitalUpdateOneWithoutDestinationNestedInputSchema: z.ZodType<Prisma.HospitalUpdateOneWithoutDestinationNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => HospitalCreateWithoutDestinationInputSchema), z.lazy(() => HospitalUncheckedCreateWithoutDestinationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => HospitalCreateOrConnectWithoutDestinationInputSchema).optional(),
  upsert: z.lazy(() => HospitalUpsertWithoutDestinationInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => HospitalWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => HospitalWhereInputSchema) ]).optional(),
  connect: z.lazy(() => HospitalWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => HospitalUpdateToOneWithWhereWithoutDestinationInputSchema), z.lazy(() => HospitalUpdateWithoutDestinationInputSchema), z.lazy(() => HospitalUncheckedUpdateWithoutDestinationInputSchema) ]).optional(),
});

export default HospitalUpdateOneWithoutDestinationNestedInputSchema;
