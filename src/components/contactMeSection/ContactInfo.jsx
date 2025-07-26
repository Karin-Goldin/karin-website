import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="karin.goldin24@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="052-8410088" Image={FiPhone} />
      <SingleInfo text="Tel Aviv, Israel" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
