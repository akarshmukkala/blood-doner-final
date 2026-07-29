// ==========================================
// AOS INIT
// ==========================================
AOS.init({
    duration: 700,
    once: true,
    offset: 60,
});

// ==========================================
// GLOBAL STATE
// ==========================================
const AppState = {
    currentUser: {
        name: 'ramu',
        email: 'ramu@bloodlink.in',
        bloodGroup: 'A+',
        avatar: 'https://ui-avatars.com/api/?name=ramu&background=E63946&color=fff&size=140',
        isAuthenticated: true, // Simulated
    },
    donors: [
        { id: 1, name: 'Aarav Sharma', bloodGroup: 'A+', city: 'Vijayawada', state: 'Andhra Pradesh',
            availability: 'available', phone: '+91 98765 43210', email: 'aarav@bloodlink.in',
            lastDonation: '2026-05-10', distance: '1.2 km', avatar: 'https://ui-avatars.com/api/?name=Aarav+Sharma&background=E63946&color=fff&size=80' },
        { id: 2, name: 'Neha Patel', bloodGroup: 'O-', city: 'Guntur', state: 'Andhra Pradesh',
            availability: 'available', phone: '+91 99876 54321', email: 'neha@bloodlink.in',
            lastDonation: '2026-06-01', distance: '3.5 km', avatar: 'https://ui-avatars.com/api/?name=Neha+Patel&background=E63946&color=fff&size=80' },
        { id: 3, name: 'Rahul Verma', bloodGroup: 'B+', city: 'Tirupati', state: 'Andhra Pradesh',
            availability: 'unavailable', phone: '+91 91234 56789', email: 'rahul@bloodlink.in',
            lastDonation: '2026-04-20', distance: '5.8 km', avatar: 'https://ui-avatars.com/api/?name=Rahul+Verma&background=E63946&color=fff&size=80' },
        { id: 4, name: 'Meera Iyer', bloodGroup: 'AB-', city: 'Visakhapatnam', state: 'Andhra Pradesh',
            availability: 'available', phone: '+91 90123 45678', email: 'meera@bloodlink.in',
            lastDonation: '2026-05-25', distance: '2.1 km', avatar: 'https://ui-avatars.com/api/?name=Meera+Iyer&background=E63946&color=fff&size=80' },
        { id: 5, name: 'Ananya Rao', bloodGroup: 'A-', city: 'Kurnool', state: 'Andhra Pradesh',
            availability: 'available', phone: '+91 88999 77666', email: 'ananya@bloodlink.in',
            lastDonation: '2026-06-12', distance: '0.8 km', avatar: 'https://ui-avatars.com/api/?name=Ananya+Rao&background=E63946&color=fff&size=80' },
        { id: 6, name: 'Vikram Singh', bloodGroup: 'O+', city: 'Nellore', state: 'Andhra Pradesh',
            availability: 'unavailable', phone: '+91 87777 66555', email: 'vikram@bloodlink.in',
            lastDonation: '2026-03-15', distance: '4.3 km', avatar: 'https://ui-avatars.com/api/?name=Vikram+Singh&background=E63946&color=fff&size=80' },
        { id: 7, name: 'Pooja Nair', bloodGroup: 'B-', city: 'Rajahmundry', state: 'Andhra Pradesh',
            availability: 'available', phone: '+91 86666 55444', email: 'pooja@bloodlink.in',
            lastDonation: '2026-06-05', distance: '6.7 km', avatar: 'https://ui-avatars.com/api/?name=Pooja+Nair&background=E63946&color=fff&size=80' },
        { id: 8, name: 'Karthik Menon', bloodGroup: 'AB+', city: 'Kadapa', state: 'Andhra Pradesh',
            availability: 'available', phone: '+91 85555 44333', email: 'karthik@bloodlink.in',
            lastDonation: '2026-05-30', distance: '2.9 km', avatar: 'https://ui-avatars.com/api/?name=Karthik+Menon&background=E63946&color=fff&size=80' },
    ],
    events: [
        { id: 1, title: { en: 'Apollo Hospital Blood Camp', te: 'అపోలో హాస్పిటల్ బ్లడ్ కాంప్', hi: 'अपोलो अस्पताल ब्लड शिविर' }, organizer: { en: 'Apollo Hospital', te: 'అపోలో హాస్పిటల్', hi: 'अपोलो अस्पताल' }, hospital: { en: 'Apollo Hospital', te: 'అపోలో హాస్పిటల్', hi: 'अपोलो अस्पताल' },
            date: '2026-07-20', time: { en: '09:00 AM - 04:00 PM', te: '09:00 AM - 04:00 PM', hi: '09:00 AM - 04:00 PM' }, location: { en: '123 MG Road, Vijayawada, Andhra Pradesh', te: '123 MG రోడ్, విజయవాడ, ఆంధ్రప్రదేశ్', hi: '123 एमजी रोड, विजयवाड़ा, आंध्र प्रदेश' },
            seats: 45, maxSeats: 60, banner: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=600&h=300&fit=crop&auto=format',
            map: 'https://maps.google.com/maps?q=Vijayawada&z=15' },
        { id: 2, title: { en: 'Community Blood Drive', te: 'కమ్యూనిటీ బ్లడ్ డ్రైవ్', hi: 'कम्युनिटी ब्लड ड्राइव' }, organizer: { en: 'Indian Red Cross Society', te: 'ఇండియన్ రెడ్ క్రాస్ సొసైటీ', hi: 'इंडियन रेड क्रॉस सोसाइटी' }, hospital: { en: 'Community Center', te: 'కమ్యూనిటీ సెంటర్', hi: 'कम्युनिटी सेंटर' },
            date: '2026-07-25', time: { en: '10:00 AM - 06:00 PM', te: '10:00 AM - 06:00 PM', hi: '10:00 AM - 06:00 PM' }, location: { en: '456 Gandhi Road, Guntur, Andhra Pradesh', te: '456 గాంధీ రోడ్, గుంటూరు, ఆంధ్రప్రదేశ్', hi: '456 गांधी रोड, गुंटूर, आंध्र प्रदेश' },
            seats: 28, maxSeats: 50, banner: 'https://images.unsplash.com/photo-1583160247711-2191776b4b91?w=600&h=300&fit=crop&auto=format',
            map: 'https://maps.google.com/maps?q=Guntur&z=15' },
        { id: 3, title: { en: 'SVIMS Blood Donation Camp', te: 'SVIMS బ్లడ్ డోనేషన్ కాంప్', hi: 'SVIMS रक्तदान शिविर' }, organizer: { en: 'SVIMS Tirupati', te: 'SVIMS తిరుపతి', hi: 'SVIMS तिरुपति' },
            hospital: { en: 'SVIMS Hospital', te: 'SVIMS హాస్పిటల్', hi: 'SVIMS अस्पताल' }, date: '2026-08-01', time: { en: '08:00 AM - 02:00 PM', te: '08:00 AM - 02:00 PM', hi: '08:00 AM - 02:00 PM' },
            location: { en: '789 Tirumala Road, Tirupati, Andhra Pradesh', te: '789 తిరుమల రోడ్, తిరుపతి, ఆంధ్రప్రదేశ్', hi: '789 तिरुमाला रोड, तिरुपति, आंध्र प्रदेश' }, seats: 12, maxSeats: 40,
            banner: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=300&fit=crop&auto=format',
            map: 'https://maps.google.com/maps?q=Tirupati&z=15' },
    ],
    stories: [
        { id: 1, name: { en: 'Sarah M.', te: 'సారా ఎం.', hi: 'सारा एम.' }, role: { en: 'Donor', te: 'దాత', hi: 'दाता' }, text: { en: 'Donating blood is the easiest way to save a life. I do it every 3 months and it takes less than an hour. The feeling of knowing you helped someone is incredible.', te: 'రక్త దానం చేయడం ఒక జీవితాన్ని కాపాడే సులభమైన మార్గం. నేను ప్రతి 3 నెలలకొకసారి చేస్తాను, అది ఒక గంటకంటే తక్కువ సమయం తీసుకుంటుంది. మీరెవరికో సహాయం చేసినట్లు అనిపించడం అద్భుతంగా ఉంటుంది.', hi: 'रक्त दान करना किसी जीवन को बचाने का सबसे आसान तरीका है। मैं हर 3 महीने में यह करता हूँ और इसमें एक घंटे से भी कम समय लगता है। किसी की मदद करने का एहसास बहुत अद्भुत होता है।' },
            avatar: 'https://ui-avatars.com/api/?name=Sarah+M&background=E63946&color=fff&size=60' },
        { id: 2, name: { en: 'Dr. James K.', te: 'డా. జేమ్స్ కె.', hi: 'डॉ. जेम्स के.' }, role: { en: 'Physician', te: 'వైద్యుడు', hi: 'चिकित्सक' }, text: { en: 'Blood donations are the backbone of modern medicine. Every single donation can save up to 3 lives. I encourage everyone to become a regular donor.', te: 'రక్త దానాలు ఆధునిక medicine లో ఒక కీలక పునాదులు. ప్రతి ఒక్క దానం 3 జీవితాలను కూడా కాపాడగలదు. నేను ప్రతి ఒక్కరికీ క్రమం తప్పకుండా దాత बनने ప్రోత్సాహం ఇస్తున్నాను.', hi: 'रक्त दान आधुनिक चिकित्सा की रीढ़ हैं। हर एक दान से तक 3 जीवन बचाए जा सकते हैं। मैं हर किसी को नियमित दाता बनने के लिए प्रोत्साहित करता हूँ।' },
            avatar: 'https://ui-avatars.com/api/?name=James+K&background=E63946&color=fff&size=60' },
        { id: 3, name: { en: 'Priya R.', te: 'ప్రియా ఆర్.', hi: 'प्रिया आर.' }, role: { en: 'Recipient', te: 'గ్రహీత', hi: 'प्राप्तकर्ता' }, text: { en: 'I received blood during a complicated surgery. It saved my life. I am forever grateful to the anonymous donor who gave me a second chance at life.', te: 'నాకు సంక్లిష్ట శస్త్రచికిత్స సమయంలో రక్తం లభించింది. అది నా životను కాపాడింది. నాకు రెండవ అవకాశం ఇచ్చిన అనామక దాతకు నేను ఎప్పటికీ కృతజ్ఞుడిని.', hi: 'मुझे एक जटिल सर्जरी के दौरान रक्त मिला। इससे मेरे जीवन की रक्षा हुई। मुझे दूसरा जीवन देने वाले गुमनाम दाता का मैं सदैव आभारी हूँ।' },
            avatar: 'https://ui-avatars.com/api/?name=Priya+R&background=E63946&color=fff&size=60' },
    ]
};

