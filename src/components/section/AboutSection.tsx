import React from 'react';

const AboutSection = () => {
    return (
        <>
            <section id="about" className="py-20 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">About ToveTech Limited</h2>
                    <p className="text-xl text-slate-300 leading-relaxed mb-8">
                        ToveTech Limited is a trusted partner in delivering exceptional technical solutions
                        across multiple industries. With our expertise spanning refrigeration, electrical systems,
                        metalwork, and general supplies, we pride ourselves on quality craftsmanship and
                        reliable service delivery.
                    </p>
                    <p className="text-lg text-slate-400 leading-relaxed">
                        {`
              Our team of skilled professionals is committed to providing innovative solutions
              that meet the highest standards of safety, efficiency, and durability. Whether you're
              looking for installation, maintenance, or supply services, ToveTech Limited is your
              go-to partner for all technical requirements.
              `}
                    </p>
                </div>
            </section>
        </>
    );
};

export default AboutSection;