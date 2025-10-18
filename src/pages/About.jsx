export default function About() {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-lightBg dark:bg-darkBg flex items-center justify-center mt-10 py-16 px-6"
    >
      <div className="max-w-6xl w-full">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:w-1/2">
            <div className="text-right mb-8">
              <div className="inline-block bg-gradient-to-r from-primary to-accentColor p-1 rounded-full mb-4">
                <div className="bg-white dark:bg-darkBg rounded-full p-3">
                  <span className="text-2xl">👥</span>
                </div>
              </div>
              <h1 className="text-4xl font-bold text-lightText dark:text-darkText mb-4">
                من نحن
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-accentColor rounded-full mr-0 ml-auto"></div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 mb-8 border border-gray-100 dark:border-slate-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl text-primary text-right mb-4">✨</div>
              <p className="text-grayText dark:text-grayTextDark leading-relaxed text-lg text-right">
                نحن فريق متخصص في تطوير المواقع والتطبيقات الحديثة، نهدف إلى
                تقديم حلول رقمية مميزة تساعد عملائنا على تحقيق النجاح والتميز.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-lightPrimary to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl p-4 border border-gray-100 dark:border-slate-700 shadow-md group-hover:shadow-lg transition-all duration-300">
                  <div className="text-2xl font-bold text-primary mb-1 transition-transform">
                    +50
                  </div>
                  <div className="text-sm text-grayText dark:text-grayTextDark">
                    مشروع
                  </div>
                </div>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-br from-lightPrimary to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl p-4 border border-gray-100 dark:border-slate-700 shadow-md group-hover:shadow-lg transition-all duration-300">
                  <div className="text-2xl font-bold text-primary mb-1 transition-transform">
                    5+
                  </div>
                  <div className="text-sm text-grayText dark:text-grayTextDark">
                    سنوات
                  </div>
                </div>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-br from-lightPrimary to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl p-4 border border-gray-100 dark:border-slate-700 shadow-md group-hover:shadow-lg transition-all duration-300">
                  <div className="text-2xl font-bold text-primary mb-1 transition-transform">
                    100%
                  </div>
                  <div className="text-sm text-grayText dark:text-grayTextDark">
                    رضا عملاء
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-gradient-to-r from-primary/5 to-accentColor/5 dark:from-primary/10 dark:to-accentColor/10 rounded-2xl p-8 border border-primary/10 dark:border-primary/20 h-full">
              <div className="text-right">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 mr-0 ml-auto">
                  <span className="text-lg">🎯</span>
                </div>
                <h2 className="text-2xl font-semibold text-lightText dark:text-darkText mb-4 text-right">
                  رؤيتنا
                </h2>
                <p className="text-grayText dark:text-grayTextDark leading-relaxed text-right text-lg">
                  نطمح لأن نكون شركاء في نجاح عملائنا عبر تقديم تجربة رقمية
                  مميزة تجمع بين الإبداع والأداء المتميز. نحن نؤمن بأن التميز في
                  التفاصيل هو ما يصنع الفارق الحقيقي.
                </p>
              </div>

              <div className="text-right mt-8">
                <button className="bg-primary hover:bg-primaryHover text-white border-none hover:border-none px-8 py-3 rounded-xl font-medium transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none">
                  تواصل معنا
                </button>
              </div>
            </div>

            <div className="mt-6 bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-100 dark:border-slate-700">
              <div className="text-right">
                <h3 className="text-lg font-semibold text-lightText dark:text-darkText mb-3">
                  لماذا نحن؟
                </h3>
                <ul className="text-grayText dark:text-grayTextDark space-y-2 text-right">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>تصميم عصري وجذاب</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>أداء عالي وسرعة</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>دعم فني متكامل</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
