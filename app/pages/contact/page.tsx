'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import type z from 'zod'
import {
	Field,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { sendEmail } from '@/lib/actions/resend'
import { formSchema } from '@/lib/zod/contact-form-schema'
export default function Contact() {
	function sendToast(success = true) {
		success
			? toast.info('Message sent successfully', {
					position: 'bottom-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: false,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'dark',
				})
			: toast.error('Message not sent', {
					position: 'bottom-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: false,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'dark',
				})
	}

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			subject: '',
			message: '',
		},
		mode: 'onChange',
	})

	async function onSubmit(data: z.infer<typeof formSchema>) {
		const success = await sendEmail(data)
		if (success === true) sendToast()
		else sendToast(false)
	}

	return (
		<div className="flex flex-col items-center">
			<form
				className="m-4 flex w-full max-w-10/12 flex-col rounded-xl bg-[var(--primary)] p-4 shadow-2xl shadow-primary md:max-w-[500px]"
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<h1 className="font-bold"> Contact Us</h1>
				<FieldGroup>
					<Controller
						control={form.control}
						name="name"
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={field.name}>
									Name
								</FieldLabel>
								<Input
									{...field}
									aria-invalid={fieldState.invalid}
									id={field.name}
								/>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>
					<Controller
						control={form.control}
						name="email"
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={field.name}>
									Email
								</FieldLabel>
								<Input
									{...field}
									aria-invalid={fieldState.invalid}
									id={field.name}
								/>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>
					<Controller
						control={form.control}
						name="subject"
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={field.name}>
									Subject
								</FieldLabel>
								<Input
									{...field}
									aria-invalid={fieldState.invalid}
									id={field.name}
								/>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>
					<Controller
						control={form.control}
						name="message"
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor="form-rhf-textarea-about">
									Message
								</FieldLabel>
								<Textarea
									{...field}
									aria-invalid={fieldState.invalid}
									className="min-h-[120px]"
									id="form-rhf-textarea-about"
									placeholder="I'm a have an idea, I wan to turn in to a website..."
								/>
								<FieldDescription>
									Tell us more about yourself. This will be
									used to help us personalize your experience.
								</FieldDescription>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>
				</FieldGroup>
				<button
					className="m-4 rounded-md border-2 border-background bg-background p-4 font-bold hover:cursor-pointer hover:border-2 hover:border-background hover:bg-[var(--primary)] hover:text-background"
					type="submit"
				>
					Send Email
				</button>
			</form>
			<ToastContainer />
		</div>
	)
}
