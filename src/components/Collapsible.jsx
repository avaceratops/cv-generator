import { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import '../styles/Collapsible.scss';

export default function Collapsible({ heading, icon, children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState(0);

  function handleClick() {
    setIsExpanded(!isExpanded);
    setHeight(height === 0 ? 'auto' : 0);
  }

  // accept both 'fa-icon-name' and 'icon-name'
  if (icon && !icon.startsWith('fa-')) {
    icon = `fa-${icon}`;
  }

  return (
    <article className={`collapsible ${isExpanded ? 'collapsible--expanded' : ''}`}>
      <button className="collapsible__button" onClick={handleClick}>
        <h2 className="collapsible__heading">
          {icon && <i className={`collapsible__icon fa-solid ${icon}`} aria-hidden="true"></i>}
          {heading}
        </h2>
        <i className="collapsible__collapse fa-solid fa-chevron-down" aria-hidden="true"></i>
      </button>
      <AnimateHeight height={height} className="collapsible__children" animateOpacity="true">
        {children}
      </AnimateHeight>
    </article>
  );
}
