const fs = require('fs');

const file = "c:/abhishek (2)/winsoft-jk-main/winsoft-jk-main/lib/i18n/dictionaries.ts";
let content = fs.readFileSync(file, 'utf8');

const dairyInfoEn = `
    dairyInfo: {
      "title": "Winsoft – Dairy Software Information",
      "intro1": "Dairy farming is done as a supplementary business to agriculture in rural areas. The economic turnover from the dairy business is much higher than sugar factories. Hence, dairy should be viewed as a main business.",
      "intro2": "To strengthen the rural economy, large-scale dairy farming is necessary. For any business to be successful, excellent planning and systematic operations are required. Choosing the right software is crucial for this.",
      "billingTitle": "🧾 Billing Department",
      "billingList": ["Auto and manual deposit deduction in bills", "Facility to keep separate account numbers for Cow/Buffalo", "100% recovery in one click", "Details: Opening balance, Current withdrawal, Current deduction, Total deposit, Balance due, Milk amount", "Online bank transfer of bill amounts", "Interest calculation on advances/deposits"],
      "rebateTitle": "💰 Rebate, Bonus & Deposit",
      "rebateList": ["Rebate, difference, and bonus distribution register", "Auto deposit and interest calculation", "Auto account register updates"],
      "accountingTitle": "📊 Accounting Department",
      "accountingList": ["Easy-to-use software even without accounting knowledge", "Auto-generated reports: Purchase, Sale, Balance Sheet, Profit & Loss"],
      "collectionTitle": "🥛 Collection Department",
      "collectionList": ["Fast milk collection system", "Support for multiple weighing scales and FAT machines", "Milk sales during collection", "Auto rate chart generation", "Old rate can be applied to new collection", "Live info: FAT, SNF, Milk quantity", "Voice announcements (useful for illiterate farmers)", "Adulteration control", "Collection lock facility", "Profit/Loss check via Dairy Register"],
      "companyTitle": "🏢 Company Features",
      "companyList": ["30+ years of experience", "Experienced software engineering team", "Use of modern technology", "Continuously updated software", "Mobile app available", "Phone/Internet support", "Marathi, English, Kannada language support", "Training facilities"],
      "workflowTitle": "⚙️ Software Workflow",
      "workflowList": ["Multiple dairy management in a single organization", "Online data transfer between branches", "Via Mobile App: Purchases, Sales, Feed sales, Shares, Voter list, Cattle info", "Government subsidy records", "Audit reports available", "Facility to lock different departments"],
      "feedTitle": "🌾 Cattle Feed Department",
      "feedList": ["Cattle feed purchase/sale tracking", "Stock information", "Customer receipts", "Account statements on mobile"],
      "appTitle": "📱 Mobile App",
      "appList": ["Daily collection information", "Bills and account statements", "Permanent data storage", "Comparative analysis to help increase milk production"],
      "contactTitle": "📞 Contact",
      "contactName": "Jaywant Late",
      "contactPhone": "9890733526 / 7499758896",
      "contactOffice": "Offices: Kolhapur, Belagavi, Islampur, Sangli"
    },`;

