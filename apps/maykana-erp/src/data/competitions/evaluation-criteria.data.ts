// Evaluation Criteria data for Competitions module

export interface EvaluationCriteria {
  id: string;
  committeeName: string;
  number: string;
  percentage: string;
  commercialRegister: string;
  accountNumber: string;
}

export const evaluationCriteriaData: EvaluationCriteria[] = [
  {
    id: '1',
    committeeName: 'أحمد عبد السلام',
    number: '2522169654126',
    percentage: 'حرية حكومية',
    commercialRegister: '2023-12-9',
    accountNumber: '25211137373734',
  },
  {
    id: '2',
    committeeName: 'عمر السعيد',
    number: '2511685255556',
    percentage: 'حرية حكومية',
    commercialRegister: '2023-2-20',
    accountNumber: '25211737311',
  },
  {
    id: '3',
    committeeName: 'يوسف الحجار',
    number: '251165552256',
    percentage: 'حرية حكومية',
    commercialRegister: '2023-2-15',
    accountNumber: '25211363463411',
  },
  {
    id: '4',
    committeeName: 'خالد فؤاد',
    number: '2511636985216',
    percentage: 'حرية حكومية',
    commercialRegister: '2020-2-10',
    accountNumber: '25211163463',
  },
];
