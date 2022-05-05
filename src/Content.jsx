import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Content =()=>{

    const[data,updatedata] = useState([]);

    const getalldata= async()=>{
try{
    const apidata = await fetch('https://data.covid19india.org/data.json');
    //console.log(apidata)
    const actualdata = await apidata.json();
 console.log(actualdata)
   // console.log(actualdata.statewise[0])
   updatedata(actualdata.statewise[35])
}catch(e){
    console.log(` your error is ${e}`)
}
    }

    useEffect(()=>{
getalldata();
    },[])
    return(<>
    <section className="covid">
    <div className="container">
<div className="heading">
<div className="live1"> 
<p className="text-center live">  🔴 live</p> </div>
  <br />  <h1>Covid-19 Corona virus tracker of {data.state}</h1>
</div>
        <div className="row">
            <div className="col-md-4 col-sm-4">
              <div className=" main text-center " id="on">
                  <h2 > <span> our</span> country</h2>
                  <h1 className="hed"> india</h1>
              </div>

            </div>
            <div className="col-md-4 col-sm-4">
              <div className=" main text-center " id="two">
                  <h2> <span> Total</span> Recovered</h2>
                               <h1 className="hed"> {data.confirmed}</h1>
              </div>

            </div>
            <div className="col-md-4 col-sm-4">
              <div className=" main text-center " id="three">
                  <h2> <span> Total</span> Confirmed</h2>
                  <h1 className="hed"> {data.confirmed}</h1>
              </div>

            </div>
        </div>
        <div className="row mt-4">
            <div className="col-md-4 col-sm-4" >
              <div className=" main text-center" id="four">
                  <h2> <span> Total</span> Death</h2>
                  <h1 className="hed"> {data.deaths}</h1>
              </div>

            </div>
            <div className="col-md-4 col-sm-4">
              <div className=" main text-center " id="five">
                  <h2> <span> Total</span> Active</h2>
                  <h1 className="hed"> {data.active}</h1>
              </div>

            </div>
            <div className="col-md-4 col-sm-4">
              <div className=" main text-center " id="six">
                  <h2> <span> last</span> update</h2>
                  <h1 className="hed"> {data.lastupdatedtime}</h1>
              </div>

            </div>
        </div>
    </div>
    </section>
    </>)
}

export default Content;