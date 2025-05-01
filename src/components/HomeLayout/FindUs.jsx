import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-4">Find Us On</h2>
          
          <div className="join join-vertical w-full ">
  <button className="btn bg-base-200 justify-start join-item text-accent"> <FaFacebook></FaFacebook> Facebook</button>
  <button className="btn bg-base-200 justify-start join-item text-accent"> <FaTwitter></FaTwitter> Twitter</button>
  <button className="btn bg-base-200 justify-start join-item text-accent "> <FaInstagram></FaInstagram> Instagram</button>
</div>
    </div>
  );
};

export default FindUs;
