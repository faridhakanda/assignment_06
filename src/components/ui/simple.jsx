import React from 'react';
import { IoMdCheckmark } from "react-icons/io";


const datas = [
    {
        id: 1,
        active: false,
        name: 'Started',
        title: 'Perfect for getting started',
        price: 0,
        period: 'Month',
        features: [
            'Access to 10 free tools',
            'Basic templates',
            'Community support',
            '1 project per month'
        ],
        button: 'Get Started Free'
    },
    {
        id: 2,
        active: true,
        name: 'Pro',
        title: 'Best for professionals',
        price: 29,
        period: 'Month',
        features: [
            "Access to all premium tools",
            "Unlimited templates",
            "Priority support",
            "Unlimited projects",
            "Cloud sync",
            "Advanced analysis"
        ],
        button: 'Started Pro Trial'
    },
    {
        id: 3,
        active: false,
        name: 'Enterprise',
        title: 'For teams and businesses',
        price: 99,
        period: 'Month',
        features: [
            'Everything in Pro',
            'Team collaboration',
            'Custom integrations',
            'Dedicated support',
            'SLA guarantee',
            'Custom branding'
        ],
        button: 'Contact Sales'
    }
];

const SimpleBanner = () => {
    return (
        <div className='my-14 py-8'>
            <div className='w-[1200px] mx-auto'>
                <h2 className='font-extrabold text-[48px] text-[#101727] text-center'>Simple, Transparent pricing</h2>
                <p className='text-[#627382] text-center'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                <div className='grid grid-cols-3 m-2'>
                    {datas.map(data => 
                        <div key={data.id} className={`${data.active ? 'bg-gradient-to-l from-[#9514FA] to-[#4F39F6] text-[#FFFFFF]': 'bg-[#F9FAFC]'} mx-3 my-6 p-2 text-center rounded-md shadow-md `}>
                            <h2 className={`${data.active ? 'bg-yellow-100 text-orange-500 z-10 justify-center w-fit mx-auto -mt-5 px-2  rounded-full':''}`}>{data.active ? 'Most Popular' : ''}</h2>
                            <div className='text-start p-2 my-2'>
                                <h2 className='font-bold text-[24px] '>{data.name}</h2>
                                <p className={`${data.active ? 'text-[#FFFFFF]' : 'text-[#627382]'}`}>{data.title}</p>
                                <p><span className=' font-bold text-[24px]'>${data.price}</span><span className={`${data.active ? '': 'text-[#627382]'} text-[18px]`}>/{data.period}</span></p>
                                <ul className='my-4'>
                                    {data.features.map((feature, index) =>
                                        <li
                                            key={index}
                                            className={`${data.active ? '': 'text-[#627382]'} flex gap-1 items-center my-1 `}
                                            
                                        >
                                            <div className='text-green-500'><IoMdCheckmark/></div>{feature}
                                        </li>
                                    )}
                                </ul>
                                
                                <button className={`${data.active ? 'bg-[#F9FAFC] text-[#9514F1] ':'bg-gradient-to-l from-[#9514FA] to-[#4F39F6] text-[#FFFFFF]'} font-semibold px-2 py-1 rounded-full mx-auto  justify-center w-full cursor-pointer`}>{data.button}</button>
                            </div>
                        </div>
                    )}
                    
                </div>
            </div>
            
        </div>
    );
};

export default SimpleBanner;