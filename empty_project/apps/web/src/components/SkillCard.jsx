import React from 'react';

const SkillCard = ({ icon: Icon, title, description, index }) => {
  const cardStyles = [
    'bg-card shadow-lg col-span-2',
    'bg-muted col-span-1',
    'bg-card shadow-lg col-span-1',
    'bg-muted col-span-2'
  ];

  const style = cardStyles[index % cardStyles.length];

  return (
    <div className={`${style} rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}>
      <div className="flex flex-col h-full">
        <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
          <Icon className="text-primary" size={28} />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default SkillCard;