const dairyInfoMr = `
    dairyInfo: {
      "title": "Winsoft – Dairy Software माहिती",
      "intro1": "ग्रामीण भागातील शेतीला जोडधंदा म्हणून दूध व्यवसाय केला जातो. साखर कारखान्यांपेक्षा कितीतरी जास्त पटीने दूध व्यवसायातून आर्थिक उलाढाल होत आहे. म्हणून मुख्य व्यवसाय म्हणून दूध व्यवसायाकडे बघितले पाहिजे.",
      "intro2": "ग्रामीण अर्थव्यवस्था बळकट करायची असेल तर दूध व्यवसाय मोठ्या प्रमाणात करणे गरजेचे आहे. कोणताही व्यवसाय यशस्वी करायचा असेल तर उत्तम नियोजन आणि सुव्यवस्थित कामकाज आवश्यक आहे. यासाठी चांगल्या सॉफ्टवेअरची निवड करणे महत्त्वाचे आहे.",
      "billingTitle": "🧾 Billing विभाग",
      "billingList": ["बिलामध्ये ठेव कपात ऑटो आणि मॅन्युअली घेऊ शकता", "गाय/म्हैस वेगवेगळे खाते नंबर ठेवण्याची सुविधा", "100% वसुली एका क्लिकवर", "आरंभी शिल्लक, चालू उचल, चालू कपात, आजवर ठेव, येणे बाकी, दूध रक्कम माहिती", "ऑनलाइन बँकेत बिल रक्कम ट्रान्सफर", "अॅडव्हान्स/ठेवीवर व्याज गणना"],
      "rebateTitle": "💰 रिबेट, बोनस आणि ठेव विभाग",
      "rebateList": ["रिबेट, फरक, बोनस वाटप रजिस्टर", "ठेव व व्याज गणना ऑटो", "खाते रजिस्टर अपडेट ऑटो"],
      "accountingTitle": "📊 Accounting विभाग",
      "accountingList": ["अकाउंटिंग माहिती नसली तरी वापरता येणारे सोपे सॉफ्टवेअर", "ऑटो तयार होणारे रिपोर्ट: खरेदी, विक्री, ताळेबंद, नफा-तोटा"],
      "collectionTitle": "🥛 संकलन विभाग",
      "collectionList": ["जलद दूध संकलन प्रणाली", "एकापेक्षा जास्त वजन काटे व FAT मशीन सपोर्ट", "संकलन चालू असताना दूध विक्री", "दरपत्रक ऑटो तयार", "जुना दर नवीन संकलनावर लागू करता येतो", "लाईव्ह माहिती: FAT, SNF, दूध", "आवाजाद्वारे माहिती (अनपढ लोकांसाठी उपयोगी)", "भेसळ नियंत्रण", "संकलन लॉक सुविधा", "डेअरी रजिस्टरद्वारे नफा/तोटा तपास"],
      "companyTitle": "🏢 कंपनी वैशिष्ट्ये",
      "companyList": ["30 वर्षांचा अनुभव", "अनुभवी सॉफ्टवेअर इंजिनिअर टीम", "आधुनिक तंत्रज्ञान वापर", "सतत अपडेट होणारे सॉफ्टवेअर", "मोबाईल अॅप उपलब्ध", "फोन/इंटरनेट सपोर्ट", "मराठी, इंग्रजी, कन्नड भाषा सपोर्ट", "ट्रेनिंग सुविधा"],
      "workflowTitle": "⚙️ Software कार्यपद्धती",
      "workflowList": ["एकाच संस्थेत अनेक डेअरी व्यवस्थापन", "शाखांमधील ऑनलाइन डेटा ट्रान्सफर", "मोबाईल अॅपद्वारे: खरेदी, विक्री, खाद्य विक्री, शेअर्स, मतदार यादी, जनावरांची माहिती", "शासकीय अनुदान रेकॉर्ड", "ऑडिट रिपोर्ट्स उपलब्ध", "वेगवेगळे विभाग लॉक करण्याची सुविधा"],
      "feedTitle": "🌾 खाद्य विभाग",
      "feedList": ["पशुखाद्य खरेदी/विक्री ट्रॅकिंग", "स्टॉक माहिती", "ग्राहक पावती", "मोबाईलवर खाते उतारा"],
      "appTitle": "📱 मोबाईल अॅप",
      "appList": ["रोजचे संकलन माहिती", "बिल आणि खाते उतारा", "कायमस्वरूपी डेटा स्टोरेज", "तुलना करून दूध उत्पादन वाढवण्यास मदत"],
      "contactTitle": "📞 संपर्क",
      "contactName": "जयवंत लाटे",
      "contactPhone": "9890733526 / 7499758896",
      "contactOffice": "ऑफिस: कोल्हापूर, बेळगाव, इस्लामपूर, सांगली"
    },`;

