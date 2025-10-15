import { Users, Heart, Clock, HeadphonesIcon } from "lucide-react";

export default function PlatformStats() {
  const colors = {
    primary: "#10b981",
    primaryHover: "#059669",
    gray: "#64748b",
    lightBg: "#f9fafb",
    darkText: "#1e293b",
  };

  const stats = [
    {
      number: "4,532+",
      label: "طالب مسجل",
      icon: Users,
      description: "ينضمون لرحلتنا التعليمية",
      trend: "+12% هذا الشهر",
      gradient: "from-emerald-400 to-green-500",
    },
    {
      number: "96%",
      label: "معدل الرضا",
      icon: Heart,
      description: "من الطلاب راضون تماماً",
      trend: "أعلى تقييم في المنطقة",
      gradient: "from-rose-400 to-pink-500",
    },
    {
      number: "150+",
      label: "ساعة تعليمية",
      icon: Clock,
      description: "من المحتوى عالي الجودة",
      trend: "محتوى محدث أسبوعياً",
      gradient: "from-amber-400 to-orange-500",
    },
    {
      number: "24/7",
      label: "دعم فني",
      icon: HeadphonesIcon,
      description: "متاح على مدار الساعة",
      trend: "متوسط وقت الاستجابة 5 دقائق",
      gradient: "from-blue-400 to-cyan-500",
    },
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-cyan-50"></div>

      <div className="absolute top-10 left-10 w-56 h-56 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-32 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-500"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ color: colors.darkText }}
          >
            أرقام <span style={{ color: colors.primary }}>تتحدث</span> عنا
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: colors.gray }}
          >
            نفتخر بما حققناه مع آلاف الطلاب الذين وثقوا بنا في رحلتهم التعليمية
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {stats.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-navbar hover:-translate-y-1 border border-white/20 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-navbar`}
                ></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${item.gradient} text-white shadow-md transform group-hover:scale-110 transition-transform duration-navbar`}
                    >
                      <IconComponent size={24} />
                    </div>
                    <div className="text-right">
                      <div
                        className="text-4xl md:text-5xl font-bold mb-1"
                        style={{ color: colors.darkText }}
                      >
                        {item.number}
                      </div>
                      <div
                        className="text-xs px-2 py-0.5 rounded-full inline-block font-medium"
                        style={{
                          backgroundColor: colors.primary + "15",
                          color: colors.primary,
                        }}
                      >
                        {item.trend}
                      </div>
                    </div>
                  </div>

                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: colors.darkText }}
                  >
                    {item.label}
                  </h3>
                  <p
                    className="text-base mb-3 leading-relaxed"
                    style={{ color: colors.gray }}
                  >
                    {item.description}
                  </p>

                  <div className="w-full bg-gray-200 rounded-full h-1.5 mt-3">
                    <div
                      className={`h-1.5 rounded-full bg-gradient-to-r ${item.gradient} transition-all duration-navbar ease-out`}
                      style={{ width: `${85 + index * 5}%` }}
                    ></div>
                  </div>
                </div>

                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-navbar pointer-events-none bg-gradient-to-r ${item.gradient} blur-xl`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
