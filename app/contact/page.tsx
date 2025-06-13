'use client';

import Header from "../components/header";
import Footer from "../components/footer";
import FormComponent from "../components/form";

export default function Contact() {

    return (
        <div className="overflow-clip font-main">
            <Header currentPage="contact" />
            <section className="w-screen bg-bannerMarImg bg-repeat bg-cover bg-top">
                <div className="flex justify-center items-center w-full z-0 pt-16 px-16 bg-blackOverlay gap-4">
                    <div className="py-16 flex flex-col justify-center items-center shadow-xl">
                        <FormComponent></FormComponent>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    );
}