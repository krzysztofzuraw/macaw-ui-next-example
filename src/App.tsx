import { Box, Button, Text } from "@saleor/macaw-ui/next";

export function App() {
  return (
    <Box
      as="article"
      backgroundColor="plain"
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap={3}
    >
      <Text as="h1">Macaw UI next example</Text>
      <Button>Button</Button>
    </Box>
  );
}
