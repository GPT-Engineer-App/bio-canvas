import { Container, VStack, Text, Box, Image, Link, Button } from "@chakra-ui/react";
import { FaDiscord } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" p={8} centerContent>
      <VStack spacing={8}>
        <Box boxSize="sm">
          <Image src="https://images.unsplash.com/photo-1683029096295-7680306aa37d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkaXNjb3JkJTIwbG9nb3xlbnwwfHx8fDE3MTU0MDEzNDN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Discord Logo" borderRadius="full" />
        </Box>
        <VStack spacing={3}>
          <Text fontSize="2xl" fontWeight="bold">
            Welcome to Your Discord Bio Page
          </Text>
          <Text fontSize="md" color="gray.600">
            A place to showcase your personality, hobbies, and interests within the Discord community.
          </Text>
        </VStack>
        <Button leftIcon={<FaDiscord />} colorScheme="purple" variant="solid">
          Connect with Discord
        </Button>
        <Link href="https://discord.com" isExternal color="blue.500">
          Learn more about Discord
        </Link>
      </VStack>
    </Container>
  );
};

export default Index;
