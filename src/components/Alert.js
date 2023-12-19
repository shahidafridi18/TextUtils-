function Alert(props) {

    const captilize = (msg) => {
        const newtext = msg[0].toUpperCase() + msg.slice(1);
        return newtext;
    }

    return (
        <div style={{height:'50px'}} >

 { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
             {props.alert.msg}
        </div>}

        </div>
       
    )
}

export default Alert;
