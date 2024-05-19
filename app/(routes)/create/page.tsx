import ImageEditor from "../../components/ImageEditor";
import TestNode, { isTestMode } from "../../components/TestNode";

export default function page() {

  if (isTestMode) {
    return (
      <TestNode />
    )
  }
  return (
    <ImageEditor />
  )

}