
import { Shield, Clock, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyToveTech = () => {
    const reasons = [
        {
            icon: <Shield className="w-8 h-8 text-yellow-500" />,
            title: "Quality Assurance",
            description: "All our work meets international standards with comprehensive quality control processes."
        },
        {
            icon: <Clock className="w-8 h-8 text-yellow-500" />,
            title: "Timely Delivery",
            description: "We understand deadlines matter. Our projects are completed on time, every time."
        },
        {
            icon: <Users className="w-8 h-8 text-yellow-500" />,
            title: "Expert Team",
            description: "Our certified professionals bring years of experience across all technical disciplines."
        },
        {
            icon: <Award className="w-8 h-8 text-yellow-500" />,
            title: "Competitive Pricing",
            description: "Fair, transparent pricing with no hidden costs. Get the best value for your investment."
        }
    ];

    const achievements = [
        { number: "500+", label: "Projects Completed" },
        { number: "15+", label: "Years Experience" },
        { number: "100%", label: "Client Satisfaction" },
        { number: "24/7", label: "Support Available" }
    ];

    return (
        <section className="bg-slate-800/50 py-20 px-6 w-full">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-slate-900 rounded-full text-sm font-medium">
                        Why Choose ToveTech
                    </div>
                    <h2 className="text-3xl md:text-4xl text-white font-bold mb-6">Your Trusted Technical Partner</h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        With decades of combined experience and a commitment to excellence,
                        ToveTech Limited delivers reliable solutions that exceed expectations.
                    </p>
                </div>

                {/* Achievement Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {achievements.map((achievement, index) => (
                        <div key={index} className="text-center">
                            <div className="bg-slate-700/50 border-slate-600 hover:border hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105 rounded-2xl p-6 mb-4">
                                <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">
                                    {achievement.number}
                                </div>
                                <div className="text-white text-sm font-medium">
                                    {achievement.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Why Choose Us Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {reasons.map((reason, index) => (
                        <Card key={index} className="bg-slate-700/50 border-slate-600 hover:border hover:border-yellow-500/50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                            <CardContent className="p-8">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-slate-600 rounded-lg p-3 group-hover:bg-slate-900 transition-colors duration-300">
                                        {reason.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-3 text-white">{reason.title}</h3>
                                        <p className="text-gray-400 leading-relaxed">{reason.description}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyToveTech;
