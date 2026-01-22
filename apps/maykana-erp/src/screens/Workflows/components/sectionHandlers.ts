import { Section, FieldType } from './types';

export const useSectionHandlers = (
  sections: Section[],
  setSections: (sections: Section[]) => void
) => {
  const addSection = (position?: number) => {
    const newSection: Section = {
      id: Date.now(),
      type: 'empty',
      title: 'منطقة بدون عنوان',
      description: '',
    };

    const newSections = [...sections];
    if (position !== undefined) {
      newSections.splice(position, 0, newSection);
    } else {
      newSections.push(newSection);
    }
    setSections(newSections);
  };

  const moveSection = (index: number, direction: 'up' | 'down') => {
    const newSections = [...sections];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;

    if (targetIndex >= 0 && targetIndex < sections.length) {
      [newSections[index], newSections[targetIndex]] = [
        newSections[targetIndex],
        newSections[index],
      ];
      setSections(newSections);
    }
  };

  const copySection = (index: number) => {
    const sectionToCopy = sections[index];
    const newSection: Section = {
      ...sectionToCopy,
      id: Date.now(),
      title: `${sectionToCopy.title} (نسخة)`,
      columns: sectionToCopy.columns ? [...sectionToCopy.columns] : undefined,
    };
    const newSections = [...sections];
    newSections.splice(index + 1, 0, newSection);
    setSections(newSections);
  };

  const deleteSection = (index: number) => {
    if (sections.length > 1) {
      const newSections = sections.filter((_, i) => i !== index);
      setSections(newSections);
    }
  };

  const handleDropOnSection = (sectionIndex: number, draggedField: FieldType) => {
    const newSections = [...sections];
    const currentSection = newSections[sectionIndex];

    if (draggedField.id === 'table') {
      newSections[sectionIndex] = {
        ...currentSection,
        type: 'table',
        title: currentSection.type === 'empty' ? 'منطقة بدون عنوان' : currentSection.title,
        columns: [],
        rows: 3,
      };
      delete newSections[sectionIndex].fields;
    } else if (draggedField.id === 'checklist') {
      newSections[sectionIndex] = {
        ...currentSection,
        type: 'checklist',
        title: currentSection.type === 'empty' ? 'منطقة بدون عنوان' : currentSection.title,
        items: [],
      };
      delete newSections[sectionIndex].fields;
    } else {
      if (currentSection.type === 'empty' || currentSection.type === 'form') {
        const newField = {
          id: Date.now(),
          label: draggedField.name,
          placeholder: '',
          required: false,
          type: draggedField.id,
        };

        newSections[sectionIndex] = {
          ...currentSection,
          type: 'form',
          title: currentSection.type === 'empty' ? 'منطقة بدون عنوان' : currentSection.title,
          fields: currentSection.fields ? [...currentSection.fields, newField] : [newField],
        };
      }
    }

    setSections(newSections);
  };

  return {
    addSection,
    moveSection,
    copySection,
    deleteSection,
    handleDropOnSection,
  };
};
