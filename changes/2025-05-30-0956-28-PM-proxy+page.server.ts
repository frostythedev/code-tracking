// @ts-nocheck
import type { PageServerLoad } from './$types';
import { formSchema } from './schema';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const load = async () => {
    return {
        form: await superValidate(zod(formSchema)), 
    };
};;null as any as PageServerLoad;