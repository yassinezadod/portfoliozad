import React from 'react';
import { CONTACTS } from '../../../constants/constants';
import Link from 'next/link';
import { MdEmail, MdPhone } from 'react-icons/md';

const Contact = () => {
  return (
    <div className="flex flex-col gap-4 pt-6">
      {/* Email */}
      <div className="flex items-start gap-3">
        <MdEmail className="text-blue-500 text-xl mt-0.5" />
        <div className="flex flex-col">
          <span className="text-white text-sm font-semibold">Email Address</span>
          <Link
            href={`mailto:${CONTACTS.EMAIL}`}
            className="text-xs text-gray-400 hover:text-Green transition-colors duration-200"
          >
            {CONTACTS.EMAIL}
          </Link>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start gap-3">
        <MdPhone className="text-blue-500 text-xl mt-0.5" />
        <div className="flex flex-col">
          <span className="text-white text-sm font-semibold">Phone</span>
          <span className="text-xs text-gray-400">{CONTACTS.PHONE}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
