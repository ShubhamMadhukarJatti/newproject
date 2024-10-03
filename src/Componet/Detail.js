const Detail=(props)=>{
    return(
        <div>
            {
                props.regdata.map((userinfo,index)=>{
                    return(
                        <div key={index}>
                        <h1>EMAIL:-{userinfo.email}<br/>
                        Password:-{userinfo.pass}<br/>
                        Name:-{userinfo.name}<br/>
                        AGE:-{userinfo.age}<br/>
                        Date:-{userinfo.date}<br/>
                        Gender:{userinfo.gender}<br/>
                        STATE:{userinfo.state}</h1>
                        </div>
                    );
                })
            }
</div>
    );
}
export default Detail;