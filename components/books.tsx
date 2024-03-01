import Stock from "@/assets/img/Finance_illustrated_stocks_resized.png";
import Forex from "@/assets/img/forex_for_beginners.png";
import Capital from "@/assets/img/images.jpg";
import Image from "next/image";

const Books = () => {
    return (
        <div id="books" className="px - 4 sm: px - 6 mt - 25 lg: px - 8">
            <div className=" text-2xl font-bold mt-20 text-center mb-4">
                <h2>Recommended Books</h2>

                <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="media-item bg-white p-4 rounded-lg shadow-md flex items-center">
                        <Image src={Stock} alt="Book Cover" className="w-24 h-[11rem] mr-4" />

                        <div>
                            <h2 className="text-xl font-bold mb-2">Stocks_Trading</h2>
                            <p className="text-gray-600 font-normal text-lg mb-2">If you’re new to trading stocks and you’re not sure where to begin then this is best book for stock trading. ?.</p>
                            <a href="https://financeillustrated.com/Stocks_Trading_For_Beginner_Traders.pdf" className="text-blue-600 hover:underline">Show Now</a>
                        </div>

                    </div>
                    <div className="media-item bg-white p-4 rounded-lg shadow-md flex items-center">
                        <Image src={Forex} alt="Book Cover" className="w-24 h-[11rem] mr-4" />
                        <div>
                            <h2 className="text-xl font-bold mb-2">Forex_Trading</h2>
                            <p className="text-gray-600 font-normal text-lg mb-2">Want to become a Forex Trading expert but don’t know where to start?</p>
                            <a href="https://financeillustrated.com/Forex_Trading_For_Beginners.pdf" className="text-blue-600 hover:underline">Show Now</a>
                        </div>
                    </div>
                    <div className="media-item bg-white p-4 rounded-lg shadow-md flex items-center">
                        <Image src={Capital} alt="Book Cover" className="w-24 h-[11rem] mr-4" />
                        <div>
                            <h2 className="text-xl font-bold mb-2">Crypto_Trading</h2>
                            <p className="text-gray-600 font-normal text-lg mb-2">Bitcoin & Crypto Trading book for Beginners (FREE)</p>
                            <a href="https://financeillustrated.com/Crypto_Trading_For_Beginner_Traders.pdf" className="text-blue-600 hover:underline">Show Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Books;
