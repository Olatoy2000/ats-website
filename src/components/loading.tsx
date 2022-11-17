import { useState } from "react";
import { LoadingOverlay, Button, Group } from "@mantine/core";

export default function Loading() {
  // Note that position: relative is required
  return <LoadingOverlay visible={true} overlayBlur={2} />;
}
