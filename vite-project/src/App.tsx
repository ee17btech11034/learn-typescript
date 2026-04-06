import Card from './components/Card.tsx'
import { Card2 } from './components/ChildrenProps.tsx';
import Counter from './components/Counter.tsx'
import { OrderForm } from './components/OrderForm.tsx'

function App() {

  return (
    <>
      <div> Hello World</div>
      <Card name="Headphone" price={200} isSpecial={true} />
      <Counter/>
      <OrderForm onSubmit={(order)=>{console.log(`${order.cups} of ${order.name} tea.`);
        }}
      />

      <Card2 title="Title" footer={<button>Submit</button>}/>
    </>
  )
}

export default App
