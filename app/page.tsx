/**
 * VLORION — Marketing Site
 * ------------------------------------------------------------------
 * A young team reimagining software with AI. This file renders the
 * single-page marketing site: i18n (8 locales), scroll-reveal,
 * active-nav tracking, and a lightweight canvas particle network.
 *
 * Structure:
 *   1. translations   — i18n dictionary, keyed by data-i18n attrs
 *   2. setLanguage()   — swaps textContent for all [data-i18n] nodes
 *   3. useEffect()     — reveal / nav-highlight / back-to-top / canvas
 *   4. JSX             — header, hero, about, services, portfolio,
 *                         team, contact, footer
 * ------------------------------------------------------------------
 */

'use client';

import { useEffect, useState } from 'react';
import './globals.css';

export default function Page() {
    const [emailCopied, setEmailCopied] = useState(false);

    // 多國語言語系設定檔
    const translations: Record<string, Record<string, string>> = {
        'zh-TW': {
            nav_about: '關於我們',
            nav_services: '服務',
            nav_works: '作品',
            nav_team: '團隊',
            nav_contact: '聯繫',
            hero_title: 'VLORION',
            hero_subtitle: '一個年輕團隊，正在用 AI 重新定義軟體開發',
            hero_tagline: '想法。實現。就這麼簡單。',
            hero_cta: '請繼續閱讀',
            about_eyebrow: '// 關於',
            about_title: '關於 VLORION',
            about_vision: '我們的願景',
            about_text1: '我們不是傳統的科技公司。VLORION 是一群相信軟體可以更聰明、更直覺的人，把人工智慧真正帶進日常的產品裡。',
            about_text2: '好的技術，應該讓人感覺不到技術的存在。我們用簡單的方式，解決複雜的問題。',
            about_text3: '從第一行程式碼開始，我們就在打磨每一個細節——因為細節，決定體驗。',
            about_values: '核心價值',
            value1_title: '創新',
            value1_desc: '持續探索前沿技術',
            value2_title: '精準',
            value2_desc: '精確把握客戶需求',
            value3_title: '卓越',
            value3_desc: '追求代碼質量',
            value4_title: '協作',
            value4_desc: '建立長期合作關係',
            services_eyebrow: '// 服務',
            services_title: '我們的服務',
            services_subtitle: '提供全方位的人工智慧和軟體開發解決方案',
            service1_title: 'AI 模型開發',
            service1_desc: '利用深度學習和機器學習技術，開發自定義AI模型，解決複雜的商業問題。',
            service2_title: 'NLP & 文本分析',
            service2_desc: '自然語言處理、情感分析、文本分類等技術應用於業務場景。',
            service3_title: '計算機視覺',
            service3_desc: '圖像識別、物體檢測、人臉識別等視覺AI解決方案。',
            service4_title: '軟體開發',
            service4_desc: 'Web應用、移動應用、桌面應用全棧開發，採用最新技術棧。',
            service5_title: '雲端解決方案',
            service5_desc: 'AWS、Google Cloud、Azure等主流雲平台的架構設計與部署。',
            service6_title: '數據分析',
            service6_desc: '大數據處理、數據可視化、商業智能解決方案。',
            works_eyebrow: '// 作品',
            works_title: '我們的作品',
            works_subtitle: '這裡空空，去其他地方逛逛吧',
            team_eyebrow: '// 團隊',
            team_title: '我們的團隊',
            team_subtitle: '小而精悍，充滿好奇心的開發者',
            team_member1: 'Champ',
            team_role1: '創辦人 & 開發者',
            team_desc1: '一個人扛起 AI 研究、全端開發、數據科學與雲端架構——不是因為經驗有多深，而是因為熱愛把想法做出來。',
            contact_eyebrow: '// 聯繫',
            contact_title: '聯繫我們',
            contact_subtitle: '讓我們一起打造下一代技術解決方案',
            contact_email: '電郵',
            copy_label: '複製',
            copied_label: '已複製',
            contact_phone: '電話',
            contact_address: '地址',
            contact_address_value: '台灣，台中市',
            footer: '© 2026 VLORION. 所有權利保留。專注於人工智慧和軟體開發的創新團隊。',
            footer_ps: 'P.S. 我們團隊非常想舉辦研討會，可惜沒錢。'
        },
        'ja': {
            nav_about: 'について',
            nav_services: 'サービス',
            nav_works: '実績',
            nav_team: 'チーム',
            nav_contact: '連絡する',
            hero_title: 'VLORION',
            hero_subtitle: '若いチームが、AIでソフトウェア開発を再定義する',
            hero_tagline: 'アイデアを、かたちに。それだけ。',
            hero_cta: '続きを読む',
            about_eyebrow: '// について',
            about_title: 'VLORION について',
            about_vision: 'ビジョン',
            about_text1: '私たちは従来のテック企業ではありません。VLORIONは、ソフトウェアはもっと賢く、もっと直感的であるべきだと信じる仲間たちが、AIを日常のプロダクトに届けるチームです。',
            about_text2: '良いテクノロジーは、その存在を感じさせません。私たちはシンプルな方法で、複雑な課題を解決します。',
            about_text3: '最初の1行のコードから、細部にこだわってきました。細部こそが、体験を決めるからです。',
            about_values: 'コア値',
            value1_title: '革新',
            value1_desc: '最先端技術を常に追求',
            value2_title: '精密',
            value2_desc: 'お客様のニーズを的確に把握',
            value3_title: '卓越',
            value3_desc: 'コード品質を追求',
            value4_title: '協働',
            value4_desc: '長期的なパートナーシップを構築',
            services_eyebrow: '// サービス',
            services_title: 'サービス',
            services_subtitle: '包括的なAIとソフトウェア開発ソリューション',
            service1_title: 'AIモデル開発',
            service1_desc: 'ディープラーニングと機械学習技術を使用してカスタムAIモデルを開発し、複雑なビジネス問題を解決します。',
            service2_title: 'NLP とテキスト分析',
            service2_desc: '自然言語処理、感情分析、テキスト分類などのテクノロジーをビジネスシーンに応用します。',
            service3_title: 'コンピュータビジョン',
            service3_desc: '画像認識、物体検出、顔認識などのビジュアルAIソリューション。',
            service4_title: 'ソフトウェア開発',
            service4_desc: 'Web、モバイル、デスクトップアプリケーション、最新のテクノロジースタックを採用した全スタック開発。',
            service5_title: 'クラウドソリューション',
            service5_desc: 'AWS、Google Cloud、Azureなどの主流クラウドプラットフォームのアーキテクチャ設計と展開。',
            service6_title: 'データ分析',
            service6_desc: 'ビッグデータ処理、データ可視化、ビジネスインテリジェンスソリューション。',
            works_eyebrow: '// 実績',
            works_title: '実績',
            works_subtitle: 'ここはまだ空っぽです。他のページも見てみてください',
            team_eyebrow: '// チーム',
            team_title: 'チーム',
            team_subtitle: '小さくても本気、好奇心が原動力',
            team_member1: 'Champ',
            team_role1: '創業者 & 開発者',
            team_desc1: 'AI研究、フルスタック開発、データサイエンス、クラウド構築をひとりで担う。経験の長さではなく、アイデアを形にする情熱で動いています。',
            contact_eyebrow: '// 連絡先',
            contact_title: '連絡する',
            contact_subtitle: '次世代のテクノロジーソリューションを一緒に構築しましょう',
            contact_email: 'メール',
            copy_label: 'コピー',
            copied_label: 'コピーしました',
            contact_phone: '電話',
            contact_address: 'アドレス',
            contact_address_value: '台湾、台中市',
            footer: '© 2026 VLORION. すべての権利を保有します。人工知能とソフトウェア開発に焦点を当てた革新的なチーム。',
            footer_ps: '追伸：本当はカンファレンスを開きたいのですが、予算が許してくれません。'
        },
        'en': {
            nav_about: 'About',
            nav_services: 'Services',
            nav_works: 'Work',
            nav_team: 'Team',
            nav_contact: 'Contact',
            hero_title: 'VLORION',
            hero_subtitle: 'A young team reimagining software with AI',
            hero_tagline: 'Ideas. Made real. That simple.',
            hero_cta: 'Keep Reading',
            about_eyebrow: '// ABOUT',
            about_title: 'About VLORION',
            about_vision: 'Our Vision',
            about_text1: 'We are not a typical tech company. VLORION is a small group who believe software should be smarter and more intuitive — and who bring AI into everyday products.',
            about_text2: 'The best technology disappears into the experience. We solve complex problems the simple way.',
            about_text3: 'From the very first line of code, we obsess over the details — because details are what people actually feel.',
            about_values: 'Core Values',
            value1_title: 'Innovation',
            value1_desc: 'Constantly exploring frontier technology',
            value2_title: 'Precision',
            value2_desc: 'Deeply understanding client needs',
            value3_title: 'Excellence',
            value3_desc: 'Pursuing code quality',
            value4_title: 'Collaboration',
            value4_desc: 'Building long-term partnerships',
            services_eyebrow: '// SERVICES',
            services_title: 'Our Services',
            services_subtitle: 'Comprehensive AI and software development solutions',
            service1_title: 'AI Model Development',
            service1_desc: 'Develop custom AI models using deep learning and machine learning techniques to solve complex business problems.',
            service2_title: 'NLP & Text Analysis',
            service2_desc: 'Technology applications in natural language processing, sentiment analysis, and text classification.',
            service3_title: 'Computer Vision',
            service3_desc: 'Visual AI solutions including image recognition, object detection, and face recognition.',
            service4_title: 'Software Development',
            service4_desc: 'Full-stack development for web, mobile, and desktop applications with latest technology stacks.',
            service5_title: 'Cloud Solutions',
            service5_desc: 'Architecture design and deployment on mainstream cloud platforms like AWS, Google Cloud, and Azure.',
            service6_title: 'Data Analytics',
            service6_desc: 'Big data processing, data visualization, and business intelligence solutions.',
            works_eyebrow: '// WORK',
            works_title: 'Our Work',
            works_subtitle: 'Nothing here yet — go explore the rest of the site',
            team_eyebrow: '// TEAM',
            team_title: 'Our Team',
            team_subtitle: 'Small, sharp, and endlessly curious',
            team_member1: 'Champ',
            team_role1: 'Founder & Builder',
            team_desc1: 'Carries AI research, full-stack development, data science, and cloud infrastructure solo — not because of years on the job, but because of the drive to bring ideas to life.',
            contact_eyebrow: '// CONTACT',
            contact_title: 'Contact Us',
            contact_subtitle: 'Let\'s build next-generation technology solutions together',
            contact_email: 'Email',
            copy_label: 'Copy',
            copied_label: 'Copied',
            contact_phone: 'Phone',
            contact_address: 'Address',
            contact_address_value: 'Taiwan, Taichung City',
            footer: '© 2026 VLORION. All rights reserved. An innovative team focused on artificial intelligence and software development.',
            footer_ps: 'P.S. We\'d love to host a conference. Our budget says otherwise.'
        },
        'ko': {
            nav_about: '소개',
            nav_services: '서비스',
            nav_works: '작업물',
            nav_team: '팀',
            nav_contact: '연락처',
            hero_title: 'VLORION',
            hero_subtitle: '젊은 팀이 AI로 소프트웨어 개발을 다시 씁니다',
            hero_tagline: '아이디어를, 현실로. 그게 전부입니다.',
            hero_cta: '계속 읽어보기',
            about_eyebrow: '// 소개',
            about_title: 'VLORION 소개',
            about_vision: '우리의 비전',
            about_text1: '우리는 평범한 테크 기업이 아닙니다. VLORION은 소프트웨어가 더 똑똑하고 더 직관적이어야 한다고 믿는 사람들이, AI를 일상의 제품 속으로 가져오는 팀입니다.',
            about_text2: '좋은 기술은 존재감을 드러내지 않습니다. 우리는 복잡한 문제를 단순한 방식으로 풉니다.',
            about_text3: '첫 줄의 코드부터, 우리는 디테일에 집중해왔습니다. 디테일이 곧 경험이니까요.',
            about_values: '핵심 가치',
            value1_title: '혁신',
            value1_desc: '최첨단 기술을 끊임없이 탐구',
            value2_title: '정밀',
            value2_desc: '고객의 니즈를 정확히 파악',
            value3_title: '탁월',
            value3_desc: '코드 품질을 추구',
            value4_title: '협업',
            value4_desc: '장기적인 파트너십 구축',
            services_eyebrow: '// 서비스',
            services_title: '우리의 서비스',
            services_subtitle: '포괄적인 AI 및 소프트웨어 개발 솔루션',
            service1_title: 'AI 모델 개발',
            service1_desc: '딥러닝 및 머신러닝 기술을 사용하여 맞춤형 AI 모델을 개발하고 복잡한 비즈니스 문제를 해결합니다.',
            service2_title: 'NLP & 텍스트 분석',
            service2_desc: '자연어 처리, 감정 분석, 텍스트 분류 등의 기술을 비즈니스 시나리오에 적용합니다.',
            service3_title: '컴퓨터 비전',
            service3_desc: '이미지 인식, 물체 감지, 얼굴 인식 등의 시각 AI 솔루션입니다.',
            service4_title: '소프트웨어 개발',
            service4_desc: '최신 기술 스택을 사용한 웹, 모바일, 데스크톱 애플리케이션 풀스택 개발입니다.',
            service5_title: '클라우드 솔루션',
            service5_desc: 'AWS, Google Cloud, Azure 등의 주요 클라우드 플랫폼의 아키텍처 설계 및 배포입니다.',
            service6_title: '데이터 분석',
            service6_desc: '빅데이터 처리, 데이터 시각화, 비즈니스 인텔리전스 솔루션입니다.',
            works_eyebrow: '// 작업물',
            works_title: '우리의 작업물',
            works_subtitle: '아직 여긴 비어 있어요, 다른 곳도 둘러봐 주세요',
            team_eyebrow: '// 팀',
            team_title: '우리의 팀',
            team_subtitle: '작지만 단단하고, 호기심으로 움직이는 팀',
            team_member1: 'Champ',
            team_role1: '창업자 & 빌더',
            team_desc1: 'AI 연구, 풀스택 개발, 데이터 과학, 클라우드 인프라까지 홀로 책임집니다. 오랜 경력보다, 아이디어를 현실로 만드는 열정으로 움직입니다.',
            contact_eyebrow: '// 연락처',
            contact_title: '문의하기',
            contact_subtitle: '함께 차세대 기술 솔루션을 구축하세요',
            contact_email: '이메일',
            copy_label: '복사',
            copied_label: '복사됨',
            contact_phone: '전화',
            contact_address: '주소',
            contact_address_value: '대만, 타이중시',
            footer: '© 2026 VLORION. 모든 권리 보유. 인공지능과 소프트웨어 개발에 중점을 둔 혁신적인 팀.',
            footer_ps: '추신: 컨퍼런스를 정말 열고 싶지만, 예산이 허락하지 않네요.'
        },
        'de': {
            nav_about: 'Über uns',
            nav_services: 'Dienstleistungen',
            nav_works: 'Arbeiten',
            nav_team: 'Team',
            nav_contact: 'Kontakt',
            hero_title: 'VLORION',
            hero_subtitle: 'Ein junges Team, das Softwareentwicklung mit KI neu denkt',
            hero_tagline: 'Ideen. Real gemacht. Mehr braucht es nicht.',
            hero_cta: 'Weiterlesen',
            about_eyebrow: '// ÜBER UNS',
            about_title: 'Über VLORION',
            about_vision: 'Unsere Vision',
            about_text1: 'Wir sind kein typisches Tech-Unternehmen. VLORION ist eine kleine Gruppe, die glaubt, dass Software smarter und intuitiver sein sollte — und die KI in alltägliche Produkte bringt.',
            about_text2: 'Die beste Technologie verschwindet im Erlebnis. Wir lösen komplexe Probleme auf einfache Weise.',
            about_text3: 'Von der ersten Zeile Code an achten wir auf jedes Detail — denn Details sind das, was man wirklich spürt.',
            about_values: 'Kernwerte',
            value1_title: 'Innovation',
            value1_desc: 'Ständige Erkundung von Spitzentechnologien',
            value2_title: 'Präzision',
            value2_desc: 'Kundenbedürfnisse genau erfassen',
            value3_title: 'Exzellenz',
            value3_desc: 'Streben nach Code-Qualität',
            value4_title: 'Zusammenarbeit',
            value4_desc: 'Aufbau langfristiger Partnerschaften',
            services_eyebrow: '// SERVICES',
            services_title: 'Unsere Dienstleistungen',
            services_subtitle: 'Umfassende KI- und Softwareentwicklungslösungen',
            service1_title: 'KI-Modellentwicklung',
            service1_desc: 'Entwicklung benutzerdefinierter KI-Modelle mit Deep-Learning- und Machine-Learning-Techniken zur Lösung komplexer Geschäftsprobleme.',
            service2_title: 'NLP & Textanalyse',
            service2_desc: 'Anwendung von Technologien in Verarbeitung natürlicher Sprache, Stimmungsanalyse und Textklassifizierung.',
            service3_title: 'Bildverarbeitung',
            service3_desc: 'Visuelle KI-Lösungen einschließlich Bilderkennung, Objekterkennung und Gesichtserkennung.',
            service4_title: 'Softwareentwicklung',
            service4_desc: 'Full-Stack-Entwicklung für Web-, Mobil- und Desktop-Anwendungen mit den neuesten Technologie-Stacks.',
            service5_title: 'Cloud-Lösungen',
            service5_desc: 'Architekturdesign und Bereitstellung auf Cloud-Plattformen wie AWS, Google Cloud und Azure.',
            service6_title: 'Datenanalyse',
            service6_desc: 'Big-Data-Verarbeitung, Datenvisualisierung und Business-Intelligence-Lösungen.',
            works_eyebrow: '// ARBEITEN',
            works_title: 'Unsere Arbeiten',
            works_subtitle: 'Hier ist noch nichts – schauen Sie sich gerne woanders um',
            team_eyebrow: '// TEAM',
            team_title: 'Unser Team',
            team_subtitle: 'Klein, scharfsinnig, unermüdlich neugierig',
            team_member1: 'Champ',
            team_role1: 'Gründer & Macher',
            team_desc1: 'Trägt KI-Forschung, Full-Stack-Entwicklung, Data Science und Cloud-Infrastruktur allein — nicht wegen jahrelanger Erfahrung, sondern aus dem Antrieb, Ideen Wirklichkeit werden zu lassen.',
            contact_eyebrow: '// KONTAKT',
            contact_title: 'Kontaktieren Sie uns',
            contact_subtitle: 'Lassen Sie uns gemeinsam Lösungen der nächsten Generation aufbauen',
            contact_email: 'E-Mail',
            copy_label: 'Kopieren',
            copied_label: 'Kopiert',
            contact_phone: 'Telefon',
            contact_address: 'Adresse',
            contact_address_value: 'Taiwan, Taichung',
            footer: '© 2026 VLORION. Alle Rechte vorbehalten. Ein innovatives Team mit Fokus auf künstliche Intelligenz und Softwareentwicklung.',
            footer_ps: 'P.S. Wir würden liebend gern eine Konferenz veranstalten. Unser Budget sieht das leider anders.'
        },
        'ru': {
            nav_about: 'О нас',
            nav_services: 'Услуги',
            nav_works: 'Работы',
            nav_team: 'Команда',
            nav_contact: 'Контакты',
            hero_title: 'VLORION',
            hero_subtitle: 'Молодая команда, переосмысляющая разработку ПО с помощью ИИ',
            hero_tagline: 'Идеи. Воплощённые в реальность. Просто так.',
            hero_cta: 'Читать дальше',
            about_eyebrow: '// О НАС',
            about_title: 'О компании VLORION',
            about_vision: 'Наше видение',
            about_text1: 'Мы не типичная технологическая компания. VLORION — небольшая группа людей, которые верят, что программное обеспечение должно быть умнее и интуитивнее, и которые внедряют ИИ в повседневные продукты.',
            about_text2: 'Лучшая технология незаметна в опыте пользователя. Мы решаем сложные задачи простыми способами.',
            about_text3: 'С самой первой строки кода мы уделяем внимание деталям — ведь именно детали формируют впечатление.',
            about_values: 'Основные ценности',
            value1_title: 'Инновации',
            value1_desc: 'Постоянное исследование передовых технологий',
            value2_title: 'Точность',
            value2_desc: 'Точное понимание потребностей клиентов',
            value3_title: 'Совершенство',
            value3_desc: 'Стремление к качеству кода',
            value4_title: 'Сотрудничество',
            value4_desc: 'Построение долгосрочных партнёрств',
            services_eyebrow: '// УСЛУГИ',
            services_title: 'Наши услуги',
            services_subtitle: 'Комплексные решения в области ИИ и разработки программного обеспечения',
            service1_title: 'Разработка моделей ИИ',
            service1_desc: 'Разработка пользовательских моделей ИИ с использованием методов глубокого обучения и машинного обучения для решения сложных бизнес-проблем.',
            service2_title: 'NLP & анализ текста',
            service2_desc: 'Применение технологий в обработке естественного языка, анализе настроений и классификации текста.',
            service3_title: 'Компьютерное зрение',
            service3_desc: 'Решения визуального ИИ, включая распознавание изображений, обнаружение объектов и распознавание лиц.',
            service4_title: 'Разработка программного обеспечения',
            service4_desc: 'Полнофункциональная разработка веб-, мобильных и десктопных приложений с использованием новейших технологических стеков.',
            service5_title: 'Облачные решения',
            service5_desc: 'Проектирование архитектуры и развёртывание на облачных платформах, таких как AWS, Google Cloud и Azure.',
            service6_title: 'Анализ данных',
            service6_desc: 'Обработка больших данных, визуализация данных и решения бизнес-аналитики.',
            works_eyebrow: '// РАБОТЫ',
            works_title: 'Наши работы',
            works_subtitle: 'Здесь пока пусто — загляните в другие разделы',
            team_eyebrow: '// КОМАНДА',
            team_title: 'Наша команда',
            team_subtitle: 'Небольшая, целеустремленная и вечно любопытная',
            team_member1: 'Champ',
            team_role1: 'Основатель & разработчик',
            team_desc1: 'В одиночку отвечает за исследования ИИ, полнотекстовую разработку, науку о данных и облачную инфраструктуру — не благодаря годам опыта, а благодаря желанию воплощать идеи в жизнь.',
            contact_eyebrow: '// КОНТАКТЫ',
            contact_title: 'Свяжитесь с нами',
            contact_subtitle: 'Давайте вместе создадим решения следующего поколения',
            contact_email: 'Электронная почта',
            copy_label: 'Копировать',
            copied_label: 'Скопировано',
            contact_phone: 'Телефон',
            contact_address: 'Адрес',
            contact_address_value: 'Тайвань, Тайчжун',
            footer: '© 2026 VLORION. Все права защищены. Инновационная команда, сосредоточенная на искусственном интеллекте и разработке программного обеспечения.',
            footer_ps: 'P.S. Мы бы очень хотели провести конференцию. Но бюджет думает иначе.'
        },
        'es': {
            nav_about: 'Acerca de',
            nav_services: 'Servicios',
            nav_works: 'Trabajos',
            nav_team: 'Equipo',
            nav_contact: 'Contacto',
            hero_title: 'VLORION',
            hero_subtitle: 'Un equipo joven reinventando el desarrollo de software con IA',
            hero_tagline: 'Ideas. Hechas realidad. Así de simple.',
            hero_cta: 'Seguir leyendo',
            about_eyebrow: '// NOSOTROS',
            about_title: 'Acerca de VLORION',
            about_vision: 'Nuestra Visión',
            about_text1: 'No somos una empresa tecnológica típica. VLORION es un pequeño grupo que cree que el software debería ser más inteligente e intuitivo, y que lleva la IA a productos cotidianos.',
            about_text2: 'La mejor tecnología desaparece en la experiencia. Resolvemos problemas complejos de forma simple.',
            about_text3: 'Desde la primera línea de código, cuidamos cada detalle, porque los detalles son lo que la gente realmente siente.',
            about_values: 'Valores Principales',
            value1_title: 'Innovación',
            value1_desc: 'Exploración constante de tecnología de vanguardia',
            value2_title: 'Precisión',
            value2_desc: 'Comprensión exacta de las necesidades del cliente',
            value3_title: 'Excelencia',
            value3_desc: 'Búsqueda de la calidad del código',
            value4_title: 'Colaboración',
            value4_desc: 'Construcción de relaciones a largo plazo',
            services_eyebrow: '// SERVICIOS',
            services_title: 'Nuestros Servicios',
            services_subtitle: 'Soluciones integrales de IA y desarrollo de software',
            service1_title: 'Desarrollo de Modelos de IA',
            service1_desc: 'Desarrolle modelos de IA personalizados utilizando técnicas de aprendizaje profundo y aprendizaje automático para resolver problemas empresariales complejos.',
            service2_title: 'NLP & Análisis de Texto',
            service2_desc: 'Aplicación de tecnologías en procesamiento de lenguaje natural, análisis de sentimientos y clasificación de texto.',
            service3_title: 'Visión por Computadora',
            service3_desc: 'Soluciones de IA visual que incluyen reconocimiento de imágenes, detección de objetos y reconocimiento facial.',
            service4_title: 'Desarrollo de Software',
            service4_desc: 'Desarrollo full-stack para aplicaciones web, móviles y de escritorio con pilas tecnológicas de última generación.',
            service5_title: 'Soluciones en la Nube',
            service5_desc: 'Diseño de arquitectura e implementación en plataformas en la nube como AWS, Google Cloud y Azure.',
            service6_title: 'Análisis de Datos',
            service6_desc: 'Procesamiento de big data, visualización de datos y soluciones de inteligencia empresarial.',
            works_eyebrow: '// TRABAJOS',
            works_title: 'Nuestros Trabajos',
            works_subtitle: 'Aquí no hay nada todavía, échale un vistazo al resto del sitio',
            team_eyebrow: '// EQUIPO',
            team_title: 'Nuestro Equipo',
            team_subtitle: 'Pequeño, ágil, y sin límite de curiosidad',
            team_member1: 'Champ',
            team_role1: 'Fundador & Constructor',
            team_desc1: 'Lleva en solitario la investigación de IA, el desarrollo full-stack, la ciencia de datos y la infraestructura en la nube, no por años de experiencia, sino por las ganas de convertir ideas en realidad.',
            contact_eyebrow: '// CONTACTO',
            contact_title: 'Contáctenos',
            contact_subtitle: 'Construyamos juntos soluciones de próxima generación',
            contact_email: 'Correo electrónico',
            copy_label: 'Copiar',
            copied_label: 'Copiado',
            contact_phone: 'Teléfono',
            contact_address: 'Dirección',
            contact_address_value: 'Taiwán, Taichung',
            footer: '© 2026 VLORION. Todos los derechos reservados. Un equipo innovador enfocado en inteligencia artificial y desarrollo de software.',
            footer_ps: 'P. D. Nos encantaría organizar una conferencia. Nuestro presupuesto opina distinto.'
        },
        'pt': {
            nav_about: 'Sobre',
            nav_services: 'Serviços',
            nav_works: 'Trabalhos',
            nav_team: 'Equipe',
            nav_contact: 'Contato',
            hero_title: 'VLORION',
            hero_subtitle: 'Uma equipe jovem reinventando o desenvolvimento de software com IA',
            hero_tagline: 'Ideias. Feitas realidade. É simples assim.',
            hero_cta: 'Continue lendo',
            about_eyebrow: '// SOBRE',
            about_title: 'Sobre VLORION',
            about_vision: 'Nossa Visão',
            about_text1: 'Não somos uma empresa de tecnologia típica. A VLORION é um pequeno grupo que acredita que o software deveria ser mais inteligente e intuitivo, trazendo IA para produtos do dia a dia.',
            about_text2: 'A melhor tecnologia desaparece na experiência. Resolvemos problemas complexos de forma simples.',
            about_text3: 'Desde a primeira linha de código, cuidamos de cada detalhe, porque é o detalhe que as pessoas realmente sentem.',
            about_values: 'Valores Principais',
            value1_title: 'Inovação',
            value1_desc: 'Exploração constante de tecnologia de ponta',
            value2_title: 'Precisão',
            value2_desc: 'Compreensão exata das necessidades do cliente',
            value3_title: 'Excelência',
            value3_desc: 'Busca pela qualidade do código',
            value4_title: 'Colaboração',
            value4_desc: 'Construção de parcerias de longo prazo',
            services_eyebrow: '// SERVIÇOS',
            services_title: 'Nossos Serviços',
            services_subtitle: 'Soluções abrangentes de IA e desenvolvimento de software',
            service1_title: 'Desenvolvimento de Modelos de IA',
            service1_desc: 'Desenvolva modelos de IA personalizados usando técnicas de aprendizagem profunda e aprendizado de máquina para resolver problemas empresariais complexos.',
            service2_title: 'PNL & Análise de Texto',
            service2_desc: 'Aplicação de tecnologias em processamento de linguagem natural, análise de sentimentos e classificação de texto.',
            service3_title: 'Visão Computacional',
            service3_desc: 'Soluções de IA visual, incluindo reconhecimento de imagens, detecção de objetos e reconhecimento facial.',
            service4_title: 'Desenvolvimento de Software',
            service4_desc: 'Desenvolvimento full-stack para aplicações web, móveis e de desktop com pilhas tecnológicas mais recentes.',
            service5_title: 'Soluções em Nuvem',
            service5_desc: 'Design de arquitetura e implantação em plataformas em nuvem como AWS, Google Cloud e Azure.',
            service6_title: 'Análise de Dados',
            service6_desc: 'Processamento de big data, visualização de dados e soluções de inteligência empresarial.',
            works_eyebrow: '// TRABALHOS',
            works_title: 'Nossos Trabalhos',
            works_subtitle: 'Ainda não há nada aqui, dá uma olhada no resto do site',
            team_eyebrow: '// EQUIPE',
            team_title: 'Nossa Equipe',
            team_subtitle: 'Pequena, afiada e movida por curiosidade',
            team_member1: 'Champ',
            team_role1: 'Fundador & Criador',
            team_desc1: 'Assume sozinho a pesquisa de IA, desenvolvimento full-stack, ciência de dados e infraestrutura em nuvem — não por anos de experiência, mas pela vontade de transformar ideias em realidade.',
            contact_eyebrow: '// CONTATO',
            contact_title: 'Contate-nos',
            contact_subtitle: 'Vamos construir soluções de próxima geração juntos',
            contact_email: 'E-mail',
            copy_label: 'Copiar',
            copied_label: 'Copiado',
            contact_phone: 'Telefone',
            contact_address: 'Endereço',
            contact_address_value: 'Taiwan, Taichung',
            footer: '© 2026 VLORION. Todos os direitos reservados. Uma equipe inovadora focada em inteligência artificial e desenvolvimento de software.',
            footer_ps: 'P.S. Adoraríamos organizar uma conferência. Nosso orçamento discorda.'
        }
    };

    function setLanguage(lang: string) {
        const t = translations[lang];
        if (!t) return;

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (key && t[key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    (element as HTMLInputElement).value = t[key];
                } else {
                    element.textContent = t[key];
                }
            }
        });

        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-lang="${lang}"]`)?.classList.add('active');
        document.documentElement.lang = lang;
    }

    useEffect(() => {
        // Anyone popping the console open gets a small hello.
        console.log(
            '%c VLORION %c\n%ccontact@vlorion.com',
            'background:#00d9ff;color:#0f1419;font-weight:900;font-size:20px;padding:6px 16px;border-radius:4px;letter-spacing:2px;',
            '',
            'color:#94a3b8;font-family:monospace;font-size:12px;line-height:1.8;'
        );

        // --- Auto-detect the visitor's browser language and pick the closest supported locale ---
        const supportedLangs = Object.keys(translations);
        const browserLangs = navigator.languages && navigator.languages.length
            ? navigator.languages
            : [navigator.language];

        let initialLang = 'zh-TW';
        for (const bl of browserLangs) {
            const lower = bl.toLowerCase();
            const exact = supportedLangs.find(l => l.toLowerCase() === lower);
            if (exact) { initialLang = exact; break; }
            const base = lower.split('-')[0];
            const partial = supportedLangs.find(l => l.toLowerCase().split('-')[0] === base);
            if (partial) { initialLang = partial; break; }
        }
        setLanguage(initialLang);

        // --- Scroll-reveal: fade+lift sections into view as the user scrolls ---
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!prefersReducedMotion && 'IntersectionObserver' in window) {
            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        revealObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
            document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
        } else {
            document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
        }

        // --- Back-to-top: reveal the button once the user has scrolled past the hero ---
        const backToTop = document.getElementById('backToTop');
        const handleScroll = () => {
            if (backToTop) {
                if (window.scrollY > 500) {
                    backToTop.classList.add('visible');
                } else {
                    backToTop.classList.remove('visible');
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });

        // --- Active nav link: highlight whichever section is currently in view ---
        const navLinks = document.querySelectorAll('.nav-links a');
        const navSections = Array.from(navLinks)
            .map(link => {
                const href = link.getAttribute('href');
                return href ? document.querySelector(href) : null;
            })
            .filter((el): el is Element => el !== null);

        if ('IntersectionObserver' in window) {
            const navObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = '#' + entry.target.id;
                        navLinks.forEach(link => {
                            link.classList.toggle('active', link.getAttribute('href') === id);
                        });
                    }
                });
            }, { threshold: 0.4, rootMargin: '-80px 0px -50% 0px' });
            navSections.forEach(section => navObserver.observe(section));
        }

        // --- Hero background: a lightweight particle network on <canvas>, no dependencies ---
        const canvas = document.getElementById('neuralCanvas') as HTMLCanvasElement | null;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                let width: number, height: number, nodes: Array<{ x: number; y: number; vx: number; vy: number }>;
                const NODE_COUNT = 48;
                const LINK_DIST = 140;

                const resize = () => {
                    const hero = canvas.parentElement;
                    if (hero) {
                        width = canvas.width = hero.offsetWidth;
                        height = canvas.height = hero.offsetHeight;
                    }
                };

                const makeNodes = () => {
                    nodes = Array.from({ length: NODE_COUNT }, () => ({
                        x: Math.random() * width,
                        y: Math.random() * height,
                        vx: (Math.random() - 0.5) * 0.35,
                        vy: (Math.random() - 0.5) * 0.35
                    }));
                };

                const step = () => {
                    ctx.clearRect(0, 0, width, height);

                    nodes.forEach(n => {
                        n.x += n.vx;
                        n.y += n.vy;
                        if (n.x < 0 || n.x > width) n.vx *= -1;
                        if (n.y < 0 || n.y > height) n.vy *= -1;
                    });

                    for (let i = 0; i < nodes.length; i++) {
                        for (let j = i + 1; j < nodes.length; j++) {
                            const a = nodes[i], b = nodes[j];
                            const dx = a.x - b.x, dy = a.y - b.y;
                            const dist = Math.sqrt(dx * dx + dy * dy);
                            if (dist < LINK_DIST) {
                                const alpha = (1 - dist / LINK_DIST) * 0.35;
                                ctx.strokeStyle = `rgba(0, 217, 255, ${alpha})`;
                                ctx.lineWidth = 1;
                                ctx.beginPath();
                                ctx.moveTo(a.x, a.y);
                                ctx.lineTo(b.x, b.y);
                                ctx.stroke();
                            }
                        }
                    }

                    nodes.forEach(n => {
                        ctx.beginPath();
                        ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
                        ctx.fillStyle = 'rgba(0, 217, 255, 0.8)';
                        ctx.fill();
                    });

                    if (!prefersReducedMotion) requestAnimationFrame(step);
                };

                resize();
                makeNodes();
                window.addEventListener('resize', () => {
                    resize();
                    makeNodes();
                });

                step();
            }
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('contact@vlorion.com').then(() => {
            setEmailCopied(true);
            setTimeout(() => setEmailCopied(false), 2000);
        });
    };

    return (
        <>
            {/* ── Header / Nav ─────────────────────────────────────── */}
            <header>
                <nav>
                    <div className="nav-top">
                        <div className="logo" data-i18n="hero_title">VLORION</div>
                        <div className="language-selector">
                            <button className="lang-btn active" data-lang="zh-TW" onClick={() => setLanguage('zh-TW')}>繁中</button>
                            <button className="lang-btn" data-lang="en" onClick={() => setLanguage('en')}>EN</button>
                            <button className="lang-btn" data-lang="ja" onClick={() => setLanguage('ja')}>日本</button>
                            <button className="lang-btn" data-lang="ko" onClick={() => setLanguage('ko')}>한국</button>
                            <button className="lang-btn" data-lang="de" onClick={() => setLanguage('de')}>DE</button>
                            <button className="lang-btn" data-lang="ru" onClick={() => setLanguage('ru')}>RU</button>
                            <button className="lang-btn" data-lang="es" onClick={() => setLanguage('es')}>ES</button>
                            <button className="lang-btn" data-lang="pt" onClick={() => setLanguage('pt')}>PT</button>
                        </div>
                    </div>
                    <ul className="nav-links">
                        <li><a href="#about" data-i18n="nav_about">關於我們</a></li>
                        <li><a href="#services" data-i18n="nav_services">服務</a></li>
                        <li><a href="#portfolio" data-i18n="nav_works">作品</a></li>
                        <li><a href="#team" data-i18n="nav_team">團隊</a></li>
                        <li><a href="#contact" data-i18n="nav_contact">聯繫</a></li>
                    </ul>
                </nav>
            </header>

            {/* ── Hero ─────────────────────────────────────────────── */}
            <section className="hero">
                <canvas id="neuralCanvas"></canvas>
                <div className="hero-content">
                    <h1 data-i18n="hero_title">VLORION</h1>
                    <p data-i18n="hero_subtitle">一個年輕團隊，正在用 AI 重新定義軟體開發</p>
                    <div className="subtitle" data-i18n="hero_tagline">想法。實現。就這麼簡單。</div>
                    <span className="scroll-hint" data-i18n="hero_cta">請繼續閱讀</span>
                </div>
            </section>

            {/* ── About ────────────────────────────────────────────── */}
            <section id="about">
                <span className="eyebrow" data-i18n="about_eyebrow">// 關於</span>
                <h2 data-i18n="about_title">關於 VLORION</h2>
                <div className="about-content">
                    <div className="about-text reveal">
                        <h3 data-i18n="about_vision">我們的願景</h3>
                        <p data-i18n="about_text1"></p>
                        <p data-i18n="about_text2"></p>
                        <p data-i18n="about_text3"></p>
                    </div>
                    <div className="about-highlight reveal">
                        <h3 data-i18n="about_values">核心價值</h3>
                        <ul>
                            <li><strong data-i18n="value1_title">創新</strong> - <span data-i18n="value1_desc">持續探索前沿技術</span></li>
                            <li><strong data-i18n="value2_title">精準</strong> - <span data-i18n="value2_desc">精確把握客戶需求</span></li>
                            <li><strong data-i18n="value3_title">卓越</strong> - <span data-i18n="value3_desc">追求代碼質量</span></li>
                            <li><strong data-i18n="value4_title">協作</strong> - <span data-i18n="value4_desc">建立長期合作關係</span></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── Services ─────────────────────────────────────────── */}
            <section id="services">
                <span className="eyebrow" data-i18n="services_eyebrow">// 服務</span>
                <h2 data-i18n="services_title">我們的服務</h2>
                <p className="section-subtitle" data-i18n="services_subtitle"></p>
                <div className="services-grid">
                    {['1', '2', '3', '4', '5', '6'].map((num) => (
                        <div className="service-card reveal" key={num}>
                            <h3 data-i18n={`service${num}_title`}></h3>
                            <p data-i18n={`service${num}_desc`}></p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Portfolio (empty state for now) ─────────────────── */}
            <section id="portfolio">
                <span className="eyebrow" data-i18n="works_eyebrow">// 作品</span>
                <h2 data-i18n="works_title">我們的作品</h2>
                <p className="section-subtitle reveal" data-i18n="works_subtitle"></p>
            </section>

            {/* ── Team ─────────────────────────────────────────────── */}
            <section id="team">
                <span className="eyebrow" data-i18n="team_eyebrow">// 團隊</span>
                <h2 data-i18n="team_title">我們的團隊</h2>
                <p className="section-subtitle" data-i18n="team_subtitle"></p>
                <div className="team-grid">
                    <div className="team-member reveal">
                        <h3 data-i18n="team_member1"></h3>
                        <div className="role" data-i18n="team_role1"></div>
                        <p data-i18n="team_desc1"></p>
                    </div>
                </div>
            </section>

            {/* ── Contact ──────────────────────────────────────────── */}
            <section id="contact">
                <span className="eyebrow" data-i18n="contact_eyebrow">// 聯繫</span>
                <h2 data-i18n="contact_title">聯繫我們</h2>
                <p className="section-subtitle" data-i18n="contact_subtitle"></p>
                <div className="contact-info">
                    <div className="contact-item reveal">
                        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}></div>
                        <h3 style={{ color: 'white', fontSize: '1rem', marginBottom: '0.5rem' }} data-i18n="contact_email"></h3>
                        <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                            <a href="mailto:contact@vlorion.com" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>contact@vlorion.com</a>
                            <button
                                type="button"
                                onClick={handleCopyEmail}
                                style={{
                                    background: 'none',
                                    border: '1px solid rgba(0, 217, 255, 0.4)',
                                    borderRadius: '4px',
                                    color: 'var(--primary-color)',
                                    fontSize: '0.7rem',
                                    padding: '0.2rem 0.5rem',
                                    cursor: 'pointer',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}
                            >
                                <span data-i18n="copy_label" style={{ display: emailCopied ? 'none' : 'inline' }}>複製</span>
                                <span data-i18n="copied_label" style={{ display: emailCopied ? 'inline' : 'none' }}>已複製</span>
                            </button>
                        </p>
                    </div>
                    <div className="contact-item reveal">
                        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}></div>
                        <h3 style={{ color: 'white', fontSize: '1rem', marginBottom: '0.5rem' }} data-i18n="contact_phone"></h3>
                        <p style={{ color: 'var(--primary-color)' }}>尚未註冊</p>
                    </div>
                    <div className="contact-item reveal">
                        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}></div>
                        <h3 style={{ color: 'white', fontSize: '1rem', marginBottom: '0.5rem' }} data-i18n="contact_address">台灣 台中市</h3>
                        <p data-i18n="contact_address_value"></p>
                    </div>
                </div>
                <div className="contact-links">
                    <a href="https://www.instagram.com/vlorionofficial" target="_blank" rel="noreferrer">Instagram</a>
                    <a href="https://x.com/vlorionofficial" target="_blank" rel="noreferrer">X (Twitter)</a>
                </div>
            </section>

            {/* ── Footer + back-to-top ─────────────────────────────── */}
            <footer>
                <p data-i18n="footer"></p>
                <p className="footer-ps" data-i18n="footer_ps"></p>
            </footer>

            <button className="back-to-top" id="backToTop" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
        </>
    );
}