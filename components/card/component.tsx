import { CardTypes } from "./types";

const Card = ({ title, role, description, technologiesUsed }: CardTypes) => {
  return (
    <div className="flex flex-col space-y-2 rounded-md border-2 px-6 py-3">
      <span className="border-b-2 text-lg font-semibold">{title}</span>
      <span>{role}</span>
      <span>{description}</span>
      <div className="flex space-x-2">
        <span>Uses:</span>
        {technologiesUsed.map((technology: string, index: number) => (
          <span key={index}>{technology}</span>
        ))}
      </div>
    </div>
  );
};

export default Card;
