"use client";
import { useEffect, useMemo, useState } from "react";
import {
  AgencySidebarOption,
  SubAccount,
  SubAccountSidebarOption,
} from "@prisma/client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

// ui imports
import { ChevronsUpDown, Compass, MenuIcon, PlusCircle } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { AspectRatio } from "../ui/aspect-ratio";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";

type ExtendedSubAccounts = SubAccount & {
  SidebarOption: SubAccountSidebarOption[];
};

interface Props {
  defaultOpen?: boolean;
  subAccounts: ExtendedSubAccounts[] | undefined;
  sidebarOpt: AgencySidebarOption[] | SubAccountSidebarOption[];
  sidebarLogo: string;
  details: any;
  user: any;
  id: string;
}

const MenuOptions: React.FC<Props> = ({
  details,
  defaultOpen,
  subAccounts,
  sidebarLogo,
  sidebarOpt,
  id,
  user,
}) => {
  // to suppress the hydration warning
  const [isMounted, setIsMounted] = useState(false);

  const openState = useMemo(
    () => (defaultOpen ? { open: true } : {}),
    [defaultOpen]
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // do not render the component
  if (!isMounted) return;

  return (
    <Sheet modal={false}>
      <SheetTrigger
        className='absolute left-4 top-4 z-[100] md:!hidden flex'
        asChild
      >
        <Button
          variant={"outline"}
          size={"icon"}
        >
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent
        showX={true}
        side={"left"}
        className={clsx(
          "bg-background/80 backdrop-blur-xl fixed top-0 border-r p-6",
          {
            "hidden md:inline-block z-0 w-[300px]": defaultOpen,
            "inline-block md:hidden z-[100] w-full": !defaultOpen,
          }
        )}
      >
        <div className=''>
          <AspectRatio ratio={16 / 5}>
            <Image
              src={sidebarLogo}
              alt='sidebar logo'
              layout='fill'
              objectFit='contain'
              objectPosition='center'
              className='rounded-md object-contain'
            />
          </AspectRatio>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className='w-full my-4 flex items-center justify-between py-8'
                variant='ghost'
              >
                <div className='flex items-center text-left gap-2'>
                  <Compass size={24} />
                  <div className='flex flex-col line-clamp-1 text-wrap'>
                    {details?.name}
                    <span className='text-muted-foreground line-clamp-1 text-wrap'>
                      {details.address}
                    </span>
                  </div>
                  <div>
                    <ChevronsUpDown
                      size={16}
                      className='text-muted-foreground'
                    />
                  </div>
                </div>
              </Button>
            </PopoverTrigger>
            <PopoverContent className='size-80 mt-4 z-[200]'>
              <Command className='rounded-lg'>
                <CommandInput placeholder='search account' />
                <CommandList className='pb-16'>
                  <CommandEmpty>No Result Found🥹</CommandEmpty>
                  {(user?.role === "AGENCY_ADMIN" ||
                    user?.role === "AGENCY_OWNER") &&
                    user?.Agency && (
                      <CommandGroup heading='Agency'>
                        <CommandItem className='!bg-transparent my-2 text-primary border border-border p-2 rounded-md hover:!bg-muted cursor-pointer transition-all'>
                          {defaultOpen ? (
                            <Link
                              href={`/agency/${user?.Agency?.id}`}
                              className='flex gap-4 w-full h-full'
                            >
                              <div className='relative w-16'>
                                <Image
                                  src={user?.Agency?.agencyLogo}
                                  fill
                                  alt='agency logo'
                                  className='rounded-md object-contain'
                                />
                              </div>
                              <div className='flex flex-col flex-1'>
                                {user?.Agency?.name}
                                <span className='text-muted-foreground'>
                                  {user?.Agency?.address}
                                </span>
                              </div>
                            </Link>
                          ) : (
                            <SheetClose asChild>
                              <Link
                                href={`/agency/${user?.Agency?.id}`}
                                className='flex gap-4 w-full h-full'
                              >
                                <div className='relative w-16'>
                                  <Image
                                    src={user?.Agency?.agencyLogo}
                                    alt='Agency Logo'
                                    fill
                                    className='rounded-md object-contain'
                                  />
                                </div>
                                <div className='flex flex-col flex-1'>
                                  {user?.Agency?.name}
                                  <span className='text-muted-foreground'>
                                    {user?.Agency?.address}
                                  </span>
                                </div>
                              </Link>
                            </SheetClose>
                          )}
                        </CommandItem>
                      </CommandGroup>
                    )}
                  <CommandGroup heading='Accounts'>
                    {!!subAccounts ? (
                      subAccounts.map((subaccount) => (
                        <CommandItem key={subaccount.id}>
                          {defaultOpen ? (
                            <Link
                              href={`/subaccount/${subaccount?.id}`}
                              className='flex gap-4 w-full h-full'
                            >
                              <div className='relative w-16'>
                                <Image
                                  src={subaccount.subAccountLogo}
                                  fill
                                  alt='agency logo'
                                  className='rounded-md object-contain'
                                />
                              </div>
                              <div className='flex flex-col flex-1'>
                                {subaccount?.name}
                                <span className='text-muted-foreground'>
                                  {subaccount?.address}
                                </span>
                              </div>
                            </Link>
                          ) : (
                            <SheetClose asChild>
                              <Link
                                href={`/subaccount/${subaccount?.id}`}
                                className='flex gap-4 w-full h-full'
                              >
                                <div className='relative w-16'>
                                  <Image
                                    src={subaccount?.subAccountLogo}
                                    alt='Agency Logo'
                                    fill
                                    className='rounded-md object-contain'
                                  />
                                </div>
                                <div className='flex flex-col flex-1'>
                                  {subaccount?.name}
                                  <span className='text-muted-foreground'>
                                    {subaccount?.address}
                                  </span>
                                </div>
                              </Link>
                            </SheetClose>
                          )}
                        </CommandItem>
                      ))
                    ) : (
                      <div>No subaccount</div>
                    )}
                  </CommandGroup>
                </CommandList>
                {(user?.role === "AGENCY_OWNER" ||
                  user?.role === "AGENCY_ADMIN") && (
                  <Button className='w-full flex gap-2'>
                    <PlusCircle />
                    Create sub account
                  </Button>
                )}
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuOptions;
