import aldebaran from "../../assets/photos/aldebaran-s-uXchDIKs4qI-unsplash.jpg";
import tengyart from "../../assets/photos/tengyart-pYlSLXkduQg-unsplash.jpg";
import nasa from "../../assets/photos/nasa-rTZW4f02zY8-unsplash.jpg";
import blackSunset from "../../assets/photos/black-background-minimalism-mountains-sunset-wallpaper-preview.jpg";
import {useEffect, useState} from "react";
// import axios from "axios";

const Home = () => {
    const [population, setPopulation] = useState(8971280);
    // const [universes, setUniverse] = useState([]);
    useEffect(() => {
        setTimeout(() => setPopulation(population + 1), 4000);
    }, [population]);

    // useEffect(() => {
    //     axios.get("http://localhost:3020/universes", {
    //         params: {
    //             _page: 1,
    //             _limit: 4
    //         }
    //     })
    //         .then(request => request.data)
    //         .then(result => setUniverse(() => [...result]))
    // }, []);

    return (
        <main className="flex-1 bg-gray-300">
            <div className="flex flex-col items-center md:flex-row-reverse md:justify-end mx-auto py-16 px-8 w-full max-w-3xl lg:max-w-4xl">
                <div className="relative basis-80 h-80 w-80">
                    <img className="absolute w-48 z-10" src={aldebaran} alt="aldebaran" />
                    <img className="absolute w-48 z-20 translate-y-16 translate-x-32" src={tengyart} alt="tengyart" />
                    <img className="absolute w-48 z-30 translate-y-32 translate-x-8" src={nasa} alt="nasa" />
                </div>
                <div className="main-front-head flex-1 my-auto py-12 text-7xl lg:text-8xl">
                    <div>welcome</div>
                    <div>to</div>
                    <div className="font-[GT]">nebula</div>
                </div>
            </div>
            <div className="py-10 px-8 md:px-12 lg:px-16 w-full bg-violet-400">
                <div className="text-7xl sm:text-8xl lg:text-9xl animate-heading-text">world order</div>
                <p className="mt-8 text-lg md:text-xl lg:text-2xl">
                    <span className="text-[3.8rem] lg:text-[4.5rem]" style={{ float: "left", paddingRight: "0.3rem", lineHeight: "1", marginBottom: "-1rem" }}>N</span>ew world order, where you get to choose the foundational principles of the universe.
                    Where you are literally in control of everything and can decide what happens and where it happens.
                    They claimed there is no such thing as the ideal universe, yet we found one.
                    Everything you do and everything that occurs in your own universe is contained there and has no impact on anywhere else.
                    So you don't have to worry about committing crimes because there are no rules and there are no laws of any kind.
                    You're the master of your own universe, the GOD if you may.
                    Thus creating endless possibilities in endless universes.
                    Now you may wonder how exactly it happens but that is something we are currently unable to explain to you as we ourselves have no idea.
                </p>
            </div>
            <div className="py-10 px-8 md:px-12 lg:px-16 w-full bg-stone-300">
                <h1 className="text-7xl sm:text-8xl lg:text-9xl">population</h1>
                <div className="flex flex-col md:flex-row mt-8">
                    <div className="flex-[1_1_0%] pt-4 flex justify-around flex-wrap md:block text-4xl">
                        <h3 className="mt-6 text-g-blue">Total</h3>
                        <h3 className="mt-6 text-g-red">Male</h3>
                        <h3 className="mt-6 text-g-yellow">Female</h3>
                        <h3 className="mt-6 text-g-green">Kids</h3>
                    </div>
                    <div className="flex-[3_3_0%] pt-4 text-2xl text-gray-200">
                        <div className="mt-6 py-1 px-2 rounded bg-g-blue">{population}</div>
                        <div className="mt-6 py-1 px-2 rounded bg-g-red" style={{width: "40%"}}>{Math.round(population * 0.4)}</div>
                        <div className="mt-6 py-1 px-2 rounded bg-g-yellow" style={{width: "35%"}}>{Math.round(population * 0.35)}</div>
                        <div className="mt-6 py-1 px-2 rounded bg-g-green" style={{width: "25%"}}>{Math.round(population * 0.25)}</div>
                    </div>
                </div>
            </div>
            <div className="relative w-full bg-zinc-900 text-zinc-200 bg-center bg-cover" style={{backgroundImage: `url('${blackSunset}')`}}>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                {/*{universes.map((universe, id) => (
                    <div
                        key={id}
                        className="absolute right-0 flex justify-end items-end p-6 h-full bg-center bg-cover"
                        style={
                        {
                            width: `calc(100% - 400px)`,
                            backgroundImage: `url('${universe.image}')`,
                            animation: `background-transition ${6}s ease-in ${universes.length - id}s infinite`
                        }
                    }>
                        <div className="mt-4 text-lg text-opacity-25">{universe.code}</div>
                    </div>
                ))}*/}
                <div className="py-10 px-8 md:px-12 lg:px-16 w-full">
                    <h1 className="text-7xl z-10">some</h1>
                    <h1 className="text-7xl z-10">universe</h1>
                    <h1 className="text-7xl z-10">we</h1>
                    <h1 className="text-7xl z-10">help</h1>
                    <h1 className="text-7xl z-10">built</h1>
                    <form></form>
                </div>

            </div>
        </main>
    );
};

export default Home;