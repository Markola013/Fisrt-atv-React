import ProdutoItem from '../components/ProdutoItem';

export default function Home() {
  return (
    
    <main style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f1f5f9', 
      padding: '20px'
    }}>
      
      <ProdutoItem />
      
    </main>
  );
}