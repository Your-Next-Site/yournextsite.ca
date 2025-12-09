import z from 'zod'

export const formSchema = z.object({
	name: z.string().min(2).max(25),
	email: z.email().min(3, 'Must be at least 3 characters').max(50),
	subject: z.string().min(5).max(100),
	message: z.string().min(5).max(300),
})
