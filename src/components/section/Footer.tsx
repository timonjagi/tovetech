import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="py-8 px-6 border-t border-slate-700">
                <div className="container mx-auto text-center">
                    <p className="text-slate-400">
                        © {new Date().getFullYear()} ToveTech Limited. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;