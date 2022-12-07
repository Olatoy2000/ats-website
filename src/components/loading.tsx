import { useState } from "react";
import { LoadingOverlay, Button, Group } from "@mantine/core";

type LoadingProp = {
  loading: boolean
}

export default function Loading({loading}: LoadingProp) {
  return <LoadingOverlay visible={loading} overlayBlur={2} />;
}
