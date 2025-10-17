import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowLeft,
  Send,
} from "lucide-react";

export default function Footer() {
  const colors = {
    lightBg: "#f9fafb",
    lightText: "#1e293b",
    darkBg: "#0f172a",
    darkText: "#e2e8f0",
    primary: "#10b981",
    primaryHover: "#059669",
    grayText: "#64748b",
    grayTextDark: "#94a3b8",
  };

  const quickLinks = [
    { name: "الرئيسية", href: "#" },
    { name: "الكورسات", href: "#" },
    { name: "المدربون", href: "#" },
    { name: "المدونة", href: "#" },
  ];

  const courses = [
    { name: "تطوير الويب", href: "#" },
    { name: "برمجة الموبايل", href: "#" },
    { name: "علم البيانات", href: "#" },
    { name: "التسويق الرقمي", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "فيسبوك" },
    { icon: Instagram, href: "#", label: "انستجرام" },
    { icon: Twitter, href: "#", label: "تويتر" },
    { icon: Youtube, href: "#", label: "يوتيوب" },
  ];

  return (
    <footer
      dir="rtl"
      style={{ backgroundColor: colors.darkBg }}
      className="relative overflow-hidden"
    >
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 right-0 transform translate-y-[-1px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-32"
        >
          <defs>
            <linearGradient
              id="footerGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#f9fafb" />
              <stop offset="50%" stopColor="#f9fafb" />
              <stop offset="100%" stopColor="#f9fafb" />
            </linearGradient>
          </defs>

          <path
            fill="url(#footerGradient)"
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
       82.39-16.72,168.19-17.73,250.45-.39C823.78,31,
       906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,
       214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,
       56.44Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12 mt-20">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div
                style={{ backgroundColor: colors.primary }}
                className="w-10 h-10 rounded-xl flex items-center justify-center"
              >
                <span
                  style={{ color: colors.lightBg }}
                  className="font-bold text-lg"
                >
                  R
                </span>
              </div>
              <h2
                style={{ color: colors.darkText }}
                className="text-2xl font-bold"
              >
                رفيق أكاديمي
              </h2>
            </div>
            <p
              style={{ color: colors.grayTextDark }}
              className="text-sm leading-relaxed mb-6"
            >
              منصة تعليمية رائدة تهدف إلى تمكين الطلاب من خلال محتوى تفاعلي
              متخصص، نساعدك في رحلتك التعليمية لاكتساب المهارات التي تحتاجها
              لسوق العمل.
            </p>

            {/* Newsletter Subscription */}
            <div
              className="bg-white/5 rounded-2xl p-4 border"
              style={{ borderColor: colors.grayText + "20" }}
            >
              <h4
                style={{ color: colors.darkText }}
                className="font-semibold mb-3 text-sm"
              >
                اشترك في النشرة البريدية
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  style={{
                    backgroundColor: colors.darkBg,
                    borderColor: colors.grayText + "30",
                    color: colors.darkText,
                  }}
                  className="flex-1 px-3 py-2 rounded-lg text-sm border focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  style={{
                    backgroundColor: colors.primary,
                    color: colors.lightBg,
                  }}
                  className="p-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              style={{ color: colors.darkText }}
              className="text-lg font-semibold mb-6 pb-2 border-b"
              style={{ borderColor: colors.primary + "40" }}
            >
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    style={{ color: colors.grayTextDark }}
                    className="flex items-center gap-2 text-sm hover:translate-x-[-4px] transition-transform duration-300 group"
                  >
                    <ArrowLeft
                      size={14}
                      style={{ color: colors.primary }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    <span
                      style={{ color: colors.grayTextDark }}
                      className="group-hover:text-primary transition-colors"
                    >
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3
              style={{ color: colors.darkText }}
              className="text-lg font-semibold mb-6 pb-2 border-b"
              style={{ borderColor: colors.primary + "40" }}
            >
              التخصصات
            </h3>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <a
                    href={course.href}
                    style={{ color: colors.grayTextDark }}
                    className="flex items-center gap-2 text-sm hover:translate-x-[-4px] transition-transform duration-300 group"
                  >
                    <ArrowLeft
                      size={14}
                      style={{ color: colors.primary }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    <span
                      style={{ color: colors.grayTextDark }}
                      className="group-hover:text-primary transition-colors"
                    >
                      {course.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              style={{ color: colors.darkText }}
              className="text-lg font-semibold mb-6 pb-2 border-b"
              style={{ borderColor: colors.primary + "40" }}
            >
              تواصل معنا
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div
                  style={{ backgroundColor: colors.primary + "20" }}
                  className="p-2 rounded-lg"
                >
                  <Mail size={16} style={{ color: colors.primary }} />
                </div>
                <div>
                  <p
                    style={{ color: colors.darkText }}
                    className="text-sm font-medium"
                  >
                    البريد الإلكتروني
                  </p>
                  <p style={{ color: colors.grayTextDark }} className="text-sm">
                    info@rafiqacademy.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  style={{ backgroundColor: colors.primary + "20" }}
                  className="p-2 rounded-lg"
                >
                  <Phone size={16} style={{ color: colors.primary }} />
                </div>
                <div>
                  <p
                    style={{ color: colors.darkText }}
                    className="text-sm font-medium"
                  >
                    الهاتف
                  </p>
                  <p style={{ color: colors.grayTextDark }} className="text-sm">
                    +20 100 123 4567
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  style={{ backgroundColor: colors.primary + "20" }}
                  className="p-2 rounded-lg"
                >
                  <MapPin size={16} style={{ color: colors.primary }} />
                </div>
                <div>
                  <p
                    style={{ color: colors.darkText }}
                    className="text-sm font-medium"
                  >
                    العنوان
                  </p>
                  <p style={{ color: colors.grayTextDark }} className="text-sm">
                    القاهرة، مصر
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <p
                style={{ color: colors.darkText }}
                className="text-sm font-medium mb-3"
              >
                تابعنا على
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      style={{
                        backgroundColor: colors.primary + "10",
                        color: colors.primary,
                      }}
                      className="p-2 rounded-lg hover:bg-primary hover:text-lightBg transition-all duration-300 transform hover:scale-110"
                      aria-label={social.label}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{ borderColor: colors.grayText + "20" }}
          className="border-t pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              style={{ color: colors.grayTextDark }}
              className="text-sm text-center md:text-right"
            >
              © {new Date().getFullYear()} Rafiq Academy. جميع الحقوق محفوظة.
            </p>

            <div className="flex gap-6 text-sm">
              <a
                href="#"
                style={{ color: colors.grayTextDark }}
                className="hover:text-primary transition-colors"
              >
                سياسة الخصوصية
              </a>
              <a
                href="#"
                style={{ color: colors.grayTextDark }}
                className="hover:text-primary transition-colors"
              >
                شروط الاستخدام
              </a>
              <a
                href="#"
                style={{ color: colors.grayTextDark }}
                className="hover:text-primary transition-colors"
              >
                الأسئلة الشائعة
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div
        style={{ backgroundColor: colors.primary + "10" }}
        className="absolute bottom-10 left-10 w-40 h-40 rounded-full blur-3xl opacity-20"
      ></div>
      <div
        style={{ backgroundColor: colors.primary + "10" }}
        className="absolute top-20 right-10 w-32 h-32 rounded-full blur-3xl opacity-20"
      ></div>
    </footer>
  );
}
