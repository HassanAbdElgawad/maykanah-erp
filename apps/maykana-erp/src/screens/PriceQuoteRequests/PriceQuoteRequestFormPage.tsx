import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { PriceQuoteForm } from './components';

export const PriceQuoteRequestFormPage = (): JSX.Element => {
  const navigate = useNavigate();

  const handleSubmit = (data: any) => {
    console.log('Form submitted:', data);
    // TODO: Add API call to save data
    navigate('/purchases/price-quote-requests');
  };

  const handleCancel = () => {
    navigate('/purchases/price-quote-requests');
  };

  return (
    <Layout>
      <PriceQuoteForm mode="create" onSubmit={handleSubmit} onCancel={handleCancel} />
    </Layout>
  );
};
