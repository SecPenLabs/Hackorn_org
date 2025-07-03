import { BarChart3, CreditCard, Globe, PieChart, Receipt, Zap } from "lucide-react";

export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-blue" style={{ color: "#1D4ED8" }}/>,
    title: "Threat Analytics",
    description:
      "Analyze real-world cyber threats and learn how to defend against them with interactive dashboards.",
  },
  {
    icon: <Receipt className="h-8 w-8 text-orange" style={{ color: "#FFA500" }}/>,
    title: "Capture the Flag Events",
    description:
      "Participate in CTF competitions to solve security challenges and boost your skills.",
  },
  {
    icon: <PieChart className="h-8 w-8 text-brand" style={{ color: "#e879f9" }}/>,
    title: "Skill Progress Tracking",
    description: "Monitor your learning journey and track cybersecurity skills as you grow.",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-brand" style={{ color: "#22d3ee" }}/>,
    title: "Resource Library",
    description: "Access curated courses, labs, and guides tailored for students.",
  },
  {
    icon: <Globe className="h-8 w-8 text-brand" style={{ color: "#8B5CF6" }} />,
    title: "Global Community",
    description: "Connect and collaborate with cybersecurity enthusiasts and mentors worldwide.",
  },
  {
    icon: <Zap className="h-8 w-8 text-brand" style={{ color: "#FF0000" }}/>,
    title: "Hands-on Labs",
    description: "Practice real-world scenarios in safe, automated cybersecurity labs.",
  },
];