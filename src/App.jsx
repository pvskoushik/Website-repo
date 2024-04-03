
import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'

function App() {

  return (
    <Container>
      <Row>
        <Col><h1>App component</h1></Col>
        <button as={Link} to={"/home"}>home</button>
      </Row>
      <Row>
        <Col><Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
        </Routes> </Col>
      </Row>
    </Container>
  )
}
export default App
