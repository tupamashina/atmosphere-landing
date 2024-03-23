import { parsePhoneNumberWithError } from 'libphonenumber-js';
import { createTransport } from 'nodemailer';
import {
  object,
  trimmed,
  string,
  union,
  empty,
  refine,
  nonempty,
} from 'superstruct';
import { isEmail } from 'validator';

import type { NextApiHandler } from 'next';

const transporter = createTransport({
  service: 'gmail',
  auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS },
});

const struct = object({
  name: trimmed(string()),

  email: union([
    empty(string()),
    refine(nonempty(trimmed(string())), 'email', (str) => isEmail(str)),
  ]),

  phone: refine(nonempty(trimmed(string())), 'phone', (str) => {
    try {
      return parsePhoneNumberWithError(str, 'RU').isValid();
    } catch {
      return false;
    }
  }),
});

const handler: NextApiHandler = async ({ body }, res) => {
  try {
    const data = struct.validate(body, { coerce: true })[1];
    if (!data) return res.status(400).end();

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'sanosyan@atmosfera-energy.ru',
      subject: '🚨🚨🚨НОВАЯ ЗАЯВКА🚨🚨🚨',
      html: [
        `<p>Телефон: ${data.phone}</p>`,
        `<p>Имя: ${data.name || 'не указано'}</p>`,
        `<p>E-mail: ${data.email || 'не указан'}</p>`,
      ].join(''),
    });

    return res.status(204).end();
  } catch (error) {
    console.error(error);
    return res.status(500).end();
  }
};

export default handler;
