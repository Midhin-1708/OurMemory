/**
 * Central Memories Data File
 * Featuring Real Photographs of Kohila (Muu) & Her Husband
 * Ready to scale for 30+ pictures and personal videos!
 */

// Real local media files
export const DEFAULT_MEDIA = {
  masterPortrait: "/memories/us-master-portrait.jpg",
  togetherHome: "/memories/us-together-home.jpg",
  holdingHands: "/memories/holding-hands.jpg",
  videoCall1: "/memories/videocall-sleep-1.jpg",
  videoCall2: "/memories/videocall-sleep-2.jpg",
  cutePigtails: "/memories/muu-cute-pigtails.jpg",
  fingerHeart: "/memories/muu-finger-heart.jpg",
  yellowFlower: "/memories/muu-yellow-flower.jpg",
  thumbsUp: "/memories/muu-thumbs-up.jpg",
  linkedArms: "/memories/muu-linked-arms.jpg",
  
  // Real memory additions
  sillyFace: "/memories/muu-silly-scrunched-face.jpg",
  hotelThumbs: "/memories/us-hotel-thumbs-up.jpg",
  twoFlowers: "/memories/us-two-flowers-nature.jpg",
  restingHead: "/memories/muu-resting-head-nature.jpg",
  bangaloreAirport: "/memories/us-bangalore-airport.jpg",
  templeKumkum: "/memories/us-temple-kumkum-selfie.jpg",
  blueShirtClouds: "/memories/us-blue-shirt-clouds.jpg",
  cafeHeadsTogether: "/memories/us-cafe-heads-together.jpg",
  templeMarigoldGaze: "/memories/us-temple-marigold-gaze.jpg",
  templeBridgeFull: "/memories/us-temple-bridge-fullbody.jpg",
  secretMarriageKiss: "/memories/our-secret-marriage-kiss.jpg",
  secretMarriageHug: "/memories/our-secret-marriage-hug.jpg",
  mirrorArmAround: "/memories/us-mirror-arm-around-neck.jpg",
  travelHandsTouch: "/memories/us-travel-hands-touch.jpg",
  templePillars: "/memories/us-temple-pillars-portrait.jpg",
  bedLaughter: "/memories/us-bed-upside-down-laughter.jpg",
  mirrorHugChest: "/memories/us-mirror-hug-chest.jpg",
  mirrorCheekToCheek: "/memories/us-mirror-cheek-to-cheek.jpg",
  mirrorEmbraceWaist: "/memories/us-mirror-embrace-waist.jpg",
  mirrorLovingGaze: "/memories/us-mirror-loving-gaze.jpg",
  marriageCloseSelfie: "/memories/our-marriage-close-selfie.jpg",
  marriageMirrorKissStanding: "/memories/our-marriage-mirror-kiss-standing.jpg",
  marriageMirrorSweetHug: "/memories/our-marriage-mirror-sweet-hug.jpg",
  airportT2Hug: "/memories/us-bangalore-airport-terminal2-hug.jpg",
  marriageFullbodyPortrait: "/memories/our-marriage-fullbody-portrait.jpg",
  
  // Real kitchen cooking & sacred marriage ceremony additions
  cookingKitchen1: "/memories/us-cooking-together-kitchen-1.jpg",
  cookingKitchen2: "/memories/us-cooking-together-kitchen-2.jpg",
  marriageMotionSpin: "/memories/our-marriage-motion-blur-spin.jpg",
  marriageTempleKiss: "/memories/our-marriage-temple-kiss-saree.jpg",
  marriageGentleCheeks: "/memories/our-marriage-gentle-cheeks-saree.jpg",
  marriageSacredVowsClose: "/memories/our-marriage-sacred-vows-close.jpg",
  
  // Real fallbacks replacing generic stock photos with yellow thread and pink saree as primary
  hospital: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",
  hands: "/memories/holding-hands.jpg",
  chat: "/memories/videocall-sleep-1.jpg",
  distance: "/memories/us-bangalore-airport.jpg",
  doctor: "/memories/muu-yellow-flower.jpg",
  home: "/memories/us-together-home.jpg",
  airbnb: "/memories/us-hotel-thumbs-up.jpg",
  bangalore: "/memories/us-bangalore-airport.jpg",
  flight: "/memories/us-bangalore-airport.jpg",
  cooking: "/memories/us-cooking-together-kitchen-1.jpg",
  temple: "/memories/us-temple-marigold-gaze.jpg",
  hug: "/memories/our-marriage-mirror-sweet-hug.jpg",
  kiss: "/memories/our-marriage-mirror-sweet-hug.jpg",
  laugh: "/memories/muu-silly-scrunched-face.jpg",
  tears: "/memories/videocall-sleep-2.jpg",
  wedding: "/memories/our-marriage-mirror-sweet-hug.jpg",
  portrait: "/memories/our-marriage-mirror-sweet-hug.jpg",
  masterPortrait: "/memories/our-marriage-mirror-sweet-hug.jpg",
  marriageVideo: "/videos/our-sacred-marriage-ceremony.mp4"
};

