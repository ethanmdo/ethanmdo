if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID) throw new Error('Missing EMAILJS_SERVICE_ID');
if (!process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) throw new Error('Missing EMAILJS_TEMPLATE_ID');
if (!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) throw new Error('Missing EMAILJS_PUBLIC_KEY');

export const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
} as const; 