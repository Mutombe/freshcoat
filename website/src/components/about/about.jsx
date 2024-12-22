import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Clock, Heart, Shield, Star } from "lucide-react";

const About = () => {
    // Define the values data
    const values = [
        {
            icon: Shield,
            title: "Quality Assurance",
            description: "We maintain the highest standards in every project, using premium materials and proven techniques to deliver exceptional results."
        },
        {
            icon: Clock,
            title: "Timely Delivery",
            description: "We respect your time and consistently deliver projects on schedule without compromising on quality."
        },
        {
            icon: Heart,
            title: "Customer Focus",
            description: "Your satisfaction is our priority. We work closely with you to understand and exceed your expectations."
        },
        {
            icon: Users,
            title: "Expert Team",
            description: "Our skilled professionals bring years of experience and dedication to every project we undertake."
        },
        {
            icon: Award,
            title: "Professional Excellence",
            description: "We maintain the highest industry standards and stay updated with the latest techniques and innovations."
        },
        {
            icon: Star,
            title: "Proven Track Record",
            description: "Our portfolio of successful projects and satisfied clients speaks to our commitment to excellence."
        }
    ];

    return (
        <div className="pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold mb-4">Our Story</h1>
                    <p className="text-xl text-gray-600">Building excellence since 2010</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        <h2 className="text-2xl font-bold">Who We Are</h2>
                        <p className="text-gray-600">
                            Freshcoat Designs has been transforming spaces for over 14 years. 
                            We started as a small painting company and have grown into a full-service 
                            construction and renovation enterprise, serving thousands of satisfied customers.
                        </p>
                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div className="text-center">
                                <h3 className="text-3xl font-bold text-red-600">25+</h3>
                                <p>Years Experience</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-3xl font-bold text-red-600">5000+</h3>
                                <p>Projects Completed</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative h-96"
                    >
                        <img
                            src="/fresh.png"
                            alt="Team at work"
                            className="rounded-lg shadow-xl object-cover w-full h-full"
                        />
                    </motion.div>
                </div>

                <div className="mt-24">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <value.icon className="w-12 h-12 text-red-600 mb-4 mx-auto" />
                                <h3 className="text-xl font-bold mb-2 text-center">{value.title}</h3>
                                <p className="text-gray-600 text-center">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;