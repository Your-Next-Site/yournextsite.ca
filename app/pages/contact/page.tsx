"use client";
import { submitForm } from '@/actions/action';
import { ToastContainer, toast } from 'react-toastify';


export default function Contact() {

  function sendToast() {
    toast.info('Message sent successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  return (
    <div className="flex flex-col items-center ">
      <form
        action={async (formData: FormData) => {
          const success = await submitForm(formData);
          if (success?.success === true) sendToast();
        }}
        className="flex flex-col w-full max-w-10/12 md:max-w-[500px] m-4 p-4 bg-[var(--primary)] shadow-2xl shadow-primary rounded-xl"
        >
        <h1 className="font-bold"> Contact Us</h1>
        <label
          className="mt-2">Name</label>
        <input
          name="name"
          required
          type="text"
          className="bg-foreground rounded-md p-2 text-background" />
        <label className="mt-2">email</label>
        <input
          name="email" required
          type="email"
          className="bg-foreground rounded-md p-2 text-background" />
        <label className="mt-2">Subject</label>
        <input
          name="subject"
          required
          type="text"
          className="bg-foreground rounded-md p-2 text-background" />
        <label className="mt-2">Message</label>
        <textarea
          name="content"
          required
          className="bg-foreground rounded-md p-2 text-background" />
        <button className="bg-background p-4 font-bold m-4 rounded-md border-2 border-background hover:cursor-pointer hover:text-background hover:bg-[var(--primary)] hover:border-background hover:border-2">
          Send Email
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}





