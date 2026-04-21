"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession, signOut } from "@/lib/auth-client";
import { useCartStore } from "@/lib/cart-store";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { 
  Pill, 
  ShoppingCart, 
  ShoppingBag,
  User, 
  LogOut, 
  LayoutDashboard,
  Search,
  Menu,
  X,
  Bell,
  Heart
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function Navbar() {
  const { data: session } = useSession();
  const items = useCartStore((state) => state.items);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cartItemCount = mounted ? items.reduce((total, item) => total + item.quantity, 0) : 0;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Categories", href: "/categories" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? "bg-white/80 backdrop-blur-xl border-b border-zinc-100 shadow-sm py-2" : "bg-white border-b border-transparent py-4"
    }`}>
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="rounded-2xl bg-teal-600 p-2 text-white shadow-lg shadow-teal-500/20 group-hover:scale-110 transition-transform">
              <Pill className="h-6 w-6" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-zinc-900 font-heading">
              Medi<span className="text-teal-600">Store.</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={`text-sm font-bold transition-all uppercase tracking-widest relative group/link ${
                    isActive 
                      ? "text-teal-600" 
                      : "text-zinc-500 hover:text-teal-600"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-teal-600 rounded-full" />
                  )}
                  {!isActive && (
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 rounded-full transition-all group-hover/link:w-full" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="hidden lg:flex flex-1 max-w-2xl mx-12">
          <div className="relative w-full group">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-zinc-400 group-focus-within:text-teal-600 transition-colors" />
            <input 
              type="text" 
              placeholder="Search for medicines, health products, brands..."
              className="w-full h-12 pl-12 pr-4 rounded-2xl bg-zinc-50 border-none focus:ring-2 focus:ring-teal-500/20 focus:bg-white transition-all text-sm font-medium shadow-inner"
            />
            <div className="absolute right-3 top-2.5 h-7 px-2 rounded-lg bg-zinc-200 text-zinc-500 text-[10px] font-bold flex items-center gap-1">
               <span className="border border-zinc-300 rounded px-1">⌘</span> K
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 lg:hidden">
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-teal-600 rounded-2xl h-11 w-11 hover:bg-teal-50">
              <Search className="h-5 w-5" />
            </Button>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-teal-600 rounded-2xl h-11 w-11 hover:bg-teal-50">
              <Heart className="h-5 w-5" />
            </Button>
          </div>
          
          <Link href="/cart">
            <Button className="rounded-2xl h-12 px-6 bg-zinc-950 hover:bg-zinc-800 text-white shadow-xl shadow-zinc-200 transition-all hover:scale-105 active:scale-95 group">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <ShoppingBag className="h-5 w-5" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-teal-500 text-[10px] font-bold flex items-center justify-center border-2 border-zinc-950">
                      {cartItemCount}
                    </span>
                  )}
                </div>
                <span className="font-extrabold text-sm hidden sm:inline">Cart</span>
              </div>
            </Button>
          </Link>

          <div className="h-8 w-px bg-zinc-100 mx-2 hidden md:block" />

          {session ? (
            <div className="flex items-center gap-3">
               <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-teal-600 rounded-2xl h-11 w-11 hover:bg-teal-50 hidden md:flex">
                  <Bell className="h-5 w-5" />
               </Button>
               
               <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-11 w-11 rounded-2xl border border-zinc-100 p-0 hover:bg-zinc-50 overflow-hidden shadow-sm">
                    <Avatar className="h-full w-full rounded-none">
                      <AvatarImage src={session.user.image || ""} alt={session.user.name} />
                      <AvatarFallback className="bg-zinc-50 text-zinc-500 font-bold">
                        {session.user.name?.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 rounded-3xl p-2 shadow-2xl border-zinc-100" align="end" forceMount>
                  <DropdownMenuLabel className="p-4">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-bold leading-none text-zinc-900">{session.user.name}</p>
                      <p className="text-xs leading-none text-zinc-400 font-medium">
                        {session.user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-zinc-50" />
                  <DropdownMenuGroup className="p-2">
                    <DropdownMenuItem asChild>
                      <Link href="/profile" className="rounded-xl h-12 cursor-pointer transition-all hover:bg-teal-50 hover:text-teal-700">
                        <User className="mr-3 h-4 w-4" />
                        <span className="font-bold text-sm">Account Profile</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/orders" className="rounded-xl h-12 cursor-pointer transition-all hover:bg-teal-50 hover:text-teal-700">
                        <ShoppingCart className="mr-3 h-4 w-4" />
                        <span className="font-bold text-sm">My Order History</span>
                      </Link>
                    </DropdownMenuItem>
                    
                    {(session.user as any).role === "SELLER" && (
                      <DropdownMenuItem asChild>
                        <Link href="/seller/dashboard" className="rounded-xl h-12 cursor-pointer bg-teal-50 text-teal-700 mt-2 hover:bg-teal-100">
                          <LayoutDashboard className="mr-3 h-4 w-4" />
                          <span className="font-bold text-sm">Seller Dashboard</span>
                        </Link>
                      </DropdownMenuItem>
                    )}

                    {(session.user as any).role === "ADMIN" && (
                      <DropdownMenuItem asChild>
                        <Link href="/admin/dashboard" className="rounded-xl h-12 cursor-pointer bg-purple-50 text-purple-700 mt-2 hover:bg-purple-100">
                          <LayoutDashboard className="mr-3 h-4 w-4" />
                          <span className="font-bold text-sm">Admin Dashboard</span>
                        </Link>
                      </DropdownMenuItem>
                    )}
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator className="bg-zinc-50" />
                  <div className="p-2">
                    <DropdownMenuItem 
                      className="rounded-xl h-12 cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50"
                      onClick={() => signOut()}
                    >
                      <LogOut className="mr-3 h-4 w-4" />
                      <span className="font-bold text-sm">Sign Out Account</span>
                    </DropdownMenuItem>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/login" className="hidden sm:block">
                <Button variant="ghost" className="text-zinc-500 font-bold hover:text-teal-600 hover:bg-teal-50 rounded-2xl h-11 px-6">
                  Log In
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-zinc-900 hover:bg-zinc-800 text-white shadow-xl shadow-zinc-200 rounded-2xl h-11 px-8 font-bold">
                  Get Started
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
