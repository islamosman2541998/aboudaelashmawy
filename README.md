# مول عبودة العشماوي

واجهة عربية RTL متعددة الصفحات، تعمل مباشرة على Laragon دون build أو تثبيت حزم.

- الرئيسية: `index.html`
- عن المول: `about.html`
- الأقسام والتصفية: `departments.html`
- الأخبار وأرشيف العروض: `news.html`
- الفروع والتواصل: `branches.html`

شغّل من `http://localhost/abouda/` عند تشغيل Apache في Laragon، أو `python -m http.server 8080 --bind 127.0.0.1` ثم افتح `http://127.0.0.1:8080/`.

التصميم في `style.css`، والمحتوى المشترك والبيانات والتفاعلات في `app.js`. الخط Cairo والسلايدر Swiper محفوظان محليًا في `assets/vendor`.

## الأصول والمحتوى

- `aboda/`: الصور الأصلية المقدمة من المستخدم، محفوظة دون تعديل.
- `assets/hero-brand.png`: صورة إعلانية مولدة بهوية المول، وليست صورة فوتوغرافية لفرع حقيقي.
- `assets/logo.png`: نسخة بخلفية شفافة مولدة من اللوجو الأصلي باستخدام أداة image_gen المدمجة.
- رقم التواصل والبريد وصفحة فيسبوك مأخوذة من لقطات المستخدم. بيانات الفروع من منشور المول `654232175_1374565481140380_6415399097539146489_n.jpg`، مع تحديث وصف فرع منوف من لقطة المستخدم.
- منشورات العروض معروضة كأرشيف، دون الادعاء بسريان الأسعار أو نسب الخصم. روابط الخرائط هي بحث باسم الفرع والعنوان وليست إحداثيات موثقة.
- واجهة تعريفية فقط؛ لا توجد مدفوعات أو طلبات أو لوحة إدارة أو قاعدة بيانات.

## موجز توليد الصورة النهائي

الأداة: image_gen المدمجة. المرجع: اللوجو الأصلي.

Create a wide 16:9 hero advertising campaign photograph/composite for Abouda Elashmawy MALL appliance retailer, fully using their brand identity. Reference image is their exact logo, preserve that logo including white Abouda Elashmawy lettering and lemon-yellow MALL and shopping cart, cleanly incorporate it ONCE in the upper LEFT area above the products, away from edges. A refined solid rich cobalt blue (#0564a6) architectural studio background and floor with a single subtle yellow architectural horizontal accent near floor. Arrange realistic premium home appliances on LEFT 60 percent of frame: large graphite double door refrigerator behind, stainless gas stove with oven, modern dark gray front load washing machine, large flat TV with subtle landscape, wall mounted white AC above the group, and a small kitchen blender. Grounded coherent editorial retail photography, accurate realistic scale, attractive softbox lighting, matte blue surfaces and soft contact shadows, no glowing futuristic effects, no floating products, no confetti, no unnecessary pedestals. RIGHT 40 percent should be mostly empty clean rich blue for large Arabic HTML website text to overlay later. Products occupy middle and lower left; top right remains blue for transparent navbar. The visual must clearly say appliance showroom brand campaign, NOT domestic kitchen. Logo is the only text in image. No Arabic text, no sale numbers, no invented claims. Full bleed, polished commercial photography.

Logo prompt: Use case: background-extraction. Edit target is the supplied Abouda Elashmawy MALL logo. Remove ONLY the solid blue background and make it truly transparent. Keep the original shopping cart graphic, white text Abouda Elashmawy and yellow M A L L lettering precisely as the original, no redesign, no added elements, no shadows. Clean alpha edges. Crop reasonably close around the complete logo with small transparent padding.
