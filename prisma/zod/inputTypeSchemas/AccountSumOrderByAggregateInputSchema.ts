import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AccountSumOrderByAggregateInputSchema: z.ZodType<Prisma.AccountSumOrderByAggregateInput> = z.strictObject({
  expires_at: z.lazy(() => SortOrderSchema).optional(),
});

export default AccountSumOrderByAggregateInputSchema;
