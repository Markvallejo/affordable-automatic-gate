import React, { useState, useRef, useEffect } from 'react';
import '@/styles/dropdown/dropdown.css';

interface Option {
    value: string;
    label: string;
  }
  
  interface DropdownProps {
    options: Option[];
    onSelect: (option: Option) => void;
    placeholder?: string;
    showSearch?: boolean;
  }
  
  const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, placeholder = 'Select an option', showSearch = false }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const detailsRef = useRef<HTMLDetailsElement>(null);
  
    const filteredOptions = showSearch
    ? options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (detailsRef.current && !detailsRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
    const handleToggle = (e: React.MouseEvent) => {
      e.preventDefault();
      setIsOpen(!isOpen);
    };
  
    const handleOptionClick = (e: React.MouseEvent, option: Option) => {
      e.stopPropagation();
      setSelectedOption(option);
      onSelect(option);
      setSearchTerm('');
      setIsOpen(false);
    };
  
    return (
      <details ref={detailsRef} className="dropdown" open={isOpen}>
        <summary className="dropdown-summary" onClick={handleToggle}>
          <span className={`dropdown-text ${!selectedOption ? 'placeholder' : ''}`}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </summary>
        <div className="dropdown-content">
            {showSearch && (
                <input
                type="text"
                className="dropdown-search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                onClick={(e) => e.stopPropagation()}
                />
            )}
          <ul className="dropdown-list">
            {filteredOptions.map((option) => (
              <li
                key={option.value}
                className="dropdown-item"
                onClick={(e) => handleOptionClick(e, option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      </details>
    );
  };
  
  export default Dropdown;