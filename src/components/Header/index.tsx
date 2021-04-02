import { Flex, Icon, IconButton, useBreakpoint, useBreakpointValue } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';
import { useSideBarDrawer } from '../../context/SideBarDrawerContext';
import { Logo } from './Logo';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';

export default function Header() {

  const { onOpen } = useSideBarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      as='header'
      w="100%"
      maxWidth={1480}
      mx="auto"
      alignItems="center"
      mt="4"
      px="6"
      h="20">

      {!isWideVersion && (
        <IconButton
          icon={<Icon as={RiMenuLine} />}
          aria-label="Open Navigation"
          fontSize="24"
          mr="2"
          onClick={onOpen}
          variant="unstyled"></IconButton>
      )}

      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex
        alignItems="center"
        ml="auto"
      >
        <NotificationsNav />

        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}