// Section 3: The Day I Met You
export const firstMeetingMemory = {
  id: "first-met",
  title: "The Day I Met Kohila",
  location: "Hospital Waiting Area",
  src: DEFAULT_MEDIA.hospital,
  type: "image",
  caption: "I didn't know it that day... but meeting you would change my entire destiny.",
  description: "A chance hallway, a mutual friend, and the girl who would quietly become my universe, my wife, my Muu.",
  conversationQuote: "'Are you here for a consultation too?' Neither of us knew we were meeting our forever."
};

// Section 4: Chat messages simulation tailored for Kohila (Muu)
export const chatConversation = [
  {
    sender: "me",
    time: "11:42 PM",
    text: "Hey Muu, did you make it back to your room in Osh safely? It's freezing outside tonight."
  },
  {
    sender: "her",
    time: "11:44 PM",
    text: "Just tucked under the blanket. Exhausted from hospital ward rounds, but I couldn't sleep without talking to you first :)"
  },
  {
    sender: "me",
    time: "11:46 PM",
    text: "Go rest, my sweet doctor! Don't let me keep you awake when you have a 6 AM hospital shift tomorrow."
  },
  {
    sender: "her",
    time: "11:48 PM",
    text: "Talking to you doesn't make me tired, it's the only peace I get all day in Kyrgyzstan. Your voice feels like home."
  },
  {
    sender: "me",
    time: "11:51 PM",
    text: "You have no idea how fast my heart races whenever you say that, Muu."
  },
  {
    sender: "her",
    time: "11:53 PM",
    text: "I think you're becoming dangerously necessary to my heart..."
  },
  {
    sender: "me",
    time: "11:55 PM",
    text: "I belong to you, Kohila. In every lifetime, only you."
  }
];

// Section 5: Vertical Timeline Milestones (Timeless - No Dates)
export const timelineMilestones = [
  {
    id: 1,
    title: "First Meeting in the Hospital",
    location: "Hospital",
    type: "image",
    src: DEFAULT_MEDIA.hospital,
    description: "Two strangers brought together by one mutual friend in the most unexpected corridor.",
    quote: "You walked in, and the noise of the room faded into the background."
  },
  {
    id: 2,
    title: "Late Night Calls Across 5,000 KM",
    location: "Singanallur ↔ Osh",
    type: "image",
    src: DEFAULT_MEDIA.cutePigtails,
    description: "Seeing your playful braided hair and your glowing face on video calls melted every mile between us.",
    quote: "The clock kept ticking past 2 AM, but neither of us wanted to say goodnight."
  },
  {
    id: 3,
    title: "Kohila ❤️ is muted",
    location: "Night Video Call Sleep",
    type: "image",
    src: DEFAULT_MEDIA.videoCall1,
    description: "Leaving the video call open all night while you slept peacefully under the duvet.",
    quote: "Listening to your gentle breathing from Kyrgyzstan was the only lullaby I needed."
  },
  {
    id: 4,
    title: "A Finger Heart Across Oceans",
    location: "Video Call",
    type: "image",
    src: DEFAULT_MEDIA.fingerHeart,
    description: "Your sweet glasses, your gentle smile, and sending me love through the screen.",
    quote: "No distance in the world could ever dim the way my heart races for you, Muu."
  },
  {
    id: 5,
    title: "The First Time We Held Hands",
    location: "Our Sacred Room",
    type: "image",
    src: DEFAULT_MEDIA.holdingHands,
    description: "Fingers intertwined tightly on the bed. Every unspoken longing vanished in that single touch.",
    quote: "The warmth of your hand in mine was proof that our souls are woven together."
  },
  {
    id: 6,
    title: "Lying Beside You at Home",
    location: "Home in Bed",
    type: "image",
    src: DEFAULT_MEDIA.togetherHome,
    description: "Resting side by side, your head leaning against my shoulder, peaceful smiles on our faces.",
    quote: "No countdowns, no flights, no screens. Just you and me breathing the same air."
  },
  {
    id: 7,
    title: "Two Flowers Under the Trees",
    location: "Outdoors in Nature",
    type: "image",
    src: DEFAULT_MEDIA.twoFlowers,
    description: "A flower for you and a flower for me, beaming with joy under the canopy of green trees.",
    quote: "You bring color into everything that was once ordinary."
  },
  {
    id: 8,
    title: "Your Arm Linked in Mine",
    location: "Walking Together",
    type: "image",
    src: DEFAULT_MEDIA.linkedArms,
    description: "Your hand wrapped around my arm. A quiet declaration that we walk this life together.",
    quote: "Holding you close like this is where I find all my strength."
  },
  {
    id: 9,
    title: "Bangalore Airport Send-Off",
    location: "Bangalore Airport Departure",
    type: "image",
    src: DEFAULT_MEDIA.bangaloreAirport,
    description: "Standing side by side at the terminal departure gates before your flight back to Kyrgyzstan.",
    quote: "Every goodbye at the airport only proves how desperately my heart belongs to you."
  },
  {
    id: 10,
    title: "Our Secret Marriage",
    location: "Before the Heavens",
    type: "image",
    src: DEFAULT_MEDIA.secretMarriageKiss,
    description: "The sacred vow that only the two of us know. Celebrating one month as husband and wife.",
    quote: "Kissing your cheek while holding our sacred thread. The purest vow I will ever make. Happy anniversary, my Muu."
  }
];

