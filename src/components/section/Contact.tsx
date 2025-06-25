import React from 'react';
import {Card, CardContent} from "@/components/ui/card";
import {Mail, MapPin, Phone} from "lucide-react";
import {Button} from "@/components/ui/button";

const Contact = () => {
    return (
        <>
            <section id="contact" className="py-5 lg:py-20 px-6 bg-slate-800/50">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h2>
                        <p className="text-xl text-slate-300">
                            Ready to start your project? Get in touch with our expert team today
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="bg-slate-700/50 border-slate-600 hover:border-yellow-500/50 transition-all duration-300">
                            <CardContent className="p-8 text-center">
                                <Phone className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                                <p className="text-slate-300">+254 727426807</p>
                                <p className="text-slate-300">+254 727318001</p>
                            </CardContent>
                        </Card>

                        <Card className="bg-slate-700/50 border-slate-600 hover:border-yellow-500/50 transition-all duration-300">
                            <CardContent className="p-8 text-center">
                                <Mail className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                                <p className="text-slate-300">tovetech@gmail.com</p>
                            </CardContent>
                        </Card>

                        <Card className="bg-slate-700/50 border-slate-600 hover:border-yellow-500/50 transition-all duration-300">
                            <CardContent className="p-8 text-center">
                                <MapPin className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                                <p className="text-slate-300">P.O. Box 8493, 00300</p>
                                <p className="text-slate-300">Ronald Ngala</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/*<div className="text-center mt-12">*/}
                    {/*    <Button*/}
                    {/*        size="lg"*/}
                    {/*        className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-12 py-4 text-lg"*/}
                    {/*    >*/}
                    {/*        Request a Quote*/}
                    {/*    </Button>*/}
                    {/*</div>*/}
                </div>
            </section>
        </>
    );
};

export default Contact;