const dairyInfoHi = `
    dairyInfo: {
      "title": "विनसॉफ्ट - डेयरी सॉफ्टवेयर जानकारी",
      "intro1": "ग्रामीण क्षेत्रों में डेयरी फार्मिंग कृषि के पूरक व्यवसाय के रूप में की जाती है। डेयरी व्यवसाय से आर्थिक कारोबार चीनी कारखानों की तुलना में कई गुना अधिक है। इसलिए डेयरी को मुख्य व्यवसाय के रूप में देखा जाना चाहिए।",
      "intro2": "ग्रामीण अर्थव्यवस्था को मजबूत करने के लिए बड़े पैमाने पर डेयरी व्यवसाय आवश्यक है। किसी भी व्यवसाय को सफल बनाने के लिए उत्कृष्ट योजना और व्यवस्थित संचालन की आवश्यकता होती है। इसके लिए सही सॉफ्टवेयर चुनना महत्वपूर्ण है।",
      "billingTitle": "🧾 बिलिंग विभाग",
      "billingList": ["बिलों में ऑटो और मैनुअल जमा कटौती", "गाय/भैंस के लिए अलग खाता नंबर रखने की सुविधा", "एक क्लिक में 100% वसूली", "विवरण: प्रारंभिक शेष, वर्तमान निकासी, वर्तमान कटौती, कुल जमा, देय शेष, दूध की राशि", "बिल राशि का ऑनलाइन बैंक ट्रांसफर", "अग्रिम/जमा पर ब्याज की गणना"],
      "rebateTitle": "💰 छूट, बोनस और जमा",
      "rebateList": ["छूट, अंतर और बोनस वितरण रजिस्टर", "ऑटो जमा और ब्याज की गणना", "ऑटो खाता रजिस्टर अपडेट"],
      "accountingTitle": "📊 अकाउंटिंग विभाग",
      "accountingList": ["अकाउंटिंग ज्ञान के बिना भी उपयोग में आसान सॉफ्टवेयर", "स्वतः उत्पन्न रिपोर्ट: खरीद, बिक्री, बैलेंस शीट, लाभ और हानि"],
      "collectionTitle": "🥛 संकलन विभाग",
      "collectionList": ["तेज दूध संग्रह प्रणाली", "कई वजन तराजू और FAT मशीनों के लिए समर्थन", "संग्रह के दौरान दूध की बिक्री", "ऑटो रेट चार्ट जनरेशन", "पुराना रेट नए संग्रह पर लागू किया जा सकता है", "लाइव जानकारी: FAT, SNF, दूध की मात्रा", "आवाज घोषणाएं (अनपढ़ किसानों के लिए उपयोगी)", "मिलावट नियंत्रण", "संग्रह लॉक सुविधा", "डेयरी रजिस्टर के माध्यम से लाभ/हानि की जांच"],
      "companyTitle": "🏢 कंपनी की विशेषताएं",
      "companyList": ["30+ वर्षों का अनुभव", "अनुभवी सॉफ्टवेयर इंजीनियरिंग टीम", "आधुनिक तकनीक का उपयोग", "लगातार अपडेट होने वाला सॉफ्टवेयर", "मोबाइल ऐप उपलब्ध", "फोन/इंटरनेट सपोर्ट", "मराठी, अंग्रेजी, कन्नड़ भाषा समर्थन", "प्रशिक्षण सुविधाएं"],
      "workflowTitle": "⚙️ सॉफ्टवेयर कार्यप्रणाली",
      "workflowList": ["एक ही संगठन में कई डेयरी प्रबंधन", "शाखाओं के बीच ऑनलाइन डेटा ट्रांसफर", "मोबाइल ऐप के माध्यम से: खरीद, बिक्री, फ़ीड बिक्री, शेयर, मतदाता सूची, मवेशी जानकारी", "सरकारी सब्सिडी रिकॉर्ड", "ऑडिट रिपोर्ट उपलब्ध", "विभिन्न विभागों को लॉक करने की सुविधा"],
      "feedTitle": "🌾 पशु चारा विभाग",
      "feedList": ["पशु चारा खरीद/बिक्री ट्रैकिंग", "स्टॉक की जानकारी", "ग्राहक रसीदें", "मोबाइल पर खाता विवरण"],
      "appTitle": "📱 मोबाइल ऐप",
      "appList": ["दैनिक संग्रह की जानकारी", "बिल और खाता विवरण", "स्थायी डेटा भंडारण", "दूध उत्पादन बढ़ाने में मदद के लिए तुलनात्मक विश्लेषण"],
      "contactTitle": "📞 संपर्क करें",
      "contactName": "जयवंत लाटे",
      "contactPhone": "9890733526 / 7499758896",
      "contactOffice": "कार्यालय: कोल्हापुर, बेलगावी, इस्लामपुर, सांगली"
    },`;