const translations = {
    en: {
        pageTitle: 'Blood Donor Around Me',
        brandName: 'Blood<span>Donor</span>',
        loading: 'Loading...',
        navHome: 'Home',
        navBloodGroups: 'Blood Groups',
        navEvents: 'Events',
        navDashboard: 'Dashboard',
        navEmergency: 'Emergency',
        navProfile: 'Profile',
        navSettings: 'Settings',
        navLogout: 'Logout',
        toggleTheme: 'Toggle Dark Mode',
        heroBadge: 'Save Lives Today',
        heroTitle: 'Donate Blood, <br><span>Save a Life</span>',
        heroDesc: 'Join thousands of donors who are making a difference. Find nearby blood donors, donation camps, and emergency blood requests — all in one place.',
        heroFindDonor: 'Find a Donor',
        heroRegisterDonor: 'Register as Donor',
        statDonors: 'Active Donors',
        statCamps: 'Blood Camps',
        statLives: 'Lives Saved',
        searchTitle: 'Find a <span>Blood Donor</span>',
        searchSubtitle: 'Search for donors based on blood group, location, and availability.',
        searchLabelBloodGroup: 'Blood Group',
        searchLabelState: 'State',
        searchLabelCity: 'City',
        searchLabelAvailability: 'Availability',
        searchButton: 'Search',
        resultCountLabel: 'donors found',
        bloodGroupsTitle: 'Blood <span>Groups</span>',
        bloodGroupsSubtitle: 'Browse donors by blood group. Click on any group to view available donors.',
        eventsTitle: 'Upcoming <span>Blood Donation Camps</span>',
        eventsSubtitle: 'Find and register for blood donation camps near you.',
        storiesTitle: 'Success <span>Stories</span>',
        storiesSubtitle: 'Real stories of lives saved through blood donation.',
        dashboardOverview: 'Overview',
        dashboardDonationHistory: 'Donation History',
        dashboardMyEvents: 'My Events',
        dashboardBloodRequests: 'Blood Requests',
        dashboardNotifications: 'Notifications',
        dashboardAchievements: 'Achievements',
        dashboardEditProfile: 'Edit Profile',
        dashboardCertificates: 'Certificates',
        dashboardStatDonations: 'Total Donations',
        dashboardStatEvents: 'Upcoming Events',
        dashboardStatRequests: 'Pending Requests',
        dashboardStatRewards: 'Reward Points',
        dashboardRecentActivity: 'Recent Activity',
        dashboardRecentDonation: 'You donated blood on 2026-06-15',
        dashboardRegisteredCamp: 'Registered for \'Apollo Hospital Camp\' on 2026-07-20',
        dashboardEmergencyRequest: 'Emergency request: O- needed at Nair Hospital',
        emergencyTitle: '<span>Emergency</span> Blood Request',
        emergencySubtitle: 'Submit an urgent blood request. Nearby donors will be notified immediately.',
        emergencyPatientName: 'Patient Name *',
        emergencyHospital: 'Hospital *',
        emergencyBloodGroup: 'Blood Group *',
        emergencyUnits: 'Units Required *',
        emergencyUrgency: 'Urgency *',
        emergencyContact: 'Contact Person *',
        emergencyPhone: 'Phone Number *',
        emergencyLocation: 'Location *',
        emergencyDescription: 'Description',
        emergencySubmit: 'Submit Emergency Request',
        emergencyNote: 'Nearby matching donors will receive an instant notification.',
        profileTitle: 'My Profile',
        profileName: 'Full Name',
        profileEmail: 'Email',
        profilePhone: 'Phone',
        profileBloodGroup: 'Blood Group',
        profileGender: 'Gender',
        profileDob: 'Date of Birth',
        profileCity: 'City',
        profileState: 'State',
        profilePincode: 'Pincode',
        profileAvailability: 'Availability',
        profileLastDonation: 'Last Donation Date',
        profileAddress: 'Address',
        profileUpdate: 'Update Profile',
        profileDelete: 'Delete Account',
        profileChangePassword: 'Change Password',
        footerQuickLinks: 'Quick Links',
        footerResources: 'Resources',
        footerContactUs: 'Contact Us',
        footerDesc: 'Connecting blood donors with those in need. Save lives, one donation at a time.',
        footerFindDonor: 'Find a Donor',
        footerBloodGroups: 'Blood Groups',
        footerEvents: 'Events',
        footerEmergency: 'Emergency',
        footerFaqs: 'FAQs',
        footerBlog: 'Blog',
        footerPrivacy: 'Privacy Policy',
        footerTerms: 'Terms of Service',
        footerRights: 'All rights reserved.',
        languages: {
            en: 'English',
            te: 'తెలుగు',
            hi: 'हिंदी'
        },
        bloodGroupDonors: '{count} donors available',
        donorStatusAvailable: 'Available',
        donorStatusUnavailable: 'Unavailable',
        requestBlood: 'Request Blood',
        register: 'Register',
        map: 'Map',
        seatsLeft: '{count} seats left',
        available: 'Available',
        unavailable: 'Unavailable',
        toastWelcome: 'Welcome to Blood Donor Around Me! 🩸',
        toastLanguageChanged: 'Language changed to {lang}',
        toastDarkModeOn: 'Dark mode enabled',
        toastDarkModeOff: 'Light mode enabled',
        toastFormSubmitted: 'Form submitted successfully!',
        toastEmergency: '🚨 Emergency request submitted! Nearby donors have been notified.',
        toastLogout: 'Logged out successfully. See you soon!',
        toastDeleteAccount: 'Account deletion requested. You will receive a confirmation email.',
        toastProfileUpdated: 'Profile photo updated successfully!',
        toastRequestSent: 'Blood request sent to {name}. You will be notified when they respond.',
        toastEventRegistered: 'Successfully registered for "{title}"! Check your email for confirmation.',
        toastNoDonors: 'No donors found matching your criteria.',
        toastNoGroupDonors: 'No donors found for blood group {bloodGroup}',
        toastRegistrationSoon: 'Registration page coming soon!',
        confirmDeleteAccount: 'Are you sure you want to delete your account? This action cannot be undone.',
        searchPlaceholderState: 'e.g. Andhra Pradesh',
        searchPlaceholderCity: 'e.g. Vijayawada',
        searchSelectAny: 'Any',
        selectAvailable: 'Available',
        selectUnavailable: 'Unavailable',
        selectAllGroups: 'All Groups',
        searchResultHeading: '{count} donors found',
        loadingMessage: 'Loading...',
        authSubtitle: 'Please sign in to access the full Blood Donor Around Me experience.',
        authName: 'Name',
        authEmail: 'Email Address',
        authPassword: 'Password',
        authLogin: 'Login',
        authPlaceholderName: 'Enter your full name',
        authPlaceholderEmail: 'Enter your email address',
        authPlaceholderPassword: 'Enter your password',
        authHint: 'Use your details to enter the platform before the main website opens.',
        toastLoginSuccess: 'Welcome {name}! You are now signed in.',
        toastLoginError: 'Please enter a valid name, email, and password.',
        toastLoginInvalidEmail: 'Please enter a valid email address.',
        toastLoginShortPassword: 'Password must be at least 6 characters long.'
    },
    te: {
        pageTitle: 'బ్లడ్ డోనర్ అరౌండ్ మి',
        brandName: 'బ్లడ్<span>డోనర్</span>',
        loading: 'లోడ్ అవుతోంది...',
        navHome: 'హోమ్',
        navBloodGroups: 'రక్త సమూహాలు',
        navEvents: 'ఈవెంట్స్',
        navDashboard: 'డాష్బోర్డ్',
        navEmergency: 'అత్యవసర',
        navProfile: 'ప్రొఫైల్',
        navSettings: 'సెట్టింగ్స్',
        navLogout: 'లాగౌట్',
        toggleTheme: 'డార్క్ మోడ్ మార్చండి',
        heroBadge: 'నేడు జీవితాలను కాపాడండి',
        heroTitle: 'రక్త దానం చేయండి, <br><span>ఒక జీవితం కాపాడండి</span>',
        heroDesc: 'వెయ్యి మంది దాతలు మార్పు తీసుకురావడానికి colaborarుతున్నారు. దగ్గర్లోని రక్తదాతలు, దానం శిబిరాలు మరియు అత్యవసర రక్త అభ్యర్థనలన్నీ ఒకే చోట కనుగొనండి.',
        heroFindDonor: 'దాతను కనుగొనండి',
        heroRegisterDonor: 'దాతగా నమోదు చేయండి',
        statDonors: 'క్రియాశీల దాతలు',
        statCamps: 'రక్త శిబిరాలు',
        statLives: 'బదిలిన జీవితాలు',
        searchTitle: 'రక్త దాతను <span>కనుగొనండి</span>',
        searchSubtitle: 'రక్త సమూహం, స్థానం మరియు లభ్యత ఆధారంగా దాతలను శోధించండి.',
        searchLabelBloodGroup: 'రక్త సమూహం',
        searchLabelState: 'రాష్ట్రం',
        searchLabelCity: 'నగరం',
        searchLabelAvailability: 'లభ్యత',
        searchButton: 'శోధించండి',
        resultCountLabel: 'దాతలు కనుగొన్నారు',
        bloodGroupsTitle: 'రక్త <span>సమూహాలు</span>',
        bloodGroupsSubtitle: 'రక్త సమూహం ద్వారా దాతలను బ్రౌజ్ చేయండి. ఏదైనా సమూహాన్ని క్లిక్ చేసి అందుబాటులో ఉన్న దాతలను చూడండి.',
        eventsTitle: 'వచ్చే <span>రక్త దానం శిబిరాలు</span>',
        eventsSubtitle: 'మీ దగ్గర్లో ఉన్న రక్త దానం శిబిరాలను కనుగొని నమోదు చేయండి.',
        storiesTitle: 'విజయ <span>కధలు</span>',
        storiesSubtitle: 'రక్త దానం ద్వారా కాపాడబడిన జీవితాల వాస్తవ కథలు.',
        dashboardOverview: 'అవలోకనం',
        dashboardDonationHistory: 'దానం చరిత్ర',
        dashboardMyEvents: 'నా ఈవెంట్లు',
        dashboardBloodRequests: 'రక్త అభ్యర్థనలు',
        dashboardNotifications: 'నోటిఫికేషన్లు',
        dashboardAchievements: 'విజయాలు',
        dashboardEditProfile: 'ప్రొఫైల్ సవరించండి',
        dashboardCertificates: 'సర్టిఫికేట్లు',
        dashboardStatDonations: 'మొత్తం దానాలు',
        dashboardStatEvents: 'వచ్చే ఈవెంట్లు',
        dashboardStatRequests: 'పెండింగ్ అభ్యర్థనలు',
        dashboardStatRewards: 'రివార్డ్ పాయింట్లు',
        dashboardRecentActivity: 'ఇటీవలి కార్యకలాపాలు',
        dashboardRecentDonation: 'మీరు 2026-06-15న రక్తం దానం చేశారు',
        dashboardRegisteredCamp: '\'అపోలో హాస్పిటల్ కాంప్\'కు 2026-07-20న నమోదు చేసుకున్నారు',
        dashboardEmergencyRequest: 'అత్యవసర అభ్యర్థన: నైర్లో O- అవసరం',
        emergencyTitle: '<span>అత్యవసర</span> రక్త అభ్యర్థన',
        emergencySubtitle: 'అత్యవసర రక్త అభ్యర్థన సమర్పించండి. సమీపంలో ఉన్న దాతలకు వెంటనే నోటిఫికేషన్ పంపబడుతుంది.',
        emergencyPatientName: 'రోగి పేరు *',
        emergencyHospital: 'హాస్పిటల్ *',
        emergencyBloodGroup: 'రక్త సమూహం *',
        emergencyUnits: 'అవసరమైన యూనిట్లు *',
        emergencyUrgency: 'అత్యవసరం *',
        emergencyContact: 'సంప్రదింపు వ్యక్తి *',
        emergencyPhone: 'ఫోన్ నంబర్ *',
        emergencyLocation: 'స్థానం *',
        emergencyDescription: 'వివరణ',
        emergencySubmit: 'అత్యవసర అభ్యర్థన సమర్పించండి',
        emergencyNote: 'సమీపమున్న సరిపోలిన దాతలకు తక్షణ నోటిఫికేషన్ వెళ్లిపోతుంది.',
        profileTitle: 'నా ప్రొఫైల్',
        profileName: 'పూర్తి పేరు',
        profileEmail: 'ఇమెయిల్',
        profilePhone: 'ఫోన్',
        profileBloodGroup: 'రక్త సమూహం',
        profileGender: 'లింగం',
        profileDob: 'పుట్టిన తేది',
        profileCity: 'నగరం',
        profileState: 'రాష్ట్రం',
        profilePincode: 'పిన్‌కోడ్',
        profileAvailability: 'లభ్యత',
        profileLastDonation: 'చివరి దానం తేది',
        profileAddress: 'చిరునామా',
        profileUpdate: 'ప్రొఫైల్ను నవీకరించండి',
        profileDelete: 'ఖాతాను తొలగించండి',
        profileChangePassword: 'పాస్‌వర్డ్ మార్చండి',
        footerQuickLinks: 'త్వరిత లింక్స్',
        footerResources: 'సాధనాలు',
        footerContactUs: 'మమ్మల్ని సంప్రదించండి',
        footerDesc: 'అవసరంలో ఉన్నవారితో రక్తదాతలను కలుపుతోంది. ఒక దానంతో ఒక జీవితాన్ని కాపాడండి.',
        footerFindDonor: 'దాతను కనుగొనండి',
        footerBloodGroups: 'రక్త సమూహాలు',
        footerEvents: 'ఈవెంట్స్',
        footerEmergency: 'అత్యవసర',
        footerFaqs: 'తరచూ అడిగే ప్రశ్నలు',
        footerBlog: 'బ్లాగ్',
        footerPrivacy: 'గోప్యతా విధానం',
        footerTerms: 'సేవా నిబంధనలు',
        footerRights: 'అన్ని హక్కులు కాపీ రైట్ చేయబడ్డాయి.',
        languages: { en: 'English', te: 'తెలుగు', hi: 'हिंदी' },
        bloodGroupDonors: '{count} దాతలు అందుబాటులో ఉన్నారు',
        donorStatusAvailable: 'లభ్యం',
        donorStatusUnavailable: 'లభ్యం కాలేదు',
        requestBlood: 'రక్తం అభ్యర్థించండి',
        register: 'నమోదు',
        map: 'మ్యాప్',
        seatsLeft: '{count} సీట్లు మిగిలున్నాయి',
        available: 'లభ్యం',
        unavailable: 'లభ్యం కాదు',
        toastWelcome: 'బ్లడ్ డోనర్ అరౌండ్ మి కి స్వాగతం! 🩸',
        toastLanguageChanged: 'భాష మార్చబడింది: {lang}',
        toastDarkModeOn: 'డార్క్ మోడ్ ప్రారంభమైంది',
        toastDarkModeOff: 'లైట్ మోడ్ ప్రారంభమైంది',
        toastFormSubmitted: 'ఫారమ్ విజయవంతంగా సమర్పించబడింది!',
        toastEmergency: '🚨 అత్యవసర అభ్యర్థన పంపబడింది! సమీప దాతలకు తెలియజేయబడింది.',
        toastLogout: 'విజయవంతంగా లాగౌట్ అయ్యారు. త్వరగా కలుస్తాం!',
        toastDeleteAccount: 'ఖాతా తొలగింపు అభ్యర్థించబడింది. మీకు నిర్ధారణ ఇమెయిల్ llegará.',
        toastProfileUpdated: 'ప్రొఫైల్ ఫోటో విజయవంతంగా నవీకరించబడింది!',
        toastRequestSent: '{name}కి రక్త అభ్యర్థన పంపబడింది. వారు ప్రతిస్పందిస్తే మీరు తెలియజేయబడతారు.',
        toastEventRegistered: '"{title}"కి విజయవంతంగా నమోదు చేసుకున్నారు! నిర్ధారణ ఇమెయిల్ కోసం తనిఖీ చేయండి.',
        toastNoDonors: 'మీ ప్రమాణాలకు సరిపోయే దాతలు లేరు.',
        toastNoGroupDonors: '{bloodGroup} సమూహానికి దాతలు లేరు',
        toastRegistrationSoon: 'నమోదు పేజీ త్వరలో వస్తుంది!',
        confirmDeleteAccount: 'మీ ఖాతాను నిజంగా తొలగించాలనుకుంటున్నారా? ఈ చర్య తిరిగి సాధ్యం కాదు.',
        searchPlaceholderState: 'ఉదా. ఆంధ్రప్రదేశ్',
        searchPlaceholderCity: 'ఉదా. విజయవాడ',
        searchSelectAny: 'ఏదైనా',
        selectAvailable: 'లభ్యం',
        selectUnavailable: 'లభ్యం కాదు',
        selectAllGroups: 'అన్ని సమూహాలు',
        searchResultHeading: '{count} దాతలు కనుగొన్నారు',
        loadingMessage: 'లోడ్ అవుతోంది...',
        authSubtitle: 'పూర్తి బ్లడ్ డోనర్ అరౌండ్ మి అనుభవాన్ని చూడడానికి దయచేసి సైన్ ఇన్ చేయండి.',
        authName: 'పేరు',
        authEmail: 'ఇమెయిల్ చిరునామా',
        authPassword: 'పాస్‌వర్డ్',
        authLogin: 'లాగిన్',
        authPlaceholderName: 'మీ పూర్తి పేరు నమోదు చేయండి',
        authPlaceholderEmail: 'మీ ఇమెయిల్ చిరునామా నమోదు చేయండి',
        authPlaceholderPassword: 'మీ పాస్‌వర్డ్ నమోదు చేయండి',
        authHint: 'ప్రధాన వెబ్‌సైట్ తెరవడానికి ముందు మీ వివరాలను ఉపయోగించండి.',
        toastLoginSuccess: 'స్వాగతం {name}! మీరు ఇప్పుడు సైన్ ఇన్ అయ్యారు.',
        toastLoginError: 'దయచేసి చెల్లుబాటు అయ్యే పేరు, ఇమెయిల్ మరియు పాస్‌వర్డ్ నమోదు చేయండి.',
        toastLoginInvalidEmail: 'దయచేసి చెల్లుబాటు అయ్యే ఇమెయిల్ చిరునామాను నమోదు చేయండి.',
        toastLoginShortPassword: 'పాస్‌వర్డ్ కనీసం 6 అక్షరాలు ఉండాలి.'
    },
    hi: {
        pageTitle: 'ब्लड डोनर अराउंड मी',
        brandName: 'ब्लड<span>डोनर</span>',
        loading: 'लोड हो रहा है...',
        navHome: 'होम',
        navBloodGroups: 'रक्त समूह',
        navEvents: 'घटनाएँ',
        navDashboard: 'डैशबोर्ड',
        navEmergency: 'आपातकाल',
        navProfile: 'प्रोफ़ाइल',
        navSettings: 'सेटिंग्स',
        navLogout: 'लॉगआउट',
        toggleTheme: 'डार्क मोड टॉगल करें',
        heroBadge: 'आज जीवन बचाएँ',
        heroTitle: 'रक्त दान करें, <br><span>एक जीवन बचाएँ</span>',
        heroDesc: 'हज़ारों दाताओं का हिस्सा बनें जो बदलाव ला रहे हैं। आस-पास के रक्तदाताओं, दान शिविरों और आपातकालीन रक्त अनुरोधों को एक ही जगह खोजें।',
        heroFindDonor: 'दाता खोजें',
        heroRegisterDonor: 'दाता के रूप में पंजीकरण करें',
        statDonors: 'सक्रिय दाता',
        statCamps: 'रक्त शिविर',
        statLives: 'बचाए गए जीवन',
        searchTitle: 'एक <span>रक्तदाता</span> खोजें',
        searchSubtitle: 'रक्त समूह, स्थान और उपलब्धता के आधार पर दाताओं की खोज करें।',
        searchLabelBloodGroup: 'रक्त समूह',
        searchLabelState: 'राज्य',
        searchLabelCity: 'शहर',
        searchLabelAvailability: 'उपलब्धता',
        searchButton: 'खोजें',
        resultCountLabel: 'दाताओं मिले',
        bloodGroupsTitle: 'रक्त <span>समूह</span>',
        bloodGroupsSubtitle: 'रक्त समूह के आधार पर दाताओं को ब्राउज़ करें। किसी भी समूह पर क्लिक करके उपलब्ध दाताओं को देखें।',
        eventsTitle: 'आगामी <span>रक्तदान शिविर</span>',
        eventsSubtitle: 'अपने आस-पास के रक्तदान शिविरों को खोजें और पंजीकरण करें।',
        storiesTitle: 'सफलता <span>कथाएँ</span>',
        storiesSubtitle: 'रक्त दान से बचाए गए जीवन की असली कहानियाँ।',
        dashboardOverview: 'अवलोकन',
        dashboardDonationHistory: 'दान इतिहास',
        dashboardMyEvents: 'मेरी घटनाएँ',
        dashboardBloodRequests: 'रक्त अनुरोध',
        dashboardNotifications: 'सूचनाएँ',
        dashboardAchievements: 'उपलब्धियाँ',
        dashboardEditProfile: 'प्रोफ़ाइल संपादित करें',
        dashboardCertificates: 'प्रमाणपत्र',
        dashboardStatDonations: 'कुल दान',
        dashboardStatEvents: 'आगामी कार्यक्रम',
        dashboardStatRequests: 'लंबित अनुरोध',
        dashboardStatRewards: 'पुरस्कार अंक',
        dashboardRecentActivity: 'हाल की गतिविधि',
        dashboardRecentDonation: 'आपने 2026-06-15 को रक्त दान किया था',
        dashboardRegisteredCamp: '2026-07-20 को \'अपोलो अस्पताल शिविर\' के लिए पंजीकृत',
        dashboardEmergencyRequest: 'आपातकालीन अनुरोध: नायर अस्पताल में O- की जरूरत है',
        emergencyTitle: '<span>आपातकालीन</span> रक्त अनुरोध',
        emergencySubtitle: 'एक आपातकालीन रक्त अनुरोध सबमिट करें। आस-पास के दाताओं को तुरंत सूचित किया जाएगा।',
        emergencyPatientName: 'रोगी का नाम *',
        emergencyHospital: 'अस्पताल *',
        emergencyBloodGroup: 'रक्त समूह *',
        emergencyUnits: 'आवश्यक यूनिट्स *',
        emergencyUrgency: 'तत्परता *',
        emergencyContact: 'संपर्क व्यक्ति *',
        emergencyPhone: 'फोन नंबर *',
        emergencyLocation: 'स्थान *',
        emergencyDescription: 'विवरण',
        emergencySubmit: 'आपातकालीन अनुरोध सबमिट करें',
        emergencyNote: 'आस-पास के मेल खाते दाताओं को तुरंत सूचना मिलेगी।',
        profileTitle: 'मेरी प्रोफ़ाइल',
        profileName: 'पूरा नाम',
        profileEmail: 'ईमेल',
        profilePhone: 'फोन',
        profileBloodGroup: 'रक्त समूह',
        profileGender: 'लिंग',
        profileDob: 'जन्मतिथि',
        profileCity: 'शहर',
        profileState: 'राज्य',
        profilePincode: 'पिनकोड',
        profileAvailability: 'उपलब्धता',
        profileLastDonation: 'अंतिम दान तिथि',
        profileAddress: 'पता',
        profileUpdate: 'प्रोफ़ाइल अपडेट करें',
        profileDelete: 'खाता हटाएँ',
        profileChangePassword: 'पासवर्ड बदलें',
        footerQuickLinks: 'त्वरित लिंक',
        footerResources: 'साधन',
        footerContactUs: 'हमसे संपर्क करें',
        footerDesc: 'जरूरतमंद लोगों से रक्तदाताओं को जोड़ना। एक दान से एक जीवन बचाएँ।',
        footerFindDonor: 'दाता खोजें',
        footerBloodGroups: 'रक्त समूह',
        footerEvents: 'घटनाएँ',
        footerEmergency: 'आपातकाल',
        footerFaqs: 'सामान्य प्रश्न',
        footerBlog: 'ब्लॉग',
        footerPrivacy: 'गोपनीयता नीति',
        footerTerms: 'सेवा की शर्तें',
        footerRights: 'सभी अधिकार सुरक्षित हैं।',
        languages: { en: 'English', te: 'తెలుగు', hi: 'हिंदी' },
        bloodGroupDonors: '{count} दाताएँ उपलब्ध हैं',
        donorStatusAvailable: 'उपलब्ध',
        donorStatusUnavailable: 'उपलब्ध नहीं',
        requestBlood: 'रक्त अनुरोध करें',
        register: 'पंजीकरण',
        map: 'नक्शा',
        seatsLeft: '{count} सीटें बची हैं',
        available: 'उपलब्ध',
        unavailable: 'उपलब्ध नहीं',
        toastWelcome: 'ब्लड डोनर अराउंड मी में आपका स्वागत है! 🩸',
        toastLanguageChanged: 'भाषा बदल दी गई: {lang}',
        toastDarkModeOn: 'डार्क मोड सक्षम',
        toastDarkModeOff: 'लाइट मोड सक्षम',
        toastFormSubmitted: 'फॉर्म सफलतापूर्वक सबमिट हो गया!',
        toastEmergency: '🚨 आपातकालीन अनुरोध सबमिट हो गया! आस-पास के दाताओं को सूचित कर दिया गया है।',
        toastLogout: 'सफलतापूर्वक लॉग आउट हो गए। फिर मिलते हैं!',
        toastDeleteAccount: 'खाता हटाने का अनुरोध किया गया है। आपको पुष्टिकरण ईमेल आएगा।',
        toastProfileUpdated: 'प्रोफ़ाइल फोटो सफलतापूर्वक अपडेट हो गई!',
        toastRequestSent: '{name} को रक्त अनुरोध भेजा गया। जब वे जवाब देंगे तो आपको सूचित किया जाएगा।',
        toastEventRegistered: '"{title}" के लिए सफलतापूर्वक पंजीकृत हुए! पुष्टिकरण ईमेल देखें।',
        toastNoDonors: 'आपकी ज़रूरतों से मेल खाने वाले कोई दाता नहीं मिले।',
        toastNoGroupDonors: '{bloodGroup} समूह के लिए कोई दाता नहीं मिला',
        toastRegistrationSoon: 'पंजीकरण पेज जल्द आ रहा है!',
        confirmDeleteAccount: 'क्या आप वाकई अपना खाता हटाना चाहते हैं? यह कार्रवाई वापस नहीं की जा सकती।',
        searchPlaceholderState: 'उदा. आंध्र प्रदेश',
        searchPlaceholderCity: 'उदा. विजयवाड़ा',
        searchSelectAny: 'कोई भी',
        selectAvailable: 'उपलब्ध',
        selectUnavailable: 'उपलब्ध नहीं',
        selectAllGroups: 'सभी समूह',
        searchResultHeading: '{count} दाताओं मिले',
        loadingMessage: 'लोड हो रहा है...',
        authSubtitle: 'पूरी ब्लड डोनर अराउंड मी अनुभव तक पहुँचने के लिए कृपया साइन इन करें।',
        authName: 'नाम',
        authEmail: 'ईमेल पता',
        authPassword: 'पासवर्ड',
        authLogin: 'लॉगिन',
        authPlaceholderName: 'अपना पूरा नाम दर्ज करें',
        authPlaceholderEmail: 'अपना ईमेल पता दर्ज करें',
        authPlaceholderPassword: 'अपना पासवर्ड दर्ज करें',
        authHint: 'मुख्य वेबसाइट खुलने से पहले अपने विवरणों का उपयोग करें।',
        toastLoginSuccess: 'स्वागत है {name}! आप अब साइन इन हैं।',
        toastLoginError: 'कृपया एक मान्य नाम, ईमेल और पासवर्ड दर्ज करें।',
        toastLoginInvalidEmail: 'कृपया एक मान्य ईमेल पता दर्ज करें।',
        toastLoginShortPassword: 'पासवर्ड कम से कम 6 अक्षर लंबा होना चाहिए।'
    }
};

