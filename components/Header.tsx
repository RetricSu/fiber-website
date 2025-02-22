import Link from "next/link";
import { useRouter } from "next/router";

import { BsSubstack } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import React from "react";
import { FiAlignJustify } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";

import isMobile from "is-mobile";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import localFont from "next/font/local";
const Satoshi = localFont({
  src: "../public/font/Satoshi-Light.woff",
  display: "swap",
});
export default function Header() {
  const router = useRouter();
  const is_mobile = isMobile();

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };


  return (
    <>
      <header className={Satoshi.className}>
        {is_mobile ? (
          <>
            <div className={isOpen ? "navMobile openMobile" : "navMobile"}>
              <a
                onClick={() => {
                  router.push("/");
                  setIsOpen(false);
                }}
              >
                <img className="nav_logo" height={20} src="images/logo.png" />
              </a>
              {!isOpen ? (
                <FiAlignJustify
                  color="#fff"
                  size={20}
                  onClick={() => {
                    toggleDrawer();
                  }}
                />
              ) : (
                <TfiClose
                  color="#fff"
                  size={20}
                  onClick={() => {
                    toggleDrawer();
                  }}
                />
              )}
            </div>
            {isOpen && (
              <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction="top"
                size={388}
                className="drawer"
              >
                <div className="nav_main">
                  <div className="menus">
                    <div className={"nav-main "}>
                      <a
                        onClick={() => {
                          router.push("/features");
                          setIsOpen(false);
                        }}
                      >
                        Features
                      </a>
                      <a
                        onClick={() => {
                          router.push("/#common");
                          setIsOpen(false);
                        }}
                      >
                        Common Lightning Initiative
                      </a>
                      {/* <a
                        onClick={() => {
                          router.push("/#roadmap");
                          setIsOpen(false);
                        }}
                      >
                        Roadmap
                      </a> */}
                      <a
                        onClick={() => {
                          router.push("/#timeline");
                          setIsOpen(false);
                        }}
                      >
                        Test Timeline
                      </a>
                      <a
                        onClick={() => {
                          router.push("/resources");
                          setIsOpen(false);
                        }}
                      >
                        Resources
                      </a>
                    </div>
                  </div>
                  <div className="nav_links">
                    <Link
                      href="https://github.com/nervosnetwork/fiber"
                      target="_blank"
                    >
                      <BsGithub size={16} />
                    </Link>
                    <Link href="https://x.com/CKBEcoFund" target="_blank">
                      <BsTwitterX size={16} />
                    </Link>
                    <Link
                      href="https://substack.com/@ckbecofund"
                      target="_blank"
                    >
                      <BsSubstack size={16} />
                    </Link>
                  </div>
                </div>
              </Drawer>
            )}
          </>
        ) : (
          <div className="header-main">
            <div>
              <Link href="/">
                <img src="images/logo.png" height={20} />
              </Link>
              <div className={"nav-main "}>
                <Link href="/features"  className={router.pathname === "/features" ? "sel" : ""}>Features</Link>
                <Link
                  href="/#common"
                  className={router.pathname === "/#common" ? "sel" : ""}
                >
                  Common Lightning Initiative
                </Link>
                <Link
                  href="/#timeline"
                  className={router.pathname === "/#timeline" ? "sel" : ""}
                >
                  Test Timeline
                </Link>
                <Link
                  href="/resources"
                  className={router.pathname === "/resources" ? "sel" : ""}
                >
                  Resources
                </Link>
              </div>
            </div>
            <div className="nav-right">
              <Link
                href="https://github.com/nervosnetwork/fiber"
                target="_blank"
              >
                <BsGithub size={16} />
              </Link>
              <Link href="https://x.com/CKBEcoFund" target="_blank">
                <BsTwitterX size={16} />
              </Link>
              <Link href="https://substack.com/@ckbecofund" target="_blank">
                <BsSubstack size={16} />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
