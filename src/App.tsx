import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { MyAppShell } from "./components/appshell";

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <MyAppShell></MyAppShell>
    </MantineProvider>
  );
}
