// components/TimelineItem.tsx
interface TimelineItemProps {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    inverted?: boolean;
  }
  
  export default function TimelineItem({
    title,
    subtitle,
    description,
    image,
    inverted = false,
  }: TimelineItemProps) {
    return (
      <li className={`flex flex-col md:flex-row ${inverted ? 'md:flex-row-reverse' : ''} items-center mb-16`}>
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg">
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className={`md:w-1/2 mt-6 md:mt-0 ${inverted ? 'md:mr-10' : 'md:ml-10'} text-center md:text-left`}>
          <h4 className="text-xl font-bold">{title}</h4>
          <h5 className="text-lg font-semibold mt-1">{subtitle}</h5>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </li>
    );
  }
  