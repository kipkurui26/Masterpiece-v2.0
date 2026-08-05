// features/services/components/CTAButton.jsx
import { Link } from "react-router-dom";

const CTAButton = ({ label, href, variant = "primary" }) => {
  if (!label || !href) return null;

  const isInternal = href.startsWith("/");
  const Tag = isInternal ? Link : "a";
  const linkProps = isInternal
    ? { to: href }
    : { href, target: href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" };

  const styles = {
    primary:
      "bg-[#0F9E9E] hover:bg-[#5DD9D9] text-white hover:text-[#1B1F5C] font-semibold px-8 py-3 rounded-full transition-colors duration-200",
    secondary:
      "border border-[#5DD9D9] text-[#5DD9D9] hover:bg-[#5DD9D9]/10 font-semibold px-8 py-3 rounded-full transition-colors duration-200",
  };

  return (
    <Tag {...linkProps} className={`inline-block ${styles[variant]}`}>
      {label}
    </Tag>
  );
};

export default CTAButton;