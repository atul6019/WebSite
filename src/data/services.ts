import type { Service } from "@/types/content";

const baseBenefits = ["Faster concept-to-production cycles", "Industrial-grade documentation", "Manufacturing-ready engineering", "Secure and scalable architecture"];
export const services: Service[] = [
  ["iot-product-development", "IoT Product Development", "End-to-end connected product engineering from device firmware and gateways to cloud dashboards and fleet operations.", ["ESP32", "STM32", "MQTT", "AWS IoT", "Next.js", "PostgreSQL"]],
  ["embedded-firmware-development", "Embedded Firmware Development", "Reliable real-time firmware for sensors, controllers, gateways, motor drivers, and industrial devices.", ["C/C++", "FreeRTOS", "STM32Cube", "ESP-IDF", "CAN", "RS485"]],
  ["hardware-design", "Hardware Design", "Robust electronics architecture, component selection, power design, and design-for-compliance support.", ["Power Electronics", "Signal Integrity", "EMI/EMC", "Sensors", "Actuators"]],
  ["pcb-design", "PCB Design", "Production-ready PCB layouts for compact embedded products and rugged industrial systems.", ["Altium", "KiCad", "High Current", "RF Layout", "DFM"]],
  ["cloud-dashboard-development", "Cloud Dashboard Development", "Secure portals for live telemetry, alerts, device provisioning, analytics, and OTA workflows.", ["Next.js", "Node.js", "MQTT", "WebSocket", "Timeseries DB"]],
  ["humanoid-robotics-development", "Humanoid Robotics Development", "Robotics systems with sensing, motion control, perception, and operator dashboards.", ["ROS", "Motor Control", "IMU", "Vision", "Edge AI"]],
  ["cnc-machine-development", "CNC Machine Development", "Custom CNC controller, HMI, motion electronics, and machine automation development.", ["Motion Control", "G-code", "Stepper/Servo", "HMI", "Safety IO"]],
  ["camera-development", "Camera Development", "Embedded camera hardware, streaming, image acquisition, and industrial inspection integrations.", ["MIPI", "USB", "RTSP", "OpenCV", "Edge Inference"]],
  ["ai-vision-systems", "AI Vision Systems", "Machine vision for quality inspection, counting, detection, safety, and process intelligence.", ["OpenCV", "YOLO", "TensorRT", "Python", "Industrial Cameras"]],
  ["led-display-controller-development", "LED Display Controller Development", "Custom LED display controllers, content tools, protocols, and rugged control electronics.", ["RGB Matrix", "RS485", "Ethernet", "Scheduling", "Remote Updates"]],
  ["industrial-automation", "Industrial Automation", "Panel automation, remote monitoring, PLC integration, and custom control systems.", ["PLC", "SCADA", "Modbus", "Relay Control", "Sensors"]],
  ["manufacturing-support", "Manufacturing Support", "BOM optimization, vendor coordination, test jigs, firmware flashing, and pilot production support.", ["DFM", "DFA", "Test Jigs", "BOM", "QA"]]
].map(([slug, title, description, stack]) => ({ slug, title, description, stack, benefits: baseBenefits, image: `/images/catalog/service-${slug}.svg` } as Service));
