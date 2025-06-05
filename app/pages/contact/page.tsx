"use client";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

type Message = {
  name: string,
  email: string,
  subject: string,
  content: string
}
export default function Contact() {

  const notify = () => toast("Message sent successfully!");

  const [message, setMessage] = useState<Message>({
    name: "", email: "", subject: "", content: ""
  });

  useEffect(() => { }, [message]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setMessage({
      ...message,
      [name]: value,
    });
  };


  async function sendMessage() {
    console.log(message)
    setMessage({
      name: "", email: "", subject: "", content: ""
    })
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });

    notify();

    const data = await response.json();
    return data;
  }

  return (
    <div className="flex flex-col items-center ">
      <div className="flex flex-col w-full max-w-10/12 md:max-w-[500px] m-4 p-4 bg-[var(--primary)] shadow-2xl shadow-primary rounded-xl">
        <h1 className="font-bold"> Contact Us</h1>
        <label className="mt-2">Name</label>
        <input name="name" value={message.name} onChange={(e) => handleChange(e)} className="bg-foreground rounded-md p-2 text-background"></input>
        <label className="mt-2">email</label>
        <input name="email" value={message.email} type="email" onChange={(e) => handleChange(e)} className="bg-foreground rounded-md p-2 text-background"></input>
        <label className="mt-2">Subject</label>
        <input name="subject" value={message.subject} onChange={(e) => handleChange(e)} className="bg-foreground rounded-md p-2 text-background"></input>
        <label className="mt-2">Message</label>
        <textarea name="content" value={message.content} onChange={(e) => handleChange(e)} className="h-40 bg-foreground rounded-md p-2 text-background"></textarea>
        <button onClick={() => sendMessage()} className="bg-background p-4 font-bold m-4 rounded-md border-2 border-background hover:cursor-pointer hover:text-background hover:bg-[var(--primary)] hover:border-background hover:border-2">
          Send Message
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}





