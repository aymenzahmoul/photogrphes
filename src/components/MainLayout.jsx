import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, DarkThemeToggle,  Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";
import Image from 'next/image';
export function DefaultHeader() {
    return (
        <Navbar>
            <NavbarBrand as={Link} href="/" active className="flex items-center" >
            <Image 
                    src="/assets/images/logo1.png" 
                    alt="logo1"
                    width={30} 
                    height={30} 
                    className="mr-2" 
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Captur</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink as={Link} href="/" active>
                    Home
                </NavbarLink>
             
                <NavbarLink as={Link} href='/test'>Gallery</NavbarLink>
                <NavbarLink as={Link} href='/contact'>Works</NavbarLink>
                <NavbarLink as={Link} href='/about'>Contact</NavbarLink>
               

            </NavbarCollapse>
            <DarkThemeToggle />
        </Navbar>
    );
}

export function DefaultFooter() {
    return (
        <Footer container className='rounded-none'>
        <FooterCopyright href="#" by="Photos Store" year={2024} />
        <FooterLinkGroup>
          <FooterLink href="#">Gallery</FooterLink>
          <FooterLink href="#">Work</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
        </FooterLinkGroup>
      </Footer>
    )
}