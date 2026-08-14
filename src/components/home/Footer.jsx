import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="
        w-full
        theme-surface
        theme-text
        border-t
        theme-border
        transition-colors
        duration-300
      "
      aria-label="Site Footer"
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1800px]
          px-5
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-20
          2xl:px-24
          py-14
          sm:py-18
          md:py-20
          lg:py-24
        "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 xl:gap-16">
          
          {/* Brand Section */}
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="
                font-[family-name:var(--font-serif)]
                text-[24px]
                font-medium
                tracking-[-0.025em]
                theme-brand
                sm:text-[28px]
              "
            >
              Mon&apos;s Craft
            </Link>
            <p
              className="
                max-w-[320px]
                font-[family-name:var(--font-montserrat)]
                text-[9px]
                font-medium
                uppercase
                leading-[1.7]
                tracking-[0.22em]
                theme-brand-muted
                sm:text-[10px]
                sm:tracking-[0.28em]
              "
            >
              PREMIUM HANDCRAFTED FLOWER ARRANGEMENTS AND CREATIVE EVENT STYLING FOR EVERY SPECIAL OCCASION.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3
              className="
                font-[family-name:var(--font-montserrat)]
                text-[8px]
                font-medium
                uppercase
                tracking-[0.35em]
                theme-brand-muted
                sm:text-[9px]
                sm:tracking-[0.4em]
              "
            >
              QUICK LINKS
            </h3>
            <ul className="flex flex-col space-y-3">
              <li>
                <Link
                  href="/"
                  className="
                    font-[family-name:var(--font-montserrat)]
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.22em]
                    theme-brand-muted
                    transition-colors
                    duration-300
                    hover:theme-brand
                    sm:text-[10px]
                  "
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="
                    font-[family-name:var(--font-montserrat)]
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.22em]
                    theme-brand-muted
                    transition-colors
                    duration-300
                    hover:theme-brand
                    sm:text-[10px]
                  "
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/flowers"
                  className="
                    font-[family-name:var(--font-montserrat)]
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.22em]
                    theme-brand-muted
                    transition-colors
                    duration-300
                    hover:theme-brand
                    sm:text-[10px]
                  "
                >
                  Our Collection
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="
                    font-[family-name:var(--font-montserrat)]
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.22em]
                    theme-brand-muted
                    transition-colors
                    duration-300
                    hover:theme-brand
                    sm:text-[10px]
                  "
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col space-y-4">
            <h3
              className="
                font-[family-name:var(--font-montserrat)]
                text-[8px]
                font-medium
                uppercase
                tracking-[0.35em]
                theme-brand-muted
                sm:text-[9px]
                sm:tracking-[0.4em]
              "
            >
              CONTACT
            </h3>
            <address
              className="
                not-italic
                flex
                flex-col
                space-y-3
                font-[family-name:var(--font-montserrat)]
                text-[9px]
                font-medium
                uppercase
                leading-[1.7]
                tracking-[0.22em]
                theme-brand-muted
                sm:text-[10px]
              "
            >
              <span>123 FLORAL AVENUE<br />BOUTIQUE DISTRICT, NY 10001</span>
              <a href="tel:+1234567890" className="transition-colors duration-300 hover:theme-brand w-fit">+1 (234) 567-890</a>
              <a href="mailto:hello@monscraft.com" className="transition-colors duration-300 hover:theme-brand w-fit">hello@monscraft.com</a>
            </address>
          </div>

          {/* Boutique Hours */}
          <div className="flex flex-col space-y-4">
            <h3
              className="
                font-[family-name:var(--font-montserrat)]
                text-[8px]
                font-medium
                uppercase
                tracking-[0.35em]
                theme-brand-muted
                sm:text-[9px]
                sm:tracking-[0.4em]
              "
            >
              BOUTIQUE HOURS
            </h3>
            <div
              className="
                flex
                flex-col
                space-y-1.5
                font-[family-name:var(--font-montserrat)]
                text-[9px]
                font-medium
                uppercase
                tracking-[0.22em]
                theme-brand-muted
                sm:text-[10px]
              "
            >
              <p>MONDAY - SATURDAY</p>
              <p className="theme-brand font-semibold">9:00 AM - 6:00 PM</p>
              <p className="mt-1">SUNDAY: CLOSED</p>
            </div>
          </div>

        </div>

        {/* Copyright & Legal */}
        <div
          className="
            mt-14
            pt-8
            border-t
            theme-border
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            font-[family-name:var(--font-montserrat)]
            text-[8px]
            font-medium
            uppercase
            tracking-[0.2em]
            theme-brand-muted
            space-y-4
            md:space-y-0
            sm:text-[9px]
          "
        >
          <p>&copy; {new Date().getFullYear()} MON&apos;S CRAFT. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="transition-colors duration-300 hover:theme-brand">PRIVACY POLICY</Link>
            <Link href="/terms" className="transition-colors duration-300 hover:theme-brand">TERMS OF SERVICE</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}