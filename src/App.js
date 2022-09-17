import './App.css';
import Container from 'react-bootstrap/Container';
import { Button, Stack } from 'react-bootstrap';
import BudgetCard from './components/BudgetCard';

function App() {
  return (
    //my-4 sets top AND bottom margins
    <Container className='my-4'>
      {/*creates a horizontal stack layout with a gap between items and a bottom margin*/}
      <Stack direction='horizontal' gap='2' className='mb-4'>
        {/*me-auto is margin end auto which keeps the tag a constant margin away from both its horizontal ends by taking up as much space as possible*/}
        <h1 className='me-auto'>Budgets</h1>
        <Button variant='primary'>Add Budget</Button>
        <Button variant='outline-primary'>Add Expense</Button>
      </Stack>
      <div 
        style={{
          display:'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '1rem', 
          alignItems: 'flex-start,'
        }}>
        
        <BudgetCard name="Entertainment" amount={200} max={1000}></BudgetCard>
      </div>
    </Container>
  );
}

export default App;
