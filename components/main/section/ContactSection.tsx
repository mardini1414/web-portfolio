import React from 'react';
import Heading2 from '../text/Heading2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import ContactIcon from '../ContactIcon';

function ContactSection(): React.ReactNode {
  return (
    <section id="contact-section" className="bg-white py-10">
      <div>
        <Heading2 text="Let's chat" className="text-center mb-16" />
        <div className="w-max flex items-center mx-auto">
          <a
            href="mailto:mardini1414@gmail.com"
            className="border bg-black text-slate-100 flex items-center shadow-sm gap-3 text-base font-medium px-4 py-1"
          >
            <div>
              <FontAwesomeIcon icon={faEnvelope} className="w-4" />
            </div>
            Email me
          </a>
          <span className="block mx-4">OR</span>
          <div>
            <div className="flex justify-between gap-4 items-center">
              <ContactIcon
                icon={faWhatsapp}
                url="https://wa.me/+6281385501120"
                delay={0.4}
              />
              <ContactIcon
                icon={faInstagram}
                url="https://instagram.com/mardini1414"
                delay={0.6}
              />
              <ContactIcon
                icon={faLinkedin}
                url="https://linkedin.com/in/mardini1414"
                delay={0.8}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
