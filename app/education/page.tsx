// pages/index.js
import Videos from '@/components/videos';
import Books from '@/components/books';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

const Home = () => {
    return (
        <div className="font-poppins">

            <Navbar />
            <Videos />
            <Books />
            <Footer />

        </div>
    );
};

export default Home;
