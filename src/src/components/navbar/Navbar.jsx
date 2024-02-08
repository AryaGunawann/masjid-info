/* eslint-disable react/no-unknown-property */
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Input,
} from "@material-tailwind/react";
import { FaHome, FaFileAlt, FaInfoCircle, FaSearch } from "react-icons/fa";

export function NavbarWithSearch() {
  const [openNav, setOpenNav] = React.useState(
    sessionStorage.getItem("openNav") === "true" || false
  );

  const [activePage, setActivePage] = React.useState("home");

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  React.useEffect(() => {
    sessionStorage.setItem("openNav", openNav);
  }, [openNav]);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color={activePage === "home" ? "black" : "blue-gray"}
        className={`flex items-center gap-x-2 p-1 font-medium rounded-md ${
          activePage === "home" && "bg-blue-gray-100"
        }`}
      >
        <FaHome size={16} />
        <a
          href="#"
          className="flex items-center"
          onClick={() => setActivePage("home")}
        >
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color={activePage === "article" ? "black" : "blue-gray"}
        className={`flex items-center gap-x-2 p-1 font-medium rounded-md ${
          activePage === "article" && "bg-blue-gray-100"
        }`}
      >
        <FaFileAlt size={16} />
        <a
          href="#"
          className="flex items-center"
          onClick={() => setActivePage("article")}
        >
          Article
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color={activePage === "about" ? "black" : "blue-gray"}
        className={`flex items-center gap-x-2 p-1 font-medium rounded-md ${
          activePage === "about" && "bg-blue-gray-100"
        }`}
      >
        <FaInfoCircle size={16} />
        <a
          href="#"
          className="flex items-center"
          onClick={() => setActivePage("about")}
        >
          About
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          Masjid Info
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden items-center gap-x-2 lg:flex">
          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              placeholder="Search"
              containerProps={{
                className: "min-w-[288px]",
              }}
              className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <div className="!absolute left-3 top-[13px]">
              <FaSearch size={16} color="#CFD8DC" />
            </div>
          </div>
          <Button size="md" className="rounded-lg">
            Search
          </Button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <FaSearch size={16} color="#CFD8DC" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex flex-col gap-x-2 sm:flex-row sm:items-center">
            <div className="relative w-full gap-2 md:w-max">
              <Input
                type="search"
                placeholder="Search"
                containerProps={{
                  className: "min-w-[288px]",
                }}
                className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <div className="!absolute left-3 top-[13px]">
                <FaSearch size={16} color="#CFD8DC" />
              </div>
            </div>
            <Button size="md" className="mt-1 rounded-lg sm:mt-0">
              Search
            </Button>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}
