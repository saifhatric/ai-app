import {

    BoltIcon,
    ChatBubbleLeftRightIcon,
    FaceSmileIcon,
    HeartIcon,
    LinkIcon,
    PresentationChartLineIcon,

} from '@heroicons/react/24/outline'
export const navLinks = [

    { name: "Pricing", adrress: "api/pricing" },
    { name: "Summarizer", adrress: "api/summarize-text" },
    { name: "Contact", adrress: "api/contact" },

]

//companies brands
export const Companies = [

    { brand: 'airbnb', img: 'https://asset.brandfetch.io/idkuvXnjOH/idrPv8mgc4.svg' },
    { brand: 'trivago', img: 'https://asset.brandfetch.io/idJz0pR4Gq/idKmu0FPFx.svg' },
    {
        brand: 'booking.com',
        img: 'https://asset.brandfetch.io/id9mEmLNcV/idtpV9y0Bb.svg',
    },
    {
        brand: 'spotify',
        img: 'https://asset.brandfetch.io/id20mQyGeY/idCv-OrMiy.svg',
    },
    {
        brand: 'landrover',
        img: 'https://asset.brandfetch.io/idUgecPh1C/id5iVQvfy_.png',
    },

]


//features
export const FeaturesData = [


    {
        image: ChatBubbleLeftRightIcon, title: "Share team inboxes",
        description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
        link: "heart"
    },
    {
        image: BoltIcon, title: "Deliver instant answers",
        description: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
        link: "heart"
    },
    {
        image: PresentationChartLineIcon, title: "Manage your team with reports",
        description: "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.", link: "heart"
    },
    {
        image: FaceSmileIcon, title: "Connect with customers",
        description: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.", link: "heart"
    },
    {
        image: LinkIcon, title: "Connect the tools you already use",
        description: "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.", link: "heart"
    },
    {
        image: HeartIcon, title: "Our people make the difference",
        description: "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.", link: "heart"
    },

]