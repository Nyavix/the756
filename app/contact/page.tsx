import Header from "../components/header";
import Footer from "../components/footer";

export default function contact() {
    return (
        <div>
            <Header currentPage="contact" />
            <section className="h-screen w-screen bg-bannerMarImg bg-repeat bg-cover bg-top">
                <div className="flex justify-center items-center w-full h-screen px-16 bg-blackOverlay gap-4">
                    <div className="border w-1/2 p-16">
                        
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    );
}