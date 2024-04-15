import ClientComponent from "./ClientComponent";
import { heading1, section2 } from "./ServerComponent";

export const HeroSection = () => {
  return <ClientComponent section2={section2} heading1={heading1} />;
};
