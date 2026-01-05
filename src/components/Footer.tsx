import { Instagram } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* Brand */}
          <div>
            <div className="flex flex-col mb-4">
              <span className="font-serif text-lg font-semibold text-primary">
                KKS Tuning
              </span>
              <span className="text-xs tracking-widest text-muted-foreground">
                {t.footer.tagline}
              </span>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a
                  href="#uber-uns"
                  className="hover:text-accent transition-colors"
                >
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a
                  href="#leistungen"
                  className="hover:text-accent transition-colors"
                >
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a
                  href="#galerie"
                  className="hover:text-accent transition-colors"
                >
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a
                  href="#kontakt"
                  className="hover:text-accent transition-colors"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              {t.contact.label}
            </h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a
                  href="tel:+41795052825"
                  className="hover:text-accent transition-colors"
                >
                  +41 79 505 28 25
                </a>
              </li>
              <li>
                <a
                  href="mailto:tuning.kks@gmail.com"
                  className="hover:text-accent transition-colors"
                >
                  tuning.kks@gmail.com
                </a>
              </li>
              <li className="text-xs">
                Solothurnerstrasse 341<br />
                4600 Olten
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              Folge uns
            </h4>
            <a
              href="https://www.instagram.com/kks_tuning"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-accent transition-colors"
            >
              <Instagram className="h-5 w-5" />
              Instagram
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t pt-8">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} KKS Tuning GmbH. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