const dairyInfoKn = `
    dairyInfo: {
      "title": "ವಿನ್‌ಸಾಫ್ಟ್ - ಡೈರಿ ಸಾಫ್ಟ್‌ವೇರ್ ಮಾಹಿತಿ",
      "intro1": "ಗ್ರಾಮೀಣ ಪ್ರದೇಶಗಳಲ್ಲಿ ಕೃಷಿಗೆ ಪೂರಕ ವ್ಯವಹಾರವಾಗಿ ಹೈನುಗಾರಿಕೆ ಮಾಡಲಾಗುತ್ತದೆ. ಡೈರಿ ವ್ಯವಹಾರದ ಆರ್ಥಿಕ ವಹಿವಾಟು ಸಕ್ಕರೆ ಕಾರ್ಖಾನೆಗಳಿಗಿಂತ ಹಲವು ಪಟ್ಟು ಹೆಚ್ಚಾಗಿದೆ. ಆದ್ದರಿಂದ ಡೈರಿಯನ್ನು ಮುಖ್ಯ ವ್ಯವಹಾರವಾಗಿ ನೋಡಬೇಕು.",
      "intro2": "ಗ್ರಾಮೀಣ ಆರ್ಥಿಕತೆಯನ್ನು ಬಲಪಡಿಸಲು, ದೊಡ್ಡ ಪ್ರಮಾಣದ ಡೈರಿ ವ್ಯವಹಾರ ಅಗತ್ಯ. ಯಾವುದೇ ವ್ಯವಹಾರವು ಯಶಸ್ವಿಯಾಗಲು, ಅತ್ಯುತ್ತಮ ಯೋಜನೆ ಮತ್ತು ವ್ಯವಸ್ಥಿತ ಕಾರ್ಯಾಚರಣೆಗಳ ಅಗತ್ಯವಿದೆ. ಇದಕ್ಕಾಗಿ ಸರಿಯಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅನ್ನು ಆಯ್ಕೆ ಮಾಡುವುದು ನಿರ್ಣಾಯಕ.",
      "billingTitle": "🧾 ಬಿಲ್ಲಿಂಗ್ ವಿಭಾಗ",
      "billingList": ["ಬಿಲ್‌ಗಳಲ್ಲಿ ಸ್ವಯಂ ಮತ್ತು ಹಸ್ತಚಾಲಿತ ಠೇವಣಿ ಕಡಿತ", "ಹಸು/ಎಮ್ಮೆಗೆ ಪ್ರತ್ಯೇಕ ಖಾತೆ ಸಂಖ್ಯೆಗಳನ್ನು ಇರಿಸುವ ಸೌಲಭ್ಯ", "ಒಂದೇ ಕ್ಲಿಕ್‌ನಲ್ಲಿ 100% ವಸೂಲಾತಿ", "ವಿವರಗಳು: ಆರಂಭಿಕ ಶಿಲ್ಕು, ಪ್ರಸ್ತುತ ಹಿಂತೆಗೆದುಕೊಳ್ಳುವಿಕೆ, ಪ್ರಸ್ತುತ ಕಡಿತ, ಒಟ್ಟು ಠೇವಣಿ, ಬಾಕಿ, ಹಾಲಿನ ಮೊತ್ತ", "ಬಿಲ್ ಮೊತ್ತದ ಆನ್‌ಲೈನ್ ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆ", "ಮುಂಗಡ/ಠೇವಣಿಗಳ ಮೇಲಿನ ಬಡ್ಡಿ ಲೆಕ್ಕಾಚಾರ"],
      "rebateTitle": "💰 ರಿಯಾಯಿತಿ, ಬೋನಸ್ ಮತ್ತು ಠೇವಣಿ",
      "rebateList": ["ರಿಯಾಯಿತಿ, ವ್ಯತ್ಯಾಸ ಮತ್ತು ಬೋನಸ್ ವಿತರಣೆ ರಿಜಿಸ್ಟರ್", "ಸ್ವಯಂ ಠೇವಣಿ ಮತ್ತು ಬಡ್ಡಿ ಲೆಕ್ಕಾಚಾರ", "ಸ್ವಯಂ ಖಾತೆ ರಿಜಿಸ್ಟರ್ ನವೀಕರಣಗಳು"],
      "accountingTitle": "📊 ಅಕೌಂಟಿಂಗ್ ವಿಭಾಗ",
      "accountingList": ["ಅಕೌಂಟಿಂಗ್ ಜ್ಞಾನವಿಲ್ಲದೆ ಬಳಸಲು ಸುಲಭವಾದ ಸಾಫ್ಟ್‌ವೇರ್", "ಸ್ವಯಂ-ರಚಿತ ವರದಿಗಳು: ಖರೀದಿ, ಮಾರಾಟ, ಬ್ಯಾಲೆನ್ಸ್ ಶೀಟ್, ಲಾಭ ಮತ್ತು ನಷ್ಟ"],
      "collectionTitle": "🥛 ಸಂಗ್ರಹಣೆ ವಿಭಾಗ",
      "collectionList": ["ವೇಗದ ಹಾಲು ಸಂಗ್ರಹಣೆ ವ್ಯವಸ್ಥೆ", "ಬಹು ತೂಕದ ಮಾಪಕಗಳು ಮತ್ತು FAT ಯಂತ್ರಗಳಿಗೆ ಬೆಂಬಲ", "ಸಂಗ್ರಹಣೆಯ ಸಮಯದಲ್ಲಿ ಹಾಲು ಮಾರಾಟ", "ಸ್ವಯಂ ದರ ಚಾರ್ಟ್ ರಚನೆ", "ಹೊಸ ಸಂಗ್ರಹಣೆಗೆ ಹಳೆಯ ದರವನ್ನು ಅನ್ವಯಿಸಬಹುದು", "ಲೈವ್ ಮಾಹಿತಿ: FAT, SNF, ಹಾಲಿನ ಪ್ರಮಾಣ", "ಧ್ವನಿ ಪ್ರಕಟಣೆಗಳು (ಅನಕ್ಷರಸ್ಥ ರೈತರಿಗೆ ಉಪಯುಕ್ತ)", "ಕಲಬೆರಕೆ ನಿಯಂತ್ರಣ", "ಸಂಗ್ರಹಣೆ ಲಾಕ್ ಸೌಲಭ್ಯ", "ಡೈರಿ ರಿಜಿಸ್ಟರ್ ಮೂಲಕ ಲಾಭ/ನಷ್ಟ ಪರಿಶೀಲನೆ"],
      "companyTitle": "🏢 ಕಂಪನಿಯ ವೈಶಿಷ್ಟ್ಯಗಳು",
      "companyList": ["30+ ವರ್ಷಗಳ ಅನುಭವ", "ಅನುಭವಿ ಸಾಫ್ಟ್‌ವೇರ್ ಎಂಜಿನಿಯರಿಂಗ್ ತಂಡ", "ಆಧುನಿಕ ತಂತ್ರಜ್ಞಾನದ ಬಳಕೆ", "ನಿರಂತರವಾಗಿ ನವೀಕರಿಸಿದ ಸಾಫ್ಟ್‌ವೇರ್", "ಮೊಬೈಲ್ ಅಪ್ಲಿಕೇಶನ್ ಲಭ್ಯವಿದೆ", "ಫೋನ್/ಇಂಟರ್ನೆಟ್ ಬೆಂಬಲ", "ಮರಾಠಿ, ಇಂಗ್ಲಿಷ್, ಕನ್ನಡ ಭಾಷಾ ಬೆಂಬಲ", "ತರಬೇತಿ ಸೌಲಭ್ಯಗಳು"],
      "workflowTitle": "⚙️ ಸಾಫ್ಟ್‌ವೇರ್ ಕೆಲಸದ ಹರಿವು",
      "workflowList": ["ಒಂದೇ ಸಂಸ್ಥೆಯಲ್ಲಿ ಬಹು ಡೈರಿ ನಿರ್ವಹಣೆ", "ಶಾಖೆಗಳ ನಡುವೆ ಆನ್‌ಲೈನ್ ಡೇಟಾ ವರ್ಗಾವಣೆ", "ಮೊಬೈಲ್ ಅಪ್ಲಿಕೇಶನ್ ಮೂಲಕ: ಖರೀದಿ, ಮಾರಾಟ, ಫೀಡ್ ಮಾರಾಟ, ಷೇರುಗಳು, ಮತದಾರರ ಪಟ್ಟಿ, ಜಾನುವಾರು ಮಾಹಿತಿ", "ಸರ್ಕಾರಿ ಸಬ್ಸಿಡಿ ದಾಖಲೆಗಳು", "ಆಡಿಟ್ ವರದಿಗಳು ಲಭ್ಯವಿದೆ", "ವಿವಿಧ ಇಲಾಖೆಗಳನ್ನು ಲಾಕ್ ಮಾಡುವ ಸೌಲಭ್ಯ"],
      "feedTitle": "🌾 ಜಾನುವಾರು ಆಹಾರ ವಿಭಾಗ",
      "feedList": ["ಜಾನುವಾರು ಆಹಾರ ಖರೀದಿ/ಮಾರಾಟ ಟ್ರ್ಯಾಕಿಂಗ್", "ಸ್ಟಾಕ್ ಮಾಹಿತಿ", "ಗ್ರಾಹಕರ ರಶೀದಿಗಳು", "ಮೊಬೈಲ್‌ನಲ್ಲಿ ಖಾತೆ ಹೇಳಿಕೆಗಳು"],
      "appTitle": "📱 ಮೊಬೈಲ್ ಅಪ್ಲಿಕೇಶನ್",
      "appList": ["ದೈನಂದಿನ ಸಂಗ್ರಹಣೆ ಮಾಹಿತಿ", "ಬಿಲ್‌ಗಳು ಮತ್ತು ಖಾತೆ ಹೇಳಿಕೆಗಳು", "ಶಾಶ್ವತ ಡೇಟಾ ಸಂಗ್ರಹಣೆ", "ಹಾಲು ಉತ್ಪಾದನೆಯನ್ನು ಹೆಚ್ಚಿಸಲು ಸಹಾಯ ಮಾಡುವ ತುಲನಾತ್ಮಕ ವಿಶ್ಲೇಷಣೆ"],
      "contactTitle": "📞 ಸಂಪರ್ಕ",
      "contactName": "ಜಯವಂತ್ ಲಾಟೆ",
      "contactPhone": "9890733526 / 7499758896",
      "contactOffice": "ಕಚೇರಿಗಳು: ಕೊಲ್ಹಾಪುರ, ಬೆಳಗಾವಿ, ಇಸ್ಲಾಂಪುರ, ಸಾಂಗ್ಲಿ"
    },`;

content = content.replace("en: {", "en: {" + dairyInfoEn);
content = content.replace("mr: {", "mr: {" + dairyInfoMr);
content = content.replace("hi: {", "hi: {" + dairyInfoHi);
content = content.replace("kn: {", "kn: {" + dairyInfoKn);

fs.writeFileSync(file, content, 'utf8');
