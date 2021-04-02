import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex
      alignItems="center"
    >
      {showProfileData && (<Box mr="4" textAlign="right">
        <Text>Leandro Cruvinel</Text>
        <Text color="gray.300" fontSize="small">leandrocl2005@yahoo.com.br</Text>
      </Box>)}

      <Avatar
        size="md"
        name="Leandro Cruvinel"
        src="https://avatars.githubusercontent.com/u/24196521?v=4"
      />
    </Flex>
  );
}