// components/cookiebanner.tsx

'use client';
import '../src/app/globals.css';

import { getLocalStorage, setLocalStorage } from '../src/app/lib/storageHelper';
import { useState, useEffect } from 'react';

import Link from 'next/link'
export default function CookieBanner() {

    const [cookieConsent, setCookieConsent] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') { // Check if the code is running on the client side
            const storedCookieConsent = getLocalStorage("cookie_consent", null);
            setCookieConsent(storedCookieConsent);
        }
    }, [setCookieConsent]);

    useEffect(() => {
        const newValue = cookieConsent ? 'granted' : 'denied';

        window.gtag("consent", 'update', {
            'analytics_storage': newValue
        });

        setLocalStorage("cookie_consent", cookieConsent);

        // For Testing
        console.log("Cookie Consent: ", cookieConsent);
    }, [cookieConsent]);

    return (
        <div className={`my-10 mx-auto max-w-max md:max-w-screen-sm
                    fixed bottom-0 left-0 right-0 
                    ${cookieConsent != null ? "hidden" : "flex"}  px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                     !bg-gray-700 rounded-lg border border-white shadow`}>
            <div className='text-center'>
                    <p>
                        <span className='font-bold text-white'>We use <Link href="/terms" className="text-blue-300">cookies</Link> on our site</span>
                    </p>
            </div>
            <div className='flex gap-2'>
                <button className='px-5 py-2 text-gray-300 rounded-md border border border-white' onClick={() => setCookieConsent(false)}>Decline</button>
                <button className='bg-gray-900 px-5 py-2 text-white border border-white rounded-lg' onClick={() => setCookieConsent(true)}>Allow Cookies</button>
            </div>
        </div>

    )
}
