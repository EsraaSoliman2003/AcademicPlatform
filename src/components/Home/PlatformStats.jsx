import {
  Users,
  Heart,
  Clock,
  HeadphonesIcon,
  ArrowUp,
  TrendingUp,
} from "lucide-react";

const features = ["جودة عالية", "مرونة كاملة", "دعم مستمر", "نتائج مضمونة"];

const stats = [
  {
    number: "4,532+",
    label: "طالب مسجل",
    icon: Users,
    description: "ينضمون لرحلتنا التعليمية",
    trend: "+12% هذا الشهر",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "96%",
    label: "معدل الرضا",
    icon: Heart,
    description: "من الطلاب راضون تماماً",
    trend: "أعلى تقييم في المنطقة",
    color: "from-emerald-500 to-green-500",
  },
  {
    number: "150+",
    label: "ساعة تعليمية",
    icon: Clock,
    description: "من المحتوى عالي الجودة",
    trend: "محتوى محدث أسبوعياً",
    color: "from-amber-500 to-orange-500",
  },
  {
    number: "24/7",
    label: "دعم فني",
    icon: HeadphonesIcon,
    description: "متاح على مدار الساعة",
    trend: "متوسط وقت الاستجابة 5 دقائق",
    color: "from-violet-500 to-purple-500",
  },
];

export default function PlatformStats() {
  return (
    <section
      dir="rtl"
      className="relative py-20 overflow-hidden from-slate-50 via-white to-emerald-50"
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-lightText mb-6">
            أرقام{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primaryHover">
              تتحدث
            </span>{" "}
            عنا
          </h1>
          <p className="text-xl text-grayText max-w-2xl mx-auto leading-relaxed">
            نفتخر بما حققناه مع آلاف الطلاب الذين وثقوا بنا في رحلتهم التعليمية
            نحو التميز
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
          <div className="xl:col-span-5 h-full">
            <div className="relative bg-gradient-to-br from-darkBg via-slate-900 to-darkBg p-8 rounded-3xl shadow-2xl h-full flex flex-col justify-center items-center border border-slate-700/50 backdrop-blur-sm overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-50"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>

              <div className="relative z-10 text-center space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-primaryHover rounded-2xl shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>

                <h2 className="text-2xl font-bold text-darkText">
                  لماذا <span className="text-primary">نتميز</span>؟
                </h2>

                <p className="text-darkText/90 text-lg leading-relaxed">
                  نفتخر بما حققناه مع آلاف الطلاب الذين وثقوا بنا في رحلتهم
                  التعليمية. من خلال منصتنا، استطعنا تقديم تجربة تعليمية فريدة
                  تجمع بين الجودة والمرونة والابتكار.
                </p>

                <div>
                  <div className="flex justify-between text-sm text-darkText/80 mb-1">
                    <span>تقدمنا نحو التميز</span>
                    <span className="text-primary">85%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-primary to-primaryHover transition-all duration-1000 shadow-lg shadow-primary/25"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  {features.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-darkText/80 text-sm"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="xl:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
            {stats.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-100/80 backdrop-blur-sm transition-all duration-500 overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>
                  <div
                    className={`absolute right-0 top-0 w-1 h-full bg-gradient-to-b ${item.color} opacity-80`}
                  ></div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`p-3 rounded-2xl bg-gradient-to-r ${item.color} text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}
                      >
                        <Icon className="w-6 h-6 relative z-10" />
                        <div className="absolute inset-0 bg-white/20"></div>
                      </div>

                      <div className="text-right">
                        <div className="flex items-center gap-2 justify-end mb-1">
                          <ArrowUp className="w-4 h-4 text-emerald-500" />
                          <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                            {item.trend}
                          </span>
                        </div>
                        <div className="text-3xl font-bold text-lightText">
                          {item.number}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-lightText mb-2">
                      {item.label}
                    </h3>
                    <p className="text-grayText text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${item.color} transition-all duration-1000 ease-out shadow-lg`}
                        style={{ width: `${80 + i * 6}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
