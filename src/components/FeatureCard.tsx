interface Props {
  title: string;
  description: string;
  icon: React.ReactNode;
  centerStyle?: boolean;
}

const FeatureCard = ({ description, icon, title,centerStyle }: Props) => {
  return (
    <div className={`card text-center shadow-lg my-2 px-2 overflow-hidden sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/4 bg-[#d7d7d7] hover:bg-[#d5caca]  max-w-[400px] min-w-[400px] mt-4 transition-all hover:scale-105 ml-5 sm:ml-0 ${centerStyle? 'lg:ml-[90px_!important]': ''}`}>
      <div className='px-10 pt-10 grid place-content-center text-3xl hover:text-slate-500 transition-all ease-linear'>
        {icon}
      </div>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