// Section 10: The 10 Reunion Chapters (The Days We Didn't Have to Miss Each Other)
export const reunionChapters = [
  {
    id: "home",
    number: "01",
    tag: "HOME & PEACE",
    title: "Lying Beside My Wife",
    subtitle: "Just being beside you was paradise.",
    src: DEFAULT_MEDIA.togetherHome,
    type: "image",
    text: "Sometimes we didn't need to go anywhere. Lying quietly together on the bed, your head against my shoulder, looking into the camera with smiles that needed no words. Having you right beside me is the greatest peace in this world."
  },
  {
    id: "linked",
    number: "02",
    tag: "LINKED ARMS",
    title: "Never Letting Go",
    subtitle: "Your hand around my arm.",
    src: DEFAULT_MEDIA.linkedArms,
    type: "image",
    text: "The way your arm wraps around mine, holding tight. That simple touch anchors my entire soul. No matter how wild the world gets, as long as your hand is holding onto my arm, I am invincible."
  },
  {
    id: "twoflowers",
    number: "03",
    tag: "NATURE & LAUGHTER",
    title: "Two Flowers Under the Trees",
    subtitle: "A flower for you, a flower for me.",
    src: DEFAULT_MEDIA.twoFlowers,
    type: "image",
    text: "Under the shade of green trees, holding up little flowers by our ears, smiling from our souls. Seeing your genuine, radiant happiness is the only sight my eyes will ever crave, my sweet Muu."
  },
  {
    id: "resting",
    number: "04",
    tag: "YOUR HEAD ON MY SHOULDER",
    title: "Resting in My Arms",
    subtitle: "The safest place in the world.",
    src: DEFAULT_MEDIA.restingHead,
    type: "image",
    text: "Your head resting gently on my shoulder, that yellow bloom in your hair, and peace in your eyes. In that quiet moment, every storm outside stopped existing."
  },
  {
    id: "hands",
    number: "05",
    tag: "HOLDING HANDS",
    title: "Intertwined Souls",
    subtitle: "An unspoken covenant in our grip.",
    src: DEFAULT_MEDIA.holdingHands,
    type: "image",
    text: "Our fingers locked together against the clean white sheets. Two hands that have held each other through misunderstanding, long distance, and tears—now holding on for eternity."
  },
  {
    id: "temple",
    number: "06",
    tag: "TEMPLE & DEVOTION",
    title: "The Way You Look at Me",
    subtitle: "Holding a marigold flower before the sanctum.",
    src: DEFAULT_MEDIA.templeMarigoldGaze,
    type: "image",
    text: "Standing beside the ancient stone pillars of the temple, holding an orange flower in my hand. You looked up at me with that quiet, pure adoration in your eyes. I prayed that God would protect my Kohila, guide your medical journey in Kyrgyzstan, and keep our souls bound forever."
  },
  {
    id: "airport",
    number: "07",
    tag: "AIRPORT GATES",
    title: "Bangalore Airport Goodbyes",
    subtitle: "Holding each other before the flight.",
    src: DEFAULT_MEDIA.bangaloreAirport,
    type: "image",
    text: "Standing side by side under the departure flight boards in Bangalore. The heaviness of letting go, the quiet promise that distance would never beat us, and counting down the hours until our next embrace."
  },
  {
    id: "cooking",
    number: "08",
    tag: "COOKING TOGETHER",
    title: "Messy Meals & Home-Cooked Love",
    subtitle: "Stirring the pot with you beside me.",
    src: DEFAULT_MEDIA.cookingKitchen1,
    type: "image",
    text: "Standing close by the stove in our little kitchen, chopping tomatoes and chillies, laughing together as the pan sizzled. Feeding each other that first warm spoonful straight from the ladle—these simple, messy home dinners with you are a million times richer than any five-star feast in the world, my Muu."
  },
  {
    id: "hotel",
    number: "09",
    tag: "WARM COFFEE & CAFE HOURS",
    title: "Leaning Heads Together",
    subtitle: "Your chin resting in your hands, my head against yours.",
    src: DEFAULT_MEDIA.cafeHeadsTogether,
    type: "image",
    text: "Sitting together under the warm ambient light of the cafe, resting your chin in your hands with that serene, loving gaze. Leaning my head right against yours felt so natural, safe, and complete. In your presence, the rush of the world disappears."
  },
  {
    id: "videocalls",
    number: "10",
    tag: "SCREEN LOVE",
    title: "Kohila ❤️ is muted",
    subtitle: "Watching over you across 5,000 kilometres.",
    src: "/videos/kohila-sleeping-videocall.mp4",
    type: "video",
    text: "After grueling shifts in Osh, you would fall asleep on video call with your phone propped up on the pillow. I would stay awake just watching over you, making sure you felt safe even across oceans."
  }
];

