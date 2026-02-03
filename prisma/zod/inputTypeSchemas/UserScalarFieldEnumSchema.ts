import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','loginId','password','name','email','emailVerified','image','role','staffId']);

export default UserScalarFieldEnumSchema;
