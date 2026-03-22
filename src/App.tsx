import { useState, useEffect, type ReactNode } from "react";
import { useInViewFade } from "./hooks/useInViewFade";
import Typewriter from "./Typewriter";
import logoImg from "./assets/logo.png";
import heroImg1 from "./assets/1.jpeg";
import heroImg2 from "./assets/2.jpeg";
import heroImg3 from "./assets/3.jpeg";

export default function App() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  const heroImages = [heroImg1, heroImg2, heroImg3];

  // Auto-rotate carousel
  useEffect(() => {
    if (heroImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div
      dir="rtl"
      lang="ar"
      className="bg-surface text-on-surface antialiased min-h-screen"
    >
      {/* ──────────────────────────────────────────────── */}
      {/* Navigation */}
      {/* ──────────────────────────────────────────────── */}
      <nav className="fixed top-0 w-full z-50 glass-nav shadow-[0px_20px_40px_rgba(0,107,81,0.06)]">
        <div className="flex flex-row-reverse justify-between items-center w-full px-6 sm:px-8 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <img
              src={logoImg}
              alt="شعار نظام سراج"
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
            />
            <span className="text-2xl sm:text-3xl font-black text-emerald-800 tracking-tight">
              سراج
            </span>
          </div>

          <div className="hidden md:flex flex-row-reverse gap-8 items-center">
            <a
              href="#features"
              className="text-slate-600 hover:text-emerald-600 transition-colors font-medium text-sm"
            >
              المميزات
            </a>
            <a
              href="#how-it-works"
              className="text-slate-600 hover:text-emerald-600 transition-colors font-medium text-sm"
            >
              كيف يعمل
            </a>
            <a
              href="#testimonials"
              className="text-slate-600 hover:text-emerald-600 transition-colors font-medium text-sm"
            >
              آراء العملاء
            </a>
          </div>

          <a
            href="tel:01289352555"
            className="bg-primary-container text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:scale-105 transition-transform active:scale-95"
          >
            تواصل معنا
          </a>
        </div>
      </nav>

      {/* ──────────────────────────────────────────────── */}
      {/* Hero with carousel */}
      {/* ──────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left side - text content */}
          <FadeInSection threshold={0.2}>
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold">
                <span className="material-symbols-outlined text-sm">
                  verified_user
                </span>
                نظام معتمد وموثوق
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl  font-black leading-relaxed md:leading-loose tracking-wide md:tracking-wider">
                ودّع الدفاتر وابدأ إدارة{" "}
                <Typewriter
                  words={["صيدليتك", "محلك", "مصنعك"]}
                  typingSpeed={70}
                  deletingSpeed={40}
                  pauseDelay={3000}
                />{" "}
                <span className="text-black italic">باحتراف</span>
              </h1>

              <p className="text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed">
                نظام سراج يساعدك تدير المبيعات، المخزون، والأرباح بسهولة ومن
                مكان واحد. واجهة عصرية ودقة متناهية.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="tel:01289352555"
                  className="primary-gradient text-white px-8 py-4 sm:px-10 sm:py-5 rounded-xl font-bold text-base sm:text-lg shadow-[0px_20px_40px_rgba(0,107,81,0.15)] hover:scale-105 transition-transform active:scale-95 flex items-center gap-3"
                >
                  <span className="material-symbols-outlined">call</span>
                  اتصل الآن
                </a>
                <a
                  href="https://wa.me/201289352555?text=مرحبا%2C%20أريد%20معرفة%20تفاصيل%20نظام%20سراج"
                  className="bg-white text-primary border border-outline-variant/30 px-8 py-4 sm:px-10 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-surface-container-low transition-colors active:scale-95 flex items-center gap-3"
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    chat
                  </span>
                  تواصل واتساب
                </a>
              </div>

              <div className="flex flex-col gap-2 pt-6 border-r-4 border-primary-fixed pr-4">
                <span className="text-on-surface-variant text-sm font-medium">
                  أرقام الدعم الفني:
                </span>
                <div className="flex flex-wrap gap-4 font-headline font-bold text-lg text-on-surface">
                  <span>01289352555</span>
                  <span className="text-outline-variant opacity-30">|</span>
                  <span>01018297040</span>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Right side - image carousel */}
          <div className="relative group mt-8 md:mt-0">
            <div className="absolute -inset-4 bg-primary-fixed/20 blur-3xl rounded-full"></div>

            <div className="relative bg-surface-container-high rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 aspect-video md:aspect-[4/3] flex items-center justify-center">
              {heroImages.map((imgSrc, index) => (
                <img
                  key={index}
                  src={imgSrc}
                  alt={`واجهة نظام سراج - عرض ${index + 1}`}
                  className={`w-full h-full object-contain transition-opacity duration-800 absolute inset-0 ${
                    index === currentHeroIndex ? "opacity-100" : "opacity-0"
                  }`}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              ))}

              {/* Floating stats card */}
              <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 left-4 sm:left-6 bg-white/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/50 shadow-lg z-10">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-100 flex items-center justify-center text-primary">
                    <span
                      className="material-symbols-outlined text-2xl sm:text-3xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      insights
                    </span>
                  </div>
                  <div>
                    <div className="text-xs text-on-surface-variant">
                      إجمالي مبيعات اليوم
                    </div>
                    <div className="text-lg sm:text-xl font-black text-on-surface font-headline">
                      12,450.50 جنيه
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel dots (only shown if >1 image) */}
            {heroImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentHeroIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentHeroIndex
                        ? "bg-primary scale-125 shadow-md"
                        : "bg-gray-400 hover:bg-primary/60"
                    }`}
                    aria-label={`عرض الصورة ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────── */}
      {/* Problems - with catchy title */}
      {/* ──────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <FadeInSection threshold={0.25}>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-black mb-3 tracking-wide">
                لماذا يعاني معظم أصحاب الأنشطة التجارية؟
              </h2>
              <p className="text-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
                مشاكل يومية تكلفك وقتاً ومالاً... نظام سراج يحلها جذرياً وببساطة
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: "inventory_2",
                title: "أخطاء في الجرد",
                desc: "توقف عن فقدان الأدوية بسبب أخطاء الجرد اليدوي التقليدية.",
              },
              {
                icon: "payments",
                title: "تعب الحسابات",
                desc: "الحسابات اليدوية تستهلك وقتك وتزيد من احتمالية الخطأ المالي.",
              },
              {
                icon: "query_stats",
                title: "صعوبة المتابعة",
                desc: "هل تعرف أرباحك الصافية الحقيقية؟ سراج يوفر لك الإجابة الدقيقة.",
              },
              {
                icon: "schedule",
                title: "ضياع الوقت",
                desc: "البحث عن صنف أو تاريخ صلاحية لا يجب أن يأخذ أكثر من ثانية.",
              },
            ].map((item, i) => (
              <FadeInSection key={i} delay={i * 150} threshold={0.15}>
                <div className="p-6 sm:p-8 rounded-3xl bg-surface-container-lowest border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="text-error mb-6">
                    <span className="material-symbols-outlined text-4xl">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────── */}
      {/* Solution Headline (simple fade) */}
      {/* ──────────────────────────────────────────────── */}
      <FadeInSection threshold={0.3}>
        <section className="py-20 sm:py-24 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
            <div className="inline-block w-16 h-1 bg-primary mb-8 rounded-full"></div>
            <h2 className="text-3xl sm:text-5xl font-black md:leading-relaxed md:tracking-relaxed mb-6 sm:mb-8">
              نظام سراج هو الحل الذكي لإدارة الأنشطة التجارية بسهولة ودقة
            </h2>
            <p className="text-lg text-on-surface-variant">
              تم تصميمه ليكون رفيقك في النجاح، يجمع بين البساطة في الاستخدام
              والذكاء في التقارير.
            </p>
          </div>
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary-fixed/10 blur-[100px] rounded-full"></div>
        </section>
      </FadeInSection>

      {/* ──────────────────────────────────────────────── */}
      {/* Features */}
      {/* ──────────────────────────────────────────────── */}
      <section
        id="features"
        className="py-20 sm:py-24 bg-surface-container-low"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <FadeInSection threshold={0.2}>
            <div className="mb-12 sm:mb-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-black mb-4">
                كل ما تحتاجه في نظام واحد
              </h2>
              <p className="text-on-surface-variant">
                أدوات احترافية صُممت خصيصاً لتناسب احتياجات السوق المصري
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "database",
                title: "قاعدة بيانات جاهزة",
                desc: "تحتوي على آلاف الأصناف بأسعارها المحدثة باستمرار.",
              },
              {
                icon: "search",
                title: "البحث السريع",
                desc: "ابحث بالاسم، الباركود، أو بالكود بلمح البصر.",
              },
              {
                icon: "notification_important",
                title: "تنبيهات المخزون",
                desc: "تنبيهات فورية للنواقص واقتراب انتهاء الصلاحية.",
              },
              {
                icon: "account_balance_wallet",
                title: "البيع النقدي والآجل",
                desc: "إدارة كاملة لحسابات العملاء والديون والمدفوعات.",
              },
              {
                icon: "group",
                title: "إدارة الموظفين",
                desc: "تحديد صلاحيات دقيقة لكل صيدلي أو مدير لضمان الأمان.",
              },
              {
                icon: "analytics",
                title: "تقارير مفصلة",
                desc: "تقارير يومية، أسبوعية وشهرية للأرباح والمصاريف.",
              },
              {
                icon: "barcode_scanner",
                title: "دعم الباركود بالكامل",
                desc: "توافق تام مع جميع أجهزة الباركود وطابعات الفواتير.",
              },
              {
                icon: "domain_add",
                title: "إدارة فروع متعددة",
                desc: "اربط صيدلياتك أو محلاتك كلها في نظام واحد وتابعها من منزلك.",
              },
            ].map((item, i) => (
              <FadeInSection key={i} delay={i * 100} threshold={0.1}>
                <div className="p-6 sm:p-8 rounded-3xl bg-surface-container-lowest hover:bg-secondary-container/30 transition-all duration-300 group hover:shadow-lg">
                  <span
                    className="material-symbols-outlined text-3xl text-primary mb-4 block"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {item.icon}
                  </span>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-on-surface-variant">{item.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* More sections with FadeInSection can be added similarly ... */}

      {/* ──────────────────────────────────────────────── */}
      {/* How it works */}
      {/* ──────────────────────────────────────────────── */}
      <section
        id="how-it-works"
        className="py-20 sm:py-24 bg-surface-container-lowest overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
          <FadeInSection threshold={0.2}>
            <div className="mb-12 sm:mb-16">
              <h2 className="text-3xl font-black">خطوات بسيطة للبدء</h2>
              <div className="w-12 h-1 bg-primary-fixed mt-2"></div>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-10 sm:gap-12 relative">
            {[
              {
                step: 1,
                title: "تثبيت البرنامج",
                desc: "يقوم فريقنا الفني بتثبيت النظام على أجهزتك وضبط الإعدادات.",
              },
              {
                step: 2,
                title: "إدخال البيانات",
                desc: "استيراد أصنافك الحالية من ملف Excel أو البدء بالداتا الجاهزة لدينا.",
              },
              {
                step: 3,
                title: "البدء فوراً",
                desc: "ابدأ في البيع وإصدار الفواتير ومتابعة أرباحك من اللحظة الأولى.",
              },
            ].map((item, i) => (
              <FadeInSection key={item.step} delay={i * 200} threshold={0.15}>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl primary-gradient text-white flex items-center justify-center text-2xl font-black mb-6 sm:mb-8 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 sm:mb-4">
                    {item.title}
                  </h3>
                  <p className="text-on-surface-variant">{item.desc}</p>
                </div>
              </FadeInSection>
            ))}

            <div className="hidden md:block absolute top-8 left-16 right-16 h-px bg-outline-variant/30 -z-0"></div>
          </div>
        </div>
      </section>
      {/* ──────────────────────────────────────────────── */}
      {/* Testimonials */}
      {/* ──────────────────────────────────────────────── */}
      <FadeInSection threshold={0.3}>
        <section
          id="testimonials"
          className="py-20 sm:py-24 bg-surface-container-low"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <h2 className="text-3xl font-black mb-12 sm:mb-16 text-center">
              ماذا يقول العملاء عنا؟
            </h2>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {[
                {
                  name: "د. محمد علي",
                  pharmacy: "صيدلية الرحمة - القاهرة",
                  text: "نظام سراج نقل صيدليتي لمستوى تاني تماماً. الحسابات بقت أسهل بكتير والجرد مابقاش بياخد وقت خالص. الدعم الفني محترم جداً.",
                },
                {
                  name: "د. سارة محمود",
                  pharmacy: "صيدلية النخبة - الإسكندرية",
                  text: "أفضل حاجة في البرنامج سهولة البحث عن الأدوية والمواد الفعالة. ساعدني جداً في إدارة النواقص وتنبيهات الصلاحية.",
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className="p-8 sm:p-10 rounded-[2rem] bg-surface-container-lowest shadow-sm border border-white/40"
                >
                  <div className="flex gap-1 text-primary mb-6">
                    {Array(5)
                      .fill(0)
                      .map((_, idx) => (
                        <span
                          key={idx}
                          className="material-symbols-outlined text-primary text-3xl"
                          style={{
                            fontVariationSettings: "'FILL' 1, 'wght' 500",
                          }}
                        >
                          star
                        </span>
                      ))}
                  </div>
                  <p className="text-lg leading-relaxed mb-8 italic text-on-surface font-medium">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary font-bold">
                      {t.name[3]}
                    </div>
                    <div>
                      <div className="font-bold">{t.name}</div>
                      <div className="text-sm text-on-surface-variant">
                        {t.pharmacy}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ──────────────────────────────────────────────── */}
      {/* Final CTA */}
      {/* ──────────────────────────────────────────────── */}
      <FadeInSection threshold={0.3}>
        <section className="py-20 sm:py-24">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <div className="primary-gradient rounded-[2rem] sm:rounded-[3rem] p-10 sm:p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>

              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
                  ابدأ الآن ووفّر وقتك وزوّد أرباحك
                </h2>
                <p className="text-lg sm:text-xl opacity-90 mb-10 sm:mb-12 max-w-2xl mx-auto">
                  انضم لمئات الأنشطة التجارية والصناعية الناجحة التي تعتمد على
                  سراج يومياً. اطلب عرض سعر مجاني اليوم.
                </p>

                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                  <a
                    href="tel:01289352555"
                    className="bg-white text-primary px-8 py-4 sm:px-10 sm:py-5 rounded-2xl font-bold text-base sm:text-lg hover:scale-105 transition-transform flex items-center gap-3 hover:scale-105 transition-transform duration-300"
                  >
                    <span className="material-symbols-outlined">call</span>
                    اتصال مباشر
                  </a>

                  <a
                    href="https://wa.me/201289352555?text=مرحبا%2C%20أريد%20معرفة%20تفاصيل%20نظام%20سراج"
                    className="bg-emerald-900/30 backdrop-blur-md border border-white/30 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-2xl font-bold text-base sm:text-lg hover:bg-emerald-900/50 transition-colors flex items-center gap-3"
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      chat
                    </span>
                    واتساب
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
      {/* ──────────────────────────────────────────────── */}
      {/* Footer */}
      {/* ──────────────────────────────────────────────── */}
      <footer className="bg-slate-50 border-t border-slate-200">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center w-full px-6 sm:px-8 py-10 sm:py-12 max-w-7xl mx-auto gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-emerald-800">
              نظام سراج للمحاسبة
            </span>
          </div>

          <div className="flex flex-row-reverse gap-6 sm:gap-8">
            <a
              href="#"
              className="text-slate-500 hover:text-emerald-500 transition-colors text-sm"
            >
              الخصوصية
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-emerald-500 transition-colors text-sm"
            >
              الشروط والأحكام
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-emerald-500 transition-colors text-sm"
            >
              الدعم الفني
            </a>
          </div>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} نظام سراج للمحاسبة. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>

      {/* Mobile FAB */}

      <div className="fixed bottom-6 left-6 flex flex-col gap-4 md:hidden z-50">
        <a
          href="https://wa.me/01018297040"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg active:scale-95 transition-all"
        >
          <span
            className="material-symbols-outlined text-3xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            chat
          </span>
        </a>
        <a
          href="tel:01289352555"
          className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-3xl">call</span>
        </a>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────
// Reusable wrapper component using your hook
// ────────────────────────────────────────────────
function FadeInSection({
  children,
  threshold = 0.1,
  delay = 0,
}: {
  children: ReactNode;
  threshold?: number;
  delay?: number;
}) {
  const { ref, isVisible } = useInViewFade(threshold);

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