// Section 13: Memory Gallery Items (Timeless, Expandable to 30+ Items!)
export const galleryCategories = ["ALL", "US", "MOMENTS", "LITTLE THINGS", "DISTANCE", "HOME", "VIDEOS", "FOREVER"];

export const galleryItems = [
  {
    id: "gal-1",
    category: "US",
    title: "The way you look at me.",
    location: "Our Sacred Space",
    type: "image",
    src: DEFAULT_MEDIA.masterPortrait,
    caption: "In a world full of noise, the way your eyes look up into mine is my entire peace.",
    note: "You with your forehead vibuthi, looking at me with pure devotion. My favorite photograph of us."
  },
  {
    id: "gal-2",
    category: "MOMENTS",
    title: "Two flowers under the green trees.",
    location: "Outdoors in Nature",
    type: "image",
    src: DEFAULT_MEDIA.twoFlowers,
    caption: "Flowers by our ears and the brightest smiles on our faces.",
    note: "One of the happiest afternoons of my life. You bring joy into everything."
  },
  {
    id: "gal-3",
    category: "HOME",
    title: "Waking up beside my wife.",
    location: "Our Cozy Bed",
    type: "image",
    src: DEFAULT_MEDIA.togetherHome,
    caption: "No flights to catch, no time zones to calculate, just Kohila resting on my shoulder.",
    note: "Both of us in our comfortable clothes, simply happy to be breathing the same air."
  },
  {
    id: "gal-4",
    category: "US",
    title: "Your head resting on my shoulder.",
    location: "Nature Walk",
    type: "image",
    src: DEFAULT_MEDIA.restingHead,
    caption: "A yellow bloom in your hair and your sweet head on my shoulder.",
    note: "The peace I felt in this moment is something I want to protect forever."
  },
  {
    id: "gal-5",
    category: "DISTANCE",
    title: "Bangalore Airport Departure.",
    location: "Bangalore Airport",
    type: "image",
    src: DEFAULT_MEDIA.bangaloreAirport,
    caption: "Standing together at the gates before you fly back to Osh, Kyrgyzstan.",
    note: "Hating the distance, but loving the girl who makes every goodbye worth fighting for."
  },
  {
    id: "gal-6",
    category: "MOMENTS",
    title: "My silly, playful little Muu.",
    location: "Our Private Moments",
    type: "image",
    src: DEFAULT_MEDIA.sillyFace,
    caption: "Scrunching up your nose behind my cheek.",
    note: "I love this goofy, unfiltered, happy girl more than words will ever describe."
  },
  {
    id: "gal-7",
    category: "LITTLE THINGS",
    title: "Never let go of this arm.",
    location: "Walking Together",
    type: "image",
    src: DEFAULT_MEDIA.linkedArms,
    caption: "Your arm intertwined in mine. Walking beside you is my only prayer.",
    note: "I love the way you naturally hold on to me whenever we walk together."
  },
  {
    id: "gal-8",
    category: "LITTLE THINGS",
    title: "Intertwined fingers on the sheets.",
    location: "Unspoken Vows",
    type: "image",
    src: DEFAULT_MEDIA.holdingHands,
    caption: "Holding the hands of the future doctor who holds my entire heart.",
    note: "A grip so tight and natural that it felt like our hands were carved for each other."
  },
  {
    id: "gal-9",
    category: "HOME",
    title: "Cozy room selfies & thumbs up.",
    location: "Our Little Haven",
    type: "image",
    src: DEFAULT_MEDIA.hotelThumbs,
    caption: "Happy smiles and pure comfort in each other's presence.",
    note: "Wherever you are with me is home, Muu."
  },
  {
    id: "gal-10",
    category: "MOMENTS",
    title: "A yellow flower for my Muu.",
    location: "Outdoors in Nature",
    type: "image",
    src: DEFAULT_MEDIA.yellowFlower,
    caption: "A flower behind your ear, and my entire universe standing right beside me.",
    note: "You were glowing in the sunshine. My prettiest doctor."
  },
  {
    id: "gal-11",
    category: "DISTANCE",
    title: "Kohila ❤️ is muted.",
    location: "Singanallur ↔ Osh, Kyrgyzstan",
    type: "image",
    src: DEFAULT_MEDIA.videoCall1,
    caption: "Watching you sleep peacefully after exhausting hospital shifts in Kyrgyzstan.",
    note: "I didn't want to hang up. Leaving the call open was the only way to guard your dreams."
  },
  {
    id: "gal-12",
    category: "DISTANCE",
    title: "A finger heart across the mountains.",
    location: "Video Call across 5,000 km",
    type: "image",
    src: DEFAULT_MEDIA.fingerHeart,
    caption: "Under the blankets in Osh, sending me love with your cute glasses.",
    note: "Even 5,000 kilometres away, you always found a way to make me feel cherished."
  },
  {
    id: "gal-13",
    category: "MOMENTS",
    title: "Braided pigtails and pure joy.",
    location: "Late Night Video Call",
    type: "image",
    src: DEFAULT_MEDIA.cutePigtails,
    caption: "That silly, adorable smile that can erase any stress from my day.",
    note: "My playful little kid, my companion, my Muu."
  },
  {
    id: "gal-14",
    category: "MOMENTS",
    title: "My biggest cheerleader.",
    location: "Hostel in Osh",
    type: "image",
    src: DEFAULT_MEDIA.thumbsUp,
    caption: "Double thumbs up and endless encouragement.",
    note: "You believe in me even when I doubt myself. I love you endlessly for that."
  },
  {
    id: "gal-15",
    category: "DISTANCE",
    title: "Sleepy smiles under the blanket.",
    location: "Singanallur ↔ Kyrgyzstan",
    type: "image",
    src: DEFAULT_MEDIA.videoCall2,
    caption: "Whispering goodnight until your breathing slowed down into deep sleep.",
    note: "Every night apart was just one night closer to forever."
  },
  {
    id: "gal-16",
    category: "FOREVER",
    title: "Our Secret Covenant as Husband & Wife.",
    location: "A Sacred Secret",
    type: "image",
    src: DEFAULT_MEDIA.masterPortrait,
    caption: "One month of marriage that the world knows nothing about.",
    note: "The easiest, bravest decision I ever made was choosing you as my wife."
  },
  {
    id: "gal-17",
    category: "US",
    title: "The sweetest gaze in the universe.",
    location: "Ancient Temple Sanctuary",
    type: "image",
    src: DEFAULT_MEDIA.templeMarigoldGaze,
    caption: "Holding an orange marigold flower while you look up into my eyes with pure adoration.",
    note: "This gaze right here is all the proof I will ever need that you are my home, Muu."
  },
  {
    id: "gal-18",
    category: "MOMENTS",
    title: "Leaning heads together at the cafe.",
    location: "Warm Cafe Evening",
    type: "image",
    src: DEFAULT_MEDIA.cafeHeadsTogether,
    caption: "Your chin in your hands, our heads touching, surrounded by gentle golden light.",
    note: "The peace of having you close enough to touch is unmatched in this world."
  },
  {
    id: "gal-19",
    category: "MOMENTS",
    title: "Sacred tilak & temple prayers.",
    location: "Temple Steps",
    type: "image",
    src: DEFAULT_MEDIA.templeKumkum,
    caption: "Red tilak on our foreheads and the temple gopuram shining behind us.",
    note: "Every prayer I whispered inside was for your happiness, your medical dreams, and our future."
  },
  {
    id: "gal-20",
    category: "US",
    title: "Breezy skies beside you.",
    location: "Afternoon Walk",
    type: "image",
    src: DEFAULT_MEDIA.blueShirtClouds,
    caption: "A soft cool breeze, cloudy skies, and my favorite girl smiling beside me.",
    note: "You look so serene and radiant here. My beautiful wife."
  },
  {
    id: "gal-21",
    category: "FOREVER",
    title: "Walking side-by-side through life.",
    location: "Temple Bridge",
    type: "image",
    src: DEFAULT_MEDIA.templeBridgeFull,
    caption: "Standing together by the stone balustrade, ready for every tomorrow.",
    note: "I will hold your hand through every door and every journey life brings us, my sweetest Muu."
  },
  {
    id: "gal-22",
    category: "FOREVER",
    title: "A sacred kiss for my wife.",
    location: "Our Sacred Covenant",
    type: "image",
    src: DEFAULT_MEDIA.secretMarriageKiss,
    caption: "Kissing your cheek while you hold our sacred yellow thread with your eyes closed in bliss.",
    note: "This is my absolute favorite second of my entire life. Loving you as my wife is my greatest gift, my Muu."
  },
  {
    id: "gal-23",
    category: "FOREVER",
    title: "Held in my arms forever.",
    location: "Our Private Room",
    type: "image",
    src: DEFAULT_MEDIA.secretMarriageHug,
    caption: "Embracing you from behind in your pink saree, our sacred thread shining.",
    note: "Holding you tight like this is where all my fears end. Happy one month of marriage, Kohila."
  },
  {
    id: "gal-24",
    category: "US",
    title: "My favorite place to rest.",
    location: "Mirror Reflection",
    type: "image",
    src: DEFAULT_MEDIA.mirrorArmAround,
    caption: "My arm wrapped tenderly over your shoulder, smiling like two lucky kids.",
    note: "You fit into my arms so effortlessly, like you were made for me."
  },
  {
    id: "gal-25",
    category: "LITTLE THINGS",
    title: "Side-by-side on every journey.",
    location: "Traveling Together",
    type: "image",
    src: DEFAULT_MEDIA.travelHandsTouch,
    caption: "Our hands resting close on our laps during the journey.",
    note: "Even without holding tight, just having your hand touching mine makes every road peaceful."
  },
  {
    id: "gal-26",
    category: "US",
    title: "Before the temple sanctum.",
    location: "Ancient Temple Carvings",
    type: "image",
    src: DEFAULT_MEDIA.templePillars,
    caption: "Standing close before the stone carvings, blessed and grateful.",
    note: "Every god we prayed to heard one single plea from me: Keep Kohila safe, happy, and forever mine."
  },
  {
    id: "gal-27",
    category: "HOME",
    title: "Laughter that heals the world.",
    location: "Lazy Morning in Bed",
    type: "image",
    src: DEFAULT_MEDIA.bedLaughter,
    caption: "Upside down on the bed, laughing until our cheeks hurt.",
    note: "Seeing this wide, beautiful smile on your face is everything I ever prayed for, Muu."
  },
  {
    id: "gal-28",
    category: "LITTLE THINGS",
    title: "Arms wrapped around my chest.",
    location: "Our Quiet Room",
    type: "image",
    src: DEFAULT_MEDIA.mirrorHugChest,
    caption: "Your chin on my shoulder and your arms locked tight around me.",
    note: "In your embrace, I don't need anything else from this world."
  },
  {
    id: "gal-29",
    category: "US",
    title: "Cheek to cheek, heart to heart.",
    location: "Mirror Moments",
    type: "image",
    src: DEFAULT_MEDIA.mirrorCheekToCheek,
    caption: "Soft smiles and our cheeks touching gently.",
    note: "Every second I get to spend in the same room with you is sacred to me."
  },
  {
    id: "gal-30",
    category: "US",
    title: "Holding you against the wall.",
    location: "Embracing You",
    type: "image",
    src: DEFAULT_MEDIA.mirrorEmbraceWaist,
    caption: "Both your arms wrapped around my waist, holding on with everything you have.",
    note: "I never want to let go of this hug, my sweetest Muu."
  },
  {
    id: "gal-31",
    category: "FOREVER",
    title: "The way you look up into my eyes.",
    location: "Our Private World",
    type: "image",
    src: DEFAULT_MEDIA.mirrorLovingGaze,
    caption: "Looking up into my eyes with pure warmth, devotion, and a quiet smile.",
    note: "Being your husband and having you look at me this way is the highest honor of my life."
  },
  {
    id: "gal-32",
    category: "FOREVER",
    title: "Our sacred marriage glow.",
    location: "Our Sacred Room",
    type: "image",
    src: DEFAULT_MEDIA.marriageCloseSelfie,
    caption: "Pink saree, yellow sacred thread, and pure joy radiating from our eyes.",
    note: "Looking into the lens knowing you are my wife forever is the sweetest reality I could ever ask for, Kohila."
  },
  {
    id: "gal-33",
    category: "DISTANCE",
    title: "A tight embrace under the airport canopy.",
    location: "Bangalore Airport Terminal 2",
    type: "image",
    src: DEFAULT_MEDIA.airportT2Hug,
    caption: "Your head resting on my shoulder under the bamboo lights before departures.",
    note: "No matter how many flights take you to Kyrgyzstan, my heart is always holding you right here, Muu."
  },
  {
    id: "gal-34",
    category: "FOREVER",
    title: "Standing tall as husband & wife.",
    location: "Our Sacred Memory",
    type: "image",
    src: DEFAULT_MEDIA.marriageFullbodyPortrait,
    caption: "Side by side in our traditional best, ready for eternity.",
    note: "The proudest day of my life. To the world we are two, but in our hearts we are one."
  },
  {
    id: "gal-35",
    category: "US",
    title: "Gentle kisses in pink.",
    location: "Mirror Reflection",
    type: "image",
    src: DEFAULT_MEDIA.marriageMirrorKissStanding,
    caption: "Kissing your cheek while you smile softly into the mirror.",
    note: "I will spend the rest of my days making sure you are always this happy and loved, my sweet Muu."
  },
  {
    id: "gal-36",
    category: "US",
    title: "Faces touching, souls intertwined.",
    location: "Our Sacred Haven",
    type: "image",
    src: DEFAULT_MEDIA.marriageMirrorSweetHug,
    caption: "Held in each other's warmth, cheek against cheek.",
    note: "With you, silence is never empty—it is full of peace, affection, and devotion."
  },
  {
    id: "gal-37",
    category: "HOME",
    title: "Stirring the pot, seasoned with love.",
    location: "Our Kitchen Sanctuary",
    type: "image",
    src: DEFAULT_MEDIA.cookingKitchen1,
    caption: "Standing close by the stove, cooking our favorite meal together.",
    note: "The dinner tasted a thousand times sweeter because your laughter was filling our kitchen, my Muu."
  },
  {
    id: "gal-38",
    category: "HOME",
    title: "Master chefs of our own world.",
    location: "Kitchen Memories",
    type: "image",
    src: DEFAULT_MEDIA.cookingKitchen2,
    caption: "Tomatoes sliced, chillies sizzling, and a proud thumbs-up by the stove.",
    note: "These simple home-cooked nights with you in our kitchen are worth more than all the treasures on earth."
  },
  {
    id: "gal-39",
    category: "FOREVER",
    title: "Swept off your feet in sheer bliss.",
    location: "Joy in Motion",
    type: "image",
    src: DEFAULT_MEDIA.marriageMotionSpin,
    caption: "Carrying you in my arms, laughing so hard the camera blurred with our happiness.",
    note: "Dressed in your pink saree, clinging to my neck as I spun you around. My entire universe was right there in my arms."
  },
  {
    id: "gal-40",
    category: "FOREVER",
    title: "A sacred kiss upon your forehead.",
    location: "Sanctuary of Devotion",
    type: "image",
    src: DEFAULT_MEDIA.marriageTempleKiss,
    caption: "Foreheads anointed with holy ash and kumkum, kissing your cheek softly.",
    note: "A quiet prayer whispered to the heavens: to love, honor, and protect you through every turn of destiny, Kohila."
  },
  {
    id: "gal-41",
    category: "US",
    title: "Gentle touch upon your cheek.",
    location: "Our Sacred Celebration",
    type: "image",
    src: DEFAULT_MEDIA.marriageGentleCheeks,
    caption: "Warm daylight, lustrous pink silk, and the most radiant woman alive.",
    note: "Every time my fingers brush your cheek, my soul whispers: 'Thank you for choosing me to be your husband.'"
  },
  {
    id: "gal-42",
    category: "FOREVER",
    title: "The sacred yellow thread.",
    location: "Our Sacred Covenant",
    type: "image",
    src: DEFAULT_MEDIA.marriageSacredVowsClose,
    caption: "Your gentle hand over mine, the sacred yellow thread resting against your heart.",
    note: "One month as your husband, and eternity ahead of us. My heart belongs exclusively to you, Muu."
  },
  {
    id: "gal-43",
    category: "VIDEOS",
    title: "Our Sacred Wedding Ceremony",
    location: "Tying Our Thali",
    type: "video",
    src: "/videos/our-sacred-marriage-ceremony.mp4",
    caption: "The exact moment I held the sacred yellow thali and tied our lives together before God.",
    note: "The most sacred, breathless moment of my entire life. Happy 1-month anniversary, my wife."
  },
  {
    id: "gal-44",
    category: "VIDEOS",
    title: "Kohila ❤️'s mic is muted",
    location: "Osh ↔ Singanallur Video Call",
    type: "video",
    src: "/videos/kohila-sleeping-videocall.mp4",
    caption: "Falling asleep peacefully on call after grueling hospital rounds in Kyrgyzstan.",
    note: "Watching over your sleep was my private prayer every single night."
  },
  {
    id: "gal-45",
    category: "VIDEOS",
    title: "Auto-Rickshaw Joy with the Wind in Your Hair",
    location: "City Rides Together",
    type: "video",
    src: "/videos/autorickshaw-radiant-smile.mp4",
    caption: "The wind blowing through your hair and the most radiant smile on earth.",
    note: "Seeing you smile like this is the purest sight my eyes will ever witness."
  },
  {
    id: "gal-46",
    category: "VIDEOS",
    title: "Bed Laughter & Cute Bear Filters",
    location: "Lazy Morning In Bed",
    type: "video",
    src: "/videos/bed-laughter-cute-filters.mp4",
    caption: "Lying upside-down together, smiling with pink teddy bear filters.",
    note: "Two kids in love, completely lost in each other's laughter."
  },
  {
    id: "gal-47",
    category: "VIDEOS",
    title: "Airport Terminal 2 Giggles",
    location: "Bangalore Airport T2",
    type: "video",
    src: "/videos/bangalore-airport-terminal2-giggles.mp4",
    caption: "Giggling and covering your mouth under the wooden weave canopy before departure.",
    note: "Even amidst airport goodbyes, your laughter brought light to everything."
  },
  {
    id: "gal-48",
    category: "VIDEOS",
    title: "Walking Hand in Hand",
    location: "Walking Together",
    type: "video",
    src: "/videos/holding-hands-walking.mp4",
    caption: "Fingers locked tight as we walk through the hall together, never letting go.",
    note: "No matter where the road takes us, my hand will always hold yours, Muu."
  }
];

