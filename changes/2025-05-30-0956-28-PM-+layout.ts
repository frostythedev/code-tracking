import type { LayoutLoad } from "./$types";
import type {Service} from '$lib/types.ts';

let services: Service[] = [
    {
        id: 0,
        title: 'Consulting',
        short_desc: 'Providing expert advice to help you navigate the digital landscape and enhance your business strategies.',
        long_desc: 'Our consulting services are designed to help businesses understand and implement the latest digital trends and technologies. We work closely with you to identify opportunities for growth and improvement, ensuring that your business stays ahead in a competitive market.',
        icon: 'Pen'
    },
    {
        id: 1,
        title: 'eCommerce Solutions',
        short_desc:'Helping small businesses leverage technology to streamline operations and enhance customer experience.',
        long_desc: 'We specialize in creating tailored eCommerce solutions that empower small businesses to thrive online. From setting up user-friendly online stores to integrating payment gateways, we ensure a seamless shopping experience for your customers.',
        icon: 'Cpu'
    },
    {
        id: 2,
        title: 'Web Development',
        short_desc: 'Building responsive and modern websites tailored to your needs.',
        long_desc: 'Our web development services focus on creating responsive, user-friendly websites that not only look great but also perform well. We use the latest technologies to ensure your website is fast, secure, and optimized for search engines.',
        icon: 'Monitor'
    },
    {
        id: 3,
        title: 'Mobile App Development',
        short_desc: 'Creating user-friendly mobile applications for iOS and Android.',
        long_desc: 'In today’s mobile-first world, having a robust mobile application is crucial. We develop intuitive and engaging mobile apps for both iOS and Android platforms, ensuring your business reaches customers wherever they are.',
        icon: 'TabletSmartphone'
    },
    // {
    //     id: 4,
    //     title: 'Online Ad Services',
    //     short_desc:'Managing online advertising campaigns to boost your brand visibility and reach.',
    //     long_desc: 'Our online ad services are designed to enhance your brand’s visibility and reach through targeted advertising campaigns. We utilize various platforms to ensure your ads reach the right audience, maximizing your return on investment.',
    //     icon: 'Megaphone'
    // }
];

export const load: LayoutLoad = async ({}) => {
  return {
    services: services,
  };
};