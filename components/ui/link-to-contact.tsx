import Link from "next/link";

export default function LinkToContacts() {
    return (
        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href='/pages/contact'>Get in Touch</Link>
    );
}