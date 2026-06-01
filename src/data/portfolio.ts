import type { CaseStudy } from "@/types/content";

export const caseStudies: CaseStudy[] = ["Industrial IoT Gateway", "Smart Relay Controller", "Temperature Monitoring System", "LED Display Controller", "Access Control System", "AI Camera Platform"].map((title, index) => ({
  slug: title.toLowerCase().replaceAll(" ", "-"),
  title,
  problem: "The customer needed a reliable production-grade system with industrial connectivity, secure remote access, and maintainable hardware.",
  solution: "Utkranti Yantra delivered custom electronics, firmware, dashboard workflows, testing fixtures, and deployment documentation.",
  technologies: [["ESP32", "MQTT", "Next.js", "OTA"], ["STM32", "Relays", "RS485", "Modbus"], ["Sensors", "Cloud", "Alerts", "Analytics"], ["LED Matrix", "Ethernet", "Scheduler", "CMS"], ["RFID", "BLE", "Cloud API", "Access Logs"], ["OpenCV", "YOLO", "Edge AI", "RTSP"]][index],
  results: ["Reduced manual monitoring", "Improved uptime and traceability", "Enabled scalable manufacturing handoff"]
}));
