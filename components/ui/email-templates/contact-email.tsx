interface EmailTemplateProps {
	name: string
	email: string
	subject: string
	message: string
}

export function EmailTemplate({
	name,
	email,
	subject,
	message,
}: EmailTemplateProps) {
	return (
		<div>
			<h1> {name} has sent a message!</h1>
			<p>
				{name}'s email is: {email}
			</p>
			<p>Subject: {subject}</p>
			<p>Their message to you is: {message}</p>
			<p>Reply to this email to speak with them.</p>
		</div>
	)
}
