import MemeView from "@/app/components/MemeView";

interface RouteParams { params: { id: string } }

export default function page({ params: { id } }: RouteParams) {
  return (
    <MemeView id={id} />
  )

}