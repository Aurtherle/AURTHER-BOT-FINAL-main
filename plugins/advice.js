let handler = async (m, { conn, text}) => {

m.reply(`*❃ ──────⊰ ❀ ⊱────── ❃*\n\n *"${pickRandom(global.piropo)}"*\n\n *❃ ──────⊰ ❀ ⊱────── ❃*`)
}
handler.tags = ['frases']
handler.command = ['نصيحه','نصائح']
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

global.piropo = [
"استمتع بمذاق الحياة في كل لحظة",
"سامح اعدائك ولكن اياك ان تنسي اسمهم",
"لا تتحج بنقص الوقت فيومك هو نفس يوم العلماء الذين حققوا انجازات عظيمه",
"لا تنتقد اطفالك امام الاخرين مهما حدث",
"لا تدع العقول الصغيرة تقنعك بأن أحلامك أكبر من اللازم",
"لا تتحسر علي الماضي",
"كن متسامح",
"كن طيبا",
"لا تطلب خدمة من شخص الم تساعده 3 مرات علي الاقل",
"الحياة كالمرآة، تحصل على أفضل النتائج حين تبتسم لها",
"لا تعد نعمك بل استخدمها لتسعد الاخرين", 
"كثير من إخفاقات الحياة هى لأناس لم يدركوا كم كانوا قريبين من بلوغ النجاح", 
"كرهك لشخص ما لايعني انه علي خطأ", 
"كن اكثر لطفا وحكمة يوما بعد يوم", 
"لا تنس ان الناس ينجزون ما تدفع لهم مقابله وليس ما تامرهم به", 
"اتقي الله في كل شيء", 
"لا تضيع طاقتك في الرد على الانتقادات", 
"اهتم بجسمك وصحتك العقلية", 
"كن مراقب نفسك، مشجع نفسك، مُلزم نفسك، مكافئ نفسك، مقيم نفسك، لا تنتظر شئ من أحد", 
"إنّ الكمال في كل شيء مستحيل، فمن طبيعة الحياة أن تكون ناقصة لكي تسعى في سبيل سد هذا النقص فلا تقف", 
"النجاح هو المواظبة ولو بالقليل، فالقليل دائم خير من كثير منقطع", 
"ما يُبذل في الإعداد يُختصر في الأداء، فكلما كان الإنسان أداؤه قويًا راسخًا، كلما كان عطاؤه أكثر وأقوى وأعمق", 
"عندما تسمع مدحاً لصديقٍ تعرفه؛ أخبره بذلك.", 
"اهتم بجودة ماتعمل", 
"عود نفسك على العمل تحت أي ظرف بغض النظر عن حالتك المزاجية", 
"لا تخشَ في دين الله لومة لائم، لا تكن محطة النحس التي لا ينصر عندها دين الله عز وجل", 
"قل الحق ولو كان مرا ولو كان علي نفسك - في قول الحق لا تخف في الله لومة لائم واستعمل الحكمة", 
"فما دُمتَ تحاول= فأنت ناجح والفشلُ هو: التوقُّف عن تلك المحاولة فاجعلْ ذلك أمامك كلمّا صُدّتْ نفسُك عن ذلك",
"اعدوا الزاد ليوم مقداره خمسين ألف سنة", 
"لا تضيع طاقتك في الرد على الانتقادات","", 
"الجدير بالذكر أنه يجب أن لا تتعلم لأجل التعلم، تعلم لأجل التطبيق، وتفعيل ما تعلمت في حياتك", 
"لا تملئ عقلك بعلم لم تعمل به، فأنت تضع نفسك في موضوع المحاسبة، وقد يصل للعقاب أيضًا، لأن علمك أن لم يكن حُجة لك كان عليك",
"لا تسمع عني، بل اسمع مني أولًا", 
" قال الخطابي رحمه الله: (فالعزلة إنما تنفع العلماء العقلاء، وهي من أضر شيء على الجهال)", 
"حالتك المزاجية لا علاقة لها بما يجب أن تقوم به", 
"لنعمل شيئًا ليوم التّلاق، فما عندنا ينفذ، وما عند الله باق", 
" بعد عدة سنوات قليلة ستمر بلمح البصر ستكون إما شخص عظيمًا أمام نفسه سعی وحقق حلمه وسيرحل ويترك أثر يحيه بعد موته", 
" إذا فتح الله لك باب من أبواب الخير، فإياك أن تتردد في دخوله، وإن كان بك نقص في الأدوات أو في الإمكانيات", 
"أعظم جريمة في حق المعرفة أن تكون مرادة لذاتها، فالمعرفة والعلم وسيلة، سواء للنجاح أو رضاء الله تبارك وتعالى", 
"ليس هنالك شخصًا أحسن عملًا ممن وُجه لما خلق له، وأيضًا الفقه في الدين ليُحسن أن يكون عبدًا لله، أنت من الله وإليه راجع", 
"العلم من جملة ما يُبتلى به الإنسان، فإذا عمل بما تعلم كان علمًا نافعًا، وإذا لم يعمل به كان حجة عليه أمام الله تبارك وتعالى", 
"لا تتوقع من الناس أن يستجيبوا لنصائحك التي لا تقوم أنت بها من الأساس", 
"كن مراقب نفسك، مشجع نفسك، مُلزم نفسك، مكافئ نفسك، مقيم نفسك، لا تنتظر شئ من أحد", 
"إقرأ القرآن على قدر ما تتمنى من السعادة", 
"عود نفسك إذا عرفت فأعمل وإذا بدأت فأكمل، وإذا اكملت فأطلب الأعلى", 
"عندما تقول أحبك فلا بد أن تعنيها، وعندما تقول أنا آسف انظر لعيني الشخص الذي تكلمه", 
"التعب في نيل الشئ جزء من متعة هذا الشىء", 
" العلم النافع هو ما يُترجم لترك سيئات أو فعل خيرات", 
"عندما يختفي الاحترام في أي علاقة حب أو صداقة عليك بالرحيل", 
"أنت تعمل بالبركة وليس بالقدر", 
"ركز ذهنك على الأشياء الجيدة الكاملة مقارنة بالأشياء الناقصة، واصنع لحظات لا تنسى مع الذين تحبهم",
"حدد ما يحفزك وتجنبه", 
"إذا لم تقدم الإهتمام والوقت، لن تجد الحب في قلب من تحب", 
"إياك ولصوص الوقت", 
"كن لطيفًا مع الجميع، إن الوداع قريب قد يأتي في أي لحظة", 
"الاستنفاع بالوقت لا يأتي إلا بمكافحة النفس والهوى، ومكابدتها بما تكره من ترك الهوى وشهوات النفس", 
"عد الى الله ولو اذنبت الف مرة", 
"الإنسانُ بناء اللَّه، فويلٌ لمن هدمه!", 
"قلل من وقتك على مواقع التواصل", 
"لا أحد يعرف حقا ما يحدث وراء الكواليس في حياة شخص آخر؛ فالجميع يواجهون معاناتهم الخاصة، وحتى مع عدّ ذلك بديهيا، فإننا نحتاج أحيانا أن نذكّر أنفسنا بذلك", 
"إنّ التحرر من خرافة عدم وجود الوقت الكافي هي أولى المحطات التي ننطلق منها إلى حياة منظمة واستغلال أمثل للوقت والحياة بشكل عام"," ألزم نفسك بالامتنان", 
"لا بأس أن تكون متواضعا، ولكن يجب أن تفخر أيضا بما أنجزته؛ فالإفراط في التواضع ضار مثل الإفراط في الثقة بالنفس", 
"تذكر أن الجميع لديهم نقاط ضعف وجوانب لا يريدون أن يطلع عليها أحد، ومن الطبيعي أن تقارن نفسك بالآخرين، فكلنا نشكك في أنفسنا وتنتابنا المخاوف بين الحين والآخر", 
"الشخص الوحيد الذي يمكنك مقارنة نفسك به هو أنت في الماضي", 
"يمكنك اختيار صديق لتحفيز بعضكما البعض لتحقيق أهداف مشتركة، والاحتفال معا، والمساعدة في الالتزام بالخطة", 
"لا تسمح لعاطفتك أن تحيد عن ما تركته منطقيً", 
"لن يحبك الجميع، ولا توجد أية مشكلة في ذلك. لا تفقد ذاتك الحقيقية لتساير الجميع أو لتصبح كما يريد الآخرون", 
"لا تستطيع أن تسكب من كوب فارغ، لذا اعتنِ بنفسك أولاً واعرف ما تحتاج لإعادة ملئه", 
"قل شكرا كل يوم", 
"العالم بحاجه اليك لتحقيق شةء مهم", 
"افضل نصيحه تنبع من قلبك ولكن انصت لعقلك اولا", 
"كلما أسرعت في اتخاذ قرار أن تحب نفسك، ستصبح حياتك أسهل", 
"اعتنِ بجسمك، تأكد من أن تنال قسطًا من الراحة ومارس اليوجا أو أي رياضة، جسمك سيشكرك لاحقًا", 
"أنت تجذب انتباه من يشبهونك وليس من تريد أن تجذبهم", 
"لا تسمح لليأس أن يتسلل إليك واصبر، فالله يجبر الصابرين", 
"توقف عن قول “آسف” إلا إذا اخطأت", 
"اركض خلف احلامك","", 
"أعطِ الناس أكثر مما يتوقعون", 
"اختر دائمًا نفسك", 
] 
  
