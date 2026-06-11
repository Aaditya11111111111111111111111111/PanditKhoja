import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import StepCard from "../howitworks/StepCard";

const steps = [
  {
    icon: "🔍",
    title: "Search Pandit",
    description: "Search pandits based on your ceremony type and location in Nepal.",
  },
  {
    icon: "📋",
    title: "Choose Service",
    description: "Select the type of puja or ceremony you need assistance with.",
  },
  {
    icon: "📞",
    title: "Contact & Book",
    description: "Directly call or contact the pandit to confirm your booking.",
  },
];

const HowItWorks = () => {
  return (
    <div className="py-20 md:py-28 bg-[#F5F5F5]">
      <Container>

        <SectionTitle
          title="How It Works"
          subtitle="Simple 3-step process to find and book pandits in Nepal."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              number={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>

      </Container>
    </div>
  );
};

export default HowItWorks;