import React from 'react'

function videos() {

    return (
        <div id="login1" className="px-4  md:px-16 flex flex-col">
            <h2 className=" text-1xl lg:text-4xl ml-5 font-bold  lg:ml-20 mt-6">What Are Capital Markets?</h2>

            <div className="flex flex-col w-full md:flex-row gap-8 md:gap-100 justify-between align-center mt-6">

                <div className="video-container ">

                </div>
                <div className="flex flex-col  w-full  md:w-3/5">
                    <iframe className='w-full'
                        width="600"
                        height="480"
                        src="https://www.youtube.com/embed/SZZG9UIRaXs"
                        title="Intro to Capital Markets | Part 1 | Defining Capital Markets" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>

                    <p className="text-sm text-right my-2 text-gray-600">
                        {" "}
                    </p>
                    <div className="flex flex-col w-full  gap-6">
                        <div className="">
                            <h2 className="font-bold mb-4 text-lg">Capital markets:</h2>
                            <p>
                                are where savings and investments are channeled between
                                suppliers and those in need. Suppliers are people or institutions with
                                capital to lend or invest and typically include banks and investors.
                                Those who seek capital in this market are businesses, governments,
                                and individuals. Capital markets are composed of primary and secondary
                                markets. The most common capital markets are the stock market and the bond market.
                                They seek to improve transactional efficiencies by bringing suppliers together
                                with those seeking capital and providing a place where they can exchange securities.
                            </p>
                        </div>
                        <div>
                            <h2 className="font-bold mb-4 text-lg"> Understanding Capital Markets:</h2>
                            <p>

                                The term capital market is a broad one that is used to describe the in-person and
                                digital spaces in which various entities trade different types of financial instruments.
                                These venues may include the stock market, the bond market, and the currency and foreign
                                exchange (forex) markets. Most markets are concentrated in major financial centers such as
                                New York, London, Singapore, and Hong Kong.

                                Capital markets are composed of the suppliers and users of funds. Suppliers include households
                                (through the savings accounts they hold with banks) as well as institutions like pension and
                                retirement funds, life insurance companies, charitable foundations, and non-financial companies
                                that generate excess cash. The users of the funds distributed on capital markets include home and
                                motor vehicle purchasers, non-financial companies, and governments financing infrastructure investment
                                and operating expenses. {" "}
                            </p>
                        </div>

                    </div>

                </div>

                <div className="flex flex-col gap-8  md:w-4/12">
                    <div className="flex flex-row">
                        <h2 className="w-1/2 md:w-full bg-capital-purple text-white py-1 cursor-pointer text-center">
                            Recommended Videos
                        </h2>

                    </div>
                    <iframe className="" width="400" height="300"
                        src="https://www.youtube.com/embed/JtzsoaMW1lE"
                        title="ካፒታል ገበያ ማለት ምን ማለት ነው? በዘመዴነህ ንጋቱ የምጣኔ ሀብት ባለሞያ-አርትስ ቢዝነስ
                      ካፌ|Ethiopia@ArtsTvWorld" frameborder="0" allow="accelerometer;
                       autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
                        web-share" allowfullscreen>

                    </iframe>
                    <iframe
                        width="400"
                        height="300"
                        src="https://www.youtube.com/embed/_2EpIiBgn_g"
                        title="Capital Market ኢትዮጵያን ያተርፋታል ?  - Part 2 - With Ermyas Amelga - S08 EP77"
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                     gyroscope; picture-in-picture; web-share" allowfullscreen>

                    </iframe>
                    <iframe
                        width="400"
                        height="300"
                        src="https://www.youtube.com/embed/27-YIQ8MjYg"
                        title="Difference Between Money Market and Capital Market"
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                     encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

                    </iframe>
                </div>
            </div>
        </div >
    );
};
export default videos
