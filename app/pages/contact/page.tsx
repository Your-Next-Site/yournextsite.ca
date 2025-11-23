'use client'
import { ToastContainer, toast } from 'react-toastify'
import { submitForm } from '@/actions/action'

export default function Contact() {
	function sendToast() {
		toast.info('Message sent successfully', {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark',
		})
	}

	return (
		<div className="flex flex-col items-center">
			<form
				action={async (formData: FormData) => {
					const success = await submitForm(formData)
					if (success?.success === true) sendToast()
				}}
				className="m-4 flex w-full max-w-10/12 flex-col rounded-xl bg-[var(--primary)] p-4 shadow-2xl shadow-primary md:max-w-[500px]"
			>
				<h1 className="font-bold"> Contact Us</h1>
				<label className="mt-2" htmlFor="name">
					Name
				</label>
				<input
					className="rounded-md bg-foreground p-2 text-background"
					id="name"
					name="name"
					required
					type="text"
				/>
				<label className="mt-2" htmlFor="email">
					email
				</label>
				<input
					className="rounded-md bg-foreground p-2 text-background"
					id="email"
					name="email"
					required
					type="email"
				/>
				<label className="mt-2" htmlFor="subject">
					Subject
				</label>
				<input
					className="rounded-md bg-foreground p-2 text-background"
					id="subject"
					name="subject"
					required
					type="text"
				/>
				<label className="mt-2" htmlFor="message">
					Message
				</label>
				<textarea
					className="rounded-md bg-foreground p-2 text-background"
					id="message"
					name="content"
					required
				/>
				<button
					className="m-4 rounded-md border-2 border-background bg-background p-4 font-bold hover:cursor-pointer hover:border-2 hover:border-background hover:bg-[var(--primary)] hover:text-background"
					type="button"
				>
					Send Email
				</button>
			</form>
			<ToastContainer />
		</div>
	)
}
