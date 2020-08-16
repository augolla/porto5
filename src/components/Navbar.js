import React,{createContext,useContext,useEffect} from 'react'
import './Navbar.css'
// import Toggle from './ThemeToggle'
// import $ from 'jquery'
// import Icon from './icons8-circuit2-96.png'
import { Link } from 'react-scroll';

//Create a new context
export const ThemeContext = createContext()


function Navbar(){
    useEffect(()=>{
        const bar1 = document.querySelector('.bar1'),
            bar2 = document.querySelector('.bar2'),
            bar3 = document.querySelector('.bar3'),
            toggle = document.querySelector('.navbar-toggler'),
            navItem = document.querySelector('.nav-item'),
            bars=[bar1,bar2,bar3],
            toggleLine=document.querySelector('.toggle-line'),
            toggleCircle=document.querySelector('.toggle-circle')
        
        
        bars.forEach(bar=>bar.style.borderColor=cts.green)
        toggleCircle.style.background=cts.darkBlue
        toggleCircle.style.borderColor=cts.green
        toggleLine.style.background=cts.green
        bar1.style.transition = '.2s'
        bar2.style.transition = '.2s'
        bar3.style.transition = '.2s'
        bar1.style.position = 'relative'
        bar2.style.position = 'relative'
        bar3.style.position = 'relative'
        let open = true
        toggle.addEventListener('click', (e) => {
            if (open) {
                bar1.style.top = '12px'
                bar3.style.bottom = '12px'
                bar1.style.transform = 'rotate(405deg)'
                bar2.style.transform = 'rotate(405deg)'
                bar3.style.transform = 'rotate(-405deg)'
                open = false
            } else {
                bar1.style.transform = 'rotate(0deg)'
                bar2.style.transform = 'rotate(0deg)'
                bar3.style.transform = 'rotate(0deg)'
                bar1.style.top = '0px'
                bar3.style.bottom = '0px'
                open = true
            }
        })
        navItem.addEventListener('mouseover',e=>{
            navItem.style.color=cts.green
        })
    })
    const cts=useContext(ThemeContext)
    return (
        <nav className='NavBar navbar navbar-expand-md shadow fixed-top' 
        style={{ background: cts.darkBlue}}>
            <div className='navbar-brand' style={{ cursor: 'pointer', color: '#64FFDA' }} >
                <div className='toggle-line'>
                    <div className='toggle-circle'></div>
                </div>
            </div>
            <div className='navbar-toggler' data-toggle='collapse' data-target="#everything2" style={{cursor:'pointer'}}>
                <span className='bar1'></span>
                <span className='bar2'></span>
                <span className='bar3'></span>
            </div>

            <div className='collapse navbar-collapse justify-content-end align-items-center p-0 m-0' id='everything2'>
                <nav className='navbar-nav m-0 p-0 d-flex justify-content-center'>
                    <Link style={{color:cts.whiteDarker}} activeClass='active' spy={true} offset={-80} duration={620} to="home" className='nav-item  nav-link ' smooth={true} >Home</Link>
                    <Link style={{color:cts.whiteDarker}} activeClass='active' spy={true} offset={-80} duration={620} to="about" className='nav-item nav-link ' smooth={true} >About</Link>
                    <Link style={{color:cts.whiteDarker}} activeClass='active' spy={true} offset={-80} duration={620} to="projects" className='nav-item nav-link ' smooth={true} >Works/Projects</Link>
                    <Link style={{color:cts.whiteDarker}} activeClass='active' spy={true} offset={-80} duration={620} to="contact" className='nav-item nav-link ' smooth={true} >Contacts</Link>
                </nav>
            </div>
        </nav>
    )

}


//Theme Provider
export class ThemeProvider extends React.Component {
    state = {
        darkBlue: '#0c192d',
        barkBlueB:'#0A192F',
        green: '#20D6B1',
        whiteWhite: '#FFFFFF',
        whiteDark: '#CCD6F6',
        whiteDarker:'#8892B0',
        projoBg:'#172A45',
        projoColor:'#CCD6F6',
        projoTitle: '#8892B0',
        projoTech:'#8892B0',
        light: false
    }
    componentDidMount(){
        const themer = document.querySelector('.navbar-brand')
        const toggleCircle = document.querySelector('.toggle-circle')
        themer.addEventListener('click', (e) => {
            if(this.state.light){
                this.setState({
                    darkBlue: '#0c192d',
                    barkBlueB: '#0A192F',
                    green: '#20D6B1',
                    whiteWhite: '#FFFFFF',
                    whiteDark: '#CCD6F6',
                    whiteDarker: '#8892B0',
                    projoBg:'#172A45',
                    projoColor: '#CCD6F6',
                    projoTitle: '#8892B0',
                    projoTech: '#8892B0',
                    light: false,
                })
                toggleCircle.style.left='1px'
            }
            else {
                this.setState({
                    darkBlue: '#FFFFFF',///White background now         F5F6FA--->whitish       FFFFFF--->white
                    barkBlueB: '#FFFFFF', //Alternative white bg
                    green: '#FD7E00',//Orange now                      FD7E00--->Orange        7290A4---->greyish 
                    whiteWhite: '#40475a', 
                    whiteDark: '#40475a', //Lighter black now
                    whiteDarker: '#363b4b',//Same again
                    projoBg:'#FD7E00',
                    projoColor: 'black',
                    projoTitle: '#FFFFFF',
                    projoTech: '#000000',
                    light: true
                })
                toggleCircle.style.left = '23px'
            }
        })
    }
    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default Navbar
