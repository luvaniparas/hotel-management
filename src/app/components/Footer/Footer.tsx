import Link from "next/link";
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";

function Footer() {
  return (
    <footer className="mt-16">
      <div className="container mx-auto px-4">
        <Link href="/" className="font-black text-ternary-dark">
          Hotelzz
        </Link>

        <h4 className="font-semibold text-[40px] py-6">Contact</h4>

        <div className="flex flex-wrap justify-between items-center">
          <div className="flex-1">
            <p>123 Road</p>

            <div className="flex items-center py-4">
              <BsFillSendFill />

              <p className="ml-2">Paras Luvani</p>
            </div>

            <div className="flex items-center">
              <BsTelephoneOutbound />

              <p>9699 290 770</p>
            </div>

            <div className="flex items-center pt-4">
              <BiMessageDetail />

              <p>luvaniparas5@gmail.com</p>
            </div>
          </div>

          <div className="flex-1 md:text-right">
            <p className="pb-4">Mumbai</p>
            <p className="pb-4">Get in Touch</p>
            <p className="pb-4">Our Privacy Commitment</p>
            <p className="pb-4">Terms of service</p>
            <p>Customer Assistance</p>
          </div>

          <div className="flex-1 md:text-right">
            <p className="pb-4">Dinning Experience</p>
            <p className="pb-4">Wellness</p>
            <p className="pb-4">Fitness</p>
            <p className="pb-4">Sports</p>
            <p>Events</p>
          </div>
        </div>
      </div>

      <div className='bg-tertiary-light h-10 md:h-[70px] mt-16 w-full bottom-0 left-0' />
    </footer>
  );
}

export default Footer;
