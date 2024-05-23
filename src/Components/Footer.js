import React from "react";
import { BsLinkedin, BsYoutube, BsGithub, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BsSearch } from "react-icons/bs";


const Footer = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Search query:", data.searchQuery);
  };
  return (
    <>
      <footer className="py-4 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-5/12 mb-4 md:mb-0">
              <div className="flex items-center gap-4">
                <img src="" alt="" />
                <h3 className="mb-0 text-white text-3xl">
                  Sign Up for New Products
                </h3>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className=" flex w-7/12">
              <input
                type="text"
                placeholder="Email here....."
                {...register("searchQuery", { required: true })}
                className="border p-2 rounded-l-md w-full"
              />
              <button
                type="submit"
                className="bg-yellow-500 text-white px-4 py-2 rounded-r-md hover:bg-gray-400 "
              >
                <BsSearch className="text-lg" />
              </button>
            </form>
          </div>
        </div>
      </footer>
      <footer className="py-4 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-4/12 mb-4 md:mb-0">
              <h className="text-white mb-4">Contact Us:</h>
              <address className="text-white text-sm">
                Group Four members
                <br />
                Department of Computer Science,
                <br />
                University of Malawi, Chancellor College,
                <br />
                P.O. BOX 280, Zomba, Malawi.
                <br />
              </address>
              <a
                href="tel:+265996467525"
                className="mt-3 block mb-1 text-white"
              >
                +265 (0) 99 6467 525
              </a>
              <a
                href="mailto:preciouspraise@gmail.com"
                className="mt-2 block mb-0 text-white"
              >
                preciouspraise41@gmail.com
              </a>
              <div className="flex items-center gap-6 mt-4">
                <a className="text-white" href="/#">
                  <BsLinkedin className="text-2xl" />
                </a>
                <a className="text-white" href="/#">
                  <BsGithub className="text-2xl" />
                </a>
                <a className="text-white" href="/#">
                  <BsYoutube className="text-2xl" />
                </a>
                <a className="text-white" href="/#">
                  <BsInstagram className="text-2xl" />
                </a>
              </div>
            </div>
            <div className="w-full md:w-3/12 mb-4 md:mb-0">
              <h4 className="text-white mb-4">Information</h4>
              <div className="flex flex-col">
                <Link className="text-white py-2 mb-1" to="">
                  Privacy Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="">
                  Refund Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="">
                  Delivery Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="">
                  Terms & Conditions
                </Link>
                <Link className="text-white py-2 mb-1" to="">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="w-full md:w-3/12 mb-4 md:mb-0">
              <h4 className="text-white mb-4">Account</h4>
              <div className="flex flex-col">
                <Link className="text-white py-2 mb-1" to="">
                  About Us
                </Link>
                <Link className="text-white py-2 mb-1" to="">
                  Faq
                </Link>
                <Link className="text-white py-2 mb-1" to="">
                  Contact
                </Link>
              </div>
            </div>
            <div className="w-full md:w-2/12">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="flex flex-col">
                <Link className="text-white py-2 mb-1" to="">
                  Laptops
                </Link>
                <Link className="text-white py-2 mb-1" to="">
                  Headphones
                </Link>
                <Link className="text-white py-2 mb-1" to="">
                  Tablets
                </Link>
                <Link className="text-white py-2 mb-1" to="">
                  Watch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="mb-0 text-white">
              &copy;{new Date().getFullYear()}: Powered by Developer's Corner
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
