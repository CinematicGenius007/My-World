const Contact = () => {
    return (
        <section className="flex-1 bg-gray-300">
            <h1 className="pt-8 px-12 md:px-16 lg:px-20 text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-zinc-700 transition-[font-size] duration-1000">we live</h1>
            <h1 className="pb-8 px-12 md:px-16 lg:px-20 text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-zinc-700 transition-[font-size] duration-1000">not very far</h1>
            <div className="py-8 px-12 md:px-16 lg:px-20">
                <iframe
                    title="our office location"
                    className="w-full h-[20rem]"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/place/Manhattan,+New+York,+NY,+USA/@40.7591704,-74.0392714,12z/data=!3m1!4b1!4m5!3m4!1s0x89c2588f046ee661:0xa0b3281fcecc08c!8m2!3d40.7830603!4d-73.9712488">
                </iframe>
            </div>
        </section>
    );
};

export default Contact;