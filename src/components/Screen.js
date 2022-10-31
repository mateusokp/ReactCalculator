import './Screen.css'
const Screen = (props) => {
    return <div className='bg'>
        <div className='smalltext'>{props.log}</div>
        <div id="display" style={{width: '100%', display: 'flex', justifyContent: 'end', paddingRight: '10px', WebkitTransition: '0.2s ease-in-out', MozTransition: '0.2s ease-in-out'}}>{props.string === '' ? '0' : props.string}</div>
    </div>
}

export default Screen;