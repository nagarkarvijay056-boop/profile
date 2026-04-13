import React from 'react';
import { GraduationCap } from 'lucide-react';

const AcademicCard = ({ title, marks, percentage, percentile, subjects, index, image }) => {
  const cardVariants = [
    'bg-card shadow-lg',
    'bg-muted',
    'bg-card shadow-lg'
  ];

  const variant = cardVariants[index % cardVariants.length];

  return (
    <div className={`${variant} rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 border border-border/50 flex flex-col h-full`}>
      {image && (
        <div className="w-full h-48 relative overflow-hidden bg-muted">
          <img 
            src={image} 
            alt={`Nature representation for ${title}`} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 bg-primary/10 rounded-xl shrink-0">
            <GraduationCap className="text-primary" size={24} />
          </div>
          <div className="flex-1 pt-1">
            <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          </div>
        </div>
        
        <div className="space-y-4 flex-1">
          {marks && (
            <div>
              <p className="text-2xl font-bold text-primary">{marks}</p>
              <p className="text-sm text-muted-foreground">Total marks</p>
            </div>
          )}

          {percentage && (
            <div>
              <p className="text-lg font-semibold text-foreground">{percentage}%</p>
              <p className="text-sm text-muted-foreground">Percentage</p>
            </div>
          )}

          {percentile && (
            <div>
              <p className="text-lg font-semibold text-foreground">{percentile}</p>
              <p className="text-sm text-muted-foreground">Percentile</p>
            </div>
          )}
        </div>

        {subjects && subjects.length > 0 && (
          <div className="mt-6 pt-4 border-t border-border/50">
            <p className="text-sm font-medium text-foreground mb-3">Subject-wise scores:</p>
            <div className="space-y-2">
              {subjects.map((subject, idx) => (
                <div key={idx} className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">{subject.name}</span>
                  <span className="font-medium text-foreground">{subject.score}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AcademicCard;
