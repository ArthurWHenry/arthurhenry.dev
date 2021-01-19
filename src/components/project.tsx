type Props = {
  title: string;
  summary: string;
  icon?: React.ReactNode;
  link: string;
};

const Project = ({ title, summary, icon, link }: Props) => {
  return (
    <div className="flex justify-start items-center bg-gray-100 text-gray-900 border-2 border-gray-900 rounded-md w-64 h-28 px-6">
      {icon}
      <div className="flex flex-col justify-center items-start ml-3">
        <a href={link} className="font-bold hover:underline">
          {title}
        </a>
        <p className="text-sm">{summary}</p>
      </div>
    </div>
  );
};

export default Project;
