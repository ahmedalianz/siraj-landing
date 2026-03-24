import { useState, type ReactNode } from "react";
import { useInViewFade } from "./hooks/useInViewFade";
import Typewriter from "./Typewriter";
import logoImg from "./assets/logo.png";
import heroImg1 from "./assets/1.jpeg";
import heroImg2 from "./assets/2.jpeg";
import heroImg3 from "./assets/3.jpeg";
import heroImg4 from "./assets/4.png";
import heroImg5 from "./assets/5.png";
import heroImg6 from "./assets/6.png";
import heroImg7 from "./assets/7.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { VideoEmbed } from "./VideoEmbed";
import WaveDivider from "./WaveDivider";

const heroImages = [
  heroImg1,
  heroImg2,
  heroImg3,
  heroImg4,
  heroImg5,
  heroImg6,
  heroImg7,
];

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <div
      dir="rtl"
      lang="ar"
      className="antialiased min-h-screen"
      style={{ background: "#f0fdf4" }}
    >
      {/* ──────────────────────────────────────────────── */}
      {/* Navigation */}
      {/* ──────────────────────────────────────────────── */}
      <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm">
        <div className="flex flex-row-reverse justify-between items-center w-full px-6 sm:px-8 py-3.5 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <img
              src={logoImg}
              alt="شعار نظام سراج"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
            />
            <span className="text-xl sm:text-2xl font-black gradient-text tracking-tight">
              نظام سراج للمحاسبة
            </span>
          </div>

          <div className="hidden md:flex flex-row-reverse gap-8 items-center">
            {[
              { href: "#features", label: "المميزات" },
              { href: "#how-it-works", label: "كيف يعمل" },
              { href: "#testimonials", label: "آراء العملاء" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-emerald-600 transition-colors font-semibold text-sm relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 right-0 w-0 group-hover:w-full h-0.5 bg-emerald-500 transition-all duration-300 rounded-full" />
              </a>
            ))}
          </div>

          <a
            href="tel:01289352555"
            className="primary-gradient text-white px-5 py-2.5 rounded-xl font-bold text-sm glow-btn transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 shadow-md"
          >
            <span className="material-symbols-outlined text-base">call</span>
            تواصل معنا
          </a>
        </div>
      </nav>

      {/* ──────────────────────────────────────────────── */}
      {/* Hero with carousel */}
      {/* ──────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-0 md:pt-44 md:pb-0 overflow-hidden hero-bg">
        {/* Floating blobs */}
        <div className="blob absolute w-96 h-96 bg-emerald-200/50 -top-16 -left-24 pointer-events-none" />
        <div className="blob blob-2 absolute w-72 h-72 bg-teal-200/40 bottom-0 right-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Text */}
          <FadeInSection threshold={0.1}>
            <div className="space-y-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-emerald-200 text-emerald-700 text-xs font-bold shadow-sm">
                <span className="material-symbols-outlined text-sm text-emerald-500">
                  verified_user
                </span>
                نظام معتمد وموثوق في مصر
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-relaxed tracking-wide">
                ودّع الدفاتر وابدأ إدارة{" "}
                <span className="gradient-text">
                  <Typewriter
                    words={["نشاطك", "صيدليتك", "محلك", "مصنعك"]}
                    typingSpeed={70}
                    deletingSpeed={40}
                    pauseDelay={3000}
                  />
                </span>{" "}
                باحتراف
              </h1>

              <p className="text-base md:text-lg text-slate-600 max-w-lg leading-relaxed">
                نظام سراج يساعدك تدير المبيعات، المخزون، العملاء والموردين
                والموظفين والأرباح بسهولة ومن مكان واحد. واجهة عصرية ودقة
                متناهية.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="tel:01289352555"
                  className="primary-gradient text-white px-8 py-4 rounded-2xl font-bold text-base shadow-lg glow-btn transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-3"
                >
                  <span className="material-symbols-outlined">call</span>
                  اتصل الآن
                </a>
                <a
                  href="https://wa.me/201289352555?text=مرحبا%2C%20أريد%20معرفة%20تفاصيل%20نظام%20سراج"
                  className="bg-white/90 text-emerald-700 border border-emerald-200 px-8 py-4 rounded-2xl font-bold text-base hover:bg-white transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-sm"
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

              <div className="flex flex-col gap-2 pt-4 border-r-4 border-emerald-400 pr-4">
                <span className="text-slate-500 text-xs font-semibold">
                  أرقام الدعم الفني:
                </span>
                <div className="flex flex-wrap gap-4 font-black text-lg text-slate-800">
                  <span>01289352555</span>
                  <span className="text-slate-300">|</span>
                  <span>01102876777</span>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Right side - image carousel */}
          <FadeInSection threshold={0.1} delay={150}>
            <div className="relative mt-8 md:mt-0 w-[90vw] md:w-full">
              <div className="absolute -inset-3 bg-emerald-300/15 blur-3xl rounded-full pointer-events-none" />
              <div className="absolute -inset-1 bg-gradient-to-br from-emerald-200/40 to-teal-200/20 rounded-[2.5rem] pointer-events-none" />
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 4500, disableOnInteraction: false }}
                pagination={{ clickable: true, dynamicBullets: true }}
                loop={true}
                className="rounded-[2rem] overflow-hidden shadow-2xl border border-white/60 aspect-video md:aspect-[4/3]"
                dir="rtl"
              >
                {heroImages.map((imgSrc, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={imgSrc}
                      alt={`نظام سراج ${index + 1}`}
                      className="w-full h-full object-contain bg-white"
                      loading={index === 0 ? "eager" : "lazy"}
                      onClick={() => setSelectedImage(imgSrc)}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </FadeInSection>
        </div>

        {/* Wave transition */}
        <div className="mt-16">
          <WaveDivider fromColor="#f0fdf4" toColor="#ecfdf5" />
        </div>
      </section>
      <section className="pb-16" style={{ background: "#ecfdf5" }}>
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <FadeInSection threshold={0.2}>
            <h2 className="text-2xl font-black text-slate-800 mb-8">
              شاهد كيف يعمل نظام سراج
            </h2>
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/60 aspect-video">
              <VideoEmbed videoId="SA5wdqJVrD4" title="شرح نظام سراج" />
            </div>
          </FadeInSection>
        </div>
      </section>
      <WaveDivider fromColor="#ecfdf5" toColor="#059669" flip />

      {/* ── Problems ── */}
      <section className="pt-20 sm:pt-24" style={{ background: "#ecfdf5" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <FadeInSection threshold={0.2}>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-black mb-3 text-slate-800">
                لماذا يعاني معظم أصحاب الأنشطة التجارية؟
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-base">
                مشاكل يومية تكلفك وقتاً ومالاً... نظام سراج يحلها جذرياً وببساطة
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "inventory_2",
                title: "أخطاء في الجرد",
                desc: "توقف عن فقدان الأصناف بسبب أخطاء الجرد اليدوي التقليدية.",
              },
              {
                icon: "payments",
                title: "تعب الحسابات",
                desc: "الحسابات اليدوية تستهلك وقتك وتزيد من احتمالية الخطأ المالي.",
              },
              {
                icon: "query_stats",
                title: "صعوبة المتابعة",
                desc: "هل تعرف أرباحك الصافية الحقيقية؟ نظام سراج للمحاسبة يوفر لك الإجابة الدقيقة.",
              },
              {
                icon: "schedule",
                title: "ضياع الوقت",
                desc: "البحث عن صنف أو رصيد عميل أو مورد أو تاريخ صلاحية لا يجب أن يأخذ أكثر من ثانية.",
              },
            ].map((item, i) => (
              <FadeInSection key={i} delay={i * 120} threshold={0.1}>
                <div className="glass-card p-7 rounded-3xl card-hover h-full">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center mb-5">
                    <span className="material-symbols-outlined text-red-400 text-2xl">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-slate-800">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fromColor="#ecfdf5" toColor="#f0fdf4" />

      {/* ── Solution Headline ── */}
      <FadeInSection threshold={0.3}>
        <section
          className="py-20 sm:py-28 relative overflow-hidden"
          style={{ background: "#f0fdf4" }}
        >
          <div className="blob absolute w-80 h-80 bg-emerald-100/60 top-0 left-0 pointer-events-none" />
          <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
            <div className="inline-block w-14 h-1 bg-emerald-400 mb-8 rounded-full" />
            <h2 className="text-3xl sm:text-5xl font-black leading-relaxed text-slate-800 mb-6">
              نظام سراج للمحاسبة هو{" "}
              <span className="gradient-text">الحل الذكي</span> لإدارة الأنشطة
              التجارية بسهولة ودقة
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              تم تصميمه ليكون رفيقك في النجاح، يجمع بين البساطة في الاستخدام
              والذكاء في التقارير.
            </p>
          </div>
        </section>
      </FadeInSection>

      {/* ── Features ── */}
      <section
        id="features"
        className="py-20 sm:py-24"
        style={{ background: "#ecfdf5" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <FadeInSection threshold={0.2}>
            <div className="mb-12 sm:mb-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-black mb-3 text-slate-800">
                كل ما تحتاجه في نظام واحد
              </h2>
              <p className="text-slate-500">
                أدوات احترافية صُممت خصيصاً لتناسب احتياجات السوق المصري
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: "database",
                title: "قاعدة بيانات جاهزة",
                desc: "تحتوي على آلاف الأصناف بأسعارها المحدثة باستمرار.",
              },
              {
                icon: "search",
                title: "البحث السريع",
                desc: "ابحث بالاسم، الباركود، أو الكود بلمح البصر.",
              },
              {
                icon: "notification_important",
                title: "تنبيهات المخزون",
                desc: "تنبيهات فورية للنواقص تحت الحد الأدنى والمنتهية واقتراب انتهاء الصلاحية.",
              },
              {
                icon: "account_balance_wallet",
                title: "البيع النقدي والآجل جملة أو قطاعي",
                desc: "إدارة كاملة لحسابات العملاء والديون والمدفوعات.",
              },
              {
                icon: "group",
                title: "إدارة الموظفين",
                desc: "تحديد صلاحيات دقيقة لكل موظف أو مدير لضمان الأمان.",
              },
              {
                icon: "analytics",
                title: "تقارير مفصلة",
                desc: "تقارير يومية، أسبوعية وشهرية للأرباح والمصاريف والمخزون.",
              },
              {
                icon: "barcode_scanner",
                title: "دعم جميع أنظمة الباركود بالكامل",
                desc: "توافق تام مع جميع أجهزة الباركود وطابعات الفواتير.",
              },
              {
                icon: "domain_add",
                title: "إدارة فروع متعددة",
                desc: "اربط مصانعك أو محلاتك كلها في نظام واحد وتابعها من منزلك.",
              },
            ].map((item, i) => (
              <FadeInSection key={i} delay={i * 80} threshold={0.08}>
                <div className="glass-card p-6 rounded-3xl card-hover h-full group">
                  <div className="icon-pill">
                    <span
                      className="material-symbols-outlined text-2xl text-emerald-600"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {item.icon}
                    </span>
                  </div>
                  <h4 className="font-bold text-base mb-2 text-slate-800">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fromColor="#ecfdf5" toColor="#f0fdf4" />

      {/* ── How it works ── */}
      <section
        id="how-it-works"
        className="pb-20 sm:pb-28 overflow-hidden"
        style={{ background: "#f0fdf4" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
          <FadeInSection threshold={0.2}>
            <div className="mb-12 sm:mb-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-800">
                خطوات بسيطة للبدء
              </h2>
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
              <FadeInSection key={item.step} delay={i * 180} threshold={0.12}>
                <div className="glass-card rounded-3xl p-8 relative overflow-hidden card-hover">
                  <span className="step-number">{item.step}</span>
                  <div className="w-14 h-14 rounded-2xl primary-gradient text-white flex items-center justify-center text-2xl font-black mb-6 shadow-lg relative z-10">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-800 relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed relative z-10">
                    {item.desc}
                  </p>
                </div>
              </FadeInSection>
            ))}
            <div className="hidden md:block absolute top-10 left-20 right-20 h-px border-t border-dashed border-emerald-300" />
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section
        id="testimonials"
        className="py-20 sm:py-24"
        style={{ background: "#ecfdf5" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <FadeInSection threshold={0.2}>
            <div className="mb-12 sm:mb-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-800">
                ماذا يقول العملاء عنا؟
              </h2>
            </div>
          </FadeInSection>

          <FadeInSection threshold={0.1}>
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true, dynamicBullets: true }}
              loop={true}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1.5 },
                1024: { slidesPerView: 2.5 },
              }}
              dir="rtl"
              className="pb-10"
            >
              {[
                {
                  name: "أ/احمد رضوان",
                  place: "مصنع البراء بنهطاي",
                  text: "نظام سراج نقل مصنعي لمستوى تاني تماماً. الحسابات بقت أسهل بكتير والجرد مابقاش بياخد وقت خالص. الدعم الفني محترم جداً.",
                },
                {
                  name: "د. محمد فريد",
                  place: "تاج للمنظفات - السنطة",
                  text: "أفضل حاجة في البرنامج سهولة البحث عن الأصناف ودمج الباركود والوحدات. ساعدني جداً في إدارة النواقص.",
                },
                {
                  name: "أ/أحمد رشاد",
                  place: "رؤية للبصريات",
                  text: "كنت استهلك الوقت والجهد في البحث عن الكشف والمقاسات السابقة للعميل ساعدني نظام سراج في المقارنة بينهم بسهولة.",
                },
                {
                  name: "أ/محمد المتولي",
                  place: "مول مكتبة البلد",
                  text: "نظام سراج للمحاسبة سهل عليا كتير في شاشة البيع وقدرت احدد الكتب لكل ترم واختيارها في لحظات.",
                },
                {
                  name: "أ/ شادي جمال العكل",
                  place: "محلات أنجال الحاج جمال - المنشأة الكبرى",
                  text: "مع نظام سراج قدرت اضيف كل وحدات الأصناف اللي عندي مهما كان عددها وانشاء باركود خاص بها من خلال البرنامج.",
                },
                {
                  name: "أ. محمد القصاص",
                  place: "مصنع القصاص للكيماويات والمنظفات - زفتى",
                  text: "كنت بتعب في تجميع وحصر الفوارغ لكن البرنامج ده بيعرفني رصيدها عند العميل في لحظة.",
                },
              ].map((t, i) => (
                <SwiperSlide key={i}>
                  <div className="glass-card p-7 sm:p-8 rounded-3xl h-full flex flex-col border border-white/60 shadow-sm">
                    <div className="flex gap-0.5 text-amber-400 mb-5">
                      {Array(5)
                        .fill(0)
                        .map((_, idx) => (
                          <span
                            key={idx}
                            className="material-symbols-outlined text-2xl"
                            style={{
                              fontVariationSettings: "'FILL' 1, 'wght' 500",
                            }}
                          >
                            star
                          </span>
                        ))}
                    </div>
                    <p className="text-slate-700 leading-relaxed mb-6 italic flex-1">
                      "{t.text}"
                    </p>
                    <div className="flex items-center gap-3 mt-auto pt-4 border-t border-emerald-100">
                      <div className="w-11 h-11 rounded-full primary-gradient flex items-center justify-center text-white font-bold text-sm shadow">
                        {t.name[3]}
                      </div>
                      <div>
                        <div className="font-bold text-slate-800 text-sm">
                          {t.name}
                        </div>
                        <div className="text-xs text-slate-500">{t.place}</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </FadeInSection>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <FadeInSection threshold={0.25}>
        <section className="py-20 sm:py-24" style={{ background: "#f0fdf4" }}>
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <div className="primary-gradient rounded-[2.5rem] p-10 sm:p-14 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
              {/* Decorative blobs inside CTA */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-56 h-56 bg-teal-300/20 blur-[60px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                  <span className="material-symbols-outlined text-sm">
                    bolt
                  </span>
                  ابدأ اليوم واحصل على عرض خاص
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-5">
                  ابدأ الآن ووفّر وقتك وزوّد أرباحك
                </h2>
                <p className="text-base sm:text-lg opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                  انضم لمئات الأنشطة التجارية والصناعية الناجحة التي تعتمد على
                  نظام سراج للمحاسبة يومياً. اطلب عرض سعر اليوم.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="tel:01289352555"
                    className="bg-white text-emerald-700 px-9 py-4 rounded-2xl font-bold text-base hover:scale-105 transition-transform flex items-center gap-3 shadow-lg"
                  >
                    <span className="material-symbols-outlined">call</span>
                    اتصال مباشر
                  </a>
                  <a
                    href="https://wa.me/201289352555?text=مرحبا%2C%20أريد%20معرفة%20تفاصيل%20نظام%20سراج"
                    className="bg-white/15 backdrop-blur-md border border-white/30 text-white px-9 py-4 rounded-2xl font-bold text-base hover:bg-white/25 transition-colors flex items-center gap-3"
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

      {/* ── Footer ── */}
      <footer
        className="border-t border-emerald-100"
        style={{ background: "#ecfdf5" }}
      >
        <div className="flex flex-col md:flex-row-reverse justify-between items-center w-full px-6 sm:px-8 py-8 max-w-7xl mx-auto gap-4">
          <span className="text-base font-bold text-emerald-700">
            تصميم وبرمجة محمد السيسي
          </span>

          <div className="flex flex-row-reverse gap-6">
            {["الخصوصية", "الشروط والأحكام", "الدعم الفني"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-slate-400 hover:text-emerald-500 transition-colors text-sm font-medium"
              >
                {l}
              </a>
            ))}
          </div>

          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} نظام سراج للمحاسبة. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>

      {/* ── Mobile FAB ── */}
      <div className="fixed bottom-6 left-6 flex flex-col gap-3 md:hidden z-50">
        <a
          href="https://wa.me/201289352555?text=مرحبا%2C%20أريد%20معرفة%20تفاصيل%20نظام%20سراج"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl active:scale-95 transition-all hover:scale-110"
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
          className="w-14 h-14 rounded-full primary-gradient text-white flex items-center justify-center shadow-xl active:scale-95 transition-all hover:scale-110"
        >
          <span className="material-symbols-outlined text-3xl">call</span>
        </a>
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)} // Click outside to close
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
            <img
              src={selectedImage}
              alt="عرض كبير"
              className="max-h-[90vh] max-w-full object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            />

            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/70 text-white p-3 rounded-full hover:bg-black transition-colors"
            >
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   FadeInSection wrapper
───────────────────────────────────────────── */
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
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
