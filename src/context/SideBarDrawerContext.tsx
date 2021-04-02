import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/hooks";
import { useRouter } from "next/dist/client/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SiderBarDrawerProps {
  children: ReactNode;
}

type SideBarContextData = UseDisclosureReturn;

const SideBarDrawerContext = createContext({} as SideBarContextData);

export function SideBarDrawerProvider({ children }: SiderBarDrawerProps) {

  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath])

  return (
    <SideBarDrawerContext.Provider value={disclosure}>
      {children}
    </SideBarDrawerContext.Provider>
  )
}

export const useSideBarDrawer = () => useContext(SideBarDrawerContext);