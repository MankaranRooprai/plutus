import './App.css';
import Container from 'react-bootstrap/Container'
import { Stack } from 'react-bootstrap';

function App() {
  return (
    <Container>
      {/*creates a horizontal stack layout with a gap between items and a bottom margin*/}
      <Stack direction='horizontal' gap='2' className='mb-4'></Stack>
    </Container>
  );
}

export default App;
