import React from "react";

export default function ContactUs() {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-lightBg flex items-center justify-center mt-10 py-16 px-6"
    >
      <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-8 items-center">
        <div className="lg:w-1/2 flex flex-col">
          <div className="mb-8">
            <div className="inline-block bg-gradient-to-r from-primary to-accentColor p-1 rounded-full mb-4">
              <div className="bg-white rounded-full p-3">
                <span className="text-2xl">📞</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-lightText mb-4">
              تواصل معنا
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accentColor rounded-full mr-0 ml-auto"></div>
          </div>

          <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl text-primary text-right mb-4">💬</div>
            <p className="text-grayText leading-relaxed text-lg text-right">
              نحن هنا لمساعدتك! لا تتردد في التواصل معنا لأي استفسار أو لبدء
              مشروعك القادم. فريقنا مستعد للرد عليك في أقرب وقت.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-lightText mb-4 text-right">
              أوقات العمل
            </h3>
            <div className="space-y-2 text-grayText text-right">
              <div className="flex justify-between">
                <span>الأحد - الخميس</span>
                <span>9:00 ص - 6:00 م</span>
              </div>
              <div className="flex justify-between">
                <span>الجمعة - السبت</span>
                <span>إجازة</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 flex flex-col gap-10 w-full">
          {[
            {
              icon: "📧",
              title: "البريد الإلكتروني",
              value: "info@example.com",
            },
            { icon: "📱", title: "الهاتف", value: "+966 50 123 4567" },
            {
              icon: "📍",
              title: "العنوان",
              value: "الرياض، المملكة العربية السعودية",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-lightPrimary to-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <span className="text-xl">{item.icon}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lightText text-lg">
                    {item.title}
                  </h3>
                  <p className="text-grayText">{item.value}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-4 text-center">
            <button className="bg-primary hover:bg-primaryHover border-none hover:border-none text-white px-8 py-3 rounded-xl font-medium transition-colors duration-300 shadow-md hover:shadow-lg">
              تواصل معنا
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
