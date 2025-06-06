import { z } from 'zod';

export const formSchema = z.object({
  firstName: z.string().min(2, 'First name is required'), 
    lastName: z.string().min(2, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    message: z.string().min(10, 'Message must be at least 10 characters long'),
});

export type FormSchma = typeof formSchema;