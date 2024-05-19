import TestNode, { isTestMode } from "./components/TestNode";
import Home from "./(routes)/home/Home";

export default function page() {

  if (isTestMode) {
    return (
      <TestNode />
    )
  }

  return (
    <Home />
  )

}