// Section 14: Things I Don't Say Enough Cards
export const thingsIDontSayEnough = [
  {
    id: 1,
    title: "You make ordinary days sacred, my Muu.",
    quote: "Even when we're just lying silently side by side, breathing the same air, my entire world feels complete and at peace."
  },
  {
    id: 2,
    title: "I am in awe of your noble spirit, Dr. Kohila.",
    quote: "Watching you study through freezing Kyrgyzstan winters, surviving exhausting hospital ward rounds—your strength and dedication make me revere you more every single day."
  },
  {
    id: 3,
    title: "Watching you sleep on video calls is my sacred sanctuary.",
    quote: "Seeing 'Kohila ❤️ is muted' and watching you sleep peacefully under the blanket across 5,000 kilometres reminded me every night what I am living and fighting for."
  },
  {
    id: 4,
    title: "A single touch of your hand heals every wound inside me.",
    quote: "When your arm is wrapped in mine or our fingers are locked tight on the bed, every fear, doubt, and coldness in this world simply evaporates."
  },
  {
    id: 5,
    title: "The distance between Singanallur and Osh only proved our destiny.",
    quote: "Across mountain ranges and time zones, not a single second passes where my heart isn't holding you close, my sweetest Muu."
  },
  {
    id: 6,
    title: "You chose me to be your husband, and that is my life's greatest honor.",
    quote: "To love you with everything I have, to protect your precious smile, and to be your home forever will always be my soul's highest calling."
  }
];
