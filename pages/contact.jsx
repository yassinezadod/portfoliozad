import { useState, useRef } from 'react';
import BannerLayout from '../components/Common/BannerLayout';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail, HiUser } from 'react-icons/hi';
import { BsChatTextFill } from 'react-icons/bs';
import { HiOutlineBookOpen } from 'react-icons/hi';
import Footer from '../components/Footer';
import { Modal } from 'antd';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    // Tes identifiants EmailJS — remplace par les tiens
    const serviceID = 'default_service'; 
    const templateID = 'template_h6yxovr'; 
    const userID = 'CyTofKohqeIXMepBf';

    emailjs.sendForm(serviceID, templateID, formRef.current, userID)
      .then(() => {
        setSending(false);
        setIsOpen(true);
        e.target.reset();
      })
      .catch((err) => {
        setSending(false);
        alert('Échec de l’envoi du message, veuillez réessayer plus tard.');
        console.error('EmailJS error:', err);
      });
  };

  return (
    <BannerLayout>
      <div className="px-6 py-6 max-w-5xl mx-auto text-Snow">
        {/* Contact Info */}
        <section className="my-8">
          <h1 className="text-2xl font-bold mb-6">Informations de contact</h1>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Location Card */}
            <div className="flex-1 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
              <div className="flex justify-between mb-4">
                <span className="font-semibold text-lg">Pays</span>
                <span className="text-gray-300">Morocco</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="font-semibold text-lg">Ville</span>
                <span className="text-gray-300">Agadir</span>
              </div>
            </div>
            {/* Contact Details Card */}
            <div className="flex-1 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
              <div className="flex justify-between mb-4">
                <span className="font-semibold text-lg">Email</span>
                <a
                  href="mailto:yassinezadod@gmail.com"
                  className="text-gray-300 hover:text-green-500 transition"
                >
                  yassinezadod@gmail.com
                </a>
              </div>
              <div className="flex justify-between mb-4">
                <span className="font-semibold text-lg">LinkedIn :</span>
                <a
                  href="https://linkedin.com/in/yassine-zadod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-500 transition"
                >
                  yassinezadod
                </a>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-lg">Téléphone</span>
                <span className="text-gray-300">(+212) 622277134</span>
              </div>
            </div>
          </div>
        </section>

        {/* Social Icons */}
        <section className="flex justify-center gap-12 text-4xl text-Snow mb-12">
          <a
            href="mailto:yassinezadod@gmail.com"
            className="hover:text-green-400 transform hover:scale-125 transition-transform duration-500"
            aria-label="Email"
          >
            <HiMail />
          </a>
          <a
            href="https://github.com/yassinezadod"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transform hover:scale-125 transition-transform duration-500"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yassine-zadod"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transform hover:scale-125 transition-transform duration-500"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </section>

        {/* Contact Form */}
        <section className="max-w-3xl mx-auto mb-20">
          <h2 className="text-2xl font-bold mb-6">Contactez-moi</h2>
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-white/20"
          >
            {/* Name Input */}
            <div className="relative mb-6">
              <HiUser className="absolute left-3 top-3 text-green-400 text-xl pointer-events-none" />
              <input
                type="text"
                name="from_name"
                placeholder="Nom"
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-transparent border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              />
            </div>
            {/* Email Input */}
            <div className="relative mb-6">
              <HiMail className="absolute left-3 top-3 text-green-400 text-xl pointer-events-none" />
              <input
                type="email"
                name="reply_to"
                placeholder="Email"
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-transparent border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              />
            </div>
            <div className="relative mb-6">
              <HiOutlineBookOpen className="absolute left-3 top-3 text-green-400 text-xl pointer-events-none" />
              <input
                type="text"
                name="to_name"
                placeholder="Sujet"
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-transparent border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              />
            </div>

            {/* Message Textarea */}
            <div className="relative mb-6">
              <BsChatTextFill className="absolute left-3 top-3 text-green-400 text-lg pointer-events-none" />
              <textarea
                name="message"
                rows={6}
                placeholder="Message"
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-transparent border border-white/30 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={sending}
              className={`w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors duration-300 ${
                sending ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {sending ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>
          </form>
        </section>
      </div>

      {/* Modal */}
      <Modal
        className="card_stylings backdrop-blur-3xl drop-shadow-2xl"
        centered
        open={isOpen}
        footer={null}
        closable={false}
        onOk={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-green-400 font-bold text-2xl mb-4">Message envoyé</h1>
          <p className="text-Snow">Merci de m'avoir contacté !</p>
        </div>
      </Modal>

      <Footer />
    </BannerLayout>
  );
};

export default Contact;