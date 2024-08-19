import email from '../assets/Images/email.svg';
import map from '../assets/Images/map.svg';
import facebook from '../assets/Images/facebook.svg'
import twitter from '../assets/Images/twitter.svg'
import LinkedIn from '../assets/Images/linked.svg'
import Instagram from '../assets/Images/instagram.svg'

export const infoData = [
    {
        id: 1 ,
        href: 'mailto:info@company.com',
        icon : email,
        infoTitle: 'info@company.com'
    },
    {
        id: 2 ,
        href : '',
        icon : map,
        infoTitle : 'Sunny Isles Beach,FL33160'
    }
];

export const infoIcon = [
    {
        id: 1 ,
        href : 'https://www.facebook.com/profile.php?id=100010701908238',
        socIcon: 'facebook',
        icon: facebook,
    },
    {
        id: 2 ,
        href : '#',
        socIcon: 'twitter',
        icon: twitter,
    },
    {
        id: 3 ,
        href : 'https://www.linkedin.com/in/ali8mohammad/',
        socIcon: 'linkedin',
        icon: LinkedIn,
    },
    {
        id: 4 ,
        href : '',
        socIcon: 'instagram',
        icon: Instagram
    }
];
