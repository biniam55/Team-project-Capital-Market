import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h2>Hi there!!!</h2>
      <Link className="underline text-red-400" href={"/login"}>
        Link to Login Page!!!
      </Link>
      <Link href={"/signup"}>Link to Sign up Page</Link>
    </div>
  );
};

export default Home;
