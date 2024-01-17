import '../css/global.css';

function Navbar() {
  return (
    <nav class="navbar">
        <ul class="nav-list">
            <li>Learn</li>
            <li>Resources</li>
            <li>IDE</li>
            <li>Coderoom</li>
        </ul>
            <button className='LogIn'>Log In</button>
    </nav>
  )
}

export default Navbar