import React from 'react';
import {Button} from "@/components/ui/button";
import {ArrowRight, Phone} from "lucide-react";

const HeroSection = () => {
    return (
        <>
            <section
                id="home"
                className="relative pt-8 pb-20 px-6 min-h-screen flex items-center"
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1731694406473-837ef073ddd4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-slate-900/85"></div>

                <div className="container mx-auto text-center max-w-4xl relative z-10">
                    <img src="/logo.png" alt="logo"/>
                    {/*<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in drop-shadow-lg">*/}
                    {/*    TOVETECH LIMITED*/}
                    {/*</h1>*/}
                    <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed animate-fade-in drop-shadow-md">
                        Specialist in Refrigeration, Air conditioning, Electrical Installation,
                        Metal Works, Steel structure, Aluminum works & General Supplies
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                        <Button
                            size="lg"
                            className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-8 py-3 text-lg shadow-lg cursor-pointer"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Get Quote
                            <Phone className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-yellow-500 bg-transparent hover:bg-yellow-500 text-white hover:text-slate-900 px-8 py-3 text-lg shadow-lg backdrop-blur-sm cursor-pointer transition-all"
                            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Our Services
                            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>

                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;