let currentLanguage = 'en';

function t(key, replacements = {}) {
    const langData = translations[currentLanguage] || translations.en;
    let value = key;
    const keyParts = key.split('.');
    let current = langData;
    for (const part of keyParts) {
        if (current && Object.prototype.hasOwnProperty.call(current, part)) {
            current = current[part];
        } else {
            current = undefined;
            break;
        }
    }
    if (current !== undefined) {
        value = current;
    } else {
        const fallback = translations.en;
        let fallbackCurrent = fallback;
        for (const part of keyParts) {
            if (fallbackCurrent && Object.prototype.hasOwnProperty.call(fallbackCurrent, part)) {
                fallbackCurrent = fallbackCurrent[part];
            } else {
                fallbackCurrent = undefined;
                break;
            }
        }
        if (fallbackCurrent !== undefined) {
            value = fallbackCurrent;
        }
    }
    Object.entries(replacements).forEach(([placeholder, replacement]) => {
        value = value.replace(new RegExp(`\\{${placeholder}\\}`, 'g'), replacement);
    });
    return value;
}

function getLocalizedValue(value) {
    if (typeof value === 'object' && value !== null) {
        return value[currentLanguage] || value.en || '';
    }
    return value || '';
}

function applyTranslations() {
    document.documentElement.lang = currentLanguage;
    document.title = t('pageTitle');
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key) {
            el.textContent = t(key);
        }
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (key) {
            el.innerHTML = t(key);
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (key) {
            el.placeholder = t(key);
        }
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (key) {
            el.title = t(key);
        }
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLanguage);
    });
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) heroTitle.innerHTML = t('heroTitle');
}

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLanguage = lang;
    applyTranslations();
    renderBloodGroups();
    renderEvents();
    renderStories();
    showToast(t('toastLanguageChanged', { lang: t(`languages.${lang}`) }), 'info', 1600);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// ==========================================
