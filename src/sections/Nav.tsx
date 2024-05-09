import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Kobodrop from "../assets/logos/kobodrop_logo.svg";

function Nav() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="flex">
            <a href="#">
              <img src={Kobodrop} alt="Kobodrop logo" />
            </a>
            <div className="flex">
              <a className="text-gray-500 hover:text-gray-900" href="#features">Features</a>
              <a href="#partners">Partners</a>
              <a href="#reviews">Reviews</a>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}

export default Nav;
