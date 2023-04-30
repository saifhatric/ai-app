


const Pricing = () => {

    return (
        <div className="mt-16 bg-white font-poppins">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className=" flex-col items-center justify-center space-y-6 py-10  lg:py-24 text-start ">
                    <div className="flex flex-col items-start justify-start space-y-3">
                        <p className="text-5xl text-center  font-semibold leading-10 text-purple-700">
                            Pricing
                        </p>
                    </div>
                    <p className="text-xl leading-loose text-gray-600">
                        We believe Untitled should be accessible to all companies, no matter the size.
                    </p>
                </div>

                <div className=" px-8 pb-8">
                    <div className="grid space-y-8 lg:grid-cols-3 lg:space-y-0 lg:space-x-8">
                        {plans.map((plan) => (
                            <div key={plan.name} className=" rounded-2xl border border-gray-200 bg-white shadow">
                                <div className="flex w-full flex-col items-center justify-start space-y-4 px-8 pt-10">
                                    <p className="text-center text-5xl font-semibold leading-10 text-gray-900">
                                        {plan.price}
                                    </p>
                                    <div className="flex w-full flex-col items-start justify-start space-y-1">
                                        <p className="w-full text-center text-xl font-semibold leading-loose text-gray-900">
                                            {plan.name}
                                        </p>
                                        <p className="w-full text-center text-base leading-normal text-gray-600">
                                            Billed annually.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex w-full flex-col items-start justify-start px-8 pt-8 pb-10">
                                    <div className="flex w-full flex-col space-y-4">
                                        {plan.features.map((feature) => (
                                            <div key={feature} className="inline-flex w-full space-x-3">
                                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-200">
                                                    ✓
                                                </div>
                                                <p className="w-full text-base leading-normal text-gray-600">{feature}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex w-full flex-col px-8 pb-8">
                                    <div className="flex w-full flex-col items-start justify-start space-y-3">
                                        <div className="inline-flex w-full items-center justify-center space-x-2 rounded-lg border border-purple-500 bg-purple-500 px-5 py-3 shadow">
                                            <p className="text-base font-semibold leading-normal text-white">
                                                Get started
                                            </p>
                                        </div>
                                        <div className="inline-flex w-full items-center justify-center space-x-2 rounded-lg border border-gray-300 bg-white px-5 py-3 shadow">
                                            <p className="text-base font-semibold leading-normal text-gray-700">
                                                Chat to sales
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )

}
export default Pricing
const plans = [
    {
        name: 'Basic plan',
        price: '$10/mth',
        features: [
            'Access to all basic features ',
            'Basic reporting and analytics',
            'Up to 10 individual users',
            '20GB individual data each user',
            'Basic chat and email support',
        ],
    },
    {
        name: 'Business plan',
        price: '$20/mth',
        features: [
            '200+ integrations',
            'Advanced reporting and analytics',
            'Up to 20 individual users',
            '40GB individual data each user',
            'Priority chat and email support',
        ],
    },
    {
        name: 'Enterprise plan',
        price: '$40/mth',
        features: [
            'Advanced custom fields',
            'Audit log and data history',
            'Unlimited individual users',
            'Unlimited individual data',
            'Personalized+priority service',
        ],
    },
]