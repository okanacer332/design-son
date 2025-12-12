"use server";

import { getAllContent, getContentBySlug, ContentType } from './mdx';

// Dil kodunu (TR, EN) klasör adına (tr, en) çevir
function normalizeLang(lang: string) {
  return lang.toLowerCase();
}

// Client bileşeninden çağrılacak fonksiyon: Listeyi getir
export async function fetchHubContent(type: ContentType, lang: string) {
  const normalizedLang = normalizeLang(lang);
  const items = await getAllContent(type, normalizedLang);
  return items;
}

// Client bileşeninden çağrılacak fonksiyon: Detayı getir
export async function fetchHubDetail(type: ContentType, lang: string, slug: string) {
  const normalizedLang = normalizeLang(lang);
  const item = await getContentBySlug(type, normalizedLang, slug);
  return item;
}

// --- MAIL GÖNDERME İŞLEMİ ---

type ContactFormData = {
  plan: string;
  name: string;
  phone: string;
  email?: string;
  message: string;
  mode: string;
};

export async function sendEmail(data: ContactFormData) {
  try {
    // ÖNEMLİ: Nodemailer'ı burada, fonksiyon içinde dinamik olarak import ediyoruz.
    // Bu sayede build sırasında client-side hatası almıyoruz.
    const nodemailer = await import("nodemailer");

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      // İki alıcıya aynı anda gönderim
      to: ['acer.okanumut@gmail.com', 'meltemgoren94@gmail.com'], 
      subject: `🚀 Yeni Proje Başvurusu: ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; border: 1px solid #e5e7eb; border-radius: 10px;">
          <h2 style="color: #2563eb; margin-bottom: 20px;">Yeni Müşteri Başvurusu</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 150px;">📦 Seçilen Paket:</td>
              <td style="padding: 8px 0;">${data.plan}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">👤 Ad Soyad:</td>
              <td style="padding: 8px 0;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">📞 Telefon:</td>
              <td style="padding: 8px 0;"><a href="tel:${data.phone}" style="color: #2563eb; text-decoration: none;">${data.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">📧 E-Posta:</td>
              <td style="padding: 8px 0;">${data.email || 'Belirtilmedi'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">🎨 Mod:</td>
              <td style="padding: 8px 0;">${data.mode.toUpperCase()}</td>
            </tr>
          </table>
          
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin-top: 20px; border-left: 4px solid #2563eb;">
            <strong style="display: block; margin-bottom: 8px; color: #4b5563;">📝 Proje Detayı / Mesaj:</strong>
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.5;">${data.message}</p>
          </div>
          
          <div style="margin-top: 30px; font-size: 12px; color: #9ca3af; text-align: center;">
            Bu mesaj web sitenizdeki iletişim formundan gönderilmiştir.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Mail gönderme hatası:', error);
    return { success: false, error: 'Mail gönderilemedi.' };
  }
}