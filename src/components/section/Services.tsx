import React from 'react';
import {Card, CardContent} from "@/components/ui/card";
import {Building, Settings, Wind, Wrench, Zap} from "lucide-react";

const Services = () => {
    const services = [
        {
            icon: <Wind className="w-8 h-8" />,
            title: "Refrigeration & Air Conditioning",
            description: "Professional installation, maintenance, and repair of cooling systems"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Electrical Installation",
            description: "Complete electrical solutions for residential and commercial properties"
        },
        {
            icon: <Building className="w-8 h-8" />,
            title: "Metal Works & Steel Structure",
            description: "Custom metalwork and structural steel fabrication"
        },
        {
            icon: <Wrench className="w-8 h-8" />,
            title: "Aluminum Works",
            description: "Precision aluminum fabrication and installation services"
        },
        {
            icon: <Settings className="w-8 h-8" />,
            title: "General Supplies",
            description: "Quality materials and equipment for all your project needs"
        }
    ];
    
    return (
        <>
            <section id="services" className="py-20 px-6 bg-slate-800/50">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h2>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            We provide comprehensive solutions across multiple specializations with
                            professional expertise and quality assurance
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Card key={index} className="bg-slate-700/50 border-slate-600 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105">
                                <CardContent className="p-8 text-center">
                                    <div className="text-yellow-500 mb-4 flex justify-center">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                                    <p className="text-slate-300 leading-relaxed">{service.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;