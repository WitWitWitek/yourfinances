import { NextResponse, NextRequest } from "next/server";
import { transporter } from "@/lib/nodemailer";
import DOMPurify from "isomorphic-dompurify";
import { TFormSchema } from "@/validation/formSchema";

export async function POST(request: NextRequest) {
  try {
    const { city, fullname, phone } = (await request.json()) as TFormSchema;

    if (!fullname || !city || !phone) {
      return NextResponse.json(
        { message: "Wszystkie pola są wymagane!" },
        { status: 500 }
      );
    }

    const cleanedFullname = DOMPurify.sanitize(fullname);
    const cleanedCity = DOMPurify.sanitize(city);
    const cleanedPhone = DOMPurify.sanitize(phone);

    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: process.env.RECIPENT_EMAIL,
      subject: "Wiadomość z formularza kontaktowego Twoje Finanse",
      html: `
      <div>
          <p>Imię i nazwisko: ${cleanedFullname}</p>
          <p>Miejscowość: ${cleanedCity}</p>
          <p>Telefon: ${cleanedPhone}</p>
      </div>`,
    };

    await transporter.sendMail({ ...mailOptions });

    return NextResponse.json(
      { message: "Zgłoszenie zostało wysłane." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Wystąpił błąd w trakcie wysyłania zgłoszenia." },
      { status: 500 }
    );
  }
}
