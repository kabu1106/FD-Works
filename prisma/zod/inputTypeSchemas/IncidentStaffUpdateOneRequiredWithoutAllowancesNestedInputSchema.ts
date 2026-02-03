import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffCreateWithoutAllowancesInputSchema } from './IncidentStaffCreateWithoutAllowancesInputSchema';
import { IncidentStaffUncheckedCreateWithoutAllowancesInputSchema } from './IncidentStaffUncheckedCreateWithoutAllowancesInputSchema';
import { IncidentStaffCreateOrConnectWithoutAllowancesInputSchema } from './IncidentStaffCreateOrConnectWithoutAllowancesInputSchema';
import { IncidentStaffUpsertWithoutAllowancesInputSchema } from './IncidentStaffUpsertWithoutAllowancesInputSchema';
import { IncidentStaffWhereUniqueInputSchema } from './IncidentStaffWhereUniqueInputSchema';
import { IncidentStaffUpdateToOneWithWhereWithoutAllowancesInputSchema } from './IncidentStaffUpdateToOneWithWhereWithoutAllowancesInputSchema';
import { IncidentStaffUpdateWithoutAllowancesInputSchema } from './IncidentStaffUpdateWithoutAllowancesInputSchema';
import { IncidentStaffUncheckedUpdateWithoutAllowancesInputSchema } from './IncidentStaffUncheckedUpdateWithoutAllowancesInputSchema';

export const IncidentStaffUpdateOneRequiredWithoutAllowancesNestedInputSchema: z.ZodType<Prisma.IncidentStaffUpdateOneRequiredWithoutAllowancesNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentStaffCreateWithoutAllowancesInputSchema), z.lazy(() => IncidentStaffUncheckedCreateWithoutAllowancesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => IncidentStaffCreateOrConnectWithoutAllowancesInputSchema).optional(),
  upsert: z.lazy(() => IncidentStaffUpsertWithoutAllowancesInputSchema).optional(),
  connect: z.lazy(() => IncidentStaffWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => IncidentStaffUpdateToOneWithWhereWithoutAllowancesInputSchema), z.lazy(() => IncidentStaffUpdateWithoutAllowancesInputSchema), z.lazy(() => IncidentStaffUncheckedUpdateWithoutAllowancesInputSchema) ]).optional(),
});

export default IncidentStaffUpdateOneRequiredWithoutAllowancesNestedInputSchema;
