export const site = {
  name: "Utkranti Yantra",
  tagline: "Transforming Ideas Into Real-World Products",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://utkrantiyantra.com",
  description: "Industrial IoT, embedded systems, robotics, automation, AI vision, CNC machine, and product development company."
};

export const navigation = ["Home", "Products", "Services", "Solutions", "Industries", "Portfolio", "Dashboard Demo", "Downloads", "Documentation", "Blog", "Support", "Contact"].map((label) => ({ label, href: label === "Home" ? "/" : `/${label.toLowerCase().replaceAll(" ", "-")}` }));

export const solutions = ["Smart Agriculture", "Smart Buildings", "Railway Solutions", "Industrial Monitoring", "Energy Management", "Factory Automation", "Environmental Monitoring", "Remote Asset Monitoring"];
export const industries = ["Manufacturing", "Railway", "Healthcare", "Agriculture", "Energy", "Logistics", "Smart Cities", "Industrial Automation"];
export const blogCategories = ["STM32", "ESP32", "IoT", "Robotics", "AI Vision", "Industrial Automation"];