// TOAST SYSTEM
// ==========================================
function showToast(message, type = 'info', duration = 4000) {
    const container = document.getElementById('toastContainer');
    const icons = {
        success: 'fas fa-check-circle text-success',
        error: 'fas fa-times-circle text-danger',
        warning: 'fas fa-exclamation-triangle text-warning',
        info: 'fas fa-info-circle text-primary-custom'
    };
    const toast = document.createElement('div');
    toast.className = `toast-custom ${type}`;
    toast.innerHTML = `
            <span class="toast-icon"><i class="${icons[type] || icons.info}"></i></span>
            <span>${message}</span>
            <button class="toast-close">&times;</button>
        `;
    container.appendChild(toast);
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => {
        toast.style.animation = 'slideOutRight 0.3s ease forwards';
        setTimeout(() => toast.remove(), 350);
    });
    setTimeout(() => {
        if (toast.parentNode) {
            toast.style.animation = 'slideOutRight 0.3s ease forwards';
            setTimeout(() => toast.remove(), 350);
        }
    }, duration);
}

// ==========================================
// LOGIN FLOW
// ==========================================
function showAuthScreen() {
    document.getElementById('authScreen').style.display = 'flex';
    document.getElementById('mainNav').style.display = 'none';
    document.getElementById('appContent').style.display = 'none';
}

