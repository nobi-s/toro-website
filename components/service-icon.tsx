import { Code, Lightbulb, MonitorSmartphone, Puzzle } from "lucide-react"

type ServiceIconProps = {
  type: "development" | "consulting" | "product" | "innovation"
  className?: string
}

export default function ServiceIcon({ type, className = "" }: ServiceIconProps) {
  switch (type) {
    case "development":
      return <Code className={`${className}`} />
    case "consulting":
      return <Lightbulb className={`${className}`} />
    case "product":
      return <Puzzle className={`${className}`} />
    case "innovation":
      return <MonitorSmartphone className={`${className}`} />
    default:
      return <Code className={`${className}`} />
  }
}
