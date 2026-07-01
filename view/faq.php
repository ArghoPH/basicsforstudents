<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>শক্তি ফাউন্ডেশন - সঞ্চয় ও ঋণ সহায়তা</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Hind Siliguri', sans-serif; background-color: #f3f4f6; }
        .faq-card:hover { transform: translateY(-2px); transition: all 0.3s ease; }
    </style>
</head>
<body class="bg-gray-50">

    <header class="bg-green-700 text-white py-10 px-4 shadow-lg">
        <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-3xl md:text-4:xl font-bold mb-4">শক্তি ফাউন্ডেশন সঞ্চয় ও ঋণ সহায়তা কেন্দ্র</h1>
            <p class="text-green-100 mb-6">আপনার প্রয়োজনীয় তথ্যটি দ্রুত খুঁজে পেতে নিচের সার্চ বক্সটি ব্যবহার করুন</p>
            
            <div class="relative max-w-xl mx-auto">
                <input type="text" id="searchInput" onkeyup="searchFAQ()" placeholder="স্কীম বা ঋণের নাম লিখে খুঁজুন..." 
                class="w-full p-4 rounded-full text-gray-800 shadow-inner focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <span class="absolute right-5 top-4 text-gray-400">🔍</span>
            </div>
        </div>
    </header>

    <main class="max-w-6xl mx-auto p-6">
        
        <section class="mb-10 bg-white p-6 rounded-xl shadow-md border-l-8 border-yellow-500 faq-item">
            <h2 class="text-2xl font-bold text-green-800 mb-4">কেন শক্তিতে সঞ্চয় করবেন?</h2>
            <ul class="grid md:grid-cols-2 gap-3 text-gray-700">
                <li>✅ ১২% পর্যন্ত সঞ্চয়ভিত্তিক মুনাফা</li>
                <li>✅ কোনো কর্তন ও চার্জ ছাড়াই লভ্যাংশ</li>
                <li>✅ চাহিদা মাত্র সঞ্চয় উত্তোলন সুবিধা</li>
                <li>✅ একই ব্যক্তির একাধিক হিসাবের সুবিধা</li>
                <li>✅ যেকোনো বয়সে হিসাব খোলার সুযোগ</li>
                <li>✅ SMS নোটিফিকেশন ও ঋণ সুবিধা</li>
                <li>✅ যেকোনো শাখায় স্কীম ট্রান্সফার সুবিধা</li>
            </ul>
        </section>

        <div id="faqContainer">
            
            <div class="faq-item bg-white p-6 rounded-xl shadow mb-6 border border-gray-200">
                <h3 class="text-xl font-bold text-green-700 mb-3">শক্তি মাসিক মুনাফা সঞ্চয় স্কীম</h3>
                <p class="mb-2"><strong>মেয়াদ:</strong> ১ বছর (রিনিউযোগ্য)</p>
                <p class="mb-4 text-gray-600 font-semibold italic">বৈশিষ্ট্য: ১০০,০০০ টাকায় প্রতি মাসে ১,০০০ টাকা মুনাফা (১২%)। সর্বনিম্ন ২৫,০০০ টাকা থেকে শুরু।</p>
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse bg-green-50">
                        <thead>
                            <tr class="bg-green-600 text-white">
                                <th class="p-2 border">জমাকৃত টাকা</th>
                                <th class="p-2 border">মাসিক মুনাফা</th>
                                <th class="p-2 border">হার</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td class="p-2 border">১,০০,০০০</td><td class="p-2 border">১,০০০ টাকা</td><td class="p-2 border">১২%</td></tr>
                            <tr><td class="p-2 border">৫০,০০০</td><td class="p-2 border">৫০০ টাকা</td><td class="p-2 border">১২%</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="faq-item bg-white p-6 rounded-xl shadow mb-6 border border-gray-200">
                <h3 class="text-xl font-bold text-blue-700 mb-3">শক্তি ডাবল সেভিংস স্কীম (৬ বছরে দ্বিগুণ)</h3>
                <p class="mb-4 text-gray-600">৬ বছরে আসলের সমপরিমাণ মুনাফা। সর্বনিম্ন ১০,০০০ টাকা থেকে জমা করা যাবে।</p>
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse bg-blue-50">
                        <thead>
                            <tr class="bg-blue-600 text-white">
                                <th class="p-2 border">এককালীন জমা</th>
                                <th class="p-2 border">মেয়াদ</th>
                                <th class="p-2 border">মুনাফা</th>
                                <th class="p-2 border">মোট প্রাপ্তি</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td class="p-2 border">১,০০,০০০</td><td class="p-2 border">৬ বছর</td><td class="p-2 border">১,০০,০০০</td><td class="p-2 border">২,০০,০০০</td></tr>
                            <tr><td class="p-2 border">১,০০,০০০</td><td class="p-2 border">৫ বছর</td><td class="p-2 border">৫০,০০০</td><td class="p-2 border">১,৫০,০০০</td></tr>
                            <tr><td class="p-2 border">১,০০,০০০</td><td class="p-2 border">৩ বছর</td><td class="p-2 border">২৫,০০০</td><td class="p-2 border">১,২৫,০০০</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="faq-item bg-white p-6 rounded-xl shadow mb-6 border border-gray-200">
                <h3 class="text-xl font-bold text-orange-700 mb-3">শক্তি ডিপিএস (DPS) স্কীম</h3>
                <p class="mb-4">মেয়াদ: ২, ৩, ৫ এবং ৭ বছর। মুনাফা হার সর্বোচ্চ ১১%।</p>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm text-left border-collapse">
                        <tr class="bg-gray-800 text-white">
                            <th class="p-2 border">মাসিক জমা</th>
                            <th class="p-2 border">৩ বছর</th>
                            <th class="p-2 border">৫ বছর</th>
                            <th class="p-2 border">৭ বছর</th>
                        </tr>
                        <tr class="bg-gray-50"><td class="p-2 border font-bold">১,০০০</td><td class="p-2 border">৪১,০০০</td><td class="p-2 border">৭৭,৫০০</td><td class="p-2 border">১,২৪,০০০</td></tr>
                        <tr><td class="p-2 border font-bold">৫,০০০</td><td class="p-2 border">২,০৫,০০০</td><td class="p-2 border">৩,৮৫,০০০</td><td class="p-2 border">৬,২০,০০০</td></tr>
                        <tr class="bg-gray-50"><td class="p-2 border font-bold">১০,০০০</td><td class="p-2 border">৪,১০,০০০</td><td class="p-2 border">৭,৭০,০০০</td><td class="p-2 border">১২,৪০,০০০</td></tr>
                    </table>
                </div>
            </div>

            <div class="faq-item bg-white p-6 rounded-xl shadow mb-6 border border-gray-200">
                <h3 class="text-xl font-bold text-purple-700 mb-3">লাখপতি স্কীম (৫, ৭ ও ১০ বছর)</h3>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm text-left border-collapse bg-purple-50">
                        <tr class="bg-purple-600 text-white">
                            <th class="p-2 border">মেয়াদ</th>
                            <th class="p-2 border">সাপ্তাহিক জমা</th>
                            <th class="p-2 border">মাসিক জমা</th>
                            <th class="p-2 border">মোট লাভ</th>
                        </tr>
                        <tr><td class="p-2 border font-bold">৫ বছর</td><td class="p-2 border">৩৪০</td><td class="p-2 border">১,৩৬০</td><td class="p-2 border">১৮,৪০০</td></tr>
                        <tr><td class="p-2 border font-bold">৭ বছর</td><td class="p-2 border">২২০</td><td class="p-2 border">৮৮০</td><td class="p-2 border">২৬,০৮০</td></tr>
                        <tr><td class="p-2 border font-bold">১০ বছর</td><td class="p-2 border">১৩০</td><td class="p-2 border">৫২০</td><td class="p-2 border">৩৭,৬০০</td></tr>
                    </table>
                </div>
            </div>

            <div class="faq-item bg-white p-6 rounded-xl shadow mb-6 border-t-4 border-red-500">
                <h3 class="text-xl font-bold text-red-700 mb-3">শক্তি ফাউন্ডেশনের ঋণের তথ্য</h3>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm text-left border-collapse">
                        <thead>
                            <tr class="bg-red-600 text-white">
                                <th class="p-2 border">ঋণের নাম</th>
                                <th class="p-2 border">সর্বোচ্চ সীমা</th>
                                <th class="p-2 border">সার্ভিস চার্জ</th>
                                <th class="p-2 border">কিস্তি</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td class="p-2 border font-bold">জাগরণ</td><td class="p-2 border">৯০,০০০</td><td class="p-2 border text-center">২৪%</td><td class="p-2 border">সাপ্তাহিক/মাসিক</td></tr>
                            <tr><td class="p-2 border font-bold">অগ্রসর</td><td class="p-2 border">২০ লক্ষ</td><td class="p-2 border text-center">২৪%</td><td class="p-2 border">সাপ্তাহিক/মাসিক</td></tr>
                            <tr><td class="p-2 border font-bold">সুফলন</td><td class="p-2 border">৯০,০০০</td><td class="p-2 border text-center">২৪%</td><td class="p-2 border">সাপ্তাহিক/মাসিক</td></tr>
                            <tr><td class="p-2 border font-bold">রেমিটেন্স</td><td class="p-2 border">২০ লক্ষ</td><td class="p-2 border text-center">২৪%</td><td class="p-2 border">সাপ্তাহিক/মাসিক</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    </main>

    <footer class="bg-gray-800 text-gray-400 py-6 text-center">
        <p>&copy; 2026 শক্তি ফাউন্ডেশন | সঞ্চয় ও সমৃদ্ধির পথে</p>
    </footer>

    <script>
        function searchFAQ() {
            let input = document.getElementById('searchInput').value.toLowerCase();
            let items = document.getElementsByClassName('faq-item');
            
            for (let i = 0; i < items.length; i++) {
                let content = items[i].innerText.toLowerCase();
                if (content.includes(input)) {
                    items[i].style.display = "";
                } else {
                    items[i].style.display = "none";
                }
            }
        }
    </script>
</body>
</html>