function showMainApp() {
    document.getElementById('authScreen').style.display = 'none';
    document.getElementById('mainNav').style.display = 'block';
    document.getElementById('appContent').style.display = 'block';
}

function validateLoginForm() {
    const name = document.getElementById('loginName').value.trim();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    if (!name || !email || !password) {
        showToast(t('toastLoginError'), 'warning');
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showToast(t('toastLoginInvalidEmail'), 'warning');
        return false;
    }

    if (password.length < 6) {
        showToast(t('toastLoginShortPassword'), 'warning');
        return false;
    }

    return { name, email, password };
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const valid = validateLoginForm();
    if (!valid) return;

    showMainApp();
    init();
    showToast(t('toastLoginSuccess', { name: valid.name }), 'success', 2200);
});

document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('loginPassword');
    const icon = this.querySelector('i');
    const isHidden = passwordInput.type === 'password';
    passwordInput.type = isHidden ? 'text' : 'password';
    icon.className = isHidden ? 'fas fa-eye-slash' : 'fas fa-eye';
});

function showLoading(show) {
    const spinner = document.getElementById('globalSpinner');
    if (show) {
        spinner.classList.remove('hidden');
    } else {
        spinner.classList.add('hidden');
    }
}

// ==========================================
// RENDER BLOOD GROUPS
// ==========================================
function renderBloodGroups() {
    const grid = document.getElementById('bloodGroupsGrid');
    const groups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
    grid.innerHTML = '';
    groups.forEach(bg => {
        const count = AppState.donors.filter(d => d.bloodGroup === bg).length;
        const col = document.createElement('div');
        col.className = 'col-md-3 col-sm-6';
        col.setAttribute('data-aos', 'fade-up');
        col.innerHTML = `
                <div class="blood-card" data-bg="${bg}">
                    <div class="blood-icon">${bg}</div>
                    <div class="blood-name">${bg}</div>
                    <div class="blood-count">${t('bloodGroupDonors', { count })}</div>
                    <button class="btn btn-outline-primary-custom btn-view">${t('heroFindDonor')}</button>
                </div>
            `;
        col.querySelector('.blood-card').addEventListener('click', () => {
            viewDonorsByGroup(bg);
        });
        grid.appendChild(col);
    });
}

// ==========================================
// VIEW DONORS BY BLOOD GROUP
// ==========================================
function viewDonorsByGroup(bloodGroup) {
    const filtered = AppState.donors.filter(d => d.bloodGroup === bloodGroup);
    const resultsContainer = document.getElementById('searchResults');
    const grid = document.getElementById('donorResultsGrid');
    const countEl = document.getElementById('resultCount');

    if (filtered.length === 0) {
        showToast(t('toastNoGroupDonors', { bloodGroup }), 'warning');
        return;
    }

    countEl.textContent = filtered.length;
    const resultLabel = document.querySelector('#searchResults h5 span[data-i18n="resultCountLabel"]');
    if (resultLabel) resultLabel.textContent = t('resultCountLabel');
    grid.innerHTML = '';
    filtered.forEach(d => {
        grid.appendChild(createDonorCard(d));
    });
    resultsContainer.style.display = 'block';
    resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ==========================================
// CREATE DONOR CARD
// ==========================================
function createDonorCard(donor) {
    const div = document.createElement('div');
    div.className = 'donor-card';
    div.setAttribute('data-aos', 'fade-up');
    const statusClass = donor.availability === 'available' ? 'available' : 'unavailable';
    div.innerHTML = `
            <img src="${donor.avatar}" alt="${donor.name}" class="donor-img">
            <div class="donor-name">${donor.name}</div>
            <div class="donor-bg">${donor.bloodGroup}</div>
            <div class="donor-meta"><i class="fas fa-map-marker-alt"></i> ${donor.city}, ${donor.state}</div>
            <div class="donor-meta"><i class="fas fa-calendar-alt"></i> Last Donation: ${donor.lastDonation}</div>
            <div class="donor-meta"><i class="fas fa-route"></i> ${donor.distance} away</div>
            <span class="donor-status ${statusClass}">${donor.availability === 'available' ? `✅ ${t('donorStatusAvailable')}` : `❌ ${t('donorStatusUnavailable')}`}</span>
            <div class="mt-2">
                <button class="btn btn-primary-custom btn-request request-blood-btn" data-id="${donor.id}">
                    <i class="fas fa-hand-holding-heart me-1"></i>${t('requestBlood')}
                </button>
            </div>
            <small class="text-muted d-block mt-2" style="font-size:0.75rem;">
                <i class="fas fa-lock me-1"></i>Phone number revealed after request acceptance
            </small>
        `;
    const requestBtn = div.querySelector('.request-blood-btn');
    requestBtn.addEventListener('click', () => {
        showToast(t('toastRequestSent', { name: donor.name }), 'success');
    });
    return div;
}

// ==========================================
// RENDER EVENTS
// ==========================================
function renderEvents() {
    const grid = document.getElementById('eventsGrid');
    grid.innerHTML = '';
    AppState.events.forEach((ev, index) => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4';
        col.setAttribute('data-aos', 'fade-up');
        col.setAttribute('data-aos-delay', index * 100);
        const available = ev.maxSeats - ev.seats;
        const title = getLocalizedValue(ev.title);
        const organizer = getLocalizedValue(ev.organizer);
        const location = getLocalizedValue(ev.location);
        const time = getLocalizedValue(ev.time);
        col.innerHTML = `
                <div class="card-custom event-card position-relative">
                    <span class="event-badge">${t('seatsLeft', { count: available })}</span>
                    <img src="${ev.banner}" alt="${title}" class="event-img">
                    <div class="card-body">
                        <h5 class="fw-700">${title}</h5>
                        <p class="text-muted small"><i class="fas fa-building me-1"></i>${organizer}</p>
                        <div class="event-meta">
                            <span><i class="fas fa-calendar-day"></i> ${ev.date}</span>
                            <span><i class="fas fa-clock"></i> ${time}</span>
                        </div>
                        <div class="event-meta">
                            <span><i class="fas fa-map-pin"></i> ${location}</span>
                        </div>
                        <div class="d-flex gap-2 mt-3 flex-wrap">
                            <a href="${ev.map}" target="_blank" class="btn btn-outline-primary-custom btn-sm">
                                <i class="fas fa-map"></i> ${t('map')}
                            </a>
                            <button class="btn btn-primary-custom btn-sm register-event-btn" data-id="${ev.id}">
                                <i class="fas fa-check-circle"></i> ${t('register')}
                            </button>
                        </div>
                    </div>
                </div>
            `;
        col.querySelector('.register-event-btn').addEventListener('click', () => {
            showToast(t('toastEventRegistered', { title: ev.title }), 'success');
        });
        grid.appendChild(col);
    });
}

// ==========================================
// RENDER STORIES
// ==========================================
function renderStories() {
    const grid = document.getElementById('storiesGrid');
    grid.innerHTML = '';
    AppState.stories.forEach((story, index) => {
        const col = document.createElement('div');
        col.className = 'col-md-4';
        col.setAttribute('data-aos', 'fade-up');
        col.setAttribute('data-aos-delay', index * 100);
        const name = getLocalizedValue(story.name);
        const role = getLocalizedValue(story.role);
        const text = getLocalizedValue(story.text);
        col.innerHTML = `
                <div class="story-card">
                    <div class="story-quote"><i class="fas fa-quote-left"></i></div>
                    <div class="story-text">"${text}"</div>
                    <div class="story-author">
                        <img src="${story.avatar}" alt="${name}">
                        <div>
                            <div class="sa-name">${name}</div>
                            <div class="sa-role">${role}</div>
                        </div>
                    </div>
                </div>
            `;
        grid.appendChild(col);
    });
}

// ==========================================
// SEARCH DONOR FORM
// ==========================================
document.getElementById('searchDonorForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const bg = document.getElementById('searchBloodGroup').value;
    const state = document.getElementById('searchState').value.toLowerCase().trim();
    const city = document.getElementById('searchCity').value.toLowerCase().trim();
    const availability = document.getElementById('searchAvailability').value;

    let results = [...AppState.donors];
    if (bg) results = results.filter(d => d.bloodGroup === bg);
    if (state) results = results.filter(d => d.state.toLowerCase().includes(state));
    if (city) results = results.filter(d => d.city.toLowerCase().includes(city));
    if (availability) results = results.filter(d => d.availability === availability);

    const grid = document.getElementById('donorResultsGrid');
    const countEl = document.getElementById('resultCount');
    const container = document.getElementById('searchResults');

    if (results.length === 0) {
        showToast(t('toastNoDonors'), 'warning');
        container.style.display = 'none';
        return;
    }

    countEl.textContent = results.length;
    const resultLabel = document.querySelector('#searchResults h5 span[data-i18n="resultCountLabel"]');
    if (resultLabel) resultLabel.textContent = t('resultCountLabel');
    grid.innerHTML = '';
    results.forEach(d => {
        grid.appendChild(createDonorCard(d));
    });
    container.style.display = 'block';
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// ==========================================
// DARK MODE TOGGLE
// ==========================================
document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const icon = this.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.className = 'fas fa-sun';
        showToast(t('toastDarkModeOn'), 'info');
    } else {
        icon.className = 'fas fa-moon';
        showToast(t('toastDarkModeOff'), 'info');
    }
});

// ==========================================
// NAVIGATION (SPA-style)
// ==========================================
function showSection(sectionId) {
    // Hide all sections
    document.getElementById('home').style.display = 'none';
    document.getElementById('searchDonor').style.display = 'none';
    document.getElementById('bloodGroups').style.display = 'none';
    document.getElementById('events').style.display = 'none';
    document.getElementById('stories').style.display = 'none';
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('emergency').style.display = 'none';
    document.getElementById('profile').style.display = 'none';

    // Show requested
    if (sectionId === 'home') {
        document.getElementById('home').style.display = 'block';
        document.getElementById('searchDonor').style.display = 'block';
        document.getElementById('bloodGroups').style.display = 'block';
        document.getElementById('events').style.display = 'block';
        document.getElementById('stories').style.display = 'block';
    } else if (sectionId === 'dashboard') {
        document.getElementById('dashboard').style.display = 'block';
    } else if (sectionId === 'emergency') {
        document.getElementById('emergency').style.display = 'block';
    } else if (sectionId === 'profile') {
        document.getElementById('profile').style.display = 'block';
    }

    // Update nav active
    document.querySelectorAll('#navbarContent .nav-link').forEach(link => {
        link.classList.remove('active');
    });
    const navMap = {
        home: 'a[href="#home"]',
        dashboard: 'a[href="#dashboard"]',
        emergency: 'a[href="#emergency"]',
        profile: 'a[href="#profile"]'
    };
    if (navMap[sectionId]) {
        const target = document.querySelector(navMap[sectionId]);
        if (target) target.classList.add('active');
    }
}

// Nav links
document.querySelectorAll('#navbarContent .nav-link[href]').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#home') { e.preventDefault(); showSection('home'); }
        else if (href === '#dashboard') { e.preventDefault(); showSection('dashboard'); }
        else if (href === '#emergency') { e.preventDefault(); showSection('emergency'); }
        else if (href === '#profile') { e.preventDefault(); showSection('profile'); }
        else if (href === '#bloodGroups') {
            e.preventDefault();
            showSection('home');
            document.getElementById('bloodGroups').scrollIntoView({ behavior: 'smooth' });
        } else if (href === '#events') {
            e.preventDefault();
            showSection('home');
            document.getElementById('events').scrollIntoView({ behavior: 'smooth' });
        } else if (href === '#searchDonor') {
            e.preventDefault();
            showSection('home');
            document.getElementById('searchDonor').scrollIntoView({ behavior: 'smooth' });
        } else if (href === '#stories') {
            e.preventDefault();
            showSection('home');
            document.getElementById('stories').scrollIntoView({ behavior: 'smooth' });
        } else if (href === '#register') {
            e.preventDefault();
            showToast(t('toastRegistrationSoon'), 'info');
        }
    });
});

// Dashboard sidebar navigation
document.querySelectorAll('.dash-nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.dash-nav a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        const target = this.getAttribute('data-dash');
        const sections = ['overview', 'donations', 'events', 'requests', 'notifications', 'achievements', 'profile', 'certificates'];
        sections.forEach(s => {
            const el = document.getElementById('dash' + s.charAt(0).toUpperCase() + s.slice(1));
            if (el) el.style.display = 'none';
        });
        const showEl = document.getElementById('dash' + target.charAt(0).toUpperCase() + target.slice(1));
        if (showEl) showEl.style.display = 'block';
    });
});

// ==========================================
// LOGOUT
// ==========================================
document.getElementById('logoutBtn').addEventListener('click', function(e) {
    e.preventDefault();
    showToast(t('toastLogout'), 'success');
    setTimeout(() => {
        showSection('home');
    }, 500);
});

// ==========================================
// DELETE ACCOUNT
// ==========================================
document.getElementById('deleteAccountBtn').addEventListener('click', function() {
    if (confirm(t('confirmDeleteAccount'))) {
        showToast(t('toastDeleteAccount'), 'warning');
    }
});

// ==========================================
// PROFILE IMAGE UPLOAD (simulated)
// ==========================================
document.getElementById('profileImageUpload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(ev) {
            document.getElementById('profileAvatar').src = ev.target.result;
            showToast(t('toastProfileUpdated'), 'success');
        };
        reader.readAsDataURL(file);
    }
});

// ==========================================
// FORMS SUBMISSION (prevent default + toast)
// ==========================================
document.querySelectorAll('form').forEach(form => {
    if (form.id === 'loginForm') return;
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        showToast(t('toastFormSubmitted'), 'success');
    });
});

// ==========================================
// EMERGENCY REQUEST FORM
// ==========================================
document.getElementById('emergencyRequestForm').addEventListener('submit', function(e) {
    e.preventDefault();
    showToast(t('toastEmergency'), 'error');
    this.reset();
});

// ==========================================
// INIT
// ==========================================
function init() {
    showLoading(true);
    applyTranslations();
    renderBloodGroups();
    renderEvents();
    renderStories();
    // Show home by default
    showSection('home');
    setTimeout(() => {
        showLoading(false);
    }, 600);

    // Simulate stats animation
    animateCounter('totalDonorsStat', 2847, 3000);
    animateCounter('totalCampsStat', 126, 2000);
    animateCounter('totalLivesStat', 4521, 3500);
}

// ==========================================
// COUNTER ANIMATION
// ==========================================
function animateCounter(elementId, target, duration) {
    const el = document.getElementById(elementId);
    if (!el) return;
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (target - start) * eased);
        el.textContent = current.toLocaleString();
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            el.textContent = target.toLocaleString();
        }
    }
    requestAnimationFrame(update);
}

// ==========================================
// RUN
// ==========================================
document.addEventListener('DOMContentLoaded', init);