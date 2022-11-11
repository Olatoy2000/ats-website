import { useState } from "react";
import { LoadingOverlay, Button, Group } from "@mantine/core";

export default function Loading() {
  const [visible, setVisible] = useState(false);

  // Note that position: relative is required
  return (
    <>
      <div style={{ width: 400, position: "relative" }}>
        <LoadingOverlay visible={visible} overlayBlur={2} />
        {/* ...other content */}
      </div>

      <Group position="center">
        <Button onClick={() => setVisible((v) => !v)}>Toggle overlay</Button>
      </Group>
    </>
  );
}
