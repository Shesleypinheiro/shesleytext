import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Palette, Instagram, Youtube, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const socialLinks = useMemo(() => [
    {
      icon: Instagram,
      href: 'https://instagram.com',
      label: 'Instagram'
    },
    {
      icon: Youtube,
      href: 'https://youtube.com',
      label: 'YouTube'
    },
    {
      icon: Facebook,
      href: 'https://facebook.com',
      label: 'Facebook'
    },
    {
      icon: Mail,
      href: 'mailto:contato@resendeletreiros.com',
      label: 'Email'
    }
  ], []);

  const quickLinks = useMemo(() => [
    { to: '/', label: 'Home' },
    { to: '/servicos', label: 'Serviços' },
    { to: '/portfolio', label: 'Portfólio' },
    { to: '/sobre', label: 'Sobre Nós' },
    { to: '/contato', label: 'Contato' }
  ], []);

  const services = useMemo(() => [
    { to: '/servicos?categoria=letreiros', label: 'Letreiros' },
    { to: '/servicos?categoria=fachadas', label: 'Fachadas' },
    { to: '/servicos?categoria=adesivos', label: 'Adesivos' },
    { to: '/servicos?categoria=banners', label: 'Banners' },
    { to: '/servicos?categoria=placas', label: 'Placas' }
  ], []);

  return (
    <footer className="bg-blue-900/20 text-blue-100" role="contentinfo">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 font-heading font-bold text-xl text-blue-100 mb-4" aria-label="Resende Letreiros - Página Inicial">
              <Palette className="h-7 w-7 text-blue-200" aria-hidden="true" />
              <span>Resende Letreiros</span>
            </Link>
            <p className="text-blue-200/80 text-sm mb-6">
              Transforme sua marca com soluções criativas em comunicação visual para um negócio mais impactante.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a 
                  key={label}
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-200/80 hover:text-blue-100 transition-colors"
                  aria-label={label}
                >
                  <Icon size={20} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="md:col-span-1">
            <h3 className="text-blue-100 font-heading font-semibold text-lg mb-5">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map(({ to, label }) => (
                <li key={label}>
                  <Link to={to} className="text-blue-200/80 hover:text-blue-100 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Section */}
          <div className="md:col-span-1">
            <h3 className="text-blue-100 font-heading font-semibold text-lg mb-5">Serviços</h3>
            <ul className="space-y-3">
              {services.map(({ to, label }) => (
                <li key={label}>
                  <Link to={to} className="text-blue-200/80 hover:text-blue-100 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-1">
            <h3 className="text-blue-100 font-heading font-semibold text-lg mb-5">Contato</h3>
            <p className="text-blue-200/80 mb-2">
              <a href="mailto:contato@resendeletreiros.com" className="hover:text-blue-100 transition-colors">
                contato@resendeletreiros.com
              </a>
            </p>
            <p className="text-blue-200/80 mb-6">São Paulo, Brasil</p>
            <Link to="/contato" className="btn-primary inline-block">
              Fale Conosco
            </Link>
          </div>
        </div>

        <div className="border-t border-blue-200/10 mt-12 pt-6 text-center text-blue-200/60 text-sm">
          <p>© {currentYear} Resende Letreiros. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);