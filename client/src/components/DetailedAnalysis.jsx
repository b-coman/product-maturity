import React from 'react';
import SWOTCard from './SWOTCard';

const DetailedAnalysis = ({ analysisData }) => {
    const { strengths, weaknesses, areas_for_improvement } = analysisData;

    const strengthIcon = <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="0.000732422" width="48" height="47.9985" rx="23.9992" fill="#161616" />
        <path d="M30.796 16C31.4609 16 31.9958 16.5349 31.9958 17.1998V29.1979C31.9958 29.8628 31.4609 30.3978 30.796 30.3978C30.1311 30.3978 29.5962 29.8628 29.5962 29.1979V20.0944L18.048 31.6476C17.5781 32.1175 16.8182 32.1175 16.3533 31.6476C15.8883 31.1776 15.8833 30.4177 16.3533 29.9528L27.9015 18.4046H18.7979C18.133 18.4046 17.5981 17.8697 17.5981 17.2048C17.5981 16.5399 18.133 16.005 18.7979 16.005H30.796V16Z" fill="black" />
        <path d="M30.796 16C31.4609 16 31.9958 16.5349 31.9958 17.1998V29.1979C31.9958 29.8628 31.4609 30.3978 30.796 30.3978C30.1311 30.3978 29.5962 29.8628 29.5962 29.1979V20.0944L18.048 31.6476C17.5781 32.1175 16.8182 32.1175 16.3533 31.6476C15.8883 31.1776 15.8833 30.4177 16.3533 29.9528L27.9015 18.4046H18.7979C18.133 18.4046 17.5981 17.8697 17.5981 17.2048C17.5981 16.5399 18.133 16.005 18.7979 16.005H30.796V16Z" fill="url(#paint0_linear_2233_3768)" />
        <defs>
            <linearGradient id="paint0_linear_2233_3768" x1="16.0027" y1="19.389" x2="17.8762" y2="30.1663" gradientUnits="userSpaceOnUse">
                <stop stopColor="#624BED" />
                <stop offset="1" stopColor="#CE5682" />
            </linearGradient>
        </defs>
    </svg>;

    const weaknessIcon = <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="0.000732422" width="48" height="47.9985" rx="23.9992" fill="#161616" />
        <path d="M31.9993 30.7969C31.9993 31.4618 31.4644 31.9967 30.7995 31.9967L18.8013 31.9967C18.1364 31.9967 17.6015 31.4618 17.6015 30.7969C17.6015 30.132 18.1364 29.597 18.8013 29.597L27.9049 29.597L16.3517 18.0488C15.8818 17.5789 15.8818 16.819 16.3517 16.3541C16.8216 15.8892 17.5815 15.8842 18.0464 16.3541L29.5946 27.9023L29.5946 18.7987C29.5946 18.1338 30.1296 17.5989 30.7945 17.5989C31.4594 17.5989 31.9943 18.1338 31.9943 18.7987L31.9943 30.7969L31.9993 30.7969Z" fill="black" />
        <path d="M31.9993 30.7969C31.9993 31.4618 31.4644 31.9967 30.7995 31.9967L18.8013 31.9967C18.1364 31.9967 17.6015 31.4618 17.6015 30.7969C17.6015 30.132 18.1364 29.597 18.8013 29.597L27.9049 29.597L16.3517 18.0488C15.8818 17.5789 15.8818 16.819 16.3517 16.3541C16.8216 15.8892 17.5815 15.8842 18.0464 16.3541L29.5946 27.9023L29.5946 18.7987C29.5946 18.1338 30.1296 17.5989 30.7945 17.5989C31.4594 17.5989 31.9943 18.1338 31.9943 18.7987L31.9943 30.7969L31.9993 30.7969Z" fill="url(#paint0_linear_2233_3793)" />
        <defs>
            <linearGradient id="paint0_linear_2233_3793" x1="28.6102" y1="16.0035" x2="17.8329" y2="17.877" gradientUnits="userSpaceOnUse">
                <stop stopColor="#624BED" />
                <stop offset="1" stopColor="#CE5682" />
            </linearGradient>
        </defs>
    </svg>;

    const improvementIcon = <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="47.9985" rx="23.9992" fill="#161616" />
        <path d="M30.5749 23.5555C31.4749 22.268 31.9999 20.6991 31.9999 18.9991C31.9999 14.5801 28.4185 10.9987 23.9995 10.9987C19.5806 10.9987 15.9992 14.5801 15.9992 18.9991C15.9992 20.6991 16.5242 22.268 17.4242 23.5555C17.6555 23.8868 17.9305 24.2618 18.2243 24.6618C19.0306 25.7681 19.9931 27.0932 20.7119 28.3995C21.3619 29.5871 21.6932 30.8246 21.8557 31.9934H18.8118C18.6743 31.2434 18.443 30.5121 18.0743 29.8371C17.4555 28.712 16.6867 27.6557 15.9179 26.5994C15.5929 26.1556 15.2679 25.7119 14.9554 25.2619C13.7241 23.493 12.999 21.3304 12.999 18.9991C12.999 12.9238 17.9243 7.99854 23.9995 7.99854C30.0748 7.99854 35.0001 12.9238 35.0001 18.9991C35.0001 21.3304 34.275 23.493 33.0375 25.2681C32.725 25.7181 32.3999 26.1619 32.0749 26.6057C31.3061 27.6557 30.5374 28.712 29.9186 29.8433C29.5498 30.5184 29.3186 31.2496 29.181 31.9997H26.1496C26.3122 30.8309 26.6434 29.5871 27.2935 28.4058C28.0122 27.0994 28.9748 25.7744 29.7811 24.6681C30.0748 24.2681 30.3436 23.893 30.5749 23.5618V23.5555ZM23.9995 15.9989C22.3432 15.9989 20.9994 17.3427 20.9994 18.9991C20.9994 19.5491 20.5494 19.9991 19.9994 19.9991C19.4493 19.9991 18.9993 19.5491 18.9993 18.9991C18.9993 16.2364 21.2369 13.9988 23.9995 13.9988C24.5496 13.9988 24.9996 14.4488 24.9996 14.9989C24.9996 15.5489 24.5496 15.9989 23.9995 15.9989ZM23.9995 40.0001C21.2369 40.0001 18.9993 37.7624 18.9993 34.9998V33.9998H28.9998V34.9998C28.9998 37.7624 26.7622 40.0001 23.9995 40.0001Z" fill="white" />
        <path d="M30.5749 23.5555C31.4749 22.268 31.9999 20.6991 31.9999 18.9991C31.9999 14.5801 28.4185 10.9987 23.9995 10.9987C19.5806 10.9987 15.9992 14.5801 15.9992 18.9991C15.9992 20.6991 16.5242 22.268 17.4242 23.5555C17.6555 23.8868 17.9305 24.2618 18.2243 24.6618C19.0306 25.7681 19.9931 27.0932 20.7119 28.3995C21.3619 29.5871 21.6932 30.8246 21.8557 31.9934H18.8118C18.6743 31.2434 18.443 30.5121 18.0743 29.8371C17.4555 28.712 16.6867 27.6557 15.9179 26.5994C15.5929 26.1556 15.2679 25.7119 14.9554 25.2619C13.7241 23.493 12.999 21.3304 12.999 18.9991C12.999 12.9238 17.9243 7.99854 23.9995 7.99854C30.0748 7.99854 35.0001 12.9238 35.0001 18.9991C35.0001 21.3304 34.275 23.493 33.0375 25.2681C32.725 25.7181 32.3999 26.1619 32.0749 26.6057C31.3061 27.6557 30.5374 28.712 29.9186 29.8433C29.5498 30.5184 29.3186 31.2496 29.181 31.9997H26.1496C26.3122 30.8309 26.6434 29.5871 27.2935 28.4058C28.0122 27.0994 28.9748 25.7744 29.7811 24.6681C30.0748 24.2681 30.3436 23.893 30.5749 23.5618V23.5555ZM23.9995 15.9989C22.3432 15.9989 20.9994 17.3427 20.9994 18.9991C20.9994 19.5491 20.5494 19.9991 19.9994 19.9991C19.4493 19.9991 18.9993 19.5491 18.9993 18.9991C18.9993 16.2364 21.2369 13.9988 23.9995 13.9988C24.5496 13.9988 24.9996 14.4488 24.9996 14.9989C24.9996 15.5489 24.5496 15.9989 23.9995 15.9989ZM23.9995 40.0001C21.2369 40.0001 18.9993 37.7624 18.9993 34.9998V33.9998H28.9998V34.9998C28.9998 37.7624 26.7622 40.0001 23.9995 40.0001Z" fill="url(#paint0_linear_2233_3100)" />
        <defs>
            <linearGradient id="paint0_linear_2233_3100" x1="17.077" y1="36.0127" x2="40.8066" y2="20.8334" gradientUnits="userSpaceOnUse">
                <stop stopColor="#624BED" />
                <stop offset="1" stopColor="#CE5682" />
            </linearGradient>
        </defs>
    </svg>;

    return (
        <>
            <span className='text-left block mobile-s:text-2xl md:text-4xl lg:text-6xl 3xl:text-8xl font-bold gradient-color-text font-ibm-plex-mono'>
                Detailed Analysis
            </span>

            <p className="font-ibm-plex-mono font-light text-gray-300 text-2xl 2xl:w-3/5">
                See where your organization stands on its product development journey. This
                interactive review, based on your unique responses, highlights areas for
                improvement and guides you towards greater product maturity.
            </p>

            <div className="grid grid-cols-1 min-[1000px]:grid-cols-2 gap-12">
                <SWOTCard
                    title="Strengths"
                    icon={strengthIcon}
                    items={strengths}
                />
                <SWOTCard
                    title="Weaknesses"
                    icon={weaknessIcon}
                    items={weaknesses}
                />
            </div>

            <SWOTCard
                title="Areas for Improvement"
                icon={improvementIcon}
                items={areas_for_improvement}
            />

        </>
    );
};

export default DetailedAnalysis;