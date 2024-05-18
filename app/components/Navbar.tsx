"use client"

import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import Link from "next/link";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <div className=" mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography

        variant="small"
        color="blue-gray"
        className="p-1 font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}      >
        <Link href="/galerie" className="flex items-center" passHref>
          Galerie
        </Link>
      </Typography>

    </div>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as={Link}
          href="/"
          className="mr-4 cursor-pointer py-1.5 font-bold uppercase" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
          Générateur de mèmes
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-1">

            <Link href={"/generer-un-meme"}>
              <Tooltip content="Générer un nouveau mème">
                <Button fullWidth variant="gradient" size="sm" className="" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <span>Nouveau</span>
                </Button>
              </Tooltip>
            </Link>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
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
      </div>
      <MobileNav open={openNav}>
        {navList}
      </MobileNav>
    </Navbar>